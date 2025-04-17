'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb } from 'react-icons/si';
import { ReactTyped } from 'react-typed';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-5 right-5 z-50">
        <div className="backdrop-blur-md bg-white/10 rounded-full p-3 flex gap-4">
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-32"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block backdrop-blur-lg bg-white/5 rounded-lg px-6 py-2 text-sm"
            >
              👋 Welcome to my portfolio
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Prateek Joshi
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ReactTyped
                strings={[
                  'Full Stack Developer',
                  'Web Developer',
                  'Frontend Developer',
                  'Backend Developer'
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="mr-2"
              />
              crafting digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-full transition-all transform hover:scale-105">
                Get in Touch
              </a>
              <div className="flex gap-4 items-center">
                <a href="https://github.com/prateek2401" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition-colors">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20"></div>
              <Image
                src="/images/Photo.jpeg"
                alt="Prateek Joshi"
                fill
                className="rounded-full object-cover shadow-2xl border-4 border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" />, description: 'Web Development' },
              { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#339933]" />, description: 'Backend Development' },
              { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#F7DF1E]" />, description: 'Web Development' },
              { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" />, description: 'Type-Safe Development' },
              { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" />, description: 'Frontend Development' },
              { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, description: 'Styling & Design' },
              { name: 'Git', icon: <FaGitAlt size={40} className="text-[#F05032]" />, description: 'Version Control' },
              { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" />, description: 'Database Management' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="backdrop-blur-md bg-white/5 p-6 rounded-xl text-center hover:bg-white/10 transition-all transform hover:scale-105 flex flex-col items-center gap-4 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/90 px-4 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 whitespace-nowrap">
                  {skill.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section 
        id="expertise"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md"
            >
              <div className="w-full h-[300px] relative">
                <Image
                  src="/images/web-dev.jpg"
                  alt="Web Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 group-hover:from-black/40 group-hover:to-black/80 transition-all duration-300">
                <div className="absolute bottom-0 p-8 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Modern web applications using React, Next.js, and TailwindCSS
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md"
            >
              <div className="w-full h-[300px] relative">
                <Image
                  src="/images/backend-dev.jpg"
                  alt="Backend Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 group-hover:from-black/40 group-hover:to-black/80 transition-all duration-300">
                <div className="absolute bottom-0 p-8 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">Backend Development</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Scalable backend solutions with Node.js, Express, and MongoDB
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}