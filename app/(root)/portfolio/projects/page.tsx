import Link from "next/link"

export default function Projects() {
    return (
    <>
        <header className="bg-[#010409] flex flex-col text-white font-sans text-[14px] leading-5 ">
            <div className="header-top-container flex justify-between h-fit px-4 pt-4 pb-2">
                <div className="header-left flex gap-2">
                    <div className="hamburger-menu w-8 h-8 inline-block bg-gray-500 rounded cursor-pointer"></div>
                    <div className="logo-icon w-8 h-8 inline-block rounded-3xl bg-gray-500 ml-1 cursor-pointer"></div>
                    <div className="flex items-center">
                        <div className="flex justify-center items-center">
                            <a href="/" className="username px-1.5 py-1 hover:bg-white/10 rounded cursor-pointer"><span className="">hissamdev</span></a>
                            <p className="text-gray-500 w-4 text-center">/</p>
                            <a className="repo-name px-1.5 py-1 hover:bg-white/10 rounded font-semibold cursor-pointer">cordra</a>
                        </div>
                    </div>
                </div>
                <div className="header-right flex gap-2">
                    <div className="flex gap-2">
                        <div className="search-input w-65 h-8 flex items-center border border-gray-700 rounded-[5px] cursor-pointer px-2">
                            <div className="text-gray-400 flex items-center cursor-pointer">
                                <div className="search-icon w-4 h-4 bg-gray-500 cursor-pointer"></div>
                                <button className="ml-[7px] cursor-pointer">Type / to search</button>
                            </div>
                        </div>
                    </div>

                    <div className="chat-with-copilot p-2 bg-gray-500 rounded cursor-pointer w-14 h-8">
                            <div className="icon-copilot cursor-pointer"></div>
                            <div className="icon-dropdown cursor-pointer"></div>
                    </div>

                    <div className="header-controls-container flex gap-2">
                        <p className="mx-[3px] my-1.5 text-gray-700">|</p>
                        <div className="create-new-btn cursor-pointer h-8 rounded w-[50px]"></div>
                        <div className="issues-btn cursor-pointer w-8 h-8 rounded"></div>
                        <div className="pull-reqs-btn cursor-pointer w-8 h-8 rounded"></div>
                    </div>
                    <div>
                        <div className="inbox cursor-pointer w-8 h-8 rounded bg-gray-500"></div>
                    </div>
                    <div>
                        <div className="profile-picture cursor-pointer w-[34px] h-8 rounded-3xl bg-gray-500"></div>
                    </div>
                </div>
            </div>
            <div className="header-bottom-container h-fit px-4">
                <div className="">
                    <ul className="flex gap-2 h-12">
                        <li className="projects-nav-item">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p className="font-semibold">Code</p>
                            </div>
                        </li>

                        <li className="projects-nav-item pr-[1px]">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p className="pl-[0.5px]">Issues</p>
                            </div>
                        </li>

                        <li className="projects-nav-item pr-[1px]">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p className="pl-[0.7px]">Pull requests</p>
                            </div>
                        </li>

                        <li className="projects-nav-item pr-[0.7px]">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p  className="pl-[1.2px]">Actions</p>
                            </div>
                        </li>

                        <li className="projects-nav-item pr-[1px]">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p className="pl-[0.7px]">Projects</p>
                            </div>
                        </li>

                        <li className="projects-nav-item pr-[0.7px]">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p className="pl-[0.9px]">Security</p>
                            </div>
                        </li>

                        <li className="projects-nav-item pr-[0.7px]">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p className="pl-[1px]">Insights</p>
                            </div>
                        </li>

                        <li className="projects-nav-item pr-[1.4px]">
                            <div className="">
                                <div className="nav-icon"></div>
                                <p className="pl-[1px]">Settings</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>


        <div className="page-projects-body bg-[#0D1117] h-fit min-h-screen pb-20 font-sans text-[14px] ">
            <div className="main-body-alignment w-full flex justify-center">
                <div className="main-body flex flex-col">
                    <div className="top-row flex flex-col pt-4 h-fit text-white">
                        <div className="flex justify-between">
                            <div className="top-row-left flex items-center">
                                <div className="profile-picture w-6 h-6 mr-2 inline-block rounded-3xl bg-gray-500"></div>
                                <div className="repo-name mr-2 text-[20px] leading-[30px] font-semibold hover:underline cursor-pointer ">cordra</div>
                                <div className="privacy-status text-[12px] leading-[18px] px-1.5 border rounded-3xl border-gray-700 text-gray-400 ">Private</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="watch-dropdown flex px-2 w-[116px] h-[28px] bg-[#212830] border border-gray-600 rounded cursor-pointer hover:bg-[#262C36]">
                                    <span className="flex items-center">
                                        <span className="watch-icon w-4 h-4"></span>
                                        <p className="text-[12px] leading-[20px]">Watch</p>
                                        <span></span>
                                    </span>
                                    <span className="icon-dropdown"></span>
                                </button>
                                <button className="fork-dropdown flex px-2 w-[132px] h-[28px] bg-[#262C36] border border-gray-600 rounded">
                                    <span className="flex items-center">
                                        <span className="watch-icon w-4 h-4"></span>
                                        <p className="text-[12px] leading-[20px]">Fork</p>
                                        <span></span>
                                    </span>
                                    <span className="icon-dropdown"></span>
                                </button>
                                <button className="fork-dropdown flex px-2 w-[132px] h-[28px] bg-[#262C36] border border-gray-600 rounded">
                                    <span className="flex items-center">
                                        <span className="watch-icon w-4 h-4"></span>
                                        <p className="text-[12px] leading-[20px]">Stars</p>
                                        <span></span>
                                    </span>
                                    <span className="icon-dropdown"></span>
                                </button>
                            </div>
                        </div>
                        <hr className="border-t border-gray-600 mt-4" />
                    </div>

                    <div className="flex gap-6">
                        <div className="main-left flex flex-col w-[896px] py-4 ">
                            <div className="main-left-top flex justify-between gap-16 pt-[8px] pb-[16px]">
                                <div className="mlt-left flex gap-2 text-white">
                                    <button className="main-dropdown flex px-2 w-[105px] h-[32px] bg-[#212830] border border-gray-600 rounded cursor-pointer hover:bg-[#262C36]">
                                        <span className="flex items-center">
                                            <span className="watch-icon w-4 h-4"></span>
                                            <p className="text-[14px] leading-[20px] font-semibold">main</p>
                                            <span></span>
                                        </span>
                                        <span className="icon-dropdown"></span>
                                    </button>
                                    <div className="flex">
                                        <button className="watch-dropdown flex px-2 w-[105px] h-[32px] rounded cursor-pointer hover:bg-[#1E242A]">
                                            <span className="flex items-center">
                                                <span className="watch-icon w-4 h-4"></span>
                                                <p className="text-[14px] leading-[20px] font-semibold">Branch</p>
                                                <span></span>
                                            </span>
                                            <span className="icon-dropdown"></span>
                                        </button>
                                        <button className="watch-dropdown flex px-2 w-[105px] h-[32px] rounded cursor-pointer hover:bg-[#1E242A]">
                                            <span className="flex items-center">
                                                <span className="watch-icon w-4 h-4"></span>
                                                <p className="text-[14px] leading-[20px] font-semibold">Tags</p>
                                                <span></span>
                                            </span>
                                            <span className="icon-dropdown"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="mlt-right flex items-center gap-2 text-white">
                                    <div className="search-form"><input name="search-input" className="search-input w-[225px] h-[32px] px-2 border rounded border-gray-600 cursor-pointer hover:bg-[#1E242A]" placeholder="Go to file" /></div>
                                    <div className="add-file-icon flex justify-center items-center px-2 w-[105px] h-[32px] bg-[#212830] border border-gray-600 rounded cursor-pointer hover:bg-[#262C36]">
                                        <p>Add file</p>
                                    </div>
                                    <div className="code-icon flex items-center px-3 w-[105px] h-[32px] rounded bg-[#238636] cursor-pointer hover:bg-[#29903b]">
                                        <p>Code</p>
                                    </div>
                                </div>
                            </div>

                            <div className="main-left-content h-fit w-full flex flex-col border rounded border-gray-700 divide-y">
                                <div className="metadata-container bg-[#151B23] rounded-t border-b-gray-700 h-[52px] text-white">
                                    <div className="profile-picture"></div>
                                    <div className="username"></div>
                                    <div className="commit-message"></div>
                                    <div className="commit-id"></div>
                                    <div className="time-data"></div>
                                    <div className="icon-history"></div>
                                </div>
                                <div className="files-container h-fit text-white px-4">
                                    <div className="file-item h-[41px] flex justify-between items-center gap-10">
                                        <div className="flex items-center gap-2.5 min-w-[40%] ">
                                            <div className="file-icon w-4 h-4 bg-gray-500"></div>
                                            <div className="file-name">
                                                <p>app</p>
                                            </div>
                                        </div>
                                        <div className="commit-message min-w-[40%]">
                                            <p>Latest commit</p>
                                        </div>
                                        <div className="time-data">2 days ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-left-readme mt-[10px] h-fit border rounded border-gray-700 divide-y w-full flex flex-col">
                                <div className="readme-titlebar flex justify-between h-[48px] border-b border-gray-700">
                                    <div className="text-white">
                                        <Link href="/portfolio/projects">README</Link>
                                        <div className="readme-titlebar-controls">
                                            <div className="readme-edit"></div>
                                            <div className="readme-expandable"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="readme-content h-[400px] ">
                                </div>
                            </div>
                        </div>
                        <div className="main-right h-[400px] w-[296px] flex flex-col mt-3 text-white divide-y divide-gray-700">
                            <div className="">
                                <div className="py-4">
                                    <h2 className="text-[16px] leading-[24px] font-semibold">About</h2>
                                    <div className="my-4">
                                        <Link href="/" className="text-[14px] leading-[24px] font-semibold text-[#4493f8] ">cordra.netlify.app</Link>
                                    </div>
                                    <div className="mt-2">
                                        <Link href="/portfolio/projects" className="text-[#9198a1] hover:text-[#4493f8] ">Readme</Link>
                                    </div>
                                    <div className="mt-2">
                                        <Link href="/portfolio/projects" className="text-[#9198a1] hover:text-[#4493f8] ">Activity</Link>
                                    </div>
                                    <div className="mt-2">
                                        <Link href="/portfolio/projects" className="text-[#9198a1] hover:text-[#4493f8] ">0 stars</Link>
                                    </div>
                                    <div className="mt-2">
                                        <Link href="/portfolio/projects" className="text-[#9198a1] hover:text-[#4493f8] ">0 watching</Link>
                                    </div>
                                    <div className="mt-2">
                                        <Link href="/portfolio/projects" className="text-[#9198a1] hover:text-[#4493f8] ">0 forks</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="py-4">
                                <h3 className="mb-4 inline-block text-[16px] leading-6 hover:text-[#4493f8] cursor-pointer font-semibold ">Releases</h3>
                                <p className="text-[12px] leading-[18px] text-[#9198a1]">No releases published</p>
                                <Link href="/portfolio/projects" className="text-[12px] leading-[18px] text-[#4493f8] underline">Create a new release</Link>
                            </div>
                            <div className="py-4">
                                <h3 className="mb-4 inline-block text-[16px] leading-6 hover:text-[#4493f8] cursor-pointer font-semibold ">Packages</h3>
                                <p className="text-[12px] leading-[18px] text-[#9198a1]">No packages published</p>
                                <Link href="/portfolio/projects" className="text-[12px] leading-[18px] text-[#4493f8] underline">Publish your first package</Link>
                            </div>
                            <div className="py-4">
                                <h3 className="mb-4 inline-block text-[16px] leading-6 hover:text-[#4493f8] cursor-pointer font-semibold ">Languages</h3>
                                <div className="languages-slider"></div>
                                <div className="lang-info">TypeScript</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};