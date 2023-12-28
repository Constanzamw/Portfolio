import Link from "next/link";
import Nav from "../../components/nav/Nav"


export default function About() {
  return (
    <>
      <Nav />

      <div className=" mx-4 my-8 text-artistfont md:mx-auto md:max-w-2xl md:px-4">
        <h1 className="text-5xl font-rocksalt text-center mb-10 ">
          Sobre Connect<span className="text-primary">Ink</span>
        </h1>
       
      </div>
    </>
  );
}
