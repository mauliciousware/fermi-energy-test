import { 
  FolderSync, 
  SendToBack,
  Gauge,
  BrainCircuit 
} from 'lucide-react';

interface Feature {
  title?: string;
  desc: string | JSX.Element;
}

interface ValueProp {
  name: string;
  id: string;
  description: string;
  icon: JSX.Element;
  features: Feature[];
}

const valueprops: ValueProp[] = [
    {
      name: "Transferability",
      id: "end-to-end",
      description: "Our documentation is available even before you start working with us so you can be sure that your future CTO has everything they need to continue growing your business.",
      icon: <FolderSync/>,
      features: [
        {desc:<span>Access <strong>comprehensive documentation</strong> before our partnership begins</span>},
        {desc: <span>Ensure a <strong>seamless transition</strong> for any future CTO</span>},
        {desc: <span>Empower your team with all the necessary resources to continue <strong>business growth</strong></span>}
      ],
    },
    {
      name: "End-to-End",
      id: "end-to-end",
      description: "We help you with all stages from design, development, to deployment. We also have experience with sales and marketing and can give guidance on those areas from a technical perspective.",
      icon: <SendToBack />,
      features: [
        {desc: <span>Manage every stage of building your business: <strong>design</strong>, <strong>development</strong>, and <strong>deployment</strong></span>},
        {desc: <span>Provide technical guidance on industry standard <strong>marketing</strong> and <strong>analytics tools</strong></span>}
      ],
    },
    {
      name: "Speed",
      id: "speed",
      description: "Typical MVPs take us a month to build from start to finish and at maximum we expect to spend 2 months. We take out all the fluff and just focus on what matters.",
      icon: <Gauge />,
      features: [
        {desc: <span>Deliver your project from <strong>start to finish</strong> within <strong>1-2 months</strong></span>},
        {desc: <span>Maintain <strong>high quality</strong> while ensuring <strong>rapid execution</strong> and <strong>delivery</strong></span>},
        {desc: <span>We use technology built for <strong>launching fast</strong> and <strong>scaling to millions.</strong></span>}
      ],
    },
    {
        name: "Startup Experience",
        id: "scalability",
        description: "We use technology built for launching fast and scaling to millions. Our open sourced templated code is trusted by over 500 developers. Our founderʼs experience includes successfully scaling an app to over 150,000 active users.",
        icon: <BrainCircuit />,
        features: [
          {desc: <span>Founders with a track record of <strong>successful startup exits</strong></span>},
          {desc: <span>Experience in scaling businesses to over <strong>200,000 active users</strong></span>},
          {desc: <span>Deep understanding of what it takes to <strong>grow and sustain</strong> a business</span>}
        ],
    },

  ];

export default function ValueProp() {
    return (
        <div className="pt-24 sm:pt-32 sm:pb-5 bg-[#343434]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Move your startup forward while looking for a perfect fit for your in house CTO
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Why DevToDollars?
            </p>
          </div>
          {/* <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
            We provide you with the expertise needed to define your requirements and build a world-class, scalable solution using the latest technologies. This allows you to move forward with your business while we handle the technical development.
          </p> */}
          <div className="flex flex-col lg:flex-row mx-auto max-w-md lg:max-w-none flex-wrap justify-between gap-16 lg:gap-5">
            {valueprops.map((tier) => (
                <div
                key={tier.id}
                className="rounded-3xl p-4 xl:p-6 ring-1 ring-white/10"
                style={{ flex: '1 1 22%' }}
                >
                    <div className="flex items-center align-middle gap-x-4 ">
                      {tier.icon}
                        <h3
                        id={tier.id}
                        className="text-lg font-semibold leading-8 text-white mb-0"
                        >
                        {tier.name}
                        </h3>
                  
                    </div>
                    <ul className="mt-4 pl-5 text-md leading-6 text-gray-300 list-disc">
                      {tier.features.map((feature, index) => (
                          <li key={index} className="mb-4">
                            <div className="text-md">{feature.desc}</div>
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