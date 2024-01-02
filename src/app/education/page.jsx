import Link from "next/link";
import Nav from "../../components/nav/Nav"


export default function About() {
  return (
    <div>
      <Nav />

      <div className="mx-4 my-8 text-artistfont md:mx-auto md:max-w-2xl md:px-4">
        <h1 className="text-5xl font-rocksalt text-center mb-10">Skills</h1>
      </div>
      <div>
        <h2 className="text-2xl ml-10 mb-[50px] text-artistfont xl:border-b-[2px] xl:w-[12%] ">Programming Skills</h2>
        <div className="flex flex-wrap mb-[50px]">
        <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/physics.png"
              alt="React"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">React</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/redux.png"
              alt="Redux"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Redux</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/next.png"
              alt="nextjs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Next.js</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/css.png"
              alt="CSS"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">CSS</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/html.png"
              alt="HTML"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">HTML</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/js.png"
              alt="JS"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/nodejs.png"
              alt="nodejs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Node</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/postgre.png"
              alt="postgre"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Postgre</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/mongodb.png"
              alt="postgre"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">MongoDb</p>
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5 px-2 mb-8">
            <img
              src="/github.png"
              alt="github"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Github</p>
          </div>
        </div>
      </div>
      <div>
      <h2 className="text-2xl ml-10  text-artistfont mb-[50px] xl:border-b-[2px] xl:w-[6%]  ">Soft Skills</h2>
      <ul className="ml-[100px] list-disc grid grid-cols-2 lg:grid-cols-5 mb-[50px] ">
      <li>Creative</li>
      <li>SCRUM</li>
      <li>Team player</li>
      <li>Adaptability</li>
      <li>Empathy</li>
      <li>Leadership</li>
      <li>Time management</li>
      <li>Willingness to learn</li>
      <li>Communication</li>
      <li> Henry: Teaching Assistant</li>
      </ul>
      </div>
      <div className="">
  <h2 className="text-2xl ml-10  mt-[25px] text-artistfont mb-[50px] xl:border-b-[2px] xl:w-[7%] ">Languages</h2>
  <div className="flex flex-wrap gap-4 ml-[25px] mr-[25px] mb-[50px]">
    <div className="flex items-center">
      <img
        src="/spainFlag.png"
        alt="JS"
        className="w-[50px] object-cover rounded-lg mr-2"
      />
      <p>Spanish (native)</p>
    </div>
    <div className="flex items-center mb-[10px]">
      <img
        src="/ukFlag.png"
        alt="uk"
        className="w-[50px] object-cover rounded-lg mr-[5px]"
      />
      <p className="mr-[30px]">English (advanced) </p> 
       <p className="mr-[30px]"> Go to {"-->"}</p>
      <a className="hover:bg-pink-600 border border-sm cursor-pointer p-1" href="https://www.efset.org/cert/sKtvfJ" target="_blank" rel="noopener noreferrer">
    EF SET Certificate
</a>
    </div>
  </div>
</div>
    </div>
  );
}
