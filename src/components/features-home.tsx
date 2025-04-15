import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function FeaturesHome() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section id="our-technology" className="relative bg-gray-700">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="pt-12 md:pt-20">

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h2 className="text-4xl mb-3 font-wood">Our Technology</h2>
                <p className="text-l font-mont">Discover how our innovative battery solutions are transforming EV charging</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`text-left flex items-center text-lg p-5 rounded-2xl transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-gray-700 shadow-lg hover:shadow-2xl border-black' : 'bg-black border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="text-white font-bold leading-snug tracking-tight mb-1">Fast Charging Technology</div>
                    <div className="text-gray-400">Our patented fast-charging system reduces charging time by up to 50% compared to conventional solutions</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    ⚡
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded-2xl transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-gray-700 shadow-lg hover:shadow-2xl border-black' : 'bg-black border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="text-white font-bold leading-snug tracking-tight mb-1">Sustainable Materials</div>
                    <div className="text-gray-400">Environmentally friendly battery components with zero-emission production processes</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    🌱
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded-2xl transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-gray-700 shadow-lg hover:shadow-2xl border-gray-900' : 'bg-black border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="text-white font-bold leading-snug tracking-tight mb-1">Advanced Safety Systems</div>
                    <div className="text-gray-400">Multiple layers of protection and advanced thermal management for maximum safety</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    🔒
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl min-h-[400px] md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex justify-center">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right items-center" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col gap-8 items-center">
                      <img className="lg:max-w-lg sm:max-w-xs mx-auto rounded" src="img/fast-charging.png" alt="Fast Charging Technology" />
                      <a className="btn text-white bg-gray-800 hover:bg-gray-900 hover:text-white mb-4 sm:w-auto sm:mb-0 hover:no-underline" target="_blank" href="/technology/fast-charging">Learn More</a>
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col gap-8 items-center">
                      <img className="lg:max-w-lg sm:max-w-xs mx-auto rounded" src="img/sustainable-materials.png" alt="Sustainable Materials" />
                      <a className="btn text-white bg-gray-800 hover:bg-gray-900 hover:text-white mb-4 sm:w-auto sm:mb-0 hover:no-underline" target="_blank" href="/technology/sustainability">View Details</a>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col gap-8 items-center">
                      <img className="lg:max-w-lg sm:max-w-xs mx-auto rounded" src="img/safety-systems.png" alt="Safety Systems" />
                      <a className="btn text-white bg-gray-800 hover:bg-gray-900 hover:text-white mb-4 sm:w-auto sm:mb-0 hover:no-underline" target="_blank" href="/technology/safety">Safety Features</a>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
