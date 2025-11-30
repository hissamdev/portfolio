import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <section className="hero-section h-[852px] bg-[#7091FF]/15 flex justify-center relative">
        <div className="container-div flex gap-[72px] justify-end w-[1116px] h-[386px] mt-[109px]">
          <div className="hero-left flex flex-col justify-end">
            <div>
              <h1 className="text-[64px] pb-[7px] leading-[77px]">Cordra Digital</h1>
              <p className="text-[32px] leading-[39px] pb-[19px]">Focused Full-Stack, SEO & Digital Marketing</p>
              <p className="w-[720px] text-[24px] mb-[26px] leading-[29px]">Helping businesses reach their online potential. Creating a website, improving SEO, running paid ads, we got you covered!</p>
              <div className="">
                <Link href="about" className="inline-block px-[41px] py-[15.5px] bg-[#5174FF] hover:bg-[#5174FF]/90 text-[24px] font-bold text-white rounded-[6px] leading-[29px]">Get in Touch</Link>
                <Link href="about" className="text-[#5174FF] hover:text-[#5174FF]/90 text-[24px] font-bold ml-[43px]">Book a Consultation</Link>
              </div>
            </div>
          </div>
          <div className="hero-right w-full h-full">
            <div className="">
              <p className="text-[24px] leading-[29px] italic mb-[7px]">Previous Work</p>
            </div>
            <div className="work-container">
              <div className="w-fit relative">
                <div className="w-[208px] h-[208px] bg-[#FF5050] relative z-50"></div>
                <div className="w-[208px] h-[208px] bg-[#6C4141] absolute top-1/2 left-1/2 z-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:h-full relative mb-[43px] ">
        <div className="section-2-container flex justify-center">
          <div className="prevent-height-inheritance absolute top-[-200px]">
            <div className="flex flex-col gap-4 sm:gap-[57px] rounded-4xl sm:pl-[83px] pr-[89px] pt-[53px] pb-[83px] sm:shadow-2xl bg-white">
              <div className="wwd-top-row flex flex-col gap-2 sm:gap-24 w-full justify-between sm:flex-row shrink">
                <div className="wwd-left-text">
                  <p className="text-[24px] leading-[29px] font-bold text-[#5174FF] pb-[10px]  ">Our Goals</p>
                  <h2 className="text-[48px] leading-[58px] sm:text-5xl text-nowrap">What we do</h2>
                </div>
                <div className="wwd-right-text min-w-[300px]">
                  <p className="text-[20px] leading-[24px] pb-2 sm:pt-4">Cordra Studios is focused on helping small businesses<br/> find the right tools to grow</p>
                </div>
              </div>
              <div className="wwd-bottom-row flex flex-col items-center sm:items-start sm:flex-row sm:gap-[24px]">
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
          <div className="service-features-container mt-[431px] flex flex-col items-center ">
            <h2 className="text-center leading-[44px] text-[36px] max-w-[752px] ">Need a Digital Marketing and SEO Expert working on your website? Look no further.</h2>
            <div className="features-container flex gap-[23px] ">
              <div className="feature-item pl-[18px] pt-[24px] ">
                <div className="iconimage mb-[15px]"></div>
                <h4 className="">Fast and Responsive</h4>
                <p className="">Modern full-stack websites from scratch with a sleek design</p>
              </div>
              <div className="feature-item pl-[18px] pt-[24px] ">
                <div className="iconimage mb-[15px]"></div>
                <h4 className="">Improved Google Results</h4>
                <p className="">Setup your website for improved visibility on search engines</p>
              </div>
              <div className="feature-item pl-[18px] pt-[24px] ">
                <div className="iconimage mb-[15px]"></div>
                <h4 className="">Paid Ads Campaign</h4>
                <p className="">Run ads for your business and drive traffic and revenue</p>
              </div>
          </div>

          </div>
        </div>
      </section>
      <section className="h-fill">
        <div className="container-div flex flex-col items-center">
          <div className="service-item">
            <div className="text-side w-[482px] flex flex-col gap-[5px] ">
              <h2>Full-Stack Development</h2>
              <p>Create a full stack website for your business</p>
              <p>A website is your business’s online presence, having one helps you get found by search engines and helps your visitors learn about you online from home.</p>
              <p>We can create a full-stack website for you from scratch using the latest technology. Our tech stack includes React, Tailwind CSS, Next JS, TypeScript, NodeJS, ExpressJS.</p>
              <div className="pt-[10px]">
                <Link href="about" className="inline-block text-white leading-[19px] text-[16px] px-[27.5px] py-[9px] bg-[#5174FF] rounded-[6px]">Learn More</Link>
              </div>
            </div>
            <div className="service-image w-[382px] h-[277px] bg-gray-300 "></div>
          </div>

          <div className="service-item flex-row-reverse">
            <div className="text-side w-[482px] flex flex-col gap-[5px] ">
              <h2>Search Engine Optimization (SEO)</h2>
              <p>Improve your website’s Google Search & AI Rankings and drive more traffic to your business.</p>
              <p>As a Trained and Certified SEO Specialist, I can help improve or set up your website’s SEO.</p>
              <p>Meta Tags, Headings, Site Architecture etc. to improve your rankings.</p>
              <div className="pt-[10px]">
                <Link href="about" className="inline-block text-white leading-[19px] text-[16px] px-[27.5px] py-[9px] bg-[#5174FF] rounded-[6px]">Learn More</Link>
              </div>
            </div>
            <div className="service-image w-[382px] h-[277px] bg-gray-300 "></div>
          </div>

          <div className="service-item">
            <div className="text-side w-[482px] flex flex-col gap-[5px] ">
              <h2>Digital Marketing</h2>
              <p>Improve your website’s Google Search & AI Rankings and drive more traffic to your business.</p>
              <p>As a Trained and Certified SEO Specialist, I can help improve or set up your website’s SEO.</p>
              <p>Meta Tags, Headings, Site Architecture etc. to improve your rankings.</p>
              <div className="pt-[10px]">
                <Link href="about" className="inline-block text-white leading-[19px] text-[16px] px-[27.5px] py-[9px] bg-[#5174FF] rounded-[6px]">Learn More</Link>
              </div>
            </div>
            <div className="service-image w-[382px] h-[277px] bg-gray-300 "></div>
          </div>
        </div>
      </section>

      <section className="why-choose-us h-screen flex justify-center">
        <div className="wcu-alignment flex justify-center gap-[74px] max-w-[1118px] mt-[103px]">
          <div>
            <h2 className="leading-[39px] text-[32px] font-bold ">Why Choose Us?</h2>
            <hr className="pb-[42px] w-1/3"/>
            <div className="flex gap-[74px]">
              <div className="wcu-container">
                <div className="wcu-left flex flex-col gap-[37px]">
                  <div className="wcu-item-container border w-[574px] h-[168px] pl-[39px] pt-[27px] flex gap-[29px]">
                    <div>
                      <div className="wcu-item-img w-[72px] h-[68px] bg-gray-200"></div>
                    </div>
                    <div className="wcu-item-text">
                      <h3>Handled with Care</h3>
                      <p>The project will follow effective steps and measure to achieve your desired results.</p>
                    </div>
                  </div>
                  <div className="wcu-item-container border w-[574px] h-[168px] pl-[39px] pt-[27px] flex gap-[29px]">
                    <div>
                      <div className="wcu-item-img w-[72px] h-[68px] bg-gray-200"></div>
                    </div>
                    <div className="wcu-item-text">
                      <h3>Handled with Care</h3>
                      <p>The project will follow effective steps and measure to achieve your desired results.</p>
                    </div>
                  </div>
                  <div className="wcu-item-container border w-[574px] h-[168px] pl-[39px] pt-[27px] flex gap-[29px]">
                    <div>
                      <div className="wcu-item-img w-[72px] h-[68px] bg-gray-200"></div>
                    </div>
                    <div className="wcu-item-text">
                      <h3>Handled with Care</h3>
                      <p>The project will follow effective steps and measure to achieve your desired results.</p>
                    </div>
                  </div>
                </div>
                <div className="wcu-right-img"></div>
              </div>
              
                        <div>
              <div className="w-[470] h-[479] bg-gray-200"></div>
                        </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}