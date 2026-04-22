import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaVuejs,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";

import { SiPhp, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const items = [
  { icon: <FaFigma />, title: "Figma" },
  { icon: <FaHtml5 />, title: "HTML5" },
  { icon: <FaCss3Alt />, title: "CSS3" },
  { icon: <RiTailwindCssFill />, title: "Tailwind" },
  { icon: <FaBootstrap />, title: "Bootstrap" },
  { icon: <IoLogoJavascript />, title: "Javascript" },
  { icon: <SiPhp />, title: "PHP" },
  { icon: <FaNodeJs />, title: "NodeJS" },
  { icon: <FaPython />, title: "Python" },
  { icon: <FaVuejs />, title: "VueJS" },
  { icon: <FaReact />, title: "React" },
  { icon: <FaLaravel />, title: "Laravel" },
  { icon: <SiMongodb />, title: "MongoDB" },
  { icon: <BiLogoPostgresql />, title: "Postgresql" },
];

export default function IconList() {
  return (
    <div className="w-3/4 md:w-1/2 mx-auto py-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-4 justify-items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="
          flex flex-col items-center justify-center
          w-20 h-20 rounded-2xl
          bg-[#130A45]/50 border border-white/10
          transition-all duration-300
        "
          >
            <div className="text-center space-y-1">
              <div className="text-white text-3xl">{item.icon}</div>
              <h4 className="text-white text-sm font-normal">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
