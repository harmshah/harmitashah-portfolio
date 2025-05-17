import { RevealOnScroll } from "../ReviewOnScroll";

export const About = () => {
  const programmingLanguages = ["C#", "JavaScript"];
  const frontendSkills = [
    "React JS",
    "Angular JS",
    "TypeScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bootstrap",
    "Responsive Design",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "ASP .NET MVC",
    "REST API Design",
    "JWT Authentication",
  ];
  const databaseSkills = ["SQL Server", "MySQL", "MongoDB", "Firebase"];
  const testingSkills = ["Postman", "Chrome DevTools"];
  const CloudDeployment = [
    "Render",
    "Vercel",
    "Firebase Hosting",
    "Azure App Services",
  ];
  const ProjectManagementCollaborationMethodologies = [
    "JIRA",
    "Agile",
    "Scrum",
  ];
  const VersionSourceControl = ["Git", "GitHub"];
  const DevelopmentDesignTools = [
    "Visual Studio",
    "Visual Studio Code",
    "Figma",
  ];
  const OperatingSystems = ["Windows", "macOS"];

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
            {/* <p className="text-gray-300 mb-6"></p> */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">🛠️ Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Programming Languages:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
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
                <h3 className="text-xl font-bold mb-4"> Database:</h3>
                <div className="flex flex-wrap gap-2">
                  {databaseSkills.map((tech, key) => (
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend:</h3>
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
                <h3 className="text-xl font-bold mb-4"> Backend:</h3>
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Project Management & Collaboration Methodologies:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ProjectManagementCollaborationMethodologies.map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Cloud Deployment:</h3>
                <div className="flex flex-wrap gap-2">
                  {CloudDeployment.map((tech, key) => (
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Testing Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {testingSkills.map((tech, key) => (
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Version/Source Control:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {VersionSourceControl.map((tech, key) => (
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Development & Design Tools:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {DevelopmentDesignTools.map((tech, key) => (
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Operating Systems:</h3>
                <div className="flex flex-wrap gap-2">
                  {OperatingSystems.map((tech, key) => (
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

          <div className="flex flex-col gap-6 mt-8">
            <div className="p-6 rounded-xl text-center border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold space-y-4">
                    {" "}
                    Full-stack Developer at Empower Her Soft - Canada (Remote)
                    <br />(01/2025-present) · 5 mos
                  </h4>
                  <br />
                  <p className="list-disc lisi-inside text-left text-gray-300 space-y-4">
                    • Responsible for the full-stack development of web
                    applications, building responsive and dynamic user
                    interfaces using React.js, JavaScript, and modern UI
                    libraries.
                    <br />• Designed and implemented backend services with
                    Node.js, Express.js, and MongoDB, ensuring efficient and
                    secure data handling.
                    <br />• Created wireframes and high-fidelity UI prototypes
                    using Figma, collaborating on user-centric design solutions
                    and improving front-end development efficiency.
                    <br />• Developed and integrated RESTful APIs, enabling
                    seamless communication between frontend and backend systems.
                    <br />• Utilized Postman for thorough API testing and
                    debugging, ensuring data flow accuracy and backend
                    reliability.
                    <br />• Used Google Chrome DevTools to debug front-end
                    issues, monitor console errors, and validate smooth UI
                    behaviour and performance across browsers.
                    <br />• Managed codebase and version control using Git and
                    GitHub, supporting collaborative development and clean CI/CD
                    practices.
                  </p>
                </div>
                <br />
                <br />
                <div>
                  <h4 className="font-semibold space-y-4">
                    {" "}
                    Web Developer at sikka.ai - US (Remote) 
                    <br />(08/2023-12/2024) · 1 yrs 5 mos
                  </h4>
                  <br />
                  <p className="list-disc lisi-inside text-left text-gray-300 space-y-4">
                    • Developed responsive and high-performance web applications
                    using React JS, AngularJS, JavaScript Bootstrap, CSS3 and
                    HTML5.
                    <br />• Built scalable user interfaces with TypeScript,
                    ensuring maintainability and reusability.
                    <br />• Ensured mobile-first design principles and
                    cross-browser compatibility across modern browsers.
                    <br />• Designed and implemented RESTful APIs using Node.js
                    and Express.js, enabling smooth communication between
                    front-end and back-end systems.
                    <br />• Supported API development by handling routing,
                    middleware, and server logic for scalable application
                    behaviour.
                    <br />• Integrated MongoDB and Firebase for data persistence
                    and ensured efficient data handling and retrieval in
                    applications.
                    <br />• Used Postman to test APIs, validate endpoints, and
                    ensure accurate data flow.
                    <br />• Participated in code reviews to maintain coding
                    standards, detect bugs early, and promote continuous
                    learning.
                    <br />• Followed Agile methodologies (scrum), participating
                    in sprints and stand-ups to improve development efficiency.
                    <br />• Worked with JIRA for task tracking, sprint planning,
                    and ensuring efficient team collaboration within an Agile
                    development environment.
                    <br />• Used Git and GitHub for version control and
                    collaborative coding practices.
                  </p>
                </div>
                <br />
                <br />
                <div>
                  <h4 className="font-semibold space-y-4">
                    {" "}
                    Software Engineer at Axar Decision Software (Subsidiary of
                    Sikka.ai, US) - India (Onsite)  
                    <br />(04/2017-03/2022) · 5 yrs
                  </h4>
                  <br />
                  <p className="list-disc lisi-inside text-left text-gray-300 space-y-2">
                    • Assisted in front-end development using HTML, CSS, and
                    JavaScript, supporting senior developers in building
                    responsive and user-friendly web applications.
                    <br />• Contributed to healthcare web projects using ASP.NET
                    and C#, ensuring seamless front-end and back-end
                    communication.
                    <br />• Helped manage and maintain databases using MySQL,
                    SQL Server, and Firebase, ensuring data accuracy,
                    accessibility, and security.
                    <br />• Used Postman for testing and debugging APIs,
                    contributing to a stable and efficient codebase.
                    <br />• Utilized Git and GitHub for version control and
                    collaborated with team members effectively during
                    development cycles.
                    <br />• Worked with JIRA for task tracking, sprint planning,
                    and ensuring efficient team collaboration within an Agile
                    development environment.
                    <br />• Participated in diagnosing and resolving issues in
                    legacy web applications, contributing to smoother
                    functionality and improved user experience.
                    <br />• Contributed to the maintenance and enhancement of
                    existing software features, focusing on performance
                    optimization and code quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl text-center  border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc lisi-inside text-left text-gray-300 space-y-2">
                <li>
                  <strong>
                    Mobile Application Development (Ontario College Post-Graduate Certificate)
                  </strong>{" "}
                  <br />- Georgian College, Canada (01/2023-08/2023)
                </li>
                <br />
                <li>
                  <strong>
                    Project Management (Ontario College Post-Graduate Certificate)
                  </strong>{" "}
                  <br />- Sault College, Canada (05/2022-12/2022)
                </li>
                <br />
                <li>
                  <strong>
                    Computer Science and Engineering (Bachelor of Engineering)
                  </strong>{" "}
                  <br />- Gujarat Technological University, India (06/2012-06/2016)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl text-center border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📜 Certifications </h3>
              <div className="space-y-4 text-left text-gray-300">
                <div>
                  <h4 className="font-semibold space-y-4">
                    {" "}
                    Microsoft Certified: Azure Fundamentals
                  </h4>
                  <br />
                  <p className="list-disc lisi-inside text-gray-300 space-y-2">
                    • Demonstrate foundational knowledge of cloud concepts, core
                    Azure services, plus Azure management and governance
                    features and tools.
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
