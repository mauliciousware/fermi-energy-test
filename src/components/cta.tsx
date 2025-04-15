import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Make sure to register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CarChargingAnimation = () => {
  // Create refs for our elements
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const stationRef = useRef(null);
  const plugRef = useRef(null);
  const electricityRef = useRef(null);
  const batteryLevelRef = useRef(null);
  
  useEffect(() => {
    // Store the animation timeline so we can kill it on unmount
    let timeline;
    
    // Initialize the animation once the component is mounted
    const initAnimation = () => {
      // Create our main timeline
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=3000", // end after scrolling 3000px
          pin: true, // pin the trigger element while active
          scrub: 0.5, // smooth scrubbing, takes 0.5 seconds to catch up to the scrollbar
          markers: false, // for debugging
        }
      });
      
      // Stage 1: Car approaches the charging station
      timeline.to(carRef.current, {
        x: '90%',
        duration: 2,
        ease: "power2.out"
      });
      
      // Stage 2: Plug moves from station to car
      timeline.to(plugRef.current, {
        x: '-107%',
        y: '0%',
        duration: 0.5,
        ease: "power1.inOut"
      });
      
      // Stage 3: Electricity effect starts
      timeline.to(electricityRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3
      });
      
      // Stage 4: Battery charging animation
      timeline.to(batteryLevelRef.current, {
        width: '100%',
        duration: 2,
        ease: "linear"
      });
      
      // Stage 5: Electricity effect fades
      timeline.to(electricityRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3
      });
      
      // Stage 6: Plug returns to station
      timeline.to(plugRef.current, {
        x: '0%',
        y: '0%',
        duration: 0.5,
        ease: "power1.inOut"
      });
      
      // Stage 7: Car drives away
      timeline.to(carRef.current, {
        x: '-100%',
        duration: 1,
        ease: "power2.in"
      });
    };
    
    initAnimation();
    
    // Cleanup function to kill animations when component unmounts
    return () => {
      if (timeline) {
        timeline.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
  
  return (
    <div className="relative" ref={sectionRef}>
      {/* Container for the animation - this will be pinned */}
      <div className="h-screen w-full flex items-center justify-center bg-gray-800 overflow-hidden">
        <div className="relative w-full max-w-5xl h-64 mx-auto">
          {/* Charging Station - simplified to match the image */}
          <div 
            ref={stationRef} 
            className="absolute right-16 top-1/2 transform -translate-y-1/2 w-28 h-56 bg-gray-900 rounded-md flex flex-col items-center"
          >
            {/* Indicator lights */}
            <div className="absolute bottom-10 left-6 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-10 left-14 w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute top-8 left-8 w-3 h-8 bg-yellow-400 rounded-sm"></div>
          </div>
          
          {/* Charging Plug - simplified */}
          <div 
            ref={plugRef}
            className="absolute right-40 top-1/2 transform -translate-y-1/2 z-20"
          >
            <div className="w-40 h-2 bg-gray-700"></div>
          </div>
          
          {/* Electricity Effect (initially invisible) */}
          <div 
            ref={electricityRef}
            className="absolute right-64 top-1/2 transform -translate-y-1/2 w-12 h-12 opacity-0 scale-0"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400">
              <path fill="currentColor" d="M11 15H6L13 1V9H18L11 23V15Z" />
            </svg>
          </div>
          
          {/* Car - simplified to match the minimalist blue bus/van in the image */}
          <div 
            ref={carRef}
            className="absolute left-20 top-1/2 transform -translate-x-full -translate-y-1/2 w-52 h-28 bg-blue-600 rounded-md z-10"
          >
            {/* Car details */}
            <div className="absolute w-full h-full">
              {/* Window */}
              <div className="absolute w-16 h-8 bg-blue-300 top-4 left-6 rounded-sm"></div>
              
              {/* Wheels */}
              <div className="absolute bottom-0 left-8 w-10 h-10 bg-gray-900 rounded-full -mb-3"></div>
              <div className="absolute bottom-0 right-8 w-10 h-10 bg-gray-900 rounded-full -mb-3"></div>
              
              {/* Green battery indicator */}
              <div className="absolute top-1/2 left-32 w-14 h-3 bg-green-500 rounded-sm"></div>
              
              {/* Yellow detail */}
              <div className="absolute bottom-12 left-4 w-4 h-4 bg-yellow-400 rounded-sm"></div>
              
              {/* Red tail light */}
              <div className="absolute top-10 right-2 w-3 h-3 bg-red-500 rounded-sm"></div>
              
              {/* Battery level */}
              <div className="absolute top-1/2 left-32 w-14 h-3 bg-gray-700 rounded-sm overflow-hidden">
                <div 
                  ref={batteryLevelRef} 
                  className="h-full bg-green-500 rounded-sm w-0"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to create scrollable area */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default CarChargingAnimation;