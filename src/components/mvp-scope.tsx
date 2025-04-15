import { 
    Battery, 
    Zap, 
    Leaf, 
    Shield,
    Gauge,
    Thermometer,
    BatteryCharging
} 
from 'lucide-react';
import { Globe } from './ui/Globe';
  
  interface Feature {
    title?: string;
    desc: string | JSX.Element;
  }

  interface HowItWorksProps {
    title: string;
    description: string;
    icon: JSX.Element;
  }
  
  const worksList: HowItWorksProps[] = [
    {
      title: 'Step 1: Fast Charging Technology',
      description:
        'Our patented fast-charging system reduces charging time by up to 50% compared to conventional solutions, making EV charging more efficient and convenient.',
      icon: <BatteryCharging className="w-12 h-12 p-1" strokeWidth={1} />
    },
    {
      title: 'Step 2: Sustainable Materials',
      description:
        "We use environmentally friendly materials and zero-emission production processes to minimize our environmental impact while maintaining high performance standards.",
      icon: <Leaf className="w-12 h-12 p-1" strokeWidth={1} />
    },
    {
      title: 'Step 3: Advanced Safety Systems',
      description:
        'Multiple layers of protection and advanced thermal management ensure reliable performance and maximum safety in all conditions.',
      icon: <Shield className="w-12 h-12 p-1" strokeWidth={1} />
    }
  ];
  
  
  export default function MVPScope() {
      return (
          <div className="pt-24 sm:pt-32 sm:pb-5 bg-[#343434]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-none text-left">
                    <h2 className="text-base font-semibold leading-7 text-green-400">
                        Our Technology Solutions
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Revolutionizing EV Charging
                    </p>
                    <p className="mt-0 max-w-2xl text-lg leading-8 text-gray-300">
                    Discover how our innovative battery technology is transforming the future of electric vehicles
                    </p>
                </div>
            </div>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Left Column */}
                    <div className="bg-[#424242] p-8 rounded-xl h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Key Features
                            </h3>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <Battery strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">High Energy Density</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <Zap strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">Fast Charging</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <Thermometer strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">Thermal Management</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <Gauge strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">Performance Monitoring</span>
                                </div>
                            </div>
                        </div>
                        <a 
                            href="/dummyPage"
                            className="flex items-center justify-center text-green-400 hover:text-green-300 transition-colors no-underline mt-auto"
                        >
                            <span className="text-lg font-semibold no-underline">Learn More</span>
                            <span className="ml-2">→</span>
                        </a>
                    </div>

                    {/* Right Column - Interactive Globe */}
                    <div className="h-full min-h-[400px] flex items-center justify-center relative rounded-xl overflow-hidden bg-black">
                        {/* Simplified container for the Globe */}
                        <Globe />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm z-30 pointer-events-none">
                            {/* Added pointer-events-none to label */}
                            <p className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full inline-block border border-white/20">
                                Global Distribution Network
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      )
  }