const features = [
  {
    name: "Fast Charging Technology",
    description:
      "Our patented fast-charging system reduces charging time by up to 50% compared to conventional solutions, making EV charging more efficient and convenient.",
    href: "/dummyPage",
    icon: "https://api.iconify.design/mdi:battery-charging-high.svg?color=%234ade80&width=100&height=100",
  },
  {
    name: "Sustainable Materials",
    description:
      "We use environmentally friendly materials and zero-emission production processes to minimize our environmental impact while maintaining high performance standards.",
    href: "/dummyPage",
    icon: "https://api.iconify.design/mdi:leaf-circle.svg?color=%234ade80&width=100&height=100",
  },
  {
    name: "Advanced Safety Systems",
    description:
      "Multiple layers of protection and advanced thermal management ensure reliable performance and maximum safety in all conditions.",
    href: "/dummyPage",
    icon: "https://api.iconify.design/mdi:shield-check.svg?color=%234ade80&width=100&height=100",
  },
];

export default function AboutUs() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Technology Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Revolutionizing EV charging with innovative battery technology
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <img
                    src={feature.icon}
                    alt={feature.name}
                    className="mb-6 rounded-lg h-12 w-12 p-1 bg-gray-800"
                  />
                  {feature.name}
                </dt>
                <dd className="ms-0 mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-primary"
                      target="_blank"
                    >
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
