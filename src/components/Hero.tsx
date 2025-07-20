import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Sparkles,
  Brain,
} from "lucide-react";

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [typedText, setTypedText] = useState("");
  const aiSkills = [
    "MERN Stack",
    "LLMs & OpenAI",
    "Generative AI",
    "Test Automation",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentSkill = aiSkills[currentSkillIndex];

    if (typedText.length < currentSkill.length) {
      timeout = setTimeout(() => {
        setTypedText(currentSkill.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setCurrentSkillIndex((prev) => (prev + 1) % aiSkills.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentSkillIndex]);

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const particleVariants = {
    animate: {
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <section
      id="home"
      className={`min-h-screen relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}
    >
      {/* Animated Background Grid */}
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "opacity-10" : "opacity-5"
        }`}
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]"
          } bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]`}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-2 h-2 rounded-full ${
              isDarkMode ? "bg-blue-400" : "bg-blue-500"
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neural Network Visualization */}
      <div
        className={`absolute inset-0 overflow-hidden ${
          isDarkMode ? "opacity-5" : "opacity-3"
        }`}
      >
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Neural network connections */}
          <defs>
            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor={isDarkMode ? "#3B82F6" : "#2563EB"}
                stopOpacity={isDarkMode ? "0.4" : "0.2"}
              />
              <stop
                offset="100%"
                stopColor={isDarkMode ? "#8B5CF6" : "#7C3AED"}
                stopOpacity={isDarkMode ? "0.2" : "0.1"}
              />
            </linearGradient>
          </defs>

          {/* Animated connections */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.path
              key={i}
              d={`M${100 + i * 100},150 Q${200 + i * 80},300 ${
                150 + i * 90
              },450`}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Neural nodes */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.circle
              key={i}
              cx={100 + (i % 4) * 200}
              cy={150 + Math.floor(i / 4) * 150}
              r="8"
              fill={isDarkMode ? "#3B82F6" : "#2563EB"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30"
                  : "bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300/50"
              }`}
            >
              <Brain
                className={`w-5 h-5 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <span
                className={`font-semibold ${
                  isDarkMode ? "text-blue-400" : "text-blue-700"
                }`}
              >
                Full Stack Developer & AI Enthusiast
              </span>
              <Sparkles
                className={`w-4 h-4 ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
              />
            </motion.div>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Building Smart Solutions
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={isDarkMode ? "text-white" : "text-gray-900"}
              >
                with Code and Intelligence
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`text-xl md:text-2xl mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Full Stack Developer | AI Explorer | Automation Tester |
              Empowering the Future with Scalable Solutions
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className={`text-lg md:text-xl h-8 flex items-center justify-center mb-2 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              <span className="mr-2">Specializing in: </span>
              <span
                className={`font-mono min-w-[200px] text-left ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                {typedText}
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-3 shadow-lg ${
                !isDarkMode ? "shadow-blue-200" : ""
              }`}
            >
              <ExternalLink size={20} />
              View My Work
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/18aZ1ddkuVBzxRv49GIyHSne5mYa5_8Dn/view?usp=sharing"
              download="Monika_Muniraju.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
                isDarkMode
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {[
              { label: "AI Projects", value: "8+" },
              { label: "Full Stack Projects", value: "3+" },
              { label: "Code Commits", value: "100+" },
              { label: "Years Experience", value: "2+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`text-2xl md:text-3xl font-bold mb-1 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            animate={floatingAnimation}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <ChevronDown
                size={32}
                className={isDarkMode ? "text-blue-400" : "text-blue-600"}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
