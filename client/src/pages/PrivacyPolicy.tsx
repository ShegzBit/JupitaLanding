import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-24 text-neutral-800">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <p className="mb-4 leading-relaxed">
              Pivox Technology Limited (“we,” “our,” or “us”) respects your
              privacy and is committed to protecting the personal information
              you share with us through our website, platform, APIs, and
              services (collectively, the “Services”). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our products and
              services. Please read this Privacy Policy carefully to understand
              our views and practices regarding your personal data and how we
              will treat it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Information We Collect
            </h2>
            <h3 className="font-semibold mb-1">
              a. Information You Provide to Us
            </h3>
            <p className="mb-2">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2 pl-4">
              <li>Sign up or register for our platform;</li>
              <li>Contact us for support or inquiries;</li>
              <li>Subscribe to newsletters or marketing communications;</li>
              <li>
                Provide information as part of using our APIs or platform;
              </li>
              <li>Participate in surveys or feedback requests.</li>
            </ul>
            <p className="mb-2">
              This information may include your name, email address, phone
              number, company name, job title, and other identifying details
              relevant to your use of our Services.
            </p>
            <h3 className="font-semibold mb-1">
              b. Information from Integrated Third Parties
            </h3>
            <p className="mb-2">
              If you integrate Jupita with third-party services (e.g., credit
              bureaus, bank statement providers, identity verification tools),
              you authorize us to access and process data provided by these
              services in accordance with this policy and applicable agreements.
            </p>
            <h3 className="font-semibold mb-1">
              c. Automatically Collected Information
            </h3>
            <p className="mb-2">
              When you access our Services, we automatically collect information
              about your device and usage, such as:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Browser type, IP address, operating system;</li>
              <li>Access times and referring URLs;</li>
              <li>Pages viewed and actions taken on our website;</li>
              <li>Session data for analytics and system performance.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Provide and maintain our Services;</li>
              <li>
                Operate, analyze, and improve our software, APIs, and platform
                features;
              </li>
              <li>
                Communicate with you about your account, support requests, and
                product updates;
              </li>
              <li>Send you promotional content (only if you have opted in);</li>
              <li>
                Ensure security, prevent fraud, and comply with legal
                obligations;
              </li>
              <li>Aggregate or anonymize data for reporting or research.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Sharing Your Information
            </h2>
            <p className="mb-2">We may share your data with:</p>
            <ul className="list-disc list-inside space-y-1 mb-2 pl-4">
              <li>
                Third-party service providers who help us operate our Services
                (e.g., cloud hosting, analytics, payment processing);
              </li>
              <li>
                Integration partners such as credit bureaus or KYC vendors, as
                required to deliver our credit decisioning solutions;
              </li>
              <li>
                Legal authorities where required to comply with applicable law,
                regulation, legal process, or enforceable governmental request;
              </li>
              <li>
                Business partners where you have explicitly consented or
                requested.
              </li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              safeguard your data against unauthorized access, disclosure,
              alteration, or destruction. However, no internet-based system is
              completely secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Data Retention
            </h2>
            <p>
              We retain your information as long as necessary to provide our
              Services or as required by law. When no longer needed, data is
              securely deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              International Data Transfers
            </h2>
            <p>
              Your data may be stored or processed in countries outside your
              own, including jurisdictions where data protection laws may
              differ. By using our Services, you consent to this transfer,
              processing, and storage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Your Rights
            </h2>
            <p className="mb-2">
              Depending on your jurisdiction, you may have rights to:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2 pl-4">
              <li>Access and correct your data;</li>
              <li>Request deletion of your personal information;</li>
              <li>Object to or restrict certain data processing;</li>
              <li>Opt-out of marketing communications;</li>
              <li>Receive your data in a portable format.</li>
            </ul>
            <p>
              To exercise your rights, contact us at{" "}
              <a
                href="mailto:support@getjupita.com"
                className="text-primary underline hover:text-primary-dark transition"
              >
                support@getjupita.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by posting the new policy on our
              website and updating the effective date above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us at{" "}
              <a
                href="mailto:privacy@getjupita.com"
                className="text-primary underline hover:text-primary-dark transition"
              >
                privacy@getjupita.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
