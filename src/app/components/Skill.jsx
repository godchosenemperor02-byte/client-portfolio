"use client";

export default function SkillsSection() {
  const skills = [
    {
      title: "Rig Design & Analysis",
      description:
        "Expert in designing and analyzing offshore drilling rigs with a focus on safety, efficiency, and structural integrity.",
    },
    {
      title: "Mechanical Systems Maintenance",
      description:
        "Experienced in maintaining complex systems on drilling rigs and industrial machinery to minimize downtime.",
    },
    {
      title: "Project Management",
      description:
        "Led interdisciplinary teams to deliver high-stakes engineering projects on schedule and within budget.",
    },
    {
      title: "Fabrication & Prototyping",
      description:
        "Hands-on experience in fabrication processes, prototype development, and material optimization.",
    },
    {
      title: "Data-Driven Engineering",
      description:
        "Skilled at using analytics tools to optimize rig performance, predict failures, and improve design outcomes.",
    },
    {
      title: "Leadership & Team Collaboration",
      description:
        "Proven ability to guide teams effectively, mentor engineers, and foster collaborative project environments.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-wide text-yellow-400 uppercase mb-2">
          My Skills
        </h2>
        <h3 className="text-4xl font-extrabold mb-6 leading-tight">
          Expertise & Competence
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Over 25 years of technical experience spanning mechanical engineering,
          rig design, and leadership. A blend of deep theoretical understanding
          and hands-on execution.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-gray-800/40 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <h4 className="text-xl font-semibold mb-3 text-yellow-400">
              {skill.title}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
    </section>
  );
}
