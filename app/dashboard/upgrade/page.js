import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import ButtonUpgrade from "@/components/ButtonUpgrade";

export const metadata = getSEOTags({
  title: `Upgrade — ${config.appName}`,
  description: "Upgrade to Pro or Bootcamp to unlock all modules and projects.",
  canonicalUrlRelative: "/upgrade",
});

const BRAND_START = "var(--color-primary)";
const BRAND_END = "var(--color-secondary)";

export default function UpgradePage() {
  const plans = [
    {
      name: "Pro",
      description: "Full course (Modules 1–7) + interview roadmap.",
      price: 399,
      currency: "€",
      priceId: process.env.PRICE_ID_BASIC_TO_PRO, // Replace with actual Paddle price ID
      variantCode: "pro",
      features: [
        "Access to all modules",
        "Notion guide",
        "Exclusive Discord community",
        "7-days money back",
        "Interview-ready LeetCode roadmap",
        "Frontend-focused System Design (ready structure)",
        "Behavioral interview preparation",
      ],
      badge: "Most popular",
    },
    {
      name: "Bootcamp",
      description:
        "Cohort-based Bootcamp with mock interviews and extra support.",
      price: 999,
      currency: "€",
      priceId: process.env.PRICE_ID_BASIC_TO_BOOTCAMP, // Replace with actual Paddle price ID
      variantCode: "bootcamp",
      features: [
        "Access to all modules",
        "Notion guide",
        "Exclusive Discord community",
        "7-days money back",
        "Interview-ready LeetCode roadmap",
        "Frontend-focused System Design (ready structure)",
        "Behavioral interview preparation",
        "3 full mock interviews (Coding, SD, Behavioral)",
        "Applying strategy",
        "Community & async challenges",
        "Access to the most up-to-date FAANG-style interview tasks",
        "Large private community sharing real interview experience",
      ],
      badge: "10 students batch",
    },
  ];

  return (
    <main className="bg-base-200 overflow-hidden min-h-screen" id="upgrade">
      <div className="py-24 px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-20">
          <p
            className="font-medium mb-6 text-primary"
            style={{
              background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Upgrade
          </p>

          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Unlock the full JavaScript Mastery experience
          </h2>

          <p className="mt-5 text-base-content/70 max-w-2xl mx-auto">
            Choose the plan that fits your goals. From mastering JavaScript to
            acing interviews — we’ve got you covered.
          </p>
        </div>

        {/* Plans */}
        <div className="relative flex justify-center flex-col lg:flex-row items-stretch gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative w-full max-w-lg">
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className="badge border-0 text-xs font-semibold px-4 py-3 text-primary-content"
                    style={{
                      background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="relative flex flex-col h-full gap-6 z-10 bg-base-100 p-8 rounded-xl">
                {/* Title */}
                <div>
                  <p className="text-xl font-bold">{plan.name}</p>
                  <p className="text-base-content/70 mt-2">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-2">
                  <p className="text-5xl font-extrabold tracking-tight">
                    {plan.currency}
                    {plan.price}
                  </p>
                  <span className="text-xs uppercase font-semibold text-base-content/50 mb-1">
                    one-time
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 text-base leading-relaxed flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 min-w-[20px] min-h-[20px] text-primary opacity-80 shrink-0 mt-[2px]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="space-y-2">
                  <ButtonUpgrade priceId={plan.priceId} planName={plan.name} />
                  <p className="text-sm text-center text-base-content/70 font-medium">
                    Pay once. Access forever.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-base-content/50 mt-12">
          Not sure which plan fits you? DM me — happy to help.
        </p>
      </div>
    </main>
  );
}
