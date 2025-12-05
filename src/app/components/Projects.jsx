'use client';

import Image from "next/image";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 md:px-16 lg:px-24 "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 tracking-wide text-yellow-400">
          My Projects
        </h2>
        <h3 className="text-5xl font-extrabold mb-4 leading-tight text-center">
            Jason Eirik McCallister
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-center">
            Manufacturing engineer at tesla groups.
          </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          {projects?.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id}
                className="group bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {project.image && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description?.length > 120
                      ? project.description.slice(0, 120) + "..."
                      : project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-yellow-400/10 border border-yellow-400/40 text-yellow-300 px-2 py-1 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                 
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No projects available yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
