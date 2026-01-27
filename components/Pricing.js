import ButtonCheckout from "./ButtonCheckout";

// добавляем брендовые цвета/градиент
const BRAND_START = "#ff930f";
const BRAND_END = "#eb538a";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  // локальные планы для AI Code Reviewer Agent
  const plans = [
    {
      priceId: process.env.PRICE_ID_WORKFLOW,
      variantCode: "workflow",
      name: "Workflow",
      description: "Automated PR review workflow (n8n + OpenAI)",
      price: 29,
      priceAnchor: 49,
      isFeatured: false,
      features: [
        { name: "n8n workflow.json to auto-review PRs" },
        { name: "OpenAI-powered review comments" },
        { name: "GitHub webhook integration" },
      ],
    },
    {
      priceId: process.env.PRICE_ID_PRO,
      variantCode: "pro",
      name: "Pro - Guide & Hosting",
      description: "Full step-by-step guide + free hosting for n8n",
      price: 49,
      priceAnchor: 79,
      isFeatured: true,
      features: [
        { name: "Includes all Workflow features" },
        { name: "Complete step-by-step deployment guide" },
        { name: "Free hosting on Render (n8n instance)" },
        { name: "Credential & workflow configuration guide" },
        { name: "Custom templates & best practices" },
      ],
    },
  ];

  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p
            className="font-medium mb-8"
            style={{
              background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pricing
          </p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Automate PR reviews with AI — faster feedback, safer merges
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className="badge text-xs font-semibold border-0"
                    style={{
                      background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
                      color: "#fff",
                    }}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] z-10`}
                  style={{
                    background: `linear-gradient(90deg, ${BRAND_START}, ${BRAND_END})`,
                  }}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor ? (
                    <div className="flex flex-col justify-end mb-[6px]">
                      <span className="text-2xl font-extrabold text-base-content/80 relative leading-none">
                        ${plan.priceAnchor}
                        <span className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-base-content/80" />
                      </span>
                    </div>
                  ) : null}
                  <p className={`text-5xl tracking-tight font-extrabold`}>
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <ButtonCheckout
                    priceId={plan.priceId}
                    variantCode={plan.variantCode}
                    brandStart={BRAND_START}
                    brandEnd={BRAND_END}
                  />

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    Pay once. Access forever.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
