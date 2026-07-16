// app/terms/page.js
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#D9A441]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2342]">
              Terms and Conditions
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
              Welcome to the Bheema Group website ("Website"). These Terms and
              Conditions ("Terms") govern your access to and use of the Website
              operated by Bheema Group ("Company", "Bheema Group", "we", "our",
              or "us").
            </p>
            <p className="mt-2">
              By accessing, browsing, or using this Website, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms. If you do not agree with any provision of these Terms, you
              must discontinue use of the Website immediately.
            </p>
          </section>

          {/* 2. Company Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              2. Company Information
            </h2>
            <p>
              <strong>Business Name:</strong> Bheema Group
              <br />
              <strong>Address:</strong> 6B, Atmaram House, Tolstoy Marg,
              Connaught Place, New Delhi - 110001, India
              <br />
              <strong>Email:</strong> info@bhimsecure.com
            </p>
          </section>

          {/* 3. Purpose of the Website */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              3. Purpose of the Website
            </h2>
            <p>The Website is intended to:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Provide information about Bheema Group and its affiliated businesses.</li>
              <li>Showcase services, expertise, and business operations.</li>
              <li>Facilitate communication and inquiries from prospective clients, partners, vendors, and visitors.</li>
              <li>Provide links to websites operated by affiliated group companies.</li>
            </ul>
            <p className="mt-2">
              Nothing on this Website shall be construed as professional, legal,
              financial, employment, investment, or business advice.
            </p>
          </section>

          {/* 4. Eligibility */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              4. Eligibility
            </h2>
            <p>By using this Website, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>You are at least 18 years of age.</li>
              <li>You possess the legal capacity to enter into binding agreements.</li>
              <li>Your use of the Website complies with all applicable laws and regulations.</li>
            </ul>
          </section>

          {/* 5. Website Content */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              5. Website Content
            </h2>
            <p>
              The content available on this Website is provided for general
              informational purposes only. While we strive to ensure accuracy,
              Bheema Group does not guarantee that:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Information is complete, accurate, current, or error‑free.</li>
              <li>Services described will always be available.</li>
              <li>The Website will operate uninterrupted or without technical issues.</li>
            </ul>
            <p className="mt-2">
              We reserve the right to modify, update, or remove content without
              prior notice.
            </p>
          </section>

          {/* 6. Intellectual Property Rights */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              6. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise stated, all content on the Website is owned by or
              licensed to Bheema Group, including:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Text</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Icons</li>
              <li>Images</li>
              <li>Videos</li>
              <li>Website design</li>
              <li>Layout</li>
              <li>Branding elements</li>
              <li>Software and code</li>
            </ul>
            <p className="mt-2">
              These materials are protected under applicable intellectual
              property laws. You may not:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Copy</li>
              <li>Reproduce</li>
              <li>Modify</li>
              <li>Republish</li>
              <li>Distribute</li>
              <li>Sell</li>
              <li>License</li>
              <li>Exploit</li>
            </ul>
            <p className="mt-2">
              any Website content without prior written consent from Bheema
              Group.
            </p>
          </section>

          {/* 7. Permitted Use */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              7. Permitted Use
            </h2>
            <p>You may use this Website solely for lawful purposes.</p>
            <p className="mt-2">You agree not to:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Use the Website in violation of any law or regulation.</li>
              <li>Attempt unauthorized access to Website systems.</li>
              <li>Interfere with Website security measures.</li>
              <li>Upload malicious software or harmful code.</li>
              <li>Use automated systems to scrape or harvest data.</li>
              <li>Impersonate another individual or organization.</li>
              <li>Transmit false, misleading, or fraudulent information.</li>
            </ul>
            <p className="mt-2">Any unauthorized use may result in legal action.</p>
          </section>

          {/* 8. User Submissions */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              8. User Submissions
            </h2>
            <p>
              If you submit inquiries, messages, feedback, or other information
              through the Website, you agree that:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>The information provided is accurate and lawful.</li>
              <li>You have the right to provide such information.</li>
              <li>Your submission does not infringe any third‑party rights.</li>
            </ul>
            <p className="mt-2">
              By submitting information, you grant Bheema Group the right to use
              such information for responding to inquiries, providing services,
              and conducting legitimate business activities.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              9. Third-Party Links
            </h2>
            <p>
              The Website may contain links to third‑party websites, including
              websites operated by affiliated companies, partners, vendors, or
              external organizations. These links are provided solely for
              convenience.
            </p>
            <p className="mt-2">Bheema Group does not:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Own or control third‑party websites.</li>
              <li>Endorse third‑party content.</li>
              <li>Accept responsibility for third‑party privacy practices.</li>
              <li>Guarantee the accuracy of third‑party information.</li>
            </ul>
            <p className="mt-2">Users access third‑party websites at their own risk.</p>
          </section>

          {/* 10. No Business Relationship Created */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              10. No Business Relationship Created
            </h2>
            <p>
              Accessing the Website, viewing content, or submitting inquiries
              does not create:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>A client relationship</li>
              <li>A partnership</li>
              <li>An agency relationship</li>
              <li>A joint venture</li>
              <li>An employment relationship</li>
            </ul>
            <p className="mt-2">
              Any business relationship shall arise only through separate
              written agreements executed by the relevant parties.
            </p>
          </section>

          {/* 11. Disclaimer of Warranties */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              11. Disclaimer of Warranties
            </h2>
            <p>
              The Website is provided on an "as is" and "as available" basis. To
              the fullest extent permitted by law, Bheema Group disclaims all
              warranties, including:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non‑infringement</li>
              <li>Accuracy</li>
              <li>Reliability</li>
              <li>Availability</li>
            </ul>
            <p className="mt-2">We do not guarantee that:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>The Website will be error‑free.</li>
              <li>The Website will be secure.</li>
              <li>Defects will be corrected.</li>
              <li>The Website will be free from viruses or harmful components.</li>
            </ul>
          </section>

          {/* 12. Limitation of Liability */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              12. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Bheema Group, its
              directors, officers, employees, affiliates, and representatives
              shall not be liable for any:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Direct damages</li>
              <li>Indirect damages</li>
              <li>Incidental damages</li>
              <li>Consequential damages</li>
              <li>Special damages</li>
              <li>Loss of profits</li>
              <li>Loss of revenue</li>
              <li>Loss of data</li>
              <li>Business interruption</li>
            </ul>
            <p className="mt-2">arising out of or related to:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Use of the Website</li>
              <li>Inability to use the Website</li>
              <li>Reliance on Website information</li>
              <li>Third‑party content</li>
              <li>Technical failures</li>
            </ul>
            <p className="mt-2">
              This limitation applies regardless of the legal theory asserted.
            </p>
          </section>

          {/* 13. Indemnification */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              13. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Bheema Group,
              its affiliates, directors, employees, and representatives from any
              claims, liabilities, damages, losses, costs, and expenses arising
              from:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Your use of the Website.</li>
              <li>Your violation of these Terms.</li>
              <li>Your infringement of third‑party rights.</li>
              <li>Any unlawful activity conducted through your use of the Website.</li>
            </ul>
          </section>

          {/* 14. Privacy */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              14. Privacy
            </h2>
            <p>
              Your use of the Website is also governed by our{" "}
              <Link href="/privacy" className="text-[#D9A441] hover:underline">
                Privacy Policy
              </Link>
              . By using the Website, you acknowledge that personal information
              may be collected and processed in accordance with our Privacy
              Policy.
            </p>
          </section>

          {/* 15. Website Availability */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              15. Website Availability
            </h2>
            <p>
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Suspend Website access.</li>
              <li>Restrict functionality.</li>
              <li>Modify Website features.</li>
              <li>Perform maintenance.</li>
              <li>Discontinue services.</li>
            </ul>
            <p className="mt-2">at any time without prior notice.</p>
            <p className="mt-2">
              We shall not be liable for any resulting interruptions.
            </p>
          </section>

          {/* 16. Force Majeure */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              16. Force Majeure
            </h2>
            <p>
              Bheema Group shall not be liable for delays or failures resulting
              from events beyond our reasonable control, including:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Natural disasters</li>
              <li>Floods</li>
              <li>Fires</li>
              <li>Government actions</li>
              <li>Labor disputes</li>
              <li>Internet outages</li>
              <li>Cyberattacks</li>
              <li>Pandemics</li>
              <li>Power failures</li>
            </ul>
          </section>

          {/* 17. Governing Law */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              17. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to conflict of law principles.
            </p>
          </section>

          {/* 18. Jurisdiction */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              18. Jurisdiction
            </h2>
            <p>
              Any dispute arising from or relating to these Terms or the Website
              shall be subject to the exclusive jurisdiction of the competent
              courts located in New Delhi, India.
            </p>
          </section>

          {/* 19. Severability */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              19. Severability
            </h2>
            <p>
              If any provision of these Terms is determined to be invalid,
              unlawful, or unenforceable, the remaining provisions shall remain
              in full force and effect.
            </p>
          </section>

          {/* 20. Waiver */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              20. Waiver
            </h2>
            <p>
              Failure by Bheema Group to enforce any provision of these Terms
              shall not constitute a waiver of any right or provision.
            </p>
          </section>

          {/* 21. Changes to These Terms */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              21. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update, revise, or modify these Terms at
              any time. Changes become effective immediately upon publication on
              the Website. Continued use of the Website after such changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 22. Contact Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              22. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms and Conditions,
              please contact us:
            </p>
            <address className="not-italic mt-2">
              <strong>Bheema Group</strong>
              <br />
              6B, Atmaram House, Tolstoy Marg,
              <br />
              Connaught Place, New Delhi - 110001, India
              <br />
              Email: info@bhimsecure.com
            </address>
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