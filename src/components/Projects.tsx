import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Play } from "lucide-react";

interface ProjectsProps {
  isDarkMode: boolean;
}

interface GitHubLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemo: string;
  github: string | GitHubLink[];
  featured: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };

  const projects: Project[] = [
    {
      title: "AI Study Assistant Platform",
      description:
        "Developed a responsive AI-powered learning assistant using OpenAI GPT-4 that delivers real-time, contextual answers via text and voice chat. Enabled study material uploads, personalized AI tutor behavior, secure JWT-authenticated sessions, and subscription-based Razorpay payments.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: [
        "OpenAI",
        "RAG",
        "MERN",
        "Socket.io",
        "Amazon S3",
        "Razorpay",
        "JWT",
      ],
      liveDemo: "https://ai-study-assistant-frontend-three.vercel.app/",
      github: [
        {
          label: "Frontend",
          url: "https://github.com/MM-27-dev/AIStudyAssistant-Frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/MM-27-dev/AIStudyAssistant-Backend",
        },
      ],
      featured: true,
    },
    {
      title: "AI-Powered FAQ Chatbot for Websites",
      description:
        "Built a customizable AI-powered FAQ chatbot that can be embedded into any business website to handle customer queries instantly",
      image:
        "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2433357767.jpg",
      tags: [
        "MERN Stack",
        "OpenAI API",
        "Prompt Engineering",
        "Widget Integration",
        "Pinecone",
      ],
      liveDemo: "#",
      github: "#",
      featured: false,
    },
    {
      title: "AI-Powered T&C Summarizer",
      description:
        "Built an AI-driven solution that analyzes Terms & Conditions from uploaded files or URLs, highlights key clauses, and allows users to explore important areas like privacy, payments, and liabilities in detail.",
      image:
        "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2433357767.jpg",
      tags: [
        "OpenAI",
        "MERN Stack",
        "Skypper",
        "Web Scraping",
        "Document Parsing",
      ],
      liveDemo: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Social Media Post Generator",
      description:
        "Automated tool that generates engaging post content for LinkedIn, Twitter, and Instagram based on user-provided keywords or topics using GPT. Allows users to copy, save, or publish content directly.",
      image:
        "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2433357767.jpg",
      tags: ["MERN Stack", "OpenAI", "Zapier", "Content Automation"],
      liveDemo: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Student Doubt Solver App (Ask Your AI Tutor)",
      description:
        "A Chrome extension where students can ask doubts by uploading documents, files, or images. The AI (powered by GPT) responds with step-by-step, subject-aware answers. Includes topic selection, Q&A history, and prompt chaining for detailed solutions.",
      image:
        "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2433357767.jpg",
      tags: [
        "MERN",
        "OpenAI",
        "Chrome Extension",
        "LangChain",
        "Speech-to-Text",
      ],
      liveDemo: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Smart Product Description Generator",
      description:
        "Tool for e-commerce sellers to auto-generate optimized product descriptions for platforms like Amazon, Etsy, etc. Users upload product name & features (via form or CSV) and get SEO-rich descriptions, titles, and bullet points. Tone customization supported.",
      image:
        "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2433357767.jpg",
      tags: ["MERN", "OpenAI", "CSV Parser", "Excel Export", "SEO"],
      liveDemo: "#",
      github: "#",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="projects"
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
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
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI Projects
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore my latest work in AI and full-stack development, showcasing
            innovative solutions that combine cutting-edge technology with
            practical applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group rounded-xl overflow-hidden border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 hover:border-gray-600"
                  : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg"
              } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode ? "from-gray-900/80" : "from-white/80"
                  }`}
                />

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        isDarkMode
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-blue-100 text-blue-700 border-blue-300/50"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 relative">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <Play size={16} />
                    Live Demo
                  </motion.a>

                  {Array.isArray(project.github) ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300"
                      >
                        <Github size={16} />
                        Code
                      </button>

                      {activeDropdownIndex === index && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg shadow-md z-10">
                          {project.github.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 whitespace-nowrap"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
