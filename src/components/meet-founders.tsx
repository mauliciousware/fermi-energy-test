const people = [
  {
    name: "Zhengrui 'Ray' Xu",
    role: "Co-Founder",
    imageUrl: "img/CEO.png",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
    linkedinUrl: "https://www.linkedin.com/in/zhengrui-xu/",
  },
  {
    name: "Feng Lin",
    role: "Co-Founder",
    imageUrl: "img/CTO.png",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
    linkedinUrl: "https://www.linkedin.com/in/zhengrui-xu/",
  },
  // More people...
];
export default function MeetFounders() {
  return (
    <div className="bg-gray-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the Founders
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're technical founders with successful exits and a track record of
            building early-stage startups backed by YCombinator.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none ps-0"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-primary opacity-80">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-300 whitespace-pre-line">
                  {person.bio}
                </p>
                <div role="list" className="mt-6 flex gap-x-6">
                  {person.xUrl && (
                    <div>
                      <a
                        href={person.xUrl}
                        className="text-gray-200 hover:text-primary"
                      >
                        <span className="sr-only">X</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </div>
                  )}
                  {person.linkedinUrl && (
                    <div>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-200 hover:text-primary"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
