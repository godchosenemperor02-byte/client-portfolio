"use client";

export default function ResumePage() {
  const experience = [
    {
      role: "Senior Mechanical Engineer",
      company: "Halliburton",
      period: "2003 – 2023",
      details:
        "Led interdisciplinary engineering teams in the design, analysis, and maintenance of offshore drilling rigs. Oversaw mechanical system optimizations, rig reliability improvements, and safety protocol adherence.",
    },
    {
      role: "Lead Structures Engineer",
      company: "Northeastern Electric Racing (FSAE)",
      period: "2016 – 2017",
      details:
        "Directed the chassis design and fabrication logistics for the 2017 electric race car project. Developed leadership, coordination, and design validation skills within a multidisciplinary student team.",
    },
    {
      role: "Independent Contractor",
      company: "Global Engineering Partners",
      period: "2023 – Present",
      details:
        "Collaborating with international mechanical engineers on rig design, data analysis, and construction of offshore platforms for midwater and ultra-deepwater operations.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Mechanical Engineering (BSME)",
      institution: "University of the State of New York",
      year: "1998 – 2002",
    },
  ];

  const certifications = [
    "Eagle Scout – Boy Scouts of America",
    "Certified Project Management Professional (PMP)",
    "Advanced Offshore Rig Safety & Maintenance Certification",
  ];

  const coreSkills = [
    "Mechanical Design",
    "Rig Systems Engineering",
    "Data Analysis",
    "Fabrication & Prototyping",
    "Leadership & Team Building",
    "Project Management",
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wide text-yellow-400 uppercase mb-2">
            Resume
          </h2>
          <h3 className="text-5xl font-extrabold mb-4 leading-tight">
            Jason Eirik McCallister
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Manufacturing engineer at tesla groups.
      </p>
        </div>

        {/* Summary */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
          <h4 className="text-2xl font-semibold text-yellow-400 mb-4">
            Professional Summary
          </h4>
          <p className="text-gray-300 leading-relaxed">
            Experienced Mechanical Engineer with over 25 years in industrial and
            offshore rig design, fabrication, and maintenance. Proven record of
            leadership, team coordination, and delivering complex mechanical
            projects under challenging environmental conditions. Adept at
            combining deep theoretical knowledge with practical implementation to
            achieve engineering excellence.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-2xl font-semibold text-yellow-400 mb-6">
            Experience
          </h4>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <h5 className="text-xl font-bold">{exp.role}</h5>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-yellow-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h4 className="text-2xl font-semibold text-yellow-400 mb-6">
            Education
          </h4>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6"
              >
                <h5 className="text-xl font-bold mb-1">{edu.degree}</h5>
                <p className="text-yellow-400 font-medium">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-2xl font-semibold text-yellow-400 mb-6">
            Certifications
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 text-gray-300 hover:bg-gray-800/70 transition duration-300"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-2xl font-semibold text-yellow-400 mb-6">
            Core Skills
          </h4>
          <div className="flex flex-wrap gap-4">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gray-800/40 border border-gray-700 rounded-full text-sm text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center pt-10">
          <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition duration-300">
            <a
            href="/Jason_Eirik_McCallister_Resume.pdf"
            download
            className=" text-white px-6 py-2 "
          >
            Download Resume
          </a>
          </button>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-20"></div>
    </section>
  );
}
