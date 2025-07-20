import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const experiences = [
    {
      title: "Associate Software Developer",
      company: "Valtech India Pvt Ltd",
      location: "Bangalore, India",
      period: "Sep 2023 – Present",
      description:
        "Working as a MERN Stack Developer contributing to full-stack development, frontend performance optimization, and automation testing.",
      achievements: [
        "Engineered scalable, responsive web applications using React.js, improving frontend performance and user experience.",
        "Implemented JWT-based role authentication and dynamic dashboard flows tailored to user roles.",
        "Integrated secure payment gateway (Razorpay) and file management using Amazon S3.",
        "Collaborated with backend teams to integrate and test RESTful APIs using Axios and Postman.",
        "Reduced manual testing time by 40% by developing automation suites with Cypress and Playwright.",
        "Participated in Agile ceremonies and code reviews, ensuring timely delivery and clean, maintainable code.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT",
        "Amazon S3",
        "Razorpay",
        "Axios",
        "Cypress",
        "Playwright",
        "Bootstrap",
        "Google Maps API",
      ],
    },
    {
      title: "AI Project Contributor",
      company: "Independent Projects",
      location: "Remote",
      period: "Present",
      description:
        "Designed and developed AI-powered web applications targeting education, e-commerce, and customer service domains using modern LLMs and full-stack frameworks.",
      achievements: [
        "Developed an AI Study Assistant using OpenAI GPT-4 with file upload support, voice/text chat, personalized tutor behavior, JWT authentication, and Razorpay subscriptions",
        "Created a plug-and-play AI FAQ Chatbot that integrates into websites, trained on business-specific data using OpenAI embeddings and Pinecone",
        "Built a T&C Summarizer to extract and highlight legal clauses from uploaded documents or URLs",
        "Developed a Chrome extension for doubt-solving that accepts documents or images and responds with contextual answers via OpenAI GPT",
        "Designed a GPT-powered social media content generator that creates optimized posts based on product keywords",
      ],
      technologies: [
        "MERN Stack",
        "OpenAI GPT-4",
        "Gemini",
        "Pinecone",
        "ChromaDB",
        "Tailwind CSS",
        "pdf-parse",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Mphasis Limited",
      location: "Bangalore, India",
      period: "June 27, 2022 – December 30, 2022",
      description:
        "Assisted in the development of responsive web applications and gained hands-on experience with front-end technologies and RESTful APIs.",
      achievements: [
        "Contributed to the development of UI components using HTML, CSS, and JavaScript",
        "Collaborated with senior developers to debug, test, and enhance features in client projects",
        "Learned version control practices using Git and participated in agile development cycles",
        "Created interactive web interfaces aligned with design and accessibility standards",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Git",
        "REST APIs",
      ],
    },
  ];

  const techStack = [
    { name: "React.js", category: "Frontend", proficiency: 95 },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 90 },
    { name: "TypeScript", category: "Frontend", proficiency: 85 },
    { name: "Node.js", category: "Backend", proficiency: 90 },
    { name: "Express.js", category: "Backend", proficiency: 88 },
    { name: "MongoDB", category: "Database", proficiency: 85 },
    { name: "OpenAI API", category: "AI/ML", proficiency: 87 },
    { name: "JWT Auth", category: "Security", proficiency: 80 },
    { name: "Razorpay", category: "Payments", proficiency: 80 },
    { name: "Amazon S3", category: "Cloud", proficiency: 78 },
    { name: "Cypress", category: "Testing", proficiency: 85 },
    { name: "Playwright", category: "Testing", proficiency: 80 },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "from-blue-500 to-cyan-500";
      case "Backend":
        return "from-green-500 to-emerald-500";
      case "AI/ML":
        return "from-purple-500 to-pink-500";
      case "Database":
        return "from-orange-500 to-red-500";
      case "Cloud":
        return "from-yellow-500 to-orange-500";
      case "Security":
        return "from-red-500 to-pink-500";
      case "Payments":
        return "from-fuchsia-500 to-rose-500";
      case "Testing":
        return "from-indigo-500 to-violet-500";
      default:
        return "from-zinc-500 to-neutral-600";
    }
  };

  return (
    <section
      id="experience"
      className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My journey in software development and AI, featuring key
            achievements and technical expertise.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block ${
                !isDarkMode ? "opacity-60" : ""
              }`}
            ></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div
                  className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                      : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                  } ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 hidden md:block ${
                      isDarkMode ? "border-gray-900" : "border-gray-50"
                    }`}
                    style={{ [index % 2 === 0 ? "right" : "left"]: "-42px" }}
                  ></div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4
                        className={`text-xl font-bold mb-1 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {exp.title}
                      </h4>
                      <p
                        className={`font-semibold ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div
                      className={`flex flex-col items-start md:items-end text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5
                      className={`font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Key Achievements:
                    </h5>
                    <ul
                      className={`space-y-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={`mt-1 ${
                              isDarkMode ? "text-blue-400" : "text-blue-600"
                            }`}
                          >
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          isDarkMode
                            ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                            : "bg-purple-100 text-purple-700 border-purple-300/50"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`text-sm ml-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      ({skill.category})
                    </span>
                  </div>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {skill.proficiency}%
                  </span>
                </div>
                <div
                  className={`w-full rounded-full h-2 ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(
                      skill.category
                    )}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
