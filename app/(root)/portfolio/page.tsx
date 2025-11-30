import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div className="alignment w-full h-screen flex justify-center">
            <div className="container-div w-5/8 px-8 pt-20">
              <h1 className="text-center pb-10">Explore My Projects</h1>

              <div className="card-item h-80 w-80 px-8 py-4 border flex justify-center pt-30">
                <div>
                  <h2 className="text-center">Resume Project</h2>
                  <Link className="block text-center font-bold" href="./portfolio/projects/small-projects/resume">Click to View</Link>
                </div>
              </div>
            </div>
        </div>
    </>
  );
};