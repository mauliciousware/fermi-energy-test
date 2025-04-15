import React, { useState, useEffect, useRef } from 'react';

const AnimatedFlowchart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const [showArrow1, setShowArrow1] = useState(false);
  const [showProcess1, setShowProcess1] = useState(false);
  const [showArrow2, setShowArrow2] = useState(false);
  const [showProcess2, setShowProcess2] = useState(false);
  const [showArrow3, setShowArrow3] = useState(false);
  const [showProcess3, setShowProcess3] = useState(false);
  const [showArrow4, setShowArrow4] = useState(false);
  const [showProcess4, setShowProcess4] = useState(false);
  const [showArrow5, setShowArrow5] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  
  const flowchartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the component is visible
      }
    );

    if (flowchartRef.current) {
      observer.observe(flowchartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Don't start animation until component is visible

    const timeline = [
      { setter: setShowInputs, delay: 1000 },
      { setter: setShowArrow1, delay: 2500 },
      { setter: setShowProcess1, delay: 3500 },
      { setter: setShowArrow2, delay: 4500 },
      { setter: setShowProcess2, delay: 5500 },
      { setter: setShowArrow3, delay: 6500 },
      { setter: setShowProcess3, delay: 7500 },
      { setter: setShowArrow4, delay: 8500 },
      { setter: setShowProcess4, delay: 9500 },
      { setter: setShowArrow5, delay: 10500 },
      { setter: setShowOutput, delay: 11500 }
    ];

    const timeouts = timeline.map(({ setter, delay }) => 
      setTimeout(() => setter(true), delay)
    );

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [isVisible]);

  return (
    <div ref={flowchartRef} className="flex flex-col items-center justify-center p-8 bg-surface2 min-h-screen text-gray-50 font-mont">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between mb-8">
          <div className="text-xl font-bold text-primary">INPUT</div>
          <div className="text-xl font-bold text-primary">OUTPUT</div>
        </div>
        
        <div className="flex items-center justify-between">
          {/* Input Section */}
          <div className="flex flex-col gap-4 w-1/6">
            <div 
              className={`transform transition-all duration-1000 ease-in-out border-4 border-primary rounded-lg p-4 bg-surface1 ${
                showInputs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 bg-neutral rounded mb-2"></div>
              <div className="text-xs text-center font-bold">BATTERIES, BATTERY PACKS & REUSABLE SCRAP</div>
            </div>
            
            <div 
              className={`transform transition-all duration-1000 ease-in-out border-4 border-primary rounded-lg p-4 bg-surface1 ${
                showInputs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 bg-neutral rounded mb-2"></div>
              <div className="text-xs text-center font-bold">CONSUMER ELECTRONICS</div>
            </div>
          </div>
          
          {/* Arrow to first process */}
          <div className="w-8 flex items-center justify-center">
            <div 
              className={`transition-all duration-700 ease-in-out flex items-center ${
                showArrow1 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-8 h-1 bg-accent"></div>
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-accent"></div>
            </div>
          </div>
          
          {/* Process 1 */}
          <div className="w-1/6">
            <div 
              className={`transform transition-all duration-1000 ease-in-out border-4 border-primary rounded-lg p-4 bg-surface1 ${
                showProcess1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 bg-neutral rounded mb-2"></div>
              <div className="text-xs text-center font-bold">COLLECTION & RECEIPT</div>
            </div>
          </div>
          
          {/* Arrow to process 2 */}
          <div className="w-8 flex items-center justify-center">
            <div 
              className={`transition-all duration-700 ease-in-out flex items-center ${
                showArrow2 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-8 h-1 bg-accent"></div>
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-accent"></div>
            </div>
          </div>
          
          {/* Process 2 */}
          <div className="w-1/6">
            <div 
              className={`transform transition-all duration-1000 ease-in-out border-4 border-primary rounded-lg p-4 bg-surface1 ${
                showProcess2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 bg-neutral rounded mb-2"></div>
              <div className="text-xs text-center font-bold">STORAGE & SEPARATION</div>
            </div>
          </div>
          
          {/* Arrow to process 3 */}
          <div className="w-8 flex items-center justify-center">
            <div 
              className={`transition-all duration-700 ease-in-out flex items-center ${
                showArrow3 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-8 h-1 bg-accent"></div>
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-accent"></div>
            </div>
          </div>
          
          {/* Process 3 */}
          <div className="w-1/6">
            <div 
              className={`transform transition-all duration-1000 ease-in-out border-4 border-primary rounded-lg p-4 bg-surface1 ${
                showProcess3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 bg-neutral rounded mb-2"></div>
              <div className="text-xs text-center font-bold">RECYCLING</div>
            </div>
          </div>
          
          {/* Arrow to process 4 */}
          <div className="w-8 flex items-center justify-center">
            <div 
              className={`transition-all duration-700 ease-in-out flex items-center ${
                showArrow4 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-8 h-1 bg-accent"></div>
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-accent"></div>
            </div>
          </div>
          
          {/* Process 4 */}
          <div className="w-1/6">
            <div 
              className={`transform transition-all duration-1000 ease-in-out border-4 border-primary rounded-lg p-4 bg-surface1 ${
                showProcess4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 bg-neutral rounded mb-2"></div>
              <div className="text-xs text-center font-bold">REFINING</div>
            </div>
          </div>
          
          {/* Arrow to output */}
          <div className="w-8 flex items-center justify-center">
            <div 
              className={`transition-all duration-700 ease-in-out flex items-center ${
                showArrow5 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-8 h-1 bg-accent"></div>
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-accent"></div>
            </div>
          </div>
          
          {/* Output */}
          <div className="w-1/6">
            <div 
              className={`transform transition-all duration-1000 ease-in-out border-4 border-primary rounded-lg p-4 bg-surface1 ${
                showOutput ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-24 bg-neutral rounded mb-2"></div>
              <div className="text-xs text-center font-bold">BATTERY MATERIALS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFlowchart;