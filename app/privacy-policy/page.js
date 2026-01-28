import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>

        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
{`Last Updated: 2026-01-18

JavaScript Mastery (“we”, “us”, or “our”) operates this website and provides online educational services focused on JavaScript, React, and interview preparation. This Privacy Policy explains how we collect, use, and protect your information.

1. Information We Collect

Personal data:
- Name
- Email address
- Payment-related information (handled by third-party providers)

Non-personal data:
- Cookies
- Basic usage and analytics data

2. How We Use Your Information
We use your information to:
- Process purchases and provide access to course content
- Create and manage user accounts
- Communicate important updates related to the course
- Provide customer support
- Improve the quality of our educational content and platform

3. Payments
All payments are processed securely by third-party payment providers. JavaScript Mastery does NOT store or process your payment card details on its own servers.

4. Data Sharing
We do NOT sell or rent your personal data. We may share data only with trusted service providers when necessary to operate the service (for example, payment processing or hosting). These providers are required to protect your data.

5. Data Security and Retention
We take reasonable measures to protect your personal information. Data is retained only for as long as necessary to provide the service, comply with legal obligations, or resolve disputes.

6. Children’s Privacy
JavaScript Mastery is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us and we will remove it.

7. Updates to This Privacy Policy
We may update this Privacy Policy from time to time. Material changes will be communicated to users by email.

8. Contact
If you have questions about this Privacy Policy or your data, please contact us:
Email: evgeny.aleksandrov99@gmail.com
`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
