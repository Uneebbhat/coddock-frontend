import PageLayout from '@/layouts/page-layout'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>{children}</PageLayout>
  )
}
