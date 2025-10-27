import StackedCards from "@/app/components/StackedCards";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <section className="flex justify-center h-screen bg-cyan-100">
        <div className="xl:pl-2">
          <div className="xl:pt-18 grid sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] md:h-192 w-full">
            <div className="xl:pt-12 pt-12">
              <div className="xl:w-148 px-4">
                <p className="xl:pt-4 xl:pl-2 xl:w-158 xl:text-3xl text-2xl leading-normal">Cordra Studios</p>
                <p className="md:pt-2 xl:pl-1.5 xl:w-152 xl:text-2xl text-[1.2rem] leading-tight pr-4">Creating Modern Web Applications and Helping them Get Found on The Internet</p>
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

      <section className="h-screen flex justify-center">
        <div className="prevent-height-inheritance">
          <div className="flex flex-col gap-18 rounded-4xl px-24 py-18 shadow-2xl">
            <div className="wwd-top-row flex gap-24 w-full justify-around">
              <div className="wwd-left-text">
                <p className="text-green-600 pb-1">Our Goals</p>
                <h2 className="text-5xl">How it works</h2>
              </div>
              <div className="wwd-right-text w-112">
                <p className="text-lg pt-4">Cordra Studios is focused on helping small businesses find the right tools to grow</p>
              </div>
            </div>
            <div className="wwd-bottom-row flex justify-between">
              <div className="wwd-item1">
                <div className="iconimage w-12 h-12 bg-black mb-6"></div>
                <h3 className="pb-2">Subheading</h3>
                <p>Paragraph</p>
              </div>
              <div className="wwd-item1">
                <div className="iconimage w-12 h-12 bg-black mb-6"></div>
                <h3 className="pb-2">Subheading</h3>
                <p>Paragraph</p>
              </div>
              <div className="wwd-item1">
                <div className="iconimage w-12 h-12 bg-black mb-6"></div>
                <h3 className="pb-2">Subheading</h3>
                <p>Paragraph</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="px-6">
          <h2 className="text-2xl text-center pt-12 pb-8">Our Services</h2>

          <div className="flex flex-col items-center sm:items-start sm:justify-center gap-6 sm:flex-row sm:flex-wrap sm:items-stretch">
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
    </>
  );
}