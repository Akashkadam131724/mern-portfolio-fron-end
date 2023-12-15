import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa/";
import { DiCss3Full } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
export const SkillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 style={{ color: "orange" }} />,
  },
  {
    name: "CSS",
    icon: <DiCss3Full style={{ color: "white", background: "blue" }} />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript style={{ color: "black", background: "yellow" }} />,
  },
  {
    name: "ReactJS",
    icon: <FaReact />,
  },

  {
    name: "NodeJS",
    icon: <FaNodeJs style={{ color: "green" }} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "green" }} />,
  },
];
