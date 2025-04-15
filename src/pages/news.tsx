import React from 'react';
import Layout from "@theme/Layout";
import { Calendar, Award, ExternalLink } from 'lucide-react';

export default function News(): JSX.Element {
  return (
    <Layout
      title="News and Announcements"
      description="Latest updates and announcements from Fermi Energy, Inc."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">News and Announcements</h1>
          <p className="text-lg text-gray-400">
            Latest updates and announcements from Fermi Energy, Inc.
          </p>
        </div>

        <div className="space-y-16">
          {/* 2024 News */}
          <div>
            <div className="flex items-center mb-8">
              <Calendar className="w-6 h-6 mr-2" />
              <h2 className="text-3xl font-bold">2024</h2>
            </div>

            <div className="space-y-10">
              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">December 17, 2024</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. receives an Upstate New York Energy Storage NSF Engine grant to develop a cost-effective dry-coating method to mitigate Mn dissolution in Mn-rich cathode materials.
                    </p>
                    <a href="/dummyPage" className="inline-flex items-center text-green-400 hover:text-green-300">
                      Read more <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">July 22, 2024</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. receives a Small Business Technology Transfer (STTR) Program Phase I grant from the Department of Energy to develop advanced cathode active materials for sodium-ion batteries.
                    </p>
                    <a href="/dummyPage" className="inline-flex items-center text-green-400 hover:text-green-300">
                      Read more <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">April 19, 2024</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. is selected for the prestigious ChargeUp program offered by Koffman Southern Tier Incubator and New Energy New York! "ChargeUp, the nation's first and only accelerator dedicated to supporting battery and energy storage startups, is the latest program launched under NENY to propel domestic battery industry innovation, while fostering economic growth in Upstate New York."
                    </p>
                    <a href="/dummyPage" className="inline-flex items-center text-green-400 hover:text-green-300">
                      Read more <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2023 News */}
          <div>
            <div className="flex items-center mb-8">
              <Calendar className="w-6 h-6 mr-2" />
              <h2 className="text-3xl font-bold">2023</h2>
            </div>

            <div className="space-y-10">
              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">September 6, 2023</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. receives a prestigious grant from the U.S. Department of Energy (DOE) Advanced Materials and Manufacturing Technologies Office (AMMTO) to develop advanced cathode active materials manufacturing technologies.
                    </p>
                    <a href="/dummyPage" className="inline-flex items-center text-green-400 hover:text-green-300">
                      Read more <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">June 18, 2023</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. receives Commonwealth Commercialization Fund (CCF) grant from Virginia Innovation Partnership Corporation (VIPC) to develop advanced cathode materials.
                    </p>
                    <a href="/dummyPage" className="inline-flex items-center text-green-400 hover:text-green-300">
                      Read more <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">March 1, 2023</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. receives Small Business Technology Transfer (STTR) Program Phase I grant from National Science Foundation (NSF) to develop advanced cathode materials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">January 16, 2023</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. received two Truist Foundation Microgrants from Verge. Verge is a catalyst for growing the GO Virginia Region 2 innovation economy, technology and life sciences sectors, and professional communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">January 10, 2023</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. is receiving funding from U.S. Department of Energy's Advanced Research Projects Agency-Energy (ARPA-E) to develop fast-charging and all-weather EV batteries.
                    </p>
                    <a href="/dummyPage" className="inline-flex items-center text-green-400 hover:text-green-300">
                      Read more <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2022 News */}
          <div>
            <div className="flex items-center mb-8">
              <Calendar className="w-6 h-6 mr-2" />
              <h2 className="text-3xl font-bold">2022</h2>
            </div>

            <div className="space-y-10">
              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">September 8, 2022</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. is selected as a member of the Regional Accelerator and Mentoring Program (RAMP) program for the 2022 Fall Cohort. RAMP is a public/private business accelerator serving high-growth startups in the STEM-H fields. RAMP's founding partners include the City of Roanoke, Virginia Western Community College, and the Roanoke-Blacksburg Technology Council.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">April 26, 2022</h3>
                    <p className="mb-4">
                      Fermi Energy, Inc. is selected as a cohort member of the Innovation Commercialization Assistance Program (ICAP). ICAP assists Virginia-based technology and innovation-driven startups on their path to success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">© 2024 by Fermi Energy, Inc.</p>
        </div>
      </div>
    </Layout>
  );
} 