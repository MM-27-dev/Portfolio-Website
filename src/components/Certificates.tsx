import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

interface Certificate {
  title: string;
  platform: string;
  image: string;
  link: string;
  issued: string;
}

interface CertificatesProps {
  isDarkMode: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ isDarkMode }) => {
  const certificates: Certificate[] = [
    {
      title: "JavaScript (Basic)",
      platform: "HackerRank",
      image: "/js_basic.png",
      link: "https://www.hackerrank.com/certificates/adc7a13e21ce",
      issued: "June 2025",
    },
    {
      title: "JavaScript (Intermediate)",
      platform: "HackerRank",
      image: "/js_intermidiate.png",
      link: "https://www.hackerrank.com/certificates/afe175130201",
      issued: "June 2025",
    },
    {
      title: "React",
      platform: "HackerRank",
      image: "/React.png",
      link: "https://www.hackerrank.com/certificates/21cc06397115",
      issued: "July 2025",
    },
    {
      title: "Frontend Developer (React)",
      platform: "HackerRank",
      image: "/Frontend.png",
      link: "https://www.hackerrank.com/certificates/88232b5a1f72",
      issued: "July 2025",
    },
    {
      title: "JavaScript Mastery",
      platform: "NamasteDev",
      image: "https://namastedev.com/assets/images/namaste-javascript.webp",
      link: "https://namastedev.com/monikamonika1379/certificates/namaste-javascript",
      issued: "June 2025",
    },
    {
      title: "React Essentials",
      platform: "NamasteDev",
      image: "https://namastedev.com/assets/images/namaste-react.webp",
      link: "https://namastedev.com/monikamonika1379/certificates/namaste-react",
      issued: "May 2025",
    },
  ];

  return (
    <section
      id="certificates"
      className={`py-3 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-2"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Recognitions from HackerRank and NamasteDev for my expertise in
            JavaScript, React, and frontend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-5 rounded-xl border shadow-md transition-all duration-300 cursor-pointer ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                  : "bg-gray-50 border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {cert.platform} • {cert.issued}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-green-500 gap-2 text-sm mt-2">
                <BadgeCheck className="w-4 h-4" />
                Verified Certificate
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
