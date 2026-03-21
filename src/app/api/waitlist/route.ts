import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import WaitlistSchema from "@/schema/waitlist-schema.schema";
import { APIResponse } from "@/types/response-types";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

function generateWaitlistEmailTemplate(email: string) {
  return `
    <div style="font-family: Arial, sans-serif; background: #f4f6fb; padding: 32px 0;">
      <table align="center" width="100%" style="max-width: 600px; border-radius: 12px; background: #fff; box-shadow:0 2px 12px #0001;">
        <tr>
          <td style="padding: 32px 32px 0 32px; text-align: center;">
            <img src="https://coddock.vercel.app/logo.png" alt="CodDock" width="150" />
            <h2 style="color: #443aff; margin-bottom: 0;">You're Officially on Our Waitlist!</h2>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 32px 18px 32px; color:#212231;">
            <p style="font-size: 18px; margin-top: 24px;">Hi there,</p>
            <p style="font-size:16px;">
              Thank you for reserving your spot on the CodDock waitlist. We're thrilled to have you as an early supporter.
            </p>
            <p style="font-size:16px;">
              As our launch date approaches, you'll be among the very first to know — and you'll receive an exclusive early-access link as soon as we're live.
            </p>
            <div style="margin: 2em 0; text-align:center;">
              <a href="https://coddock.vercel.app" style="display:inline-block; padding:10px 26px; background:#443aff; color:#fff; border-radius:22px; font-weight:600; text-decoration:none; font-size:16px; box-shadow:0 2px 8px #443aff33;">
                Visit CodDock
              </a>
            </div>
            <p style="font-size:16px;">
              If you have questions or want to say hi, just reply to this email and our team will get right back to you!
            </p>
            <p style="margin-top:20px; font-size:15px; color:#555;">Welcome aboard,<br>The CodDock Team</p>
          </td>
        </tr>
        <tr>
          <td style="font-size:11px; color:#8c92a9; background:#f8f9fb; text-align:center; border-radius:0 0 12px 12px; padding:16px 0;">
            You joined with: <b>${email}</b><br/>
            No longer want these emails? Unsubscribe when the platform launches.<br/>
            &copy; ${new Date().getFullYear()} CodDock
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const parsed = WaitlistSchema.safeParse(await req.json());

    if (!parsed.success) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 400,
          error: parsed.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const normalizedEmail = email.toLowerCase().trim();

    const existingWaitlistUser = await prisma.waitlist.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingWaitlistUser) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 409,
          error: "This email is already on the waitlist. We'll be in touch when we launch.",
        },
        { status: 409 }
      );
    }

    const newWaitlistUser = await prisma.waitlist.create({
      data: {
        email: normalizedEmail,
      },
    });

    // Send the waitlist confirmation email
    try {
      await transporter.sendMail({
        from: `"CodDock" <${process.env.USER_EMAIL}>`,
        to: normalizedEmail,
        subject: "Welcome to the CodDock Waitlist 🎉",
        html: generateWaitlistEmailTemplate(normalizedEmail),
      });
    } catch (mailError) {
      // Optionally log error but don't block user registration on email failure
      console.error("[waitlist] Failed to send confirmation email:", mailError);
    }

    return NextResponse.json<APIResponse>(
      {
        success: true,
        status: 201,
        message: "You're on the list. Check your inbox.",
        data: newWaitlistUser
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("[waitlist] Unexpected error:", error.message);
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 500,
          error: "Something went wrong on our end. Please try again in a moment.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json<APIResponse>(
      {
        success: false,
        status: 500,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}