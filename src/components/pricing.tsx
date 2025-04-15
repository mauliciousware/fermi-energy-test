import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Starter Pack",
    id: "starter",
    href: "/contact",
    price: "$0",
    description: "Get started with our basic battery technology solutions",
    features: [
      "Basic Battery Management System",
      "Standard Charging Protocol",
      "Technical Documentation",
      "Email Support",
    ],
    btnText: "Get Started",
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "professional",
    href: "/contact",
    price: "$50,000",
    description:
      "Perfect for EV manufacturers: advanced battery technology with fast charging capabilities and comprehensive support.",
    features: [
      "Advanced Battery Management System",
      "Fast Charging Technology",
      "Thermal Management System",
      "24/7 Technical Support",
      "Regular Software Updates",
    ],
    btnText: "Contact Sales",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    href: "/contact",
    price: "Custom",
    description:
      "For large-scale deployments: fully customized battery solutions with premium features and dedicated support.",
    features: [
      "Custom Battery Architecture",
      "Ultra-Fast Charging Technology",
      "Advanced Safety Systems",
      "Dedicated Support Team",
      "Custom Integration Services",
      "Priority Feature Development"
    ],
    btnText: "Contact Sales",
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32 bg-[#343434]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Battery Solutions
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose Your Battery Technology Package
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Select the perfect battery solution for your EV charging needs, from basic to enterprise-grade technology.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-primary"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10 flex flex-col h-[700px]",
              )}
            >
              <div className="flex-none">
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-black">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300 h-[80px]">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-sm font-semibold leading-6 text-gray-300">
                      /year
                    </span>
                  )}
                </p>
              </div>
              <div className="flex-grow">
                <div
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-100"
                >
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-green-700"
                        aria-hidden="true"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-none mt-6">
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-primary text-black shadow-sm hover:opacity-80 focus-visible:outline-indigo-500 hover:text-black"
                      : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white hover:text-white",
                    "block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:no-underline",
                  )}
                >
                  {tier.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
