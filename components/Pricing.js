import ButtonCheckout from "./ButtonCheckout";

// daisyUI theme colors
const BRAND_START = "var(--color-primary)";
const BRAND_END = "var(--color-secondary)";

const Pricing = () => {
  const plans = [
    {
      priceId: process.env.PRICE_ID_BASIC,
      variantCode: "basic",
      name: "Basic",
      description: "JavaScript fundamentals to build a strong base",
      price: 399,
      currency: "€",
      isFeatured: false,
      features: [
        { name: "Access to the first 4 modules" },
        { name: "Notion guide" },
        { name: "Exclusive Discord community" },
        { name: "7-days money back" },
      ],
      modulesLabel: "Modules 1–4",
    },
    {
      priceId: process.env.PRICE_ID_PRO,
      variantCode: "pro",
      name: "Pro",
      description: "Full JavaScript + interview preparation",
      price: 799,
      currency: "€",
      isFeatured: true,
      badge: "Most popular",
      features: [
        { name: "Access to all modules" },
        { name: "Notion guide" },
        { name: "Exclusive Discord community" },
        { name: "7-days money back" },
        { name: "Interview-ready LeetCode roadmap" },
        { name: "Frontend-focused System Design (ready structure)" },
        { name: "Behavioral interview preparation" },
      ],
      modulesLabel: "Modules 1–7",
    },
    {
      priceId: process.env.PRICE_ID_BOOTCAMP,
      variantCode: "bootcamp",
      name: "Bootcamp",
      description: "Limited cohort for maximum progress",
      price: 1399,
      currency: "€",
      badge: "10 students batch",
      features: [
        { name: "Access to all modules" },
        { name: "Notion guide" },
        { name: "Exclusive Discord community" },
        { name: "7-days money back" },
        { name: "Interview-ready LeetCode roadmap" },
        { name: "Frontend-focused System Design (ready structure)" },
        { name: "Behavioral interview preparation" },
        { name: "3 full mock interviews (Coding, SD, Behavioral)" },
        { name: "Applying strategy" },
        { name: "Community & async challenges" },
        { name: "Access to the most up-to-date FAANG-style interview tasks" },
        { name: "Large private community sharing real interview experience" },
      ],
      modulesLabel: "Modules 1–7",
      isLimited: true,
    },
  ];

  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
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
            Pricing
          </p>

          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Choose your JavaScript Mastery plan
          </h2>

          <p className="mt-5 text-base-content/70 max-w-2xl mx-auto">
            From fundamentals to React and real interview preparation — one-time
            payment, lifetime access.
          </p>
        </div>

        {/* Plans */}
        <div className="relative flex justify-center flex-col lg:flex-row items-stretch gap-8">
          {plans.map((plan) => (
            <div key={plan.variantCode} className="relative w-full max-w-lg">
              {(plan.isFeatured || plan.badge) && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className="badge border-0 text-xs font-semibold px-4 py-3 text-primary-content"
                    style={{
                      background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
                    }}
                  >
                    {plan.badge || "POPULAR"}
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className="absolute -inset-[1px] rounded-xl z-10"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
                  }}
                />
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

                {/* Modules */}
                <div className="flex gap-2">
                  <span className="badge badge-outline">
                    {plan.modulesLabel}
                  </span>
                  {plan.isLimited && (
                    <span className="badge badge-outline">Limited</span>
                  )}
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

                      <span className="leading-relaxed">{feature.name}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="space-y-2">
                  <ButtonCheckout
                    priceId={plan.priceId}
                    variantCode={plan.variantCode}
                    brandStart={BRAND_START}
                    brandEnd={BRAND_END}
                  />

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
    </section>
  );
};

export default Pricing;
