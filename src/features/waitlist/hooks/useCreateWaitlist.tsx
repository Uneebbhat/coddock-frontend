"use client"

import useFormHandler from '@/hooks/useFormhandler'
import { HandleOnSubmit } from '@/types/form-types';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

interface ICreateWaitlist {
  email: string;
}

const useCreateWaitlist = () => {
  const { formData, setFormData, loading, setLoading, handleOnChange } = useFormHandler<ICreateWaitlist>({
    email: "",
  })
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSubmitted(false);

    try {
      const { data } = await axios.post("/api/waitlist", formData);

      setSubmitted(true);

      setFormData({
        email: ""
      });

      toast.success(data.message);

    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    submitted,
    handleOnChange,
    handleOnSubmit
  }
}

export default useCreateWaitlist