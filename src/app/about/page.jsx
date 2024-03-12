import Link from "next/link";
import Nav from "../../components/nav/Nav";
//import { RiReplyLine } from "react-icons/ri";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="md:flex flex-row">
        <div className="flex flex-col mt-[5%] md:flex-row mx-4 my-8 text-artistfont md:mx-auto md:max-w-2xl md:px-4 ">
          <img
            src="/mee.jpg"
            alt="yo"
            className="xl:w-full md:w-2/3 rounded-full md:h-auto  "
          />
        </div>
        <div className="order-1 md:order-2 md:w-1/2">
          <h3 className="text-md font-rocksalt text-center mb-10 text-2xl mt-[28%] md:mr-[18%]">
            I am a skilled Full Stack Developer specializing in the creation and
            enhancement of user-centric websites and applications, ensuring
            scalability and modularity in every project.
            <br/> With a knack for conflict resolution, I am an engaged listener, always open to new
            ideas, and dedicated to contributing my skills to accomplish shared
            goals. I bring a proactive approach to tasks, execute them
            efficiently, and seamlessly collaborate with teams to achieve their
            objectives. <br/>Committed to continuous growth, I actively pursue
            opportunities to expand my knowledge base.
          </h3>

          <ul className="flex flex-wrap list-none p-0 text-lg text-artistfont justify-center">
            <li className="mr-8 mb-6 text-xl">
              
              <a
                href="https://www.linkedin.com/in/constanza-weiner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDECDA] hover:text-pink-600 border border-1px  px-4 py-2 rounded-md "
              >
                LinkedIn
              </a>
            </li>
            <li className="mr-8 mb-6 text-xl">
              <a
                href="https://github.com/Constanzamw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDECDA] hover:text-pink-600 border border-1px  px-4 py-2 rounded-md "
              >
                Github
              </a>
            </li>
            <li className="mr-8 mb-6 text-xl">
              <a
                href="https://drive.google.com/file/d/1jiRnqsZhiyZ9LvOn6qEw41hwVRF_uJnw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDECDA] hover:text-pink-600 border border-1px  px-4 py-2 rounded-md "
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//
