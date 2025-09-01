import { forwardRef } from "react";
import SectionTitle from "src/components/common/SectionTitle";
import SectionWrapper from "src/hoc/SectionWrapper";
import ExperienceCard from "./ExperienceCard";

const EXPERIENCES = [
    {
    title: "Information & Technology Intern",
    company: "Tata Steel",
    description: "Built an interactive Tableau dashboard to monitor supply chain movement; performed data cleaning and analysis to identify inefficiencies and trends.",
  },
  {
    title: "AI & ML Intern",
    company: "TechSaksham",
    description: "Developed a disease diagnosis system using Python, Streamlit, and ML classification models",
  },
  {
    title: "Junior Web Dev",
    company: "MiIT Technologies",
    description: "Worked on front-end and back-end tasks for client projects at the firm; used HTML, CSS, JS and modern web tools.",
  },
  {
    title: "Network Engineering Intern",
    company: "Cisco Networking Academy",
    description: "Developed a Python tool to parse router configs, auto-generate network topologies, validate configurations,and simulate real-world scenarios with fault injection.",
  },
  {
    title: "Information Technology Intern",
    company: "Tata Steel Downstream Product Limited",
    description: "Worked on front-end and back-end tasks for client projects at the firm; Developed an IOT based devices for automation of company's work processes ",
  },
    {
    title: "Python Development Intern",
    company: "Infosys SpringBoard",
    description: "Currently Working",
    }
];

const Experience = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="w-full min-h-screen px-5 md:px-14 py-10 bg-gradient-to-b from-tertiary/10 to-secondary/10"
    >
      <SectionTitle title="Experience" />
      <div className="relative py-12">
        {/* CENTER TIMELINE LINE */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tertiary/30 z-0" />
        
        {/* EXPERIENCE CARDS */}
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard
            key={index}
            index={index}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
});

export default SectionWrapper(Experience);
