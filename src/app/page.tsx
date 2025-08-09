"use client";
import { Heading } from "../components/Heading";
import { ProfileImg } from "../components/profileImg";
import { ProjectCard } from "../components/ProjectCard";
import { AllSkills } from "../components/AllSkils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SecondBrain } from "../logo/SecondBrain";
import { ContactInfo } from "../components/Contact";

export default function Home() {
  const text = "Weelcome to My Portfolio";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i === text.length-1) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, []);


  return (<div className=" p-7 rounded my-9">
    <div className="flex justify-between mb-5">
      <div className="flex-col">
      <motion.h1
      className="text-4xl font-bold font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
      >
        |
      </motion.span>
    </motion.h1>
        <h1 className="font-bold text-3xl font-mono mt-4">{"I'm Harshit Agrawal"}
        </h1>
        <p className="mt-4 w-xs font-mono">Full Stack Developer focused on learning through experimentation and product development.</p>
        <ContactInfo />
      </div>
      <ProfileImg url="/Resume pic.jpg" name="HA" />
    </div>
    <div className="mb-9">
      <Heading heading="About Me" />
      <p className="mt-4 font-mono">Passionate Software Developer with a strong foundation in full-stack development, cloud computing, and DevOps practices. Proven track record in designing and implementing scalable, resilient, and user-centric applications. Adept at leveraging modern technologies to solve complex problems and deliver impactful solutions.</p>
    </div>
    <div className="mb-9">
      <Heading heading="Skills" />
      <AllSkills skills={["TypeScript", "Javascript", "C++", "C", "React", "Next.js", "Express", "SQL/NoSQL/Prisma", "Backend", "Fronend", "UI/UX", "Node.js", "MongoDB"]} />
    </div>
    <div className="mb-9">
      <Heading heading="Project" />
      <div className="flex flex-wrap justify-between ">
        <ProjectCard title="Second Brain" skills={["TypeScript", "React", "MongoDb", "vectorDB", "Node.js"]} about="A personal knowledge management system that lets you store, organize, and semantically search your notes using AI." logo={<SecondBrain />} />
        <ProjectCard title="Eco Scope" skills={["javascript", "React", "MongoDb", "Express", "Tailwindcss"]} about="A web application that helps users track their carbon footprint and provides suggestions for reducing it." logo={<img src="/EcoScope.png" alt="Eco Scope " className="w-12 h-12" />} />
      </div>
    </div>
  </div>);
}
