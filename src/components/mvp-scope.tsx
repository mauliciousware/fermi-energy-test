import { 
    BookText, 
    MessageCircleMore, 
    SearchCheck, 
    ListCheck,
    ListRestart,
    MessageCircleQuestion,
    FolderCode
} 
from 'lucide-react';
  
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
      title: 'Step 1: Chat with Our AI',
      description:
        'Start a conversation with our AI consultant. Describe your software project idea and answer a few simple questions.',
      icon: <MessageCircleMore className="w-12 h-12 p-1" strokeWidth={1} />
    },
    {
      title: 'Step 2: Review Criteria',
      description:
        "Our AI will extract and generate core project criteria from your conversation. You'll have the opportunity to review and adjust these criteria to ensure they accurately reflect your vision before the report is generated.",
      icon: <SearchCheck className="w-12 h-12 p-1" strokeWidth={1} />
    },
    {
      title: 'Step 3: Receive a Detailed Report',
      description:
        'Once the criteria are finalized, our AI will generate a comprehensive report. This report includes detailed architecture design, user flows, screens, time estimates, and user stories that you can use to plan your project or share with development agencies.',
      icon: <BookText className="w-12 h-12 p-1" strokeWidth={1} />
    }
  ];
  
  
  export default function MVPScope() {
      return (
          <div className="pt-24 sm:pt-32 sm:pb-5 bg-[#343434]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-none text-left">
                    <h2 className="text-base font-semibold leading-7 text-green-400">
                        Get a Clear Vision for Your MVP
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Scope Your MVP with Our AI-Powered Tool
                    </p>
                    <p className="mt-0 max-w-2xl text-lg leading-8 text-gray-300">
                    In under 5 minutes, determine your software project needs before you start working with us
                    </p>
                </div>
            </div>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Left Column */}
                    <div className="bg-[#424242] p-8 rounded-xl h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                What You'll Learn
                            </h3>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <ListCheck strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">Core Features</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <ListRestart strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">User Workflow</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <MessageCircleQuestion strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">Problem Statement</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl text-black p-3 bg-green-400 border-2 border-green-400 shadow-lg shadow-green-400/50 rounded-lg flex items-center justify-center mb-3">
                                        <FolderCode strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-300">Software Platform</span>
                                </div>
                            </div>
                        </div>
                        <a 
                            href="https://www.mvpscope.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-green-400 hover:text-green-300 transition-colors no-underline mt-auto"
                        >
                            <span className="text-lg font-semibold no-underline">Visit MVP Scope</span>
                            <span className="ml-2">→</span>
                        </a>
                    </div>

                    {/* Right Column */}
                    <div className="h-full flex items-center">
                        <video
                            className="w-full h-full object-cover rounded-xl"
                            src="/video/mvpscope-demo.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            controls
                        />
                    </div>
                </div>
            </div>
          </div>
      )
  }