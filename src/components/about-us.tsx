const features = [
  {
    name: "Slay School",
    description:
      "Backed by YCombinator with over 150k users globally, Slay School is an AI study tool that generates flashcards and quizzes from notes.",
    href: "https://slayschool.com",
    icon: "/landing/slayschool-logo.png",
  },
  {
    name: "Fleeting Notes",
    description:
      "With over 9000 users, Fleeting Notes is a note-taking app specifically designed to take quick notes into Obsidian.",
    href: "https://fleetingnotes.app",
    icon: "/landing/fleetingnotes-logo.png",
  },
  {
    name: "MVPScope",
    description:
      "MVPScope is a self-serve AI software cost estimator for non-technical people looking to hire a developer.",
    href: "https://mvpscope.com",
    icon: "/landing/mvpscope-logo.png",
  },
];

export default function AboutUs() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Businesses We've Built
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We don’t just write software; we build businesses
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <img
                    src={feature.icon}
                    className="flex mb-6 rounded-lg h-10 w-10 items-center justify-center "
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
                      Visit Website <span aria-hidden="true">→</span>
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
