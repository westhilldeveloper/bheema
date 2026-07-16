// app/privacy/page.js
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Bheema Group",
  description:
    "Read the privacy policy of Bheema Group to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#D9A441]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2342]">
              Privacy Policy
            </h1>
            <div className="w-12 h-[1px] bg-[#D9A441]" />
          </div>
          <p className="text-gray-500 text-sm">
            Effective Date: 01 June 2026 &nbsp;|&nbsp; Last Updated: 01 June 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              1. Introduction
            </h2>
            <p>
              Bheema Group ("Bheema Group", "we", "our", or "us") is committed
              to protecting and respecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, store, and protect your
              personal information when you visit our website, interact with our
              services, submit inquiries, or otherwise engage with us.
            </p>
            <p className="mt-2">
              By accessing or using our website, you acknowledge that you have
              read and understood this Privacy Policy.
            </p>
          </section>

          {/* 2. Data Controller Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              2. Data Controller Information
            </h2>
            <p>
              <strong>Business Name:</strong> Bheema Group
              <br />
              <strong>Registered Address:</strong> 6B, Atmaram House, Tolstoy
              Marg, Connaught Place, New Delhi - 110001, India
              <br />
              <strong>Email:</strong> info@bhimsecure.com
            </p>
            <p className="mt-2">
              For any questions regarding this Privacy Policy or your personal
              data, please contact us using the details above.
            </p>
          </section>

          {/* 3. Information We Collect */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              3. Information We Collect
            </h2>
            <p className="font-semibold">3.1 Information You Provide Directly</p>
            <p>
              When you contact us, submit an inquiry, request information, or
              complete a contact form, we may collect:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Service requirements</li>
              <li>Any information voluntarily included in your message</li>
            </ul>

            <p className="font-semibold mt-4">3.2 Information Collected Automatically</p>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Referral source</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Date and time of access</li>
              <li>Website usage statistics</li>
            </ul>

            <p className="font-semibold mt-4">3.3 Cookies and Similar Technologies</p>
            <p>
              We may use cookies, pixels, analytics tools, and similar
              technologies to improve website functionality, analyze website
              traffic, enhance user experience, and maintain website security.
              Users may manage cookie preferences through their browser
              settings.
            </p>
          </section>

          {/* 4. Legal Basis for Processing (GDPR) */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              4. Legal Basis for Processing (GDPR)
            </h2>
            <p>
              Where the General Data Protection Regulation (GDPR) applies, we
              process personal data on one or more of the following legal bases:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Compliance with legal obligations</li>
              <li>Protection of vital interests</li>
              <li>Legitimate business interests</li>
              <li>Establishment, exercise, or defense of legal claims</li>
            </ul>
          </section>

          {/* 5. How We Use Your Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              5. How We Use Your Information
            </h2>
            <p>We may use personal information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Responding to inquiries and requests</li>
              <li>Providing information about our services</li>
              <li>Managing customer relationships</li>
              <li>Improving website functionality and user experience</li>
              <li>Monitoring website performance and security</li>
              <li>Preventing fraud and unauthorized access</li>
              <li>Complying with legal and regulatory obligations</li>
              <li>Establishing, exercising, or defending legal rights</li>
              <li>Internal administrative and business purposes</li>
            </ul>
            <p className="mt-2">
              We will only process personal data for purposes that are
              compatible with the reasons for which it was originally collected.
            </p>
          </section>

          {/* 6. Sharing of Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              6. Sharing of Information
            </h2>
            <p>
              <strong>We do not sell personal information.</strong>
            </p>
            <p className="mt-2 font-semibold">Service Providers</p>
            <p>Third-party vendors that assist us with:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Website hosting</li>
              <li>IT support</li>
              <li>Analytics</li>
              <li>Email communications</li>
              <li>Security services</li>
            </ul>
            <p className="mt-2 font-semibold">Legal Authorities</p>
            <p>We may disclose information where required by:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Applicable law</li>
              <li>Court order</li>
              <li>Government authority</li>
              <li>Regulatory agency</li>
              <li>Legal process</li>
            </ul>
            <p className="mt-2 font-semibold">Business Transfers</p>
            <p>
              If Bheema Group undergoes a merger, acquisition, restructuring, or
              sale of assets, personal information may be transferred as part of
              that transaction.
            </p>
          </section>

          {/* 7. International Data Transfers */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              7. International Data Transfers
            </h2>
            <p>
              Your information may be processed or stored in countries outside
              your country of residence. Where personal data is transferred
              internationally, we will implement appropriate safeguards and
              protections as required by applicable data protection laws,
              including GDPR where applicable.
            </p>
          </section>

          {/* 8. Data Retention */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              8. Data Retention
            </h2>
            <p>
              We retain personal information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Fulfill the purposes described in this Privacy Policy</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
              <li>Maintain business records</li>
            </ul>
            <p className="mt-2">
              When personal data is no longer required, it will be securely
              deleted, anonymized, or destroyed.
            </p>
          </section>

          {/* 9. Data Security */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              9. Data Security
            </h2>
            <p>
              We implement reasonable technical, organizational, and
              administrative safeguards designed to protect personal information
              from:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Unauthorized access</li>
              <li>Accidental loss</li>
              <li>Misuse</li>
              <li>Alteration</li>
              <li>Disclosure</li>
              <li>Destruction</li>
            </ul>
            <p className="mt-2">
              Security measures may include:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Secure hosting environments</li>
              <li>Encryption technologies where appropriate</li>
              <li>Access controls</li>
              <li>Network security monitoring</li>
              <li>Regular security reviews</li>
            </ul>
            <p className="mt-2">
              While we strive to protect personal information, no method of
              transmission over the Internet or electronic storage can be
              guaranteed to be completely secure.
            </p>
          </section>

          {/* 10. Your Rights */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              10. Your Rights
            </h2>
            <p>
              Subject to applicable law, including GDPR where applicable, you
              may have the following rights:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>
                <strong>Right of Access</strong> – Request access to personal
                information we hold about you.
              </li>
              <li>
                <strong>Right to Rectification</strong> – Request correction of
                inaccurate or incomplete personal information.
              </li>
              <li>
                <strong>Right to Erasure</strong> – Request deletion of your
                personal information under certain circumstances.
              </li>
              <li>
                <strong>Right to Restrict Processing</strong> – Request
                limitations on how we process your information.
              </li>
              <li>
                <strong>Right to Data Portability</strong> – Receive your
                personal information in a structured, commonly used format.
              </li>
              <li>
                <strong>Right to Object</strong> – Object to certain forms of
                data processing.
              </li>
              <li>
                <strong>Right to Withdraw Consent</strong> – Withdraw consent
                where processing is based on consent.
              </li>
              <li>
                <strong>Right to Lodge a Complaint</strong> – Submit a complaint
                to a competent data protection authority if you believe your
                rights have been violated.
              </li>
            </ul>
            <p className="mt-2">
              To exercise your rights, contact us at:{" "}
              <a href="mailto:info@bhimsecure.com" className="text-[#D9A441] hover:underline">
                info@bhimsecure.com
              </a>
            </p>
            <p className="mt-2">
              We may request verification of identity before processing such
              requests.
            </p>
          </section>

          {/* 11. Third-Party Websites */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              11. Third-Party Websites
            </h2>
            <p>
              Our website may contain links to third-party websites, including
              websites operated by group companies, partners, service providers,
              or external organizations. We are not responsible for the privacy
              practices, content, or policies of third-party websites. Users are
              encouraged to review the privacy policies of those websites before
              providing personal information.
            </p>
          </section>

          {/* 12. Children's Privacy */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              12. Children's Privacy
            </h2>
            <p>
              Our website and services are not directed toward children under
              the age of 18. We do not knowingly collect personal information
              from children. If we become aware that a child has provided
              personal information, we will take appropriate steps to delete
              such information.
            </p>
          </section>

          {/* 13. Cookies Policy */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              13. Cookies Policy
            </h2>
            <p>
              Our website may use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Improve website functionality</li>
              <li>Analyze website traffic</li>
              <li>Enhance user experience</li>
              <li>Maintain website security</li>
            </ul>
            <p className="mt-2">
              Users can disable cookies through browser settings; however, some
              website functionality may be affected.
            </p>
          </section>

          {/* 14. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              14. Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to update, modify, or revise this Privacy
              Policy at any time. Changes will become effective when posted on
              this page along with the updated revision date. Users are
              encouraged to review this Privacy Policy periodically.
            </p>
          </section>

          {/* 15. Contact Us */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              15. Contact Us
            </h2>
            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or our handling of personal information, please
              contact:
            </p>
            <address className="not-italic mt-2">
              <strong>Bheema Group</strong>
              <br />
              6B, Atmaram House, Tolstoy Marg,
              <br />
              Connaught Place, New Delhi - 110001, India
              <br />
              Email:{" "}
              <a href="mailto:info@bhimsecure.com" className="text-[#D9A441] hover:underline">
                info@bhimsecure.com
              </a>
            </address>
            <p className="mt-2">
              We will make reasonable efforts to respond promptly and in
              accordance with applicable data protection laws.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-[#0A2342] text-white px-8 py-3 rounded-full hover:bg-[#1a3a5e] transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}