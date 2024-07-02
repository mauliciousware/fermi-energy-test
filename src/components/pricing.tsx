import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Free",
    id: "free",
    href: "/docs",
    price: "$0",
    description: "Use our free and proven approach to build your startup",
    features: [
      "Mobile / Web Boilerplate Code",
      "Detailed Code Documentation",
      "Developer Management Guide",
      "Discord Community Support",
    ],
    btnText: "Read Documentation",
    mostPopular: true,
  },
  {
    name: "We Build Your MVP",
    id: "mvp",
    href: "https://usemotion.com/meet/ithinkwong/xyz6xw9?d=30",
    price: "$5000~",
    description:
      "Our rate is $80/hr, and we typically build MVPs for around $5000",
    features: [
      "Technical Co-founder",
      "Completed MVP",
      "Personalized Consultation Sessions",
      "Post-Launch Support and Maintenance",
    ],
    btnText: "Work With Us",
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
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Transparent Pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Use our method to build your startup, or trust us to build your
          startup with our proven approach.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-primary"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10",
              )}
            >
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
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300">
                  /project
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-primary text-black shadow-sm hover:opacity-80 focus-visible:outline-indigo-500 hover:text-black"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white hover:text-white",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:no-underline",
                )}
              >
                {tier.btnText}
              </a>
              <div
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-100 xl:mt-10"
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
          ))}
        </div>
      </div>
    </div>
  );
}
