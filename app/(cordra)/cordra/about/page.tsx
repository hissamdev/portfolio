import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex justify-center bg-gray-300">
        <div className="h-screen grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 max-w-[1000px] pt-32">
          <div className="">
            <h1 className="text-3xl">Set up a great online presence with<br/> our Digital Marketing and Development <br/>services.</h1>
            <p className="pt-4">We help businesses grow by creating tailored strategies that combine
      innovative digital marketing with powerful web development. From boosting
      your online visibility to building user-friendly websites, our services
      are designed to deliver measurable results and long-term success.</p>
          </div>

          <div className="cursor-pointer h-32 w-32 bg-gray-400 justify-self-end flex justify-center items-center hover:bg-blue-300 transition-all delay-5">
            <p className="">img</p>
          </div>
        </div>
      </section>
    </>
  );
}