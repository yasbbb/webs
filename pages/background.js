import { Navbar } from "../components/navbar";
import Image from "next/image";
import unhp from "./resources/unhp.jpg";
import utd from "./resources/utd.jpg";
import scouts from "./resources/scouts.jpg";
import choice from "./resources/choice.jpg";
import comerica from "./resources/comerica.jpg";
import stanford from "./resources/stanford.jpg";
import MLH from "./resources/MLH.jpg";
import tfg from "./resources/tfg.jpg"

const experiences = [
  {
    image: MLH,
    alt: "MLH",
    title: "Software Engineer Intern",
    company: "Major League Hacking",
    location: "Sept 2024 - Dec 2024 | New York, NY",
  },
  {
    image: tfg,
    alt: "TFG",
    title: "Software Engineer Intern",
    company: "Tech For Good Inc",
    location: "Jun 2024 - Aug 2024 | Boston, MA",
  },
  {
    image: stanford,
    alt: "Stanford",
    title: "Student Instructor",
    company: "Stanford",
    location: "Apr 2024 - May 2024 | Stanford, CA",
  },
  {
    image: comerica,
    alt: "Comerica",
    title: "Cybersecurity Intern",
    company: "Comerica Bank",
    location: "May 2023 - Aug 2023 | Auburn Hills, MI",
  },
  {
    image: choice,
    alt: "Choice Hotel",
    title: "Software Engineer Intern",
    company: "Choice Hotels International",
    location: "Jun 2022 - Aug 2022 | Phoenix, AZ",
  },
];

const schools = [
    {
        image: utd,
        alt: "UTD",
        title: "B.S. CS / Finance ",
        organization: "University of Texas at Dallas",
        location: "Richardson, TX"
    },
    {
        image: unhp,
        alt: "UNHP",
        title: "High School",
        organization: "Uplift North Hills Prep",
        location: "Irving, TX",
    },
]

const extracurriculars = [
  {
    image: scouts,
    alt: "Scouts",
    title: "Eagle Scout & Senior Patrol Leader",
    organization: "Boy Scouts of America",
    location: "Irving, TX",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black-800 flex flex-col items-center">
      <div className="navbar-container w-full">
        <Navbar />
      </div>
      <div className="flex mt-2 px-4 mr-2 p-2 text-white justify-start items-center">
        <h1 className="text-4xl font-bold mt-3">Experience</h1>
      </div>
      <div className="flex flex-col items-center w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="flex justify-center p-1 w-full max-w-xl">
            <div className="flex mt-2 md:flex-row w-full rounded-lg shadow-2xl px-3 py-1">
              <Image
                src={exp.image}
                className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg"
                height={72}
                width={72}
                alt={exp.alt}
              />
              <div className="p-3 flex flex-col justify-start">
                <h5 className="text-gray-300 text-lg font-medium mb-1">{exp.company}</h5>
                <p className="text-gray-400 text-sm mb-1">{exp.title}</p>
                <p className="text-gray-400 text-xs mb-1">{exp.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-2 px-4 mr-2 p-2 text-white justify-center items-center">
        <h1 className="text-4xl font-bold font-sans tracking-wide">Education</h1>
        </div>
        <div className="flex flex-col items-center w-full">
        {schools.map((school, index) => (
            <div key={index} className="flex justify-center p-1 w-full max-w-xl">
            <div className="flex sm:flex-row w-full rounded-lg shadow-2xl px-3 py-1">
                <Image
                src={school.image}
                className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg"
                height={72}
                width={72}
                alt={school.alt}
                />
                <div className="p-3 flex flex-col justify-start">
                <h5 className="text-gray-300 text-lg font-medium mb-1">{school.organization}</h5>
                <p className="text-gray-400 text-sm mb-1">{school.title}</p>
                <p className="text-gray-400 text-xs mb-1">{school.location}</p>
                </div>
            </div>
            </div>
        ))}
    </div>
      <div className="flex mt-2 px-4 mr-2 p-2 text-white justify-center items-center">
        <h1 className="text-4xl font-bold font-sans tracking-wide">Leadership</h1>
      </div>
      <div className="flex flex-col items-center w-full">
        {extracurriculars.map((extra, index) => (
          <div key={index} className="flex justify-center p-1 w-full max-w-xl">
            <div className="flex md:flex-row w-full rounded-lg shadow-2xl px-3 py-1">
              <Image
                src={extra.image}
                className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg"
                height={72}
                width={72}
                alt={extra.alt}
              />
              <div className="p-3 flex flex-col justify-start">
                <h5 className="text-gray-300 text-lg font-medium mb-1">{extra.organization}</h5>
                <p className="text-gray-400 text-sm mb-1">{extra.title}</p>
                <p className="text-gray-400 text-xs mb-1">{extra.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
