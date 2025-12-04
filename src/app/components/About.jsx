"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Decorative Image / Shape */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 bg-gray-700 rounded-[3rem] rotate-3 overflow-hidden shadow-2xl border border-gray-600">
            <img
              src="/engineer.jpg" // replace with your image path
              alt="Jason McCallister"
              className="object-cover w-full h-full rounded-[3rem] opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div className="absolute -z-10 top-5 right-5 w-80 h-80 bg-gray-600/20 rounded-[3rem] rotate-6 blur-2xl"></div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-yellow-400 uppercase mb-2">
              About
            </h2>
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">
              My Background
            </h3>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
            <p>
              My name is Jason Eirik McCallister and i'm Mechanical Engineer who works as an
              independent contractor with a team of engineers coming together,
              teaming up, and taking on industrial and high-powered offshore
              drilling platforms. I was raised in Cold Spring, New York and
              went on to acquire my BSME from the University of the State of
              New York.
            </p>
            <br/>

            <p>
              I'm professionally experienced in both Ultra-deepwater and
              midwater semi-submersible drilling platforms. I and my team
              focus on rig design, data analysis, construction of new rigs,
              pipeline installation, and maintenance of complex mechanical
              systems to ensure safety and efficiency.

              I've also worked as a Manufacturing Engineer at Tesla Groups : This role at Tesla focuses on installing and commissioning production lines for high-volume manufacturing, 
              ensuring quality targets, and developing quality control plans.
            </p>

            <p className="italic text-gray-400">
              “Over the past 25 years, I have gained valuable industry experience
              as a mechanical engineer in several companies like Halliburton
              where I was able to apply my formal education as a member of
              interdisciplinary teams of career engineers...”
            </p>

            <p>
              Throughout my undergrad degree, I led the structures team of
              Northeastern Electric Racing (FSAE), where he delivered the 2017
              competition chassis and developed strong skills in mechanical
              design, fabrication, project management, and leadership.
            </p>

            <p>
              I've always sought to learn from leaders in Boy Scouts,
              engineering clubs, and co-ops, earning the rank of Eagle Scout at
              17 and serving as Vice President of a STEM fraternity at the
              University of the State of New York.
            </p>
          </div>

          <div>
            <Link href='/projects' className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition duration-300">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
