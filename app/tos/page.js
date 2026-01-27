import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇
//
// Use the prompt below in ChatGPT (do not add explanations). It should produce a short, clear Terms & Services
// for the AI Code Reviewer project. Include the current date at the top, and output only the terms text.
//
// PROMPT START
// You are an excellent lawyer. Produce a concise Terms & Services document for the website and service below.
// Output only the terms text (no commentary), include the current date at the top, and keep language simple.
//
// Context:
// - Website: https://aicodereviewer.io
// - Name: AI Code Reviewer
// - Contact information: evgeny.aleksandrov99@gmail.com
// - Description: Automate GitHub pull request reviews using an n8n + OpenAI agent to generate contextual comments and suggested fixes.
// - Ownership: when buying a package, users can download code to create apps. They own the code they create but may NOT resell it.
// - Refunds: users can request a full refund within 7 days of purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://aicodereviewer.io/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be notified by email of material changes
//
// Requirements:
// - Keep it short and plain-language suitable for a small SaaS.
// - Cover: service description, ownership & usage rights, refunds, data collection & privacy link, liability limit (brief), governing law, updates, contact.
// - State that payment processing is handled by third-party payment processors and that payment data is not stored on our servers.
// - No legalese; use short paragraphs and numbered sections where helpful.
//
// Example instruction at the top of output: "Last Updated: YYYY-MM-DD"
//
// PROMPT END

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

Terms & Services – AI Code Reviewer

These Terms & Services govern your use of the website https://aicodereviewer.io and the AI Code Reviewer service (“Service”). By using the Service, you agree to these terms.

1. Service Description
AI Code Reviewer automates GitHub pull request reviews using an n8n + OpenAI agent that generates contextual comments and suggested fixes. The Service is provided on an “as is” basis.

2. Accounts and Payments
To access certain features, you may need to create an account and purchase a package. Payments are processed by third-party payment providers. We do NOT store or process your payment details on our servers.

3. Ownership and Usage Rights
When you purchase a package, you may download and use the provided code to create your own applications.
- You own the code you create using the Service.
- You may use the code for personal or commercial projects.
- You may not resell, sublicense, or redistribute the code or the Service itself as a competing product.

4. Refund Policy
You may request a full refund within 7 days of purchase. To request a refund, contact us at the email address listed below.

5. Data Collection and Privacy
We collect personal data such as name, email, and payment-related information, as well as non-personal data like cookies. Our use of data is described in our Privacy Policy: https://aicodereviewer.io/privacy-policy

6. Limitation of Liability
We strive to provide a reliable service, but we do not guarantee that the Service will be error-free or uninterrupted. To the maximum extent permitted by law, AI Code Reviewer is not liable for indirect or consequential damages arising from your use of the Service.

7. Governing Law
These Terms are governed by the laws of France.

8. Updates to These Terms
If we make material changes to these Terms, we will notify users by email. Continued use of the Service means you accept the updated Terms.

9. Contact
If you have questions about these Terms, contact us at:
Email: evgeny.aleksandrov99@gmail.com
Website: https://ai-code-reviewer-landing.vercel.app
`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
