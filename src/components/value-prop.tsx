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
        {desc:<span>Access <strong>comprehensive documentation</strong> before our partnership begins</span>}
      ],
    },
    {
      name: "End-to-End",
      id: "end-to-end",
      description: "We help you with all stages from design, development, to deployment. We also have experience with sales and marketing and can give guidance on those areas from a technical perspective.",
      icon: <SendToBack />,
      features: [
        {desc: <span>Manage every stage of building your business: <strong>design</strong>, <strong>development</strong>, and <strong>deployment</strong></span>},
      ],
    },
    {
      name: "Speed",
      id: "speed",
      description: "Typical MVPs take us a month to build from start to finish and at maximum we expect to spend 2 months. We take out all the fluff and just focus on what matters.",
      icon: <Gauge />,
      features: [
        {desc: <span>Deliver your project from <strong>start to finish</strong> within <strong>1-2 months</strong></span>},
      ],
    },
    {
        name: "Startup Experience",
        id: "scalability",
        description: "We use technology built for launching fast and scaling to millions. Our open sourced templated code is trusted by over 500 developers. Our founderʼs experience includes successfully scaling an app to over 150,000 active users.",
        icon: <BrainCircuit />,
        features: [
          {desc: <span>Founders with a track record of <strong>successful startup exits</strong></span>},
        ],
    },

  ];

export default function ValueProp() {
    return (
        <div className="pt-24 sm:pt-32 sm:pb-5 bg-[#343434]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-none text-left">
                    <h2 className="text-base font-semibold leading-7 text-green-400">
                        Why work with us
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Our Values at DevToDollars
                    </p>
                    <p className="mt-0 max-w-2xl text-lg leading-8 text-gray-300">
                        Move your business forward while looking for a perfect fit for your in house CTO
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row mx-auto max-w-md lg:max-w-none flex-wrap justify-between gap-16 lg:gap-5">
                    {valueprops.map((tier) => (
                        <div
                            key={tier.id}
                            className="rounded-3xl w-full lg:w-[calc(25%-1.25rem)]"
                        >
                            <div className="flex flex-col items-start gap-y-4">
                                <div className="text-5xl text-black p-4 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg w-18 h-18 flex items-center justify-center">
                                    {tier.icon}
                                </div>
                                <h3
                                    id={tier.id}
                                    className="text-lg font-bold leading-8 text-white mb-0"
                                >
                                    {tier.name}
                                </h3>
                            </div>
                            <ul className="mt-4 text-md pl-0 text-gray-300 list-none">
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