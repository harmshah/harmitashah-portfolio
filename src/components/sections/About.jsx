import { RevealOnScroll } from "../ReviewOnScroll";

export const About = () => {
    const frontendSkills = [
        "React JS",
        "Angular JS",
        "TypeScript",
        "TailwindCSS",
        "HTML",
        "CSS",
        "Bootstrap",
      ];
      const backendSkills = [
        "Node.JS",
        "Express JS",
        "ASP .NET",
        "REST API",
        "Python",
      ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc lisi-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Mobile Application Development (Ontario College
                    Post-Graduate Certificate)
                  </strong>{" "}
                  - Georgian College, Canada (01/2023-08/2023)
                </li>
                <li>
                  <strong>
                    Project Management (Ontario College Post-Graduate
                    Certificate)
                  </strong>{" "}
                  - Sault College, Canada (05/2022-12/2022)
                </li>
                <li>
                  <strong>
                    Computer Science and Engineering (Bachelor of Engineering)
                  </strong>{" "}
                  - Gujarat Technological University, India (06/2012-06/2016)
                </li>
              </ul>
            </div>   



            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                
              <div>
                  <h4 className="font-semibold">
                    {" "}
                    Full-stack Developer (Volunteer) at Empower Her Soft
                    (03/2025-present)
                  </h4>
                  <p className="list-disc lisi-inside text-gray-300 space-y-2">
                    • Responsible for the full-stack development of web
                    applications, including building responsive user interfaces
                    usingReact.js and JavaScript, and managing backend services
                    with MongoDB.
                    <br />• Built and integrated RESTful APIs using Node.js and
                    Express.js, ensuring efficient and seamless
                    communicationbetween front-end and back-end systems.
                    <br />• Utilized Postman for API testing and debugging,
                    validating data flow accuracy and improving backend
                    reliability.
                    <br />• Used GitHub for version control, supporting
                    collaborative development and efficient code management.
                    <br />• Deployed full-stack applications using Render for
                    backend services and Vercel for frontend hosting, enabling
                    smoothCI/CD workflows and reliable cloud-based deployment.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer at Atos (08/2022-present)
                  </h4>
                  <p className="list-disc lisi-inside text-gray-300 space-y-2">
                    • Responsible for developing websites using React.js,
                    JavaScript, and Bootstrap, ensuring mobile responsiveness
                    andperformance.
                    <br />• Supported the design and implementation of RESTful
                    APIs with Node.JS and Express JS, ensuring
                    smoothintegrationbetween front-end and back-end systems.
                    <br />• Developed and maintained feature-rich web
                    applications using Angular and TypeScript for scalable and
                    responsiveUIs.
                    <br />• Gained experience with Agile methodologies,
                    including Scrum, to improve development processes.
                    <br />• Participated in code reviews to enhance coding
                    standards and best practices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Web Developer at Infosys (01/2017-05/2020)
                  </h4>
                  <p className="list-disc lisi-inside text-gray-300 space-y-2">
                    • Assisted in front-end development using HTML, CSS, and
                    JavaScript, supporting senior developers in
                    webapplicationprojects.
                    <br />• Helped manage databases using MySQL , SQL Server and
                    Firebase, ensuring data integrity and accessibility.
                    <br />• Used Postman for API testing and debugging tools to
                    maintain a reliable and efficient codebase.
                    <br />• Utilized Git and GitHub for version control and
                    efficient team collaboration.
                    <br />• Built and integrated RESTful APIs while developing
                    healthcare websites using ASP .NET and C#, ensuring
                    seamlesscommunication between front-end and back-end systems
                    functionality and user experience.
                    <br />• Contributed to the improvement and maintenance of
                    existing software features, optimizing
                    applicationperformance.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};


