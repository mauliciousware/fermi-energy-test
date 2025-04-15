import { 
  Battery, 
  Zap,
  Leaf,
  Shield 
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
      name: "Advanced Battery Technology",
      id: "battery-tech",
      description: "Our cutting-edge battery technology delivers superior performance with faster charging times and longer lifespan compared to conventional solutions.",
      icon: <Battery/>,
      features: [
        {desc:<span>Patented <strong>fast-charging technology</strong> that reduces charging time by up to 50%</span>}
      ],
    },
    {
      name: "Sustainable Energy",
      id: "sustainability",
      description: "We're committed to reducing environmental impact through innovative battery solutions that minimize resource consumption and maximize efficiency.",
      icon: <Leaf />,
      features: [
        {desc: <span>Environmentally friendly materials and <strong>zero-emission</strong> production processes</span>},
      ],
    },
    {
      name: "High Performance",
      id: "performance",
      description: "Our batteries deliver exceptional power density and energy efficiency, enabling longer range and better performance for electric vehicles.",
      icon: <Zap />,
      features: [
        {desc: <span>Up to <strong>40% more energy density</strong> than conventional lithium-ion batteries</span>},
      ],
    },
    {
        name: "Safety & Reliability",
        id: "safety",
        description: "Built with multiple layers of protection and advanced thermal management systems, our batteries set new standards for safety and reliability.",
        icon: <Shield />,
        features: [
          {desc: <span>Industry-leading <strong>safety certifications</strong> and comprehensive testing protocols</span>},
        ],
    },
  ];

export default function ValueProp() {
    return (
        <div className="pt-24 sm:pt-32 sm:pb-5 bg-[#343434]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-none text-left">
                    <h2 className="text-base font-semibold leading-7 text-green-400">
                        Our Technology
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Why Choose Our Battery Solutions
                    </p>
                    <p className="mt-0 max-w-2xl text-lg leading-8 text-gray-300">
                        Revolutionizing EV charging with innovative battery technology that's cleaner, faster, and more efficient
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