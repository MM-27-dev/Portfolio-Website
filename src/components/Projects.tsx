import React from 'react';
import { motion } from 'framer-motion';
import {  Github, Play } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "AI Assistant Platform",
      description: "24/7 AI helpdesk builder for businesses with custom knowledge base integration and multi-channel support.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["OpenAI", "RAG", "MERN", "Socket.io"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      title: "RAG Document Analyzer",
      description: "Retrieval-Augmented Generation app that analyzes custom documents and provides intelligent responses.",
      image: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["LangChain", "Vector DB", "React", "Python"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      title: "Voice-to-AI Assistant",
      description: "Real-time voice conversation with AI using Whisper for speech-to-text and GPT for responses.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Whisper", "OpenAI", "WebRTC", "Node.js"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Smart Resume Analyzer",
      description: "AI-powered resume analyzer that matches candidates with job requirements and provides optimization suggestions.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["NLP", "React", "Express", "TensorFlow"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Personal Tutor AI",
      description: "Adaptive learning assistant with memory capabilities using LangChain and vector databases.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["LangChain", "Memory", "Next.js", "Pinecone"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Chrome Extension Chatbot",
      description: "Browser extension that provides AI assistance while browsing, with context-aware responses.",
      image: "https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Chrome API", "OpenAI", "JavaScript", "CSS"],
      liveDemo: "#",
      github: "#",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore my latest work in AI and full-stack development, showcasing innovative solutions 
            that combine cutting-edge technology with practical applications.
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
                  ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg'
              } ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode ? 'from-gray-900/80' : 'from-white/80'
                }`} />
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{project.title}</h3>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        isDarkMode 
                          ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
                          : 'bg-blue-100 text-blue-700 border-blue-300/50'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <Play size={16} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
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