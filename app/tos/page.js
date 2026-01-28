import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>

        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
{`Last Updated: 2026-01-18

Terms & Services – JavaScript Mastery

These Terms & Services govern your use of the website and services provided by JavaScript Mastery (“Service”). By accessing or purchasing the Service, you agree to these terms.

1. Service Description
JavaScript Mastery is an educational platform offering online courses, learning materials, and interview preparation resources focused on JavaScript, React, and frontend engineering. Content includes video lessons, projects, roadmaps, and community access. The Service is provided on an “as is” basis.

2. Accounts and Payments
To access paid content, you must purchase a plan. Payments are processed securely by third-party payment providers. JavaScript Mastery does NOT store or process your payment details on its own servers.

3. Access and Usage Rights
When you purchase a plan:
- You receive personal, non-transferable access to the course content.
- You may use the materials for personal learning and career development.
- You may NOT resell, redistribute, share, or publicly publish the course content, videos, projects, or materials in whole or in part.
- Access may be revoked if these terms are violated.

4. Refund Policy
We offer a 7-day money-back guarantee. If you are not satisfied, you may request a full refund within 7 days of purchase by contacting us at the email address below.

5. Bootcamp & Live Components
Bootcamp plans may include limited cohort access, mock interviews, and community challenges. Scheduling and availability of live or interactive components may vary and are subject to reasonable changes.

6. Data Collection and Privacy
We collect personal data such as name, email address, and payment-related information, as well as non-personal data such as cookies. For details on how data is handled, please review our Privacy Policy.

7. Limitation of Liability
While we strive to provide high-quality educational content, we do not guarantee specific outcomes, job offers, or interview success. To the maximum extent permitted by law, JavaScript Mastery is not liable for indirect or consequential damages resulting from the use of the Service.

8. Governing Law
These Terms are governed by the laws of France.

9. Updates to These Terms
We may update these Terms from time to time. Material changes will be communicated by email. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.

10. Contact
If you have any questions about these Terms, please contact us:
Email: evgeny.aleksandrov99@gmail.com
`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
