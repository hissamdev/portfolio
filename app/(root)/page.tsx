import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-hero-section alignment w-full flex justify-center pt-[72px] lg:pt-[98px] ">
        <div className="hero-container pb-22 w-[356px] h-fit lg:grid lg:w-fit lg:grid-cols-[743px_407px] xl:gap-[184px] ">
          <div className="portfolio-hero-left flex flex-col">
            <div className="portfolio-tags w-[356px] lg:w-full flex flex-wrap gap-2.5">
              <a href="#full-stack-section" className="portfolio-tags-item">Full Stack</a>
              <a className="portfolio-tags-item">Digital Marketing</a>
              <a className="portfolio-tags-item">SEO</a>
              <a className="portfolio-tags-item">Paid Ads</a>
              <a className="portfolio-tags-item">WordPress</a>
            </div>
            
            <h1 className="pt-[11px] text-[44px] leading-[53px] lg:pt-[13px]  lg:text-[64px] lg:leading-[77px] ">Ahmed Hissam</h1>
            <p className="lg:pt-[13px] text-[15px] leading-[18px] lg:text-[20px] lg:leading-6 italic font-semibold">ahissam05@gmail.com <span className=" not-italic text-[20px] leading-6">|</span> +880 01828095911</p>
            <hr className="mt-2 lg:w-[377px] text-[#2F00FF] border-[1.5px] " />
            <p className="pt-[15px] lg:w-[688px] text-[20px] leading-6 ">Full Stack Developer, Digital Marketer, SEO Specialist. I help businesses get found online, grow their audience and drive revenue.</p>
            <div className="portfolio-social-icons pt-[11px] lg:pt-5.5 flex gap-3">
              <Link href="https://www.linkedin.com/in/ahissam/" target="_blank" className="w-[29px] h-[29px]"><Image src="linkedin_logo.svg" alt="linkedin logo" width={29} height={29} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
              <Link href="https://github.com/hissamdev" target="_blank" className="w-[29px] h-[29px]"><Image src="github_logo.svg" alt="github logo" width={29} height={29} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
              <Link href="https://discord.com/" target="_blank" className="w-[29px] h-[29px]"><Image src="discord_logo.svg" alt="discord logo" width={29} height={29} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer"/></Link>
            </div>

            <div className="mt-[14px] lg:mt-4.5 gap-[11px] flex items-center lg:gap-[21px]">
              <a download="Ahmed Hissam Resume.pdf" href="Ahmed-Hissam-Resume.pdf"
              className="inline-block px-[9px] py-[10px] lg:px-[19px] lg:py-[12.5px] text-[15px] leading-[18px] lg:text-[18px] :leading-6 text-white font-bold
              bg-[linear-gradient(69deg,#6B88FF,#6576BC)] transition-all duration-200 hover:bg-[linear-gradient(69deg,#FF0000,#3700FF)] rounded-md cursor-pointer ">Download Resume</a>
              <a href="Ahmed-Hissam-Resume.pdf" target="_blank" className="text-[16px] leading-[19px] lg:text-[20px] lg:leading-6 text-[#6B88FF] font-bold">View in New Tab</a>
            </div>
            <div className="flex pt-[16px] gap-[15px] lg:pt-16">
              <div className="flex flex-col-reverse lg:flex-col">
                <h3 className="pb-[11px] w-[175px] text-center text-[10px] leading-[12px] lg:text-[16px] lg:leading-[19px] italic" >Take a look at my GitHub clone (incomplete)</h3>
                <div className="relative w-[175px] lg:w-[532px] aspect-[532/252]">
                  <Link href="/projects" className=""><Image src="github_clone.svg" fill alt="GitHub UI Clone Project" className="object-cover rounded-[5px] transition-opacity duration-100 hover:opacity-90 cursor-pointer"/></Link>
                </div>
              </div>

              <div className="block lg:hidden relative w-[109px] h-[83px] ">
                <Image src="/hero_personal_img.png" fill alt="An image of me taken while recording a video for a job seeking website" className="object-cover rounded-[5px]" />
              </div>
            </div>
          </div>
          <div className="portfolio-hero-right flex flex-col justify-start items-start">
            <div className="flex lg:flex-col">
              <div className="hidden lg:block relative w-[109px] h-[83px] lg:w-[407px] lg:h-[227px]"><Image src="/hero_personal_img.png" fill alt="An image of me taken while recording a video for a job seeking website" className="rounded-2xl" /></div>
              <p className="hidden lg:block pt-1.5 text-[17px] leading-[21px] text-center italic">Recording a personal video for a<br />job seeking website</p>
            </div>

            <div className="relative">
              <div className="lg:absolute lg:top-12 lg:left-22 lg:h-250">
                <div className="nav-toc-container sticky top-70">
                  <div className="toc-top-bar pb-3 flex justify-between w-[322px] text-[24px] text-[#456AFF] leading-[29px] font-bold ">
                    <p className="cursor-pointer hover:text-[#456AFF]/80">Projects</p>
                    <p className="cursor-pointer hover:text-[#456AFF]/80">Resume</p>
                    <p className="cursor-pointer hover:text-[#456AFF]/80">LinkedIn</p>
                  </div>
                  <div className="p-px rounded-[10px] bg-[linear-gradient(128deg,#636AFA_20%,#FF1014_100%)]">
                    <div className="toc-bottom-box h-[342px] rounded-[10px] bg-white pt-[25px] pl-[18px] ">
                      <div className="flex flex-col">
                        <p className="pl-2.5 text-body-style ">Discover my Skills</p>
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

            <div className="hidden lg:block absolute top-620 right-52 h-150">
              <div className="nav-toc-container sticky top-70">
                <div className="toc-top-bar pb-3 flex justify-between w-[322px] text-[24px] text-[#456AFF] leading-[29px] font-bold ">
                  <Link href="/projects" className="cursor-pointer hover:text-[#456AFF]/80">Projects</Link>
                  <Link href="/Ahmed-Hissam-Resume.pdf" className="cursor-pointer hover:text-[#456AFF]/80">Resume</Link>
                  <Link href="/" className="cursor-pointer hover:text-[#456AFF]/80">LinkedIn</Link>
                </div>
                <div className="p-px rounded-[10px] bg-[linear-gradient(128deg,#636AFA_20%,#FF1014_100%)]">
                  <div className="toc-bottom-box h-[342px] rounded-[10px] bg-white pt-[25px] pl-[18px] ">
                    <div className="flex flex-col">
                      <p className="pl-2.5 text-body-style ">Discover my Skills</p>
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

      <section className="flex justify-center lg:justify-start lg:pl-[206px]">
        <div className="w-[356px] lg:w-full lg:pt-12 flex flex-col">
          <h3 className="mobile-text-body lg:text-[25px] lg:leading-[30px] text-[#5174FF] italic ">Brief Intro</h3>
          <div>
            <h2 className="text-size-25 lg:text-[53px] lg:leading-[64px] italic font-semibold">Let's meet and greet<span className="not-italic">👋</span></h2>
            <hr className="mt-2 w-[266px] lg:w-[596px] text-[#2F00FF] h-[2px]" />
          </div>

          <div className="pt-[14px] lg:pt-7.5 lg:w-[1000px]">
            <p className="mobile-text-body lg:text-[21px] lg:leading-[25px]">Hey I’m <span className="font-bold">Ahmed Hissam</span>, or <span className="font-bold">Sam</span>. I’m a Digital Marketer, Full Stack Developer and SEO Specialist.<br /><br />

I create full stack web applications, run ads, manage social media, improve SEO and so forth. I went to an in-person digital marketing course of 6 months. To learn more, visit the digital marketing section.<br /><br />

I have long been a user of the internet and computers for daily use and entertainment. My frequent exposure to the internet has given me a strong understanding of the English language, a great set of communication skills, intuition of trends, appreciation for online humor and plenty of technical skills including a 90wpm typing speed and proficiency with Microsoft Office tools like Word, Excel, PowerPoint.<br /><br />

I currently don’t have any professional experience under my belt, but I have been to a physical course and worked on projects for training and knowledge.<br /><br />

I am 20 years old, currently living in Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-[35px] flex lg:pt-[128px] lg:pl-[206px]">
        <div className="grid gap-[42px] lg:grid-cols-[1069px_auto] lg:gap-[68px]">
          <div className="w-[356px] mx-auto lg:w-full">
            <h2 id="full-stack-section" className="text-size-25 font-semibold lg:text-[48px] lg:leading-[58px]">Full Stack Web Development</h2>
            <p className="pt-[8px] mobile-text-body lg:pt-[16px] lg:w-[1069px] lg:text-[20px] lg:leading-[24px]">I am a Full Stack developer and understand the process of design, planning and development to ship complete products specializing in web applications.<br /><br />

I have worked on multiple projects and went through online courses like <span className="underline">freeCodeCamp</span> and <span className="underline">The Odin Project</span>.<br /><br />

The projects focused on developing UI, working with JavaScript logic for basic projects, interactive React applications with React Hooks, Backend logic with Express alongside template engines, database setup and querying with Postgres and Supabase.</p>
            <h3 className="pt-[35px] text-size-23 lg:pt-[32px] lg:text-[33px] lg:leading-[40px] ">My Main Tech Stack</h3>
            <p className="pt-[8px] mobile-text-body lg:pt-[6px] lg:w-[961px] lg:text-[20px] lg:leading-[24px]">I primarily use JavaScript frameworks as of now but plan to branch out to frameworks like Django, Flask, SprintBoot etc.</p>

            <div className="pt-[px] lg:pt-[24px] flex flex-wrap gap-[9px] lg:gap-[28px]">
              <div>
                <h4 className="lg:w-[272.5px] text-size-23 lg:text-[33px] lg:leading-[40px] font-bold">Front-end</h4>
                <ul className="techstack-frontend-ul lg:pt-[5px] list-disc pl-7 lg:pl-10">
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
                <h4 className="lg:w-[272.5px] text-size-23 lg:text-[33px] lg:leading-[40px] font-bold">Backend</h4>
                <ul className="techstack-frontend-ul lg:pt-[5px] list-disc pl-7 lg:pl-10">
                  <li>Node JS</li>
                  <li>Express JS</li>
                  <li>EJS</li>
                  <li>PostgresSQL</li>
                  <li>Prisma ORM</li>
                </ul>
              </div>

              <div>
                <h4 className="text-size-23 lg:text-[33px] lg:leading-[40px] font-bold">Hosting & Deployment</h4>
                <ul className="techstack-frontend-ul lg:pt-[5px] list-disc pl-7 lg:pl-10">
                  <li>Netlify CI/CD</li>
                  <li>Git and GitHub</li>
                  <li>Supabase</li>
                </ul>
              </div>
            </div>

            <div className="pt-[14px] lg:pt-[29px]">
              <div>
                <h3 className="text-size-23 lg:text-[33px] lg:leading-[40px] font-bold">Experience</h3>
                
                <div className="pt-[12px] lg:pt-[9px] lg:pl-[9px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[6px] gap-y-[10px]">
                  <div className="col-span-2 text-size-20 lg:text-[24px] lg:leading-[29px] font-bold relative"><p>Portfolio Page</p>
                    <div className="hierarchical-tree-design flex absolute top-[31px]">
                      <div className="ml-[6px] mt-[1.5px] h-[243px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[12px] h-[21px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[62px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[86px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">Created design prototypes in Figma ensuring clean UI and UX for the best results (this website was entirely designed and developed by me)</p>
                    <p className="">Built the portfolio website with Next JS and deployed on Netlify through GitHub</p>
                    <p className="">Experience with React hooks, SSR, SSG, PPR, route groups, nested layouts, parallel routing, Link and Image components, libraries like pathname, setting up metadata and connecting Google Analytics</p>
                    <p className="">Worked with useState, useEffect and browser cookies for conditional rendering</p>
                    <p className="">Experience using Vite, Typescript, Tailwind, Git and GitHub, Ubuntu</p>
                  </div>
                </div>
                <div className="pt-[18px] lg:pl-[9px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[6px] gap-y-[10px]">
                  <div className="col-span-2 text-[24px] leading-[29px] font-bold relative"><p>Subscriptions Tracker API</p>
                    <div className="hierarchical-tree-design flex absolute top-[31px]">
                      <div className="ml-[6px] mt-[1.5px] h-[171px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[12px] h-[21px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">Experience with MongoDB and Mongoose hosted on Atlas</p>
                    <p className="">Worked with Express and EJS for server setup, middlewares and error handling</p>
                    <p className="">Designed RESTful APIs and worked with JWT authentication</p>
                    <p className="">Experience with HTTPie for reading API headers</p>
                    <p className="font-bold italic underline">Interested? Find my info.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[22px] lg:gap-[43px]">
            <div className="w-[364px] h-[203px] bg-gray-200"></div>
            <div className="w-[364px] h-[203px] bg-gray-200"></div>
            <div className="w-[364px] h-[203px] bg-gray-200"></div>
          </div>
        </div>
      </section>

      <section className="lg:pt-[117px] flex flex-col w-[356px] lg:w-full">
        <div className="w-[356px] lg:pl-[206px] lg:w-full grid lg:grid-cols-[1025px_auto] gap-[112px]">
          <div className="">
            <div>
              <h2 id="digital-marketing-section" className="lg:text-[48px] lg:leading-[58px] font-bold ">Digital Marketing</h2>
              <p className="lg:pt-[8px] text-body-style ">
                I went to an in-person digital marketing course that was 6-months in duration, and received certification with an A+ with bonus marks for complete attendance.<br /><br />
              I have a strong understanding of digital marketing specializing in creating ad campaigns, SEO, YouTube SEO, Keyword Research, Marketing Funnels, Outreach Fundamentals, Email Marketing etc.<br /><br />
              I can work through collaboration and community management, handle social media, schedule content etc.<br /><br />
              </p>
            </div>

            <div className="pt-[18px] lg:pl-[9px] grid grid-cols-[auto,875px] grid-rows-[auto,auto] gap-y-[6px] gap-y-[10px]">
                  <div className="col-span-2 text-[24px] leading-[29px] font-bold relative"><p>Subscriptions Tracker API</p>
                    <div className="hierarchical-tree-design flex absolute top-[31px]">
                      <div className="ml-[6px] mt-[1.5px] h-[171px] border-l border-l-3 border-l-[#8000FF] box-border"></div>
                      <div className="flex flex-col">
                        <div className="w-[12px] h-[21px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                        <div className="w-[12px] h-[38px] border-b border-b-3 border-b-[#8000FF] box-border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="web-dev-experiences">
                    <p className="">Experience with MongoDB and Mongoose hosted on Atlas</p>
                    <p className="">Worked with Express and EJS for server setup, middlewares and error handling</p>
                    <p className="">Designed RESTful APIs and worked with JWT authentication</p>
                    <p className="">Experience with HTTPie for reading API headers</p>
                    <p className="font-bold italic underline">Interested? Find my info.</p>
                  </div>
              </div>
          </div>

          <div className="w-[327px] h-[388px] bg-gray-200">

          </div>
        </div>
      </section>

      <section className="lg:mt-[88px] h-[360px] bg-[#5973FF] flex justify-center items-center">
        <div className="flex w-[1434px] justify-between">
          <div className="pt-[43px]">
            <h5 className="text-[43px] leading-[52px] font-bold text-white">Interested so far?</h5>
            <p className="pt-[5px] text-[29px] leading-[35px] font-bold text-white">I am currently open to work! Feel free to get in touch</p>
            <a className="mt-[20px] inline-block px-[19px] py-[12.5px] bg-white text-[18px] leading-[22px] text-black font-bold rounded-[6px]">Download Resume</a>
          </div>

          <div className="w-[507px] h-[268px] bg-white rounded-[28px]">
            <div className="section-cta-interested pl-[56px] pt-[30px]">
              <h5 className="text-[21px] leading-[25px]">Table of Contents</h5>
              <ul className="pt-[8px] pl-8 text-[21px] leading-[139.2%] list-disc">
                <li>SEO</li>
                <li>Paid Ads</li>
                <li>Tracking Code Setup</li>
                <li>Social Media Management</li>
                <li>Marketing Funnels</li>
                <li>Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:pt-[68px] flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h4 className="text-center text-[36px] leading-[44px] font-bold ">Experience & Skills</h4>
              <p className="pt-[6px] w-[757px] text-center text-[24px] leading-[29px]">Let’s talk about my skills and experience in the digital marketing topics mentioned above starting with:</p>
            </div>
            <div className="lg:pt-[39px] md:max-w-[1503px] flex justify-between flex-wrap gap-y-[28px]">
              <div className="dm-cards-container">
                <div className="dm-card-alignment">
                  <div className="dm-card-content">
                    <div className="dm-card-img">
                    </div>
                    <h4>SEO</h4>
                    <p>Improve your website’s SEO following the latest industry best practices and AI related advancements for the best organic results</p>
                    <a className="">Learn More →</a>
                  </div>
                </div>
              </div>
              <div className="dm-cards-container flex">
                <div className="dm-card-alignment">
                  <div className="dm-card-content">
                    <div className="dm-card-img">
                    </div>
                    <h4>Paid Ads</h4>
                    <p>Run paid ad campaigns targeting business goals for effective ROI and advancements in paid traffic</p>
                    <a className="">Learn More →</a>
                  </div>
                </div>
              </div>
              <div className="dm-cards-container flex">
                <div className="dm-card-alignment">
                  <div className="dm-card-content">
                    <div className="dm-card-img">
                    </div>
                    <h4>Social Media Manager</h4>
                    <p>Plan, schedule and upload content on your social media platforms to grow a loyal audience that cares</p>
                    <a className="">Learn More →</a>
                  </div>
                </div>
              </div>
              <div className="dm-cards-container flex">
                <div className="dm-card-alignment">
                  <div className="dm-card-content">
                    <div className="dm-card-img">
                    </div>
                    <h4>Content Strategy</h4>
                    <p>Design marketing strategies by setting SMART goals for long-term success and make effective use of existing resources</p>
                    <a className="">Learn More →</a>
                  </div>
                </div>
              </div>
              <div className="dm-cards-container flex">
                <div className="dm-card-alignment">
                  <div className="dm-card-content">
                    <div className="dm-card-img">
                    </div>
                    <h4>Marketing Funnels</h4>
                    <p>Set up optimized buyer’s journey funnels to guide potential leads and improve the number and quality of conversions</p>
                    <a className="">Learn More →</a>
                  </div>
                </div>
              </div>
              <div className="dm-cards-container flex">
                <div className="dm-card-alignment">
                  <div className="dm-card-content">
                    <div className="dm-card-img">
                    </div>
                    <h4>Landing Page Optimization</h4>
                    <p>Reduce bounce rates, improve engagement and CTA strategies, better UI/UX and more for optimized results</p>
                    <a className="">Learn More →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="pt-[95px] ">
        <div className="pt-[42px] pl-[227px]">
          <h3 className="text-[37px] leading-[45px] font-bold">SEO (Search Engine Optimization)</h3>
          <p className="pt-[12px] w-[847px] text-body-style">I am an SEO expert and have a deep understanding of optimizing websites or webpages for better Google rankings and visibility.</p>
        </div>

        <div className="pt-[49px] flex flex-col items-center">
          <div className="skill-display-container">
            <div className="skill-display-left">
              <h4 className="">Keyword Research</h4>
              <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
              <hr className="skill-display-hr1 "></hr>
              <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
              <hr className="skill-display-hr2"></hr>
              <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
              <hr className="skill-display-hr3"></hr>
            </div>

            <div>
              <div className="w-[333px] h-[188px] bg-gray-200"></div>
              <div className="mt-[26px] w-[333px] h-[188px] bg-gray-200"></div>
            </div>
          </div>

          <h4 className="pt-[65px] text-[36px] leading-[44px] font-bold">Keyword Research Template</h4>
          <div className="mt-[29px] w-[857px] h-[415px] bg-gray-200"></div>

          <h4 className="pt-[86px] text-[36px] leading-[44px] font-bold">Keyword Research Process</h4>
          <h5 className="pt-[20px] text-[25px] leading-[30px] text-center ">This is a summary of where the efforts go while choosing a keyword</h5>

          <div className="pt-[47px] flex">
            <div className="krp-flexbox">
              <h6 className="">Seed keywords</h6>
              <ol className="">
                <li className="main-li">Generate a list of high quality seed keywords</li>
                <li className="">Select keywords that match:</li>
                <ul className="pt-[6px]">
                  <li>Search volume</li>
                  <li>Traffic Potential</li>
                  <li>Business Potential</li>
                  <li>Keyword Difficulty</li>
                </ul>
              </ol>
            </div>

            <div className="krp-flexbox">
              <h6 className="">Search Intent</h6>
              <ol className="">
                <li className="main-li">Ensure keyword matches searcher intent</li>
                <li className="">Conduct SERP analysis for:</li>
                <ul className="pt-[6px]">
                  <li>Content Type</li>
                  <li>Content Angle</li>
                  <li>Content Format</li>
                </ul>
              </ol>
            </div>

            <div className="krp-flexbox">
              <h6 className="">Keyword Difficulty</h6>
              <ol className="">
                <li className="main-li">We should be able to rank for our selected keyword</li>
                <li className="">Look at the top pages ranking for the keyword and access how many pages might have weak SEO for that keyword.</li>
              </ol>
            </div>
          </div>
        </div>



        <div className="pt-[180px] flex flex-col items-center">
          <div className="">
            <div className="self-start text-[28px] leading-[34px]">
              <a>Digital marketing</a> <span>/ </span>
              <a>SEO</a> <span>/ </span>
              <a>Keyword Research</a> <span>/ </span>
              <a>On Page</a>
            </div>
            <div className="skill-display-container mt-[37px]">
                <div className="skill-display-left">
                  <h4 className="">On Page SEO</h4>
                  <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
                  <hr className="skill-display-hr1 "></hr>
                  <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
                  <hr className="skill-display-hr2"></hr>
                  <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
                  <hr className="skill-display-hr3"></hr>
                </div>
                <div>
                  <div className="w-[333px] h-[188px] bg-gray-200"></div>
                  <div className="mt-[26px] w-[333px] h-[188px] bg-gray-200"></div>
                </div>
            </div>

              <div className="pt-[82px] flex justify-between">
                <div>
                  <h4 className="text-[34px] leading-[41px] font-bold">On Page Elements to Prioritize</h4>
                  <p className="pt-[10px] text-body-style max-w-[1053px]">These are some essential on page elements to ensure that our page is set to appear high on Google and create a strong impression to potential users</p>
                  <ul className="on-page-ul pt-[10px] pl-8 list-disc text-body-style space-y-[14px]">
                    <li>Meta Title, Description, Hreflang etc. tags. </li>
                    <li>Meta Title, Description, Hreflang etc. tags. </li>
                    <li>Meta Title, Description, Hreflang etc. tags. </li>
                    <li>Meta Title, Description, Hreflang etc. tags. </li>
                    <li>Meta Title, Description, Hreflang etc. tags. </li>
                    <li>Meta Title, Description, Hreflang etc. tags. </li>
                  </ul>
                </div>
                
                <div className="w-[356px] h-[203px] bg-gray-200 self-end"></div>
              </div>
          </div>

          <div className="skill-display-container mt-[190px]">
                <div className="skill-display-left">
                  <h4 className="">Technical SEO</h4>
                  <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
                  <hr className="skill-display-hr1 "></hr>
                  <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
                  <hr className="skill-display-hr2"></hr>
                  <p className="text-body-style">Keyword research is one of the most important parts of SEO, and often marks the start of  your website’s journey.</p>
                  <hr className="skill-display-hr3"></hr>
                </div>
                <div>
                  <div className="w-[333px] h-[188px] bg-gray-200"></div>
                  <div className="mt-[26px] w-[333px] h-[188px] bg-gray-200"></div>
                </div>
            </div>

            <div className="pt-[190px] flex gap-[35px]">
              <div className="flex flex-col items-center">
                <div className="w-[845px] h-[410px] bg-gray-200"></div>
                <p className="pt-[19px] w-[630px] text-body-style italic text-center">This template is used to check for common issues across a website</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[845px] h-[410px] bg-gray-200"></div>
                <p className="pt-[19px] w-[630px] text-body-style italic text-center">This template is used to check for common issues across a website</p>
              </div>
            </div>

            <div className="pt-[127px]">
              <h3 className="text-[41px] leading-[50px] font-bold text-center">Off Page SEO</h3>
              <h4 className="pt-[9px] text-[37px] leading-[45px] text-center w-[1022px]">Google prioritizes both the quality and quantity of backlinks pointing to your website</h4>
              <h4 className="pt-[39px] text-[27px] leading-[33px] font-bold text-center">I can assist with the creation of backlinks through various working methods</h4>
            </div>
            <div className="pt-[35px] flex gap-[113px]">
              <div className="p-2.5 w-[397px] flex flex-col gap-[17px]">
                <div className="flex items-center">
                  <div className="mr-[18px] w-[50px] h-[50px] bg-gray-200"></div>
                  <h5 className="text-[27px] leading-[33px] font-bold">Guest Posting</h5>
                </div>
                <div>
                  <p className="text-[19px] leading-[23px]">Post high quality blog content on guest sites and point to your website. This transfers link juice from the referring site</p>
                </div>
              </div>

              <div className="p-2.5 w-[397px] flex flex-col gap-[17px]">
                <div className="flex items-center">
                  <div className="mr-[18px] w-[50px] h-[50px] bg-gray-200"></div>
                  <h5 className="text-[27px] leading-[33px] font-bold">HARO</h5>
                </div>
                <div>
                  <p className="text-[19px] leading-[23px]">Help a Reporter Out, by providing them the info they are looking for and including your link as a source reference</p>
                </div>
              </div>

              <div className="p-2.5 w-[397px] flex flex-col gap-[17px]">
                <div className="flex items-center">
                  <div className="mr-[18px] w-[50px] h-[50px] bg-gray-200"></div>
                  <h5 className="text-[27px] leading-[33px] font-bold">Skyscraper Method</h5>
                </div>
                <div>
                  <p className="text-[19px] leading-[23px]">The process of creating a higher quality page than your competitor and asking the backlink to point to you instead</p>
                </div>
              </div>
            </div>
        </div>

        <div className="pl-[227px] pt-[76px]">
          <h3 className="text-[37px] leading-[45px] font-bold ">SEO Tools for Better Results</h3>
          <p className="pt-[3px] text-[25px] leading-[30px]">I have working experience with the following tools and platforms and more</p>
        </div>

          <div className="mt-[35px] flex justify-center">
            <div className="w-[691px] h-[220px] pl-[33px] pt-[23px] pb-[41px] pr-[49px] justify-center items-center flex border">
              <div className="flex text-[23px] leading-[28px]">
                <div className="w-[359px] flex flex-col gap-2.5">
                  <h4 className="">From Google</h4>
                  <div className="flex gap-2.5">
                    <div className="w-[28px] h-[28px] bg-gray-200"></div>
                    <p>Google Search Console</p>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-[28px] h-[28px] bg-gray-200"></div>
                    <p>Google Analytics</p>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-[28px] h-[28px] bg-gray-200"></div>
                    <p>Google Business Profile</p>
                  </div>
                </div>
                <div className="w-[203px] flex flex-col gap-2.5">
                  <h4 className="">External Tools</h4>
                  <div className="flex gap-2.5">
                    <div className="w-[28px] h-[28px] bg-gray-200"></div>
                    <p>Ahrefs</p>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-[28px] h-[28px] bg-gray-200"></div>
                    <p>Semrush</p>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-[28px] h-[28px] bg-gray-200"></div>
                    <p>ScreamingFrog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dm-added-info-col pt-[120px] pl-[227px] flex flex-col space-y-[64px]">
            <div>
              <h3>Running Paid Ad Campaigns</h3>
              <p>I can create and run ad campaigns on platforms like Facebook, Instagram, YouTube, Google Search, Pinterest and LinkedIn</p>
            </div>

            <div>
              <h3>Setting up Tracking Codes on a Website</h3>
              <p>I am able to embed tracking codes into websites either directly or through Google Tag Manager. I can set up Pixel, Conversion API, Google Analytics etc.</p>
            </div>

            <div>
              <h3>Social Media Management (SMM)</h3>
              <p>I can manage social media accounts including scheduling content and collaborating with the creative team.</p>
            </div>

            <div>
              <h3>Marketing Funnels</h3>
              <p>I can help set up marketing funnels that generate warm leads and convert into sales.</p>
            </div>

            <div>
              <h3>Analytics Research</h3>
              <p>Understand and take effective measures based on user behavior and interaction data from analytics tools like GA</p>
            </div>
          </div>
      </section>

      <section className="pt-[109px]">
        <div className="flex flex-col items-center">
          <h2 className="text-[45px] leading-[54px] font-bold">Personal Work Preferences</h2>
          <h3 className="text-[35px] leading-[42px]">Here are my preferred responsibilities, what’s included and what’s not</h3>
        </div>

        <div className="mt-[39px] h-[377px] bg-[#D36060] flex justify-center items-center gap-[12px]">
          <div className="bg-white w-[582px] h-[327px] px-[19px] py-[24px]">
            <h4 className="text-[23px] leading-[28px] font-bold text-center">Main Responsibilities</h4>
            <div className="pt-[10px] flex flex-col gap-[10px]">
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Develop and manage websites (front and back end)</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">SEO Implementation</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Assist with Backlinks</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Create and Run Ad Campaigns</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Manage Social Media Accounts</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">...and more</p>
              </div>
            </div>
          </div>
          <div className="bg-white w-[582px] h-[327px] px-[19px] py-[24px]">
            <h4 className="text-[23px] leading-[28px] font-bold text-center">Not Included</h4>
            <div className="pt-[10px] flex flex-col gap-[10px]">
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Creating design from scratch (web designer)</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Creating graphics and illustrations</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Video editing</p>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 bg-gray-200"></div>
                <p className="text-[23px] leading-[28px]">Copywriting / Content Creation / Scripts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[97px] h-screen flex flex-col items-center text-[25px] leading-[30px] gap-[31px]">
          <div className="w-[1219px] flex flex-col gap-[14px]">
            <h3 className="text-[36px] leading-[44px] font-bold">Addressing the Exclusions</h3>
            <p className="text-[25px] leading-[30px] ">The exclusions are made as I don’t currently have the knowledge and expertise to fill those roles.</p>
            <p className="text-[25px] leading-[30px]">Though I do have experience in all of those excluded areas and can attempt them, I would be inefficient and incomplete in doing so. Thus, I prefer sticking to my responsibilities encompassing digital marketing, full stack development, SEO, running paid advertisements, and so on.</p>
          </div>

          <div className="pl-[18px] w-[1170px] flex flex-col gap-[17px]">
            <div className="">
              <h4 className="text-[32px] leading-[39px] font-bold">Web Design</h4>
              <p>This page was entirely designed by me on Figma. So if necessary, I can tackle web design responsibilities.</p>
            </div>

            <div className="">
              <h4 className="text-[32px] leading-[39px] font-bold">Video Editing</h4>
              <p>I have lots of personal experience with Adobe Premiere Pro and video editing, and have a strong understanding of user engagement and retention. But I’m not a seasonal video editor and prefer outsourcing it or working alongside the editing team instead of editing myself.</p>
            </div>

            <div className="">
              <h4 className="text-[32px] leading-[39px] font-bold">Copywriting / Content Creation / Scriptwriting</h4>
              <p>This page’s text content was written by me, but I prefer not handling this responsibility and handing it to the experts.</p>
            </div>

            <div className="">
              <h4 className="text-[32px] leading-[39px] font-bold">Have an issue? Let me know!</h4>
              <p>If these exclusions are too much of a compromise, I am open to discuss workarounds</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[653px] flex flex-col items-center gap-[29px]">
            <p className="text-center text-[25px] leading-[30px]">This Portfolio is still under work</p>
            <p className="text-center text-[31px] leading-[38px]">If you found my skills impressive and would like to discuss opportunities, feel free to contact me through my email or phone:</p>
            <div className="flex justify-center">
              <div className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-4 gap-y-2 text-[31px] leading-[38px]">
                <div className="text-right"><p className="font-semibold">Email:</p></div>
                <div><p>ahissam05@gmail.com</p></div>
                <div><p className="font-semibold">Phone: </p></div>
                <div><p>+880 01802895911</p></div>
              </div>
            </div>

            <div className="mb-[38px] portfolio-social-icons pt-5.5 flex gap-[43px]">
              <Link href="https://discord.com/" className="w-[71px] h-[71px]"><Image src="discord_logo.svg" alt="discord logo" width={71} height={71} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer"/></Link>
              <Link href="https://discord.com/" className="w-[71px] h-[71px]"><Image src="linkedin_logo.svg" alt="linkedin logo" width={71} height={71} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
              <Link href="https://discord.com/" className="w-[71px] h-[71px]"><Image src="github_logo.svg" alt="github logo" width={71} height={71} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};