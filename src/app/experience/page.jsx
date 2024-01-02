import Link from "next/link";
import Nav from "../../components/nav/Nav"


export default function Experience() {
  return (
    <div className="w-full">
      <Nav />
      <div>
        <h1 className="text-3xl ml-[10px]  mb-[20px] text-artistfont"> Projects</h1>
        <h2 className="text-xl ml-[20px]">ConnectInk</h2>
        <p className="text-xs mb-[5px] ml-[20px]">Nov 2023 - Dic 2023</p>
        <div className="xl:w-1/2 lg:order-2">
          <img
            src="/portadaconnectink.png"
            alt="ConnectInk"
            className="w-full ml-[20px] mr-[20px]  rounded-xl"
          />
        </div>
        <p className="text-artistfont ml-[20px] sm:mr-4 text-sm xl:text-lg font-rocksalt mb-8 ">
          ConnectInk is the final project of the bootcamp at "Soy Henry".
          <br />
          The application allows tattoo artists to showcase their art,
          availability, and services, while clients can explore profiles,
          appreciate artwork, and easily and securely book appointments.
        </p>
        <div className="flex flex-wrap lg:flex-nowrap justify-start mb-8 ml-[20px]">
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/next.png"
              alt="nextjs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Next.js</p>
          </div>
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/tail.jpg"
              alt="JS"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Tailwind</p>
          </div>
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/js.png"
              alt="JS"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/nodejs.png"
              alt="nodejs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Node</p>
          </div>
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/postgre.png"
              alt="postgre"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">PostgreSQL</p>
          </div>
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/exp.png"
              alt="express"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Express</p>
          </div>
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/merpa.png"
              alt="postgre"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">MercadoPago</p>
          </div>
          <div className="w-1/4 sm:w-1/4 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/fbs.png"
              alt="fb"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">FireBase</p>
          </div>
        </div>
        <p className="text-xl ml-[20px] mb-[8px]"> LINKS:</p>
        <div className="flex mb-[10px]">
          <a href="https://github.com/santicasalis/ConnectInk" target="_blank" className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600">
            <img src="github.png" alt="git" className="w-4 h-4 mr-2" />
            Repository
          </a>
          <a href="https://connectink.vercel.app/" target="_blank" className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600">
            <img src="ww.png" alt="www" className="w-8 h-4 " />
            Web
          </a>
        </div>
      </div>
    </div>
  );
}