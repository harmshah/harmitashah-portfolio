import { RevealOnScroll } from "../ReviewOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-5xl font-bold mt-25 mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Harmita Shah
          </h1>
          <div className="text-center">
            <p className="tex-gray-400 text-md mb-8 max-w-5xl mx-auto">
              Detail-oriented Software Developer with comprehensive expertise in
              computer science fundamentals, including object-oriented
              programming inJavaScript and C#. Adept in both front-end and
              back-end development, boasting proficiency with HTML, CSS,
              React.js, Angular.js, TypeScript, Node.js, Express.js, and .NET.
              Experienced in RESTful API design/integration, database management
              (MySQL, SQL Server, MongoDB, Firebase), andUI/UX design using
              Figma. Well-versed in agile methodologies, sprint planning, JIRA,
              and Git/GitHub, with a strong record of deploying and maintaining
              full-stack applications in cloud environments.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
