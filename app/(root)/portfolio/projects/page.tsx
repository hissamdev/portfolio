import Link from "next/link"

export default function Projects() {
    return (
    <>
        <header className="bg-[#010409] flex flex-col text-white">
            <div className="header-top-container flex justify-between">
                <div className="header-left flex">
                    <div className="hamburger-menu inline-block p-5 bg-gray-500"></div>
                    <div className="logo-icon inline-block p-5 bg-gray-500"></div>
                    <div className="flex">
                        <a className="username">hissamdev</a>
                        <p className="">/</p>
                        <a className="repo-name">projects</a>
                    </div>
                </div>
                <div className="header-right flex">
                    <div className="flex">
                        <div className="search-input">
                            <input name="search-input" placeholder="Type / to search" />
                        </div>
                        <div className="chat-with-copilot p-2 bg-gray-500">
                            <div className="icon-copilot"></div>
                            <div className="icon-dropdown"></div>
                        </div>
                    </div>

                    <div className="header-controls-container flex gap-2">
                        <p>|</p>
                        <div className="create-new-btn"></div>
                        <div className="issues-btn"></div>
                        <div className="pull-reqs-btn"></div>
                        <div className="inbox"></div>
                        <div className="profile-picture"></div>
                    </div>
                </div>
            </div>
            <div className="header-bottom-container h-fit flex gap-2">
                <div className="px-6 bg-gray-800">Text</div>
                <div className="px-6 bg-gray-800">Text</div>
                <div className="px-6 bg-gray-800">Text</div>
                <div className="px-6 bg-gray-800">Text</div>
                <div className="px-6 bg-gray-800">Text</div>
                <div className="px-6 bg-gray-800">Text</div>
                <div className="px-6 bg-gray-800">Text</div>
                <div className="px-6 bg-gray-800">Text</div>
            </div>
        </header>


        <div className="page-projects-body bg-[#0D1117] h-fit pb-20 ">
            <div className="top-row">
                <div className="top-row-left">
                    <div className="profile-picture"></div>
                    <div className="repo-name">cordra</div>
                    <div className="privacy-status"></div>
                </div>
                <div>
                    <div className="watch-dropdown"></div>
                    <div className="fork-dropdown"></div>
                    <div className="star-dropdown"></div>
                    <hr />
                </div>
            </div>

            <div className="main-body-alignment w-full flex justify-center">
                <div className="main-body flex text-white gap-[15px]">
                    <div className="main-left flex flex-col w-[896px] ">
                        <div className="main-left-top flex justify-between gap-16 pt-[8px] pb-[16px] ">
                            <div className="mlt-left flex">
                                <div className="current-branch">Main</div>
                                <div className="branches">Branch</div>
                                <div className="tags-li">Tags</div>
                            </div>
                            <div className="mlt-right flex items-center">
                                <div className="search-form"><input name="search-input" className="search-input" placeholder="Go to file" /></div>
                                <div className="add-file-icon">Add file</div>
                                <div className="code-icon">Code</div>
                            </div>
                        </div>

                        <div className="main-left-content h-fit w-full flex flex-col">
                            <div className="metadata-container bg-[#151B23] h-[52px]"></div>
                            <div className="files-container h-90"></div>
                        </div>

                        <div className="main-left-readme mt-[10px] h-fit border-x border-t rounded border-gray-500 w-full flex flex-col">
                            <div className="readme-titlebar flex justify-between h-[48px] border-b border-gray-500">
                                <div>
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
                    <div className="main-right h-[400px] w-[296px] flex flex-col">
                        <h2 className="mt-4">About</h2>
                        <Link href="/portfolio/projects">https://cordra.netlify.app</Link>
                        <div className="metadata-right flex flex-col text-gray-500">
                            <div>
                                <Link href="/portfolio/projects">Readme</Link>
                            </div>
                            <div>
                                <Link href="/portfolio/projects">Activity</Link>
                            </div>
                            <div>
                                <Link href="/portfolio/projects">0 stars</Link>
                            </div>
                            <div>
                                <Link href="/portfolio/projects">0 watching</Link>
                            </div>
                            <div>
                                <Link href="/portfolio/projects">0 forks</Link>
                            </div>
                        </div>
                        <hr />

                        <div>
                            <h3>Releases</h3>
                            <p>No releases published</p>
                            <Link href="/portfolio/projects">Create a new release</Link>
                        </div>
                        <hr />

                        <div>
                            <h3>Packages</h3>
                            <p>No packages published</p>
                            <Link href="/portfolio/projects">Publish your first package</Link>
                        </div>
                        <hr />

                        <div>
                            <h3>Languages</h3>
                            <div className="languages-slider"></div>
                            <div className="lang-info">TypeScript</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};