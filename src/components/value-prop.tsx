const valueprops = [
    {
      name: "Speed",
      id: "speed",
      description: "Typical MVPs take us a month to build from start to finish and at maximum we expect to spend 2 months. We take out all the fluff and just focus on what matters.",
      iconUrl:"/landing/speed.svg",
      features: [
        {title: "Rapid MVP Development", desc: "Typical MVPs take us a month to build from start to finish."},
        {title: "Efficient Turnaround", desc: "At maximum we expect to spend 2 months."},
        {title: "Lean Execusion", desc: "We take out all the fluff and just focus on what matters."}
      ],
    },
    {
        name: "End-to-End",
        id: "end-to-end",
        description: "We help you with all stages from design, development, to deployment. We also have experience with sales and marketing and can give guidance on those areas from a technical perspective.",
        iconUrl:"/landing/end-to-end.png",
        features: [
          {title: "Comprehensive Development", desc: "We help you with all stages from design, development, to deployment."},
          {title: "Technical Strategic Guidance", desc: "With our previous experience with sales and marketing, We can give guidance on those areas from a technical perspective."}
        ],
    },
    {
        name: "Scalability",
        id: "scalability",
        description: "We use technology built for launching fast and scaling to millions. Our open sourced templated code is trusted by over 500 developers. Our founderʼs experience includes successfully scaling an app to over 150,000 active users.",
        iconUrl:"/landing/scalable.png",
        features: [
          {title: "Built for Growth", desc: "We use technology built for launching fast and scaling to millions."},
          {title: "Proven Solution", desc: "Our open sourced templated code is trusted by over 500 developers."},
          {title: "Proven Track Record", desc: "Our founderʼs experience includes successfully scaling an app to over 150,000 active users."}
        ],
    },
    {
        name: "Transferability",
        id: "end-to-end",
        description: "We understand that having an in house CTO is the best. When you do find a CTO, we have openly available documentation to make the transfer as seamless as possible.",
        iconUrl:"/landing/transferability.png",
        features: [
          {title: "Smooth Transition", desc:"We understand that having an in house CTO is the best, so we facilitate a seamless transition when you hire one."},
          {title: "Comprehensive Documentation", desc: "When you do find a CTO, we have openly available documentation to make the transfer as seamless as possible."}
      ],
    },
  ];

export default function ValueProp() {
    return (
        <div className="pt-24 sm:pt-32 sm:pb-5 bg-[#343434]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Why Choose Us
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              At DevtoDollars
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
            We provide you with the expertise needed to define your requirements and build a world-class, scalable solution using the latest technologies. This allows you to move forward with your business while we handle the technical development.
          </p>
          <div className="flex flex-col lg:flex-row mx-auto max-w-md lg:max-w-none flex-wrap justify-between gap-16 lg:gap-5">
            {valueprops.map((tier) => (
                <div
                key={tier.id}
                className="rounded-3xl p-4 xl:p-6 ring-1 ring-white/10"
                style={{ flex: '1 1 22%' }}
                >
                    <div className="flex items-center align-middle gap-x-4 ">
                        <img src={tier.iconUrl} alt={`${tier.name} icon`} className="h-12 w-12" />
                        <h3
                        id={tier.id}
                        className="text-lg font-semibold leading-8 text-white mb-0"
                        >
                        {tier.name}
                        </h3>
                  
                    </div>
                    <ul className="mt-4 pl-0 text-md leading-6 text-gray-300 list-none list-inside">
                      {tier.features.map((feature, index) => (
                          <li key={index} className="mb-4">
                            <div className="font-bold">{feature.title}</div>
                            <div className="text-sm">{feature.desc}</div>
                          </li>
                      ))}
                    </ul>
                </div>
            ))}
            </div>
        </div>
      </div>
    )
}