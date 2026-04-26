import getCurrentUser from "@/helper/getCurrentUser";
import prisma from "@/lib/prisma";
import OnboardingSchema from "@/schema/onboarding-schema.schema";
import { APIResponse } from "@/types/response-types";
import { NextRequest, NextResponse } from "next/server";

const roleMap = {
  student: "student",
  "self-taught": "self_taught",
  junior: "junior",
  freelancer: "freelancer",
  "career-switcher": "career_switcher",
} as const;

const timeCommitmentMap = {
  "less-than-5": "less_than_5",
  "5-10": "five_to_ten",
  "10-20": "ten_to_twenty",
  "more-than-20": "more_than_20",
} as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validateBody = OnboardingSchema.safeParse(body);
    if (validateBody.error) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 400,
          error: validateBody.error.issues[0].message,
        },
        { status: 400 },
      );
    }

    const { interest, role, timeCommitment } = validateBody.data;

    const currentUser = await getCurrentUser();
    console.log(currentUser);

    const mappedRole = roleMap[role];
    const mappedTimeCommitment = timeCommitmentMap[timeCommitment];

    const onboarding = await prisma.onboarding.upsert({
      where: {
        userId: currentUser.id,
      },
      create: {
        userId: currentUser.id,
        role: mappedRole,
        interest,
        timeCommitment: mappedTimeCommitment,
      },
      update: {
        role: mappedRole,
        interest,
        timeCommitment: mappedTimeCommitment,
      },
    });

    return NextResponse.json<APIResponse>(
      {
        success: true,
        status: 200,
        message: "Onboarding saved successfully",
        data: onboarding,
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      const isUnauthorized = error.message.toLowerCase() === "unauthorized";

      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: isUnauthorized ? 401 : 500,
          error: isUnauthorized
            ? "Unauthorized"
            : `Internal Server Error: ${error.message}`,
        },
        { status: isUnauthorized ? 401 : 500 },
      );
    }

    return NextResponse.json<APIResponse>(
      {
        success: false,
        status: 500,
        error: `An unknown error occurred: ${String(error)}`,
      },
      { status: 500 },
    );
  }
}
