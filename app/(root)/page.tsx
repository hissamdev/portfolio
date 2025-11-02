import Image from "next/image";
import StackedCards from "@/app/components/StackedCards";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <section className="flex justify-center h-1/2 sm:h-screen bg-gray-100">
        <div className="xl:pl-2">
          <div className="xl:pt-18 grid sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] md:h-192 w-full">
            <div className="pt-0 xl:pt-12 px-5">
              <div className="p-2 py-12 xl:w-148 xl:px-4">
                <p className="sm:pb-2 xl:pt-4 xl:w-158 xl:text-3xl text-xl">Cordra Studios</p>
                <p className="sm:pb-2 xl:w-152 xl:text-xl text-[1rem] leading-tight xl:pr-4">Creating Modern Web Applications and Helping them Get Found on The Internet</p>
                <p className="leading-tight sm:pb-5">New businesses often struggle to create an online presence, we aim to be your one-stop-shop to go online, and be seen by an audience.</p>
                <div className="pt-2">
                  <Link href="/about" className="cta-button bg-teal-300 border px-3 py-1 sm:px-6 sm:py-3 rounded cursor-pointer">Get in Touch</Link>
                  <Link href="/about" className="cta-button mx-6 py-1 rounded cursor-pointer">Book a Consultation</Link>
                </div>
              </div>
            </div>
            <div className="right-div hidden md:flex flex-col items-center h-152">
              <div className="hidden md:block cursor-pointer h-32 w-32 bg-gray-400 flex justify-center items-center self-end hover:bg-blue-300 transition-all delay-5">
                <p className="">img</p>
              </div>
              <div className="container xl:w-98 self-start 2xl:pl-38 xl:pl-28 pt-20">
                <div>
                  <p className="pb-2">Some of my work</p>
                </div>
                <StackedCards />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="digital-marketing-section h-100 bg-gray-200">
        <div>
          <h2>Modern Web Development</h2>
        </div>
      </section>

      <section className="digital-marketing-section h-100 bg-gray-100">
        <div>
          <h2>Tailored Digital Marketing Services</h2>
        </div>
      </section>

      <section className="digital-marketing-section h-100 bg-gray-200">
        <div>
          <h2>SEO Implementation</h2>
        </div>
      </section>

      <section className="sm:h-1/2 flex justify-center">
        <div className="prevent-height-inheritance">
          <div className="flex flex-col gap-4 sm:gap-18 rounded-4xl p-6 sm:px-24 sm:py-18 sm:shadow-2xl">
            <div className="wwd-top-row flex flex-col gap-2 sm:gap-24 w-full justify-around sm:flex-row shrink">
              <div className="wwd-left-text">
                <p className="text-green-600 pb-1">Our Goals</p>
                <h2 className="text-3xl sm:text-5xl text-nowrap">How it works</h2>
              </div>
              <div className="wwd-right-text max-w-112 min-w-[300px]">
                <p className="text-lg pb-2 sm:pt-4">Cordra Studios is focused on helping small businesses find the right tools to grow</p>
              </div>
            </div>
            <div className="wwd-bottom-row flex justify-between flex-col items-center sm:items-start sm:flex-row sm:gap-16">
              <div className="wwd-item">
                <div className="iconimage"></div>
                <h3 className="">Cordra Studios is focused on helping small businesses find the right tools to grow</h3>
                <p>Cordra Studios is focused on helping small businesses find the right tools to grow</p>
              </div>
              <div className="wwd-item">
                <div className="iconimage"></div>
                <h3 className="">Cordra Studios is focused on helping small businesses find the right tools to grow</h3>
                <p>Cordra Studios is focused on helping small businesses find the right tools to grow</p>
              </div>
              <div className="wwd-item">
                <div className="iconimage"></div>
                <h3 className="">Cordra Studios is focused on helping small businesses find the right tools to grow</h3>
                <p>Cordra Studios is focused on helping small businesses find the right tools to grow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="px-2">
          <h2 className="text-2xl text-center pt-12 pb-8">Our Services</h2>

          <div className="services-parent flex flex-col items-center sm:items-start sm:justify-center gap-6 sm:flex-row sm:flex-wrap sm:items-stretch">
            <div className="servcie-container web-dev pt-2 p-4">
              <h3 className="text-center pb-2">Web Development</h3>
              <div className="border p-2 mb-6">
                <h4>Website Creation</h4>
                <p>If you don't have one, we will create a website for you from scratch using our up to date tech stack following industry best practices for best performance optimizations.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Deployment</h4>
                <p>Deploying your website on the web.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Migration</h4>
                <p>Migrate your website, database, or full stack application.</p>
              </div>
            </div>

            <div className="servcie-container web-dev pt-2 p-4">
              <h3 className="text-center pb-2">Search Engine Optimization (SEO)</h3>
              <div className="border p-2 mb-6">
                <h4>On Page</h4>
                <p>Set up your webpages for On-Page SEO best practices.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Technical SEO</h4>
                <p>Ensure your website meets all the technical requirements to appear in Google search results.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Google Business Profile</h4>
                <p>Setup your business's GBP for increased local search visibility.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Google Analytics</h4>
                <p>Setup your business's GBP for increased local search visibility.</p>
              </div>
            </div>

            <div className="servcie-container web-dev pt-2 p-4">
              <h3 className="text-center pb-2">Digital Marketing</h3>
              <div className="border p-2 mb-6">
                <h4>On Page</h4>
                <p>Set up your webpages for On-Page SEO best practices.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Technical SEO</h4>
                <p>Ensure your website meets all the technical requirements to appear in Google search results.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Google Business Profile</h4>
                <p>Setup your business's GBP for increased local search visibility.</p>
              </div>
              <div className="border p-2 mb-6">
                <h4>Google Analytics</h4>
                <p>Setup your business's GBP for increased local search visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-100 bg-indigo-500">
        <div className="psection-container p-12">
          <div>
            <h2 className="sm:text-3xl text-white pl-3 pb-3">Payment Security</h2>
          </div>
          <div className="h-38 bg-white p-6 inline-block rounded-2xl w-1/2">
            <p className="text-start">Make sure you receive your money's worth!</p>
          </div>
        </div>
      </section>
    </>
  );
}