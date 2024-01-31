import Link from "next/link";
import Nav from "../../components/nav/Nav";

export default function Experience() {
  return (
    <div className="w-full">
      <Nav />
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl mb-6 text-artistfont"> Projects</h1>
        </div>
        {/* INICIO */}
        <div className="text-center">
          <h2 className="text-xl">Weather App</h2>
          <p className="text-xs mb-2">Jan 2024</p>
        </div>
        <div className="xl:w-1/2 lg:order-2 mx-auto mb-8">
          <img
            src="/wapp.png"
            alt="Weather App"
            className="w-full ml-[20px] mr-[20px] rounded-xl "
          />
        </div>
        <p className="text-artistfont ml-[20px] sm:mr-4 text-sm xl:text-lg font-rocksalt mb-8 ">
        Explore real-time global weather information using this React and Material UI-powered application. Gain access to precise data instantly, navigating through a user-friendly interface. Feel confident in planning your activities while staying well-informed, regardless of your location in the world! 🌎
        </p>
        <div className="flex flex-wrap lg:flex-nowrap justify-start mb-8 ml-[20px]">
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/physics.png"
              alt="react"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">React</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/MUI.jpg"
              alt="mui"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Material UI</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/js.png"
              alt="js"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">JavaScript</p>
          </div>
          
        </div>
        <p className="text-xl ml-[20px] mb-[8px]"> LINKS:</p>
        <div className="flex mb-[10px]">
          <a
            href="https://github.com/Constanzamw/weather-app"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="github.png" alt="git" className="w-4 h-4 mr-2" />
            Repository
          </a>
          <a
            href="https://weather-app-one-steel-40.vercel.app/"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="ww.png" alt="www" className="w-8 h-4 " />
            Web
          </a>
        </div>

        {/* FIN */}
        <div className="text-center">
          <h2 className="text-xl">Videos App</h2>
          <p className="text-xs mb-2">Dec 2023 - Jan 2024</p>
        </div>
        <div className="xl:w-1/2 lg:order-2 mx-auto mb-8">
          <img
            src="/videos.jpg"
            alt="Videos App"
            className="w-full ml-[20px] mr-[20px] rounded-xl "
          />
        </div>
        <p className="text-artistfont ml-[20px] sm:mr-4 text-sm xl:text-lg font-rocksalt mb-8 ">
          This small video app was a personal project using MERN technologies.
          <br />
          The application allows you to upload videos with YouTube links, edit
          the posts, and delete them.
        </p>
        <div className="flex flex-wrap lg:flex-nowrap justify-start mb-8 ml-[20px]">
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/mongodb.png"
              alt="mongodb"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">MongoDB</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/exp.png"
              alt="express"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Express</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/physics.png"
              alt="react"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">React</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/nodejs.png"
              alt="nodejs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">NodeJs</p>
          </div>
        </div>
        <p className="text-xl ml-[20px] mb-[8px]"> LINKS:</p>
        <div className="flex mb-[10px]">
          <a
            href="https://github.com/Constanzamw/Videos"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="github.png" alt="git" className="w-4 h-4 mr-2" />
            Repository
          </a>
          <a
            href="https://videosapp-eta.vercel.app/"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="ww.png" alt="www" className="w-8 h-4 " />
            Web
          </a>
        </div>

        <div className="text-center">
          <h2 className="text-xl">ConnectInk</h2>
          <p className="text-xs mb-2">Nov 2023 - Dec 2023</p>
        </div>
        <div className="xl:w-1/2 lg:order-2 mx-auto mb-8">
          <img
            src="/portadaconnectink.png"
            alt="ConnectInk"
            className="w-full ml-[20px] mr-[20px] rounded-xl "
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
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/next.png"
              alt="nextjs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Next.js</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/tail.jpg"
              alt="JS"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Tailwind</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/js.png"
              alt="JS"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/nodejs.png"
              alt="nodejs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Node</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/postgre.png"
              alt="postgre"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">PostgreSQL</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/exp.png"
              alt="express"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Express</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/merpa.png"
              alt="postgre"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">MercadoPago</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
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
          <a
            href="https://github.com/santicasalis/ConnectInk"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="github.png" alt="git" className="w-4 h-4 mr-2" />
            Repository
          </a>
          <a
            href="https://connectink.vercel.app/"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="ww.png" alt="www" className="w-8 h-4 " />
            Web
          </a>
        </div>
        <div className="text-center">
          <h2 className="text-xl">Pokemon</h2>
          <p className="text-xs mb-2">Oct 2023 - Nov 2023</p>
        </div>
        <div className="xl:w-1/2 lg:order-2 mx-auto mb-8">
          <img
            src="/poke.png"
            alt="Pokemon"
            className="w-full ml-[20px] mr-[20px] rounded-xl "
          />
        </div>
        <p className="text-artistfont ml-[20px] sm:mr-4 text-sm xl:text-lg font-rocksalt mb-8 ">
          Pokemon - Academic experience at Henry Bootcamp.
          <br />
          Developed an application utilizing the PokeAPI (https://pokeapi.co) to
          provide updated information about Pokémon. The platform stands out for
          its visually appealing rendering, advanced filters by features, and
          the unique ability to allow users to create their custom Pokémon,
          providing an interactive and immersive Pokémon world experience
        </p>
        <div className="flex flex-wrap lg:flex-nowrap justify-start mb-8 ml-[20px]">
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/js.png"
              alt="JS"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/physics.png"
              alt="react"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">React</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/redux.png"
              alt="redux"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Redux</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/nodejs.png"
              alt="nodejs"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Node</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/postgre.png"
              alt="postgre"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">PostgreSQL</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/exp.png"
              alt="express"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">Express</p>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-1/9 xl:w-1/9 px-2 mb-8">
            <img
              src="/css.png"
              alt="css"
              className="w-[50px] object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-center">CSS</p>
          </div>
        </div>
        <p className="text-xl ml-[20px] mb-[8px]"> LINKS:</p>
        <div className="flex mb-[10px]">
          <a
            href="https://github.com/Constanzamw/PI_Pokemon_CW"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="github.png" alt="git" className="w-4 h-4 mr-2" />
            Repository
          </a>
          <a
            href="https://pokefront.vercel.app/"
            target="_blank"
            className="border border-sm ml-[20px] p-2 flex items-center hover:bg-pink-600"
          >
            <img src="ww.png" alt="www" className="w-8 h-4 " />
            Web
          </a>
        </div>
      </div>
    </div>
  );
}
