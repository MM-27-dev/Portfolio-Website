import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Bot,
  Settings,
  Zap,
  Database,
  Cloud,
  Cpu,
  FileText,
} from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const skills = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Assistants",
      description: "GPT Chatbots, AI Tutors, Study Helpers",
      color: "from-green-500 to-emerald-500",
      technologies: [
        "OpenAI GPT-4",
        "Gemini",
        "Custom Prompts",
        "Voice-to-Text",
        "Razorpay",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "LLM Integrations",
      description: "OpenAI, Embeddings, Vector Search",
      color: "from-blue-500 to-cyan-500",
      technologies: ["OpenAI Embeddings", "Pinecone", "ChromaDB"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "MERN Stack, JWT Auth, API Integration",
      color: "from-purple-500 to-pink-500",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Axios"],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Parsing & Processing",
      description: "AI-Powered File Analysis, Uploads & Optimizations",
      color: "from-sky-500 to-indigo-500",
      technologies: [
        "pdf-parse",
        "docx-parser",
        "Multer (File Uploads)",
        "Tesseract.js (OCR)",
        "QnA with GPT",
        "Terser (JS Optimization)",
      ],
    },

    {
      icon: <Zap className="w-8 h-8" />,
      title: "Test Automation",
      description: "UI & API Testing with Modern Tools",
      color: "from-yellow-500 to-orange-500",
      technologies: ["Cypress", "Playwright", "Postman"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Storage",
      description: "NoSQL, Vector DBs, Secure Uploads",
      color: "from-indigo-500 to-purple-500",
      technologies: ["MongoDB", "Redis", "Amazon S3", "Vector DBs"],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "API & Integration",
      description: "RESTful APIs, Webhooks, Payment Gateway",
      color: "from-rose-500 to-pink-500",
      technologies: ["REST APIs", "Webhooks", "Razorpay", "JWT"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Deployments & Cloud",
      description: "Modern Hosting & CI/CD Pipelines",
      color: "from-teal-500 to-blue-500",
      technologies: ["Vercel", "Render", "AWS", "GitHub Actions"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`absolute inset-0 ${isDarkMode ? "opacity-5" : "opacity-3"}`}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p
              className={`text-xl leading-relaxed mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Hi, I'm{" "}
              <span
                className={`font-semibold ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Monika
              </span>{" "}
              — a software engineer specializing in full-stack web development,
              AI-powered applications, and automated testing. I build scalable
              web apps and intelligent assistants using the MERN stack, OpenAI
              API, and LLMs, with end-to-end testing powered by Cypress and
              Playwright.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-4 px-6 py-3 rounded-full border ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30"
                  : "bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300/50"
              }`}
            >
              <Brain
                className={`w-6 h-6 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Passionate about merging AI with practical solutions
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div
                className={`p-6 rounded-xl border transition-all duration-300 h-full relative overflow-hidden ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Hover Effect Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                >
                  <div className="text-white">{skill.icon}</div>
                </div>

                <h3
                  className={`text-xl font-bold mb-2 relative z-10 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill.title}
                </h3>
                <p
                  className={`mb-4 relative z-10 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {skill.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {skill.technologies.length > 2 && (
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      +{skill.technologies.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className={`rounded-2xl p-8 border max-w-4xl mx-auto ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/50"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Zap
                className={`w-8 h-8 ${
                  isDarkMode ? "text-yellow-400" : "text-yellow-500"
                }`}
              />
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                My Mission
              </h3>
            </motion.div>
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Bridging the gap between human creativity and artificial
              intelligence by engineering intelligent, scalable systems that
              enhance productivity, automate complex workflows, and drive
              innovation across industries. Focused on building AI-powered
              platforms that elevate learning experiences, optimize business
              operations, and deliver seamless, user-centered solutions—ensuring
              that technology remains powerful, accessible, and impactful for
              all
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
