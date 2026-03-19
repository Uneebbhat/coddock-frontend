import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CodDock",
  description:
    "Read the terms and conditions for using CodDock, including account usage, responsibilities, and platform policies.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Effective Date: March 17, 2026
      </p>

      <section className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
        <p>
          By accessing or using CodDock, you agree to these Terms of Service.
        </p>

        <h2 className="text-lg font-semibold text-foreground">2. Description of Service</h2>
        <p>
          CodDock provides structured learning roadmaps and progress tracking to
          help developers grow their skills.
        </p>

        <h2 className="text-lg font-semibold text-foreground">3. User Accounts</h2>
        <p>
          You are responsible for maintaining the security of your account and
          all activities under it.
        </p>

        <h2 className="text-lg font-semibold text-foreground">4. Acceptable Use</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>No illegal use of the platform</li>
          <li>No unauthorized access attempts</li>
          <li>No disruption of services</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground">5. Intellectual Property</h2>
        <p>
          All content on CodDock is owned or licensed by us and cannot be reused
          without permission.
        </p>

        <h2 className="text-lg font-semibold text-foreground">6. User Content</h2>
        <p>
          By submitting content, you grant CodDock permission to use and display it.
        </p>

        <h2 className="text-lg font-semibold text-foreground">7. Payments</h2>
        <p>
          Paid features may be introduced. Pricing and terms will be communicated
          clearly.
        </p>

        <h2 className="text-lg font-semibold text-foreground">8. Termination</h2>
        <p>
          We may suspend or terminate accounts that violate these terms.
        </p>

        <h2 className="text-lg font-semibold text-foreground">9. Disclaimer</h2>
        <p>
          The platform is provided &quot;as is&quot; without guarantees of uninterrupted service.
        </p>

        <h2 className="text-lg font-semibold text-foreground">10. Limitation of Liability</h2>
        <p>
          CodDock is not liable for indirect or consequential damages.
        </p>

        <h2 className="text-lg font-semibold text-foreground">11. Changes</h2>
        <p>
          We may update these Terms at any time. Continued use means acceptance.
        </p>

        <h2 className="text-lg font-semibold text-foreground">12. Governing Law</h2>
        <p>These terms are governed by the laws of [Your Country].</p>

        <h2 className="text-lg font-semibold text-foreground">13. Contact</h2>
        <p>Email: uneebbhatti3@gmail.com</p>
      </section>
    </main>
  );
}