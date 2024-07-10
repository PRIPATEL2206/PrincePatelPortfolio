"use client";

import { TracingBeam } from "./components/ui/traking-beem";
import EducationScreen from "./screens/educationScreen";
import Navbar from "./screens/navbar";
import FlotingSocialMedia from "./screens/flotingSocialMedia";
import About from "./screens/about";
import ExperienceScreen from "./screens/experienceScreen";
import SkillsAndToolsScreen from "./screens/skillsAndTools";
import Projects from "./screens/projects";

export default function Home() {


  // const images = [
  //   "@/images/download.jpg",
  //   "@/images/download.jpg",
  //   "@/images/download.jpg",
  //   "@/images/download.jpg",
  //   "@/images/download.jpg",
  //   "@/images/download.jpg",

  // ];

  // const [technologisWords, setTechnologisWords] = useState([
  //   {
  //     text: "I'm",
  //   },
  // ]);
  // const technologies = [

  //   {
  //     text: "AI/Ml Engineer",
  //     className: "text-blue-500 ",
  //   },
  //   {
  //     text: "Game Developer",
  //     className: "text-blue-500 ",
  //   },
  //   {
  //     text: "Web Developer",
  //     className: "text-blue-500 ",
  //   },
  //   {
  //     text: "App Developer",
  //     className: "text-blue-500 ",
  //   },
  // ];



  return (<>
    <div className=" bg-black w-full overflow-hidden dark">
      <Navbar />
      <FlotingSocialMedia />
      <TracingBeam className="px-6">
        <About />
        <EducationScreen />
        <ExperienceScreen />
        <SkillsAndToolsScreen />
        <Projects />
        {/* <ParallaxScrollImages images={images} /> */}
      </TracingBeam>
    </div>

  </>
  );
}
