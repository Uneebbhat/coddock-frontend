"use client";

import { Route } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "sonner";
import axios from "axios";

export interface IOnboardingFormData {
  role: "student" | "self-taught" | "junior" | "freelancer" | "career-switcher";
  interest: "frontend" | "backend" | "fullstack" | "ai" | "freelancing";
  timeCommitment: "less-than-5" | "5-10" | "10-20" | "more-than-20";
}

const useOnboarding = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const submitOnboarding = async (formData: IOnboardingFormData) => {
    if (loading) return;

    setLoading(true);

    try {
      const { data } = await axios.post("/api/onboarding", formData);

      toast.success(data.message || "Onboarding completed successfully");
      router.push("/learning-roadmaps");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error || error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submitOnboarding,
  };
};

export default useOnboarding;
