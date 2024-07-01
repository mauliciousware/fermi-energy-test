const features = [
  {
    name: "Fleeting Notes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "https://fleetingnotes.app",
    icon: "https://fleetingnotes.app/assets/logo.png",
  },
  {
    name: "Slay School",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "https://slayschool.com",
    icon: "https://cdn.prod.website-files.com/651fdc93c87a9d5daab9e0cb/6520ab09af9d260b980236eb_webclip-slay.png",
  },
  {
    name: "MVPScope",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "https://mvpscope.com",
    icon: "https://www.mvpscope.com/icon192.png",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Companies We've Built
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
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
