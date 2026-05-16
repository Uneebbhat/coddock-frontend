import PageHeader from "@/components/page-header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader />
      <section className="p-6">{children}</section>
    </>
  );
}
