import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const experiences = [
  {
    title: "Blockchain developer",
    company: "Smart Contract development",
    location: "Remote",
    status: "Freelance",
    period: "March 2024 - May 2024",
    description: [
      "Developed and deployed decentralized applications using Solidity and the Lisk blockchain.",
      "Gained hands-on experience writing and testing smart contracts on Remix and Hardhat.",
      "Collaborated with a small team to design real-world blockchain solutions.",
    ],
    skills: ["Blockchain", "MERN stack", "Trading automation", "DevOps", "Next.js", "Python"],
  }
];

function Experience() {
  return (
    <main className=" text-[#525252] md:items-center md:mt-20 md:min-h-0 md:max-w-4xl md:mx-auto px-8">
      <section className="flex flex-col">
        <div className="md:flex md:flex-row-reverse">
            <div className="w-full h-[1px] bg-gradient-to-l from-blue-600 to-blue-600/"></div>
        <div className="mt-16 md:mt-0">
          <h1 className="text-xl text-black font-bold">Experience</h1>
          <p className="text-base mt-3">
            Hands-on experience across fast-paced teams, real users, and real impact.
          </p>
        </div></div>

        {/* Experience*/}
        <div className="flex flex-col mt-7 gap-8">
          {experiences.map((experience, i) => (
            <div key={i} className="flex flex-col gap-3">
              

              <div className="flex flex-col md:justify-between md:items-start">
              <div>
                <h1 className="text-xl text-black font-semibold">{experience.title}</h1>
                <div className="flex gap-2 text-blue-600 font-medium mt-2 mb-2">
                  <FontAwesomeIcon icon={faBuilding} className="size-4 h-5" />
                  <p className="text-base">{experience.company}</p>
                  <p className="px-1 bg-blue-100 text-sm border rounded-full text-center">
                    {experience.status}
                  </p>
                </div>
              </div>

              {/* Period */}
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCalendar} className="size-4 h-5" />
                <p className="text-sm">{experience.period}</p>
              </div>
              </div>

              {/* Description */}
              <div className="mt-2">
                <ul className="list-disc ml-5 space-y-2">
                  {experience.description.map((des, index) => (
                    <li key={index}>{des}</li>
                  ))}
                </ul>
              </div>

              {/* Skills (Optional) */}
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-sm border border-gray-300 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Experience;