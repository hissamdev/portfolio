import StackedCards from "@/app/components/StackedCards";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <section className="flex justify-center">
        <div className="pl-2">
          <div className="pt-18 grid
          xl:grid-cols-[1fr_1fr] xl:h-screen">
            <div className="pt-12">
              <div className="w-148">
                <p className="pt-4 pl-2 w-158 text-3xl">I'm Ahmed Hissam, a...</p>
                <h1 className="text-8xl">Full-Stack <br />Developer</h1>
                <p className="pt-2 pl-1.5 w-152 text-2xl">Creating Modern Web Applications and Helping them Get Found on The Internet</p>
              </div>
            </div>
            <div className="right-div flex flex-col items-center">
              <div className="hidden md:block cursor-pointer h-32 w-32 bg-gray-400 flex justify-center items-center self-end hover:bg-blue-300 transition-all delay-5">
                <p className="">img</p>
              </div>
              <div className="container w-98 self-start 2xl:pl-38 xl:pl-28 pt-20">
                <div>
                  <p className="pb-2">Some of my work</p>
                </div>
                <StackedCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}