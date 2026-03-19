import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CodDock",
  description:
    "Learn how CodDock collects, uses, and protects your personal information while you use the platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Effective Date: March 17, 2026
      </p>

      <section className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
        <p>
          CodDock (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your
          information when you use our platform.
        </p>
        <p>
          By accessing or using CodDock, you agree to this Privacy Policy.
        </p>

        <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name and email address</li>
          <li>Account credentials</li>
          <li>Usage data such as pages visited and features used</li>
          <li>Technical data including IP address and browser type</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide and maintain the platform</li>
          <li>Track progress and personalize your experience</li>
          <li>Improve features and usability</li>
          <li>Communicate important updates</li>
          <li>Ensure security and prevent misuse</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground">4. Cookies</h2>
        <p>
          We use cookies and similar technologies to maintain sessions and
          understand user behavior. You can control cookies through your browser
          settings.
        </p>

        <h2 className="text-lg font-semibold text-foreground">5. Data Sharing</h2>
        <p>
          We do not sell your personal data. We may share information with
          service providers, legal authorities if required, or during business
          transfers.
        </p>

        <h2 className="text-lg font-semibold text-foreground">6. Data Retention</h2>
        <p>
          We retain your data only as long as necessary to provide services and
          comply with legal obligations. You may request deletion at any time.
        </p>

        <h2 className="text-lg font-semibold text-foreground">7. Data Security</h2>
        <p>
          We take reasonable measures to protect your data, but no system is
          completely secure.
        </p>

        <h2 className="text-lg font-semibold text-foreground">8. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your data by
          contacting us.
        </p>

        <h2 className="text-lg font-semibold text-foreground">9. Third-Party Services</h2>
        <p>
          We may use third-party services that have their own privacy policies.
        </p>

        <h2 className="text-lg font-semibold text-foreground">10. Children&apos;s Privacy</h2>
        <p>
          CodDock is not intended for users under the age of 13.
        </p>

        <h2 className="text-lg font-semibold text-foreground">11. Changes</h2>
        <p>
          We may update this Privacy Policy. Changes will be reflected on this page.
        </p>

        <h2 className="text-lg font-semibold text-foreground">12. Contact</h2>
        <p>Email: uneebbhatti3@gmail.com</p>
      </section>
    </main>
  );
}