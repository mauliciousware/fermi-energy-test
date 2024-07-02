const people = [
  {
    name: "Matthew Wong",
    role: "Co-Founder / CEO",
    imageUrl: "/landing/matthew.jpeg",
    bio: "A former CTO of a YC-backed startup. He has built multiple startups, including one with a successful exit and the most recent gaining over 150,000 users",
    xUrl: "https://twitter.com/IThinkWong",
    linkedinUrl: "https://www.linkedin.com/in/ithinkwong/",
  },
  {
    name: "Amirali Azimi Tabrizi",
    role: "Co-Founder / CTO",
    imageUrl: "/landing/amirali.jpeg",
    bio: "A passionate software developer with extensive industry and freelance experience, Amirali has successfully scoped and built numerous MVPs, demonstrating his ability to create lean and scalable solutions.",
    linkedinUrl: "https://www.linkedin.com/in/amirali-azimi-tabrizi/",
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
                <p className="mt-6 text-base leading-7 text-gray-300">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
