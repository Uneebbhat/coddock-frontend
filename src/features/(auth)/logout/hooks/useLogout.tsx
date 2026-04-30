"use client";

import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { logout } from "../../services/auth-service";

export default function useLogout() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }

    setIsLoggingOut(true);

    try {
      const data = await logout();
      toast.success(data.message ?? "Logged out successfully");
      router.push("/login");
      router.refresh();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error || error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setIsLoggingOut(false);
    }
  };

  return { handleLogout, isLoggingOut };
}
