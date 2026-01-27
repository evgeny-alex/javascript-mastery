import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇
//
// Use the prompt below in ChatGPT (do not add explanations). It should produce a short, clear privacy policy
// for the AI Code Reviewer project. Include the current date at the top, and output only the policy text.
//
// PROMPT START
// You are a professional legal copywriter. Produce a concise Privacy Policy for the website and service below.
// Output only the policy text (no commentary), include the current date at the top, and keep language simple.
//
// Context:
// - Website: https://aicodereviewer.io
// - Name: AI Code Reviewer
// - Description: Automate GitHub pull request reviews using an n8n + OpenAI agent to generate contextual comments and suggested fixes.
// - Collected personal data: name, email, payment information
// - Non-personal data: cookies and usage analytics
// - Purpose of data collection: order processing, account setup, support and service improvement
// - Data sharing: we do NOT share personal data with third parties except service providers necessary for payment or hosting
// - Children's privacy: we do not knowingly collect data from children under 13
// - Updates: users will be notified of material changes by email
// - Contact: evgeny.aleksandrov99@gmail.com
//
// Requirements:
// - Keep it short and plain-language suitable for a small SaaS.
// - Cover: what is collected, how it is used, sharing, security, refunds/retention (brief), children's policy, updates, contact.
// - State that payment processing is handled by third-party payment processors and that payment data is not stored on our servers.
// - No legalese; use short paragraphs and numbered sections where helpful.
//
// Example instruction at the top of output: "Last Updated: YYYY-MM-DD"
//
// PROMPT END

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

AI Code Reviewer (“we”, “us”, or “our”) operates https://aicodereviewer.io. This Privacy Policy explains how we collect, use, and protect information when you use our website and service.

1. Information We Collect

Personal data:
- Name
- Email address
- Payment information

Non-personal data:
- Cookies
- Usage and analytics data

2. How We Use Your Information
- Process orders and payments
- Create and manage user accounts
- Provide customer support
- Improve and maintain our service

3. Payments
Payments are handled by third-party providers. We do NOT store or process payment card details on our servers; payment providers securely handle all sensitive payment data.

4. Data Sharing
We do NOT sell or share your personal data. We may share data with trusted service providers only when necessary for payment processing or hosting; those providers must protect your data.

5. Data Security and Retention
We take reasonable measures to protect your data. Personal data is retained only as long as necessary to provide the service, meet legal obligations, or resolve disputes.

6. Children’s Privacy
We do not knowingly collect personal data from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it.

7. Updates to This Policy
Material changes will be communicated to users by email.

8. Contact
If you have questions about this policy or your data, contact us:
Email: evgeny.aleksandrov99@gmail.com
Website: https://ai-code-reviewer-landing.vercel.app
`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
