'use client'

import { useState, useRef, useEffect } from 'react'
// import Image, { StaticImageData } from 'next/image'
import { Transition } from '@headlessui/react'

interface Testimonial {
  img?: any,
  quote: string
  name: string
  role: string
}

const testimonials = [
  {
    img: '/img/ev-manufacturer.png',
    quote: "Fermi Energy's battery technology has revolutionized our EV charging infrastructure. Their fast-charging solution has reduced our charging times by 50% while maintaining exceptional safety standards. The sustainable materials used in their batteries align perfectly with our environmental goals.",
    name: 'Sarah Chen',
    role: 'CTO, GreenDrive Motors',
    project: 'EV Manufacturing'
  },
  {
    img: '/img/charging-network.png',
    quote: "Implementing Fermi Energy's battery solutions across our charging network has been a game-changer. The advanced thermal management system ensures reliable performance even in extreme conditions, and our customers have noticed a significant improvement in charging efficiency.",
    name: 'Michael Rodriguez',
    role: 'Director of Operations, ChargePoint Network',
    project: 'Charging Infrastructure'
  },
  {
    img: '/img/energy-company.png',
    quote: "As a renewable energy provider, we're always looking for sustainable solutions. Fermi Energy's battery technology not only meets our high standards for environmental impact but also delivers superior performance. Their commitment to zero-emission production processes sets them apart in the industry.",
    name: 'Dr. Emily Thompson',
    role: 'Head of Innovation, CleanPower Solutions',
    project: 'Energy Storage'
  }
]

export default function FancyTestimonialsSlider() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const autorotateTiming: number = 7000

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  

  return (
    <div className="mx-auto text-center py-5 md:max-w-3xl md:h-[32rem] h-[50rem] relative overflow-hidden">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[480px] h-[480px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/25 via-indigo-500/5 to-indigo-500/0 rounded-full -z-10"></div>
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                beforeEnter={() => heightFix()}
              >
                <div className="flex flex-col items-center">
                  <img 
                    className="absolute top-1 left-1/2 -translate-x-1/2 rounded-full object-cover" 
                    src={testimonial.img} 
                    width={70} 
                    height={70} 
                    alt={testimonial.name} 
                  />
                  <div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 text-center">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </div>
              </Transition>
            ))}
            
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out px-4 md:px-0">
        <div className="relative flex flex-col" ref={testimonialsRef}>

          {testimonials.map((testimonial, index) => (
            <Transition
              as="div"
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-xl md:text-2xl font-bold text-white before:content-['\201C'] after:content-['\201D'] px-2 md:px-0">
                {testimonial.quote}
              </div>
            </Transition>
          ))}

        </div>
      </div>
      {/* Buttons - Updated positioning */}
      <div className="flex flex-wrap justify-center -m-1.5 absolute bottom-5 left-0 right-0 mt-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`border-none inline-flex justify-center whitespace-nowrap rounded-full px-4 py-2 m-1.5 text-sm font-bold shadow-sm transition-colors duration-300 ${
              active === index
                ? 'bg-primary text-black shadow-primary/10'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
            onClick={() => { setActive(index); setAutorotate(false); }}
          >
            <span>{testimonial.project}</span> <span className={`${active === index ? 'text-primary/60' : 'text-white/60'}`}></span> 
          </button>
        ))}
      </div>
    </div>
  )
}