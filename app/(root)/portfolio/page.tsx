import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-hero-section alignment w-full flex justify-center pt-[64px] ">
        <div className="hero-container pb-22 h-fit grid xl:grid-cols-[743px_407px] gap-[184px] ">
          <div className="portfolio-hero-left flex flex-col">
            <div className="portfolio-tags">
              <a href="#full-stack-section" className="portfolio-tags-item">Full Stack</a>
              <a className="portfolio-tags-item">Digital Marketing</a>
              <a className="portfolio-tags-item">SEO</a>
              <a className="portfolio-tags-item">Paid Ads</a>
              <a className="portfolio-tags-item">WordPress</a>
            </div>
            
            <h1 className="pt-[13px] text-[64px] leading-[77px] ">Ahmed Hissam</h1>
            <p className="pt-[13px] text-[20px] leading-6 italic font-semibold">ahissam05@gmail.com <span className="not-italic pt-[13px] text-[20px] leading-6">|</span> +880 01828095911</p>
            <hr className="mt-2 w-[377px] text-[#2F00FF] border-[1.5px] " />
            <p className="pt-[15px] text-[20px] leading-6 ">Full Stack Developer, Digital Marketer, SEO Specialist. I help businesses get set online, grow their audience and drive revenue.</p>
            <div className="portfolio-social-icons pt-5.5 flex gap-3">
              <Link href="https://discord.com/" className="w-[29px] h-[29px]"><Image src="discord_logo.svg" alt="discord logo" width={29} height={29} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer"/></Link>
              <Link href="https://discord.com/" className="w-[29px] h-[29px]"><Image src="linkedin_logo.svg" alt="linkedin logo" width={29} height={29} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
              <Link href="https://discord.com/" className="w-[29px] h-[29px]"><Image src="github_logo.svg" alt="github logo" width={29} height={29} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
            </div>

            <div className="mt-4.5 flex items-center gap-[21px]">
              <a download="Ahmed Hissam Resume.pdf" href="Ahmed-Hissam-Resume.pdf" className="inline-block px-[19px] py-[12.5px] text-[18px] leading-6 text-white font-bold bg-[linear-gradient(69deg,#6B88FF,#6576BC)] transition-all duration-200 hover:bg-[linear-gradient(69deg,#FF0000,#3700FF)] rounded-md cursor-pointer ">Download Resume</a>
              <a href="Ahmed-Hissam-Resume.pdf" target="_blank" className="text-[20px] leading-6 text-[#6B88FF] font-bold">View in New Tab</a>
            </div>
            <div className="pt-16 flex flex-col w-[532px]">
              <h3 className="pb-[11px] text-center text-[16px] leading-[19px] italic" >Take a look at my GitHub clone (incomplete)</h3>
              <Link href="/portfolio/projects" className=""><Image src="github_clone.svg" width={532} height={252} alt="GitHub UI Clone Project" className="rounded-[5px] transition-opacity duration-100 hover:opacity-90 cursor-pointer"/></Link>
            </div>
          </div>
          <div className="portfolio-hero-right flex flex-col justify-between items-end">
            <div>
              <div><Image src="/hero_personal_img.png" width={407} height={207} alt="An image of me during I was recording a video for a job seeking website" className="rounded-2xl" /></div>
              <p className="pt-1.5 text-[17px] leading-[21px] text-center italic">Recording a personal video for a<br />job seeking website</p>
            </div>

            <div className="absolute top-112 h-300">
              <div className="nav-toc-container sticky top-70">
                <div className="toc-top-bar pb-3 flex justify-between w-[322px] text-[24px] text-[#456AFF] leading-[29px] font-bold ">
                  <p className="cursor-pointer hover:text-[#456AFF]/80">Projects</p>
                  <p className="cursor-pointer hover:text-[#456AFF]/80">Resume</p>
                  <p className="cursor-pointer hover:text-[#456AFF]/80">LinkedIn</p>
                </div>
                <div className="p-px rounded-[10px] bg-[linear-gradient(128deg,#636AFA_20%,#FF1014_100%)]">
                  <div className="toc-bottom-box h-[342px] rounded-[10px] bg-white pt-[25px] pl-[18px] ">
                    <div className="flex flex-col">
                      <p className="pl-2.5 text-[20px] leading-[24px] ">Discover my Skills</p>
                      <ul className="portfolio-toc-list pt-3 pl-[30px]">
                        <li>Introduction</li>
                        <li>Full Stack Development</li>
                        <li>Digital Marketing</li>
                        <li>SEO Specialist</li>
                        <li>Running Paid Ads</li>
                        <li>Tracking Code Setup</li>
                        <li className="font-bold underline"><a download="Ahmed Hissam Resume.pdf" href="Ahmed-Hissam-Resume.pdf" className="transition-all duration-100 hover:text-[#456AFF]">Get in Touch</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-620 right-52 h-334">
              <div className="nav-toc-container sticky top-70">
                <div className="toc-top-bar pb-3 flex justify-between w-[322px] text-[24px] text-[#456AFF] leading-[29px] font-bold ">
                  <p className="cursor-pointer hover:text-[#456AFF]/80">Projects</p>
                  <p className="cursor-pointer hover:text-[#456AFF]/80">Resume</p>
                  <p className="cursor-pointer hover:text-[#456AFF]/80">LinkedIn</p>
                </div>
                <div className="p-px rounded-[10px] bg-[linear-gradient(128deg,#636AFA_20%,#FF1014_100%)]">
                  <div className="toc-bottom-box h-[342px] rounded-[10px] bg-white pt-[25px] pl-[18px] ">
                    <div className="flex flex-col">
                      <p className="pl-2.5 text-[20px] leading-[24px] ">Discover my Skills</p>
                      <ul className="portfolio-toc-list pt-3 pl-[30px]">
                        <li>Introduction</li>
                        <li>Full Stack Development</li>
                        <li>Digital Marketing</li>
                        <li>SEO Specialist</li>
                        <li>Running Paid Ads</li>
                        <li>Tracking Code Setup</li>
                        <li className="font-bold underline"><a download="Ahmed Hissam Resume.pdf" href="Ahmed-Hissam-Resume.pdf" className="transition-all duration-100 hover:text-[#456AFF]">Get in Touch</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="pl-[186px]">
        <div className="pt-12 flex flex-col">
          <h3 className="text-[25px] leading-[30px] text-[#5174FF] italic ">Brief Intro</h3>
          <div>
            <h2 className="text-[53px] leading-[64px] italic font-semibold">Let's meet and greet<span className="not-italic">👋</span></h2>
            <hr className="pt-2 w-[596px] text-[#2F00FF] h-[2px]" />
          </div>

          <div className="pt-7.5 w-[1000px] pb-[128px]">
            <p className="text-[21px] leading-[25px]">Hey, I’m <span className="font-bold">Ahmed Hissam</span>, a passionate Digital Marketer, Web Developer, and WordPress Developer.<br /><br />
            I have long been a user the internet and computers for daily use and entertainment. My frequent exposure to the internet has given me a strong understanding of the English language, given me a great set of communication skills, intuition of trends and appreciation for online humor.<br /><br />
            I’ve started learning about the intricacies and nuances of marketing funnels and digital marketing channels at around 2022. From there on, I took an interest in the marketing world and growing a presence online.<br /><br />
            I went to a 6-month digital marketing course at a physical location that marked the start of my professional journey. I have since completed the course and got certified with an A+ with complete attendance.<br /><br />
            I am also a Full Stack developer and understand the process of design, planning and development for shipping complete products specializing in web applications.<br /><br />
            I am 20 years old, currently live in Dhaka, Bangladesh and have a work permit.<br /><br />
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center pr-[20px]">
        <div className="grid grid-cols-[981px_auto] gap-[152px]">
          <div className="">
            <h2 id="full-stack-section" className="text-[53px] leading-[64px] font-semibold">Full Stack Web Development</h2>
            <p className="pt-[3px] text-[24px] leading-[29px] italic ">I can tackle both front and back end related challenges and tasks independently</p>
            <h3 className="pt-[32px] text-[36px] leading-[44px] ">My Main Tech Stack</h3>
            <p className="pt-[6px] text-[24px] leading-[29px] w-[961px]">I primarily use JavaScript frameworks as of now but plan to branch out to frameworks like Django, Flask, SprintBoot etc.</p>

            <div className="pt-[24px] flex gap-[28px]">
              <div>
                <h4 className="w-[272.5px] text-[33px] leading[40px] font-bold">Front-end</h4>
                <ul className="techstack-frontend-ul list-disc pl-10">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next JS</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Figma</li>
                </ul>
              </div>

              <div>
                <h4 className="w-[272.5px] text-[33px] leading[40px] font-bold">Backend</h4>
                <ul className="techstack-frontend-ul list-disc pl-10">
                  <li>Node JS</li>
                  <li>Express JS</li>
                  <li>EJS</li>
                  <li>PostgresSQL</li>
                  <li>Prisma ORM</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[33px] leading[40px] font-bold">Hosting & Deployment</h4>
                <ul className="techstack-frontend-ul list-disc pl-10">
                  <li>Netlify CI/CD</li>
                  <li>Git and GitHub</li>
                  <li>Supabase</li>
                </ul>
              </div>
            </div>

            <div className="pt-[40px]">
              <div>
                <h3 className="text-[39px] leading-[47px] font-bold">Front-End Development</h3>
                
                <div className="pt-[20px] pl-[5px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[5px] gap-x-[18px]">
                  <div className="col-span-2 text-[30px] leading-[36px] font-bold relative"><p>Figma</p>
                    <div className="hierarchical-tree-design flex absolute top-[41px]">
                      <div className="ml-[2px] mt-[1.5px] h-[100px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[19px] h-[30px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[71px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">Created design prototypes in Figma to ensure a neat UI and comfortable UX for best user satisfaction (this website was entirely designed and developed by me)</p>
                    <p className="">Turned Figma UI designs into code to appear in the browser. In the process, I ensured to match the original design with proper spacing, layout, line heights, text size, padding etc. matching precisely</p>
                  </div>
                </div>
                <div className="pt-[32px] pl-[5px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[5px] gap-x-[18px] ">
                  <div className="col-span-2 text-[30px] leading-[36px] font-bold relative"><p>React</p>
                    <div className="hierarchical-tree-design flex absolute top-[41px]">
                      <div className="ml-[2px] mt-[1.5px] h-[199px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[19px] h-[30px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[71px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[99px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">I have experience developing with React (Vite) and Next JS along with Tailwind CSS and TypeScript type-declarations</p>
                    <p className="">I have experience with React useEffect and useState, and have knowledge of other React hooks. Worked with useState and browser cookies for conditional rendering</p>
                    <p className="">Furthermore, I have a slight experience using React Native for Android</p>
                  </div>
                </div>
                <div className="pt-[32px] pl-[5px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[5px] gap-x-[18px] ">
                  <div className="col-span-2 text-[30px] leading-[36px] font-bold relative"><p>Next JS</p>
                    <div className="hierarchical-tree-design flex absolute top-[41px]">
                      <div className="ml-[2px] mt-[1.5px] h-[214px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[19px] h-[30px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[43px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[71px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[71px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">Build this site with Next JS with file based page and API routing</p>
                    <p className="">Good knowledge of Next JS server and client components, nested layout files, slots and parallel routing etc.</p>
                    <p className="">I am proficient with Tailwind CSS and I have experience writing TypeScript in Next JS</p>
                    <p className="font-bold italic underline">Interested? Find my info.</p>
                  </div>
                </div>
              </div>

              <div className="pt-[40px]">
                <h3 className="text-[39px] leading-[47px] font-bold">Backend Development</h3>
                <div className="pt-[32px] pl-[5px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[5px] gap-x-[18px] ">
                  <div className="col-span-2 text-[30px] leading-[36px] font-bold relative"><p>Express JS / Node</p>
                    <div className="hierarchical-tree-design flex absolute top-[41px]">
                      <div className="ml-[2px] mt-[1.5px] h-[158px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[19px] h-[30px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[43px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[43px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[43px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">Made a mock subscription tracker API for a practice project</p>
                    <p className="">Implementations of EJS for templating</p>
                    <p className="">Used HTTPie for understanding API headers</p>
                    <p className="">Relatively less experience than the front end, but I carry a strong understanding</p>
                  </div>
                </div>
              </div>

              <div className="pt-[40px]">
                <h3 className="text-[39px] leading-[47px] font-bold">Hosting & Deployment</h3>
                <div className="pt-[32px] pl-[5px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[5px] gap-x-[18px] ">
                  <div className="col-span-2 text-[30px] leading-[36px] font-bold relative"><p>Netlify CI/CD</p>
                    <div className="hierarchical-tree-design flex absolute top-[41px]">
                      <div className="ml-[2px] mt-[1.5px] h-[115px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[19px] h-[30px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[43px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[19px] h-[43px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">Deployed and hosted my Next JS application on Netlify through GitHub</p>
                    <p className="">Resolved errors that occurred during the Netlify CI/CD Pipeline</p>
                    <p className="">Thoroughly used Git for deployment and version control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[43px]">
            <div className="w-[364px] h-[203px] bg-gray-200"></div>
            <div className="w-[364px] h-[203px] bg-gray-200"></div>
            <div className="w-[364px] h-[203px] bg-gray-200"></div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-gray-500">

      </section>
    </>
  );
};