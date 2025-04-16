'use client';

import React, { useState } from "react";
import Image from 'next/image'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home() {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md py-4 px-8 shadow-sm z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className={`${orbitron.className} text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors duration-300`}>
              Prateek Joshi
            </div>
            <div className="hidden md:flex gap-2">
              <span className="px-3 py-1 bg-purple-100 rounded-full text-sm text-purple-600 font-medium">Java</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-600 font-medium">React.js</span>
              <span className="px-3 py-1 bg-green-100 rounded-full text-sm text-green-600 font-medium">Node.js</span>
              <span className="px-3 py-1 bg-orange-100 rounded-full text-sm text-orange-600 font-medium">AWS</span>
            </div>
          </div>
          <ul className="flex gap-12">
            {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-purple-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="pt-32 pb-10 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/Photo.jpeg"
                alt="Profile"
                fill
                className="object-cover object-right"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">Prateek Joshi</h2>
                <p className="text-gray-200">Full Stack Developer</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">About Me</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-purple-600">Experienced Software Engineer</span> with over 
                    <span className="font-bold text-blue-600"> 6 years</span> of expertise in 
                    <span className="font-semibold text-purple-600"> Full Stack Development</span>, 
                    <span className="font-semibold text-blue-600"> Cloud Technologies</span>, and 
                    <span className="font-semibold text-purple-600"> Enterprise Solutions</span>. 
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Currently working as a <span className="font-bold text-blue-600">Consultant at ADP</span>, focusing on building scalable applications and implementing innovative solutions for complex business challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Moved to its own section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Professional Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="border-l-4 border-blue-600 pl-4 mb-8">
                <h4 className="font-black text-xl text-black">Consultant</h4>
                <p className="font-extrabold text-gray-700">ADP • Dec 2024 - Present</p>
                <p className="font-semibold text-gray-600">Hyderabad, Telangana, India</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-black text-xl text-black">Senior Associate</h4>
                <p className="font-extrabold text-gray-700">Publicis Sapient • Oct 2021 - Dec 2024</p>
                <p className="font-semibold text-gray-600">Gurugram, Haryana, India</p>
                <p className="font-semibold text-gray-600">AWS Lambda, Amazon Web Services (AWS), Cloud Technologies</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <div className="border-l-4 border-blue-600 pl-4 mb-8">
                <h4 className="font-black text-xl text-black">Software Engineer</h4>
                <p className="font-extrabold text-gray-700">FarEye • Dec 2019 - Oct 2021</p>
                <p className="font-semibold text-gray-600">Noida Area, India</p>
                <p className="font-semibold text-gray-600">Amazon Web Services (AWS), PostgreSQL</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-black text-xl text-black">Software Engineer</h4>
                <p className="font-extrabold text-gray-700">Comviva • Aug 2017 - Nov 2019</p>
                <p className="font-semibold text-gray-600">Gurgaon, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            My Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166"
                  alt="Web Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Modern web applications using React, Next.js, and TailwindCSS
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 rounded-full text-sm text-purple-600 font-medium">React</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Next.js</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">TailwindCSS</span>
                </div>
              </div>
            </div>

            {/* Other project cards - update height for all image containers */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1623282033815-40b05d96c903"
                  alt="API Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">API Development</h3>
                  <p className="text-gray-200 mb-4">
                    RESTful and GraphQL APIs with Node.js and Express
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Node.js</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">GraphQL</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">REST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Development */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="Integration Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Integration Development</h3>
                  <p className="text-gray-200 mb-4">
                    Seamless third-party integrations and microservices architecture
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Microservices</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">AWS</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d"
                  alt="Graphic Design"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Graphic Design</h3>
                  <p className="text-gray-200 mb-4">
                    Creative UI/UX design solutions for web and mobile applications
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">UI/UX</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Figma</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Services & Pricing
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">Custom websites tailored to your needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span> Static Website with Admin Panel
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span> Starting from ₹15,000
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span> Custom pricing for dynamic features
                </li>
              </ul>
              <button 
                onClick={() => setIsQueryFormOpen(true)}
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Quote
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Graphic Design</h3>
              <p className="text-gray-600 mb-6">Professional design solutions</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span> UI/UX Design
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span> Logo & Brand Identity
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span> Custom Design Solutions
                </li>
              </ul>
              <a href="https://mellificdesigns.com" target="_blank" rel="noopener noreferrer" 
                 className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Visit Mellific Designs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Query Form Modal */}
      {isQueryFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl transform transition-all">
            <div className="relative">
              <button 
                onClick={() => setIsQueryFormOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
              
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-2 text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    Let's Build Something Amazing
                  </span>
                </h2>
                <p className="text-gray-600 text-center mb-8">Share your project idea and let's bring it to life</p>
                
                <form 
                  action="https://formsubmit.co/joshi2401@gmail.com" 
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">What can I help you with?</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Website Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="api-development">API Development</option>
                      <option value="integration">System Integration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Tell me about your project</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Share your project requirements, goals, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg"
                  >
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="mailto:joshi2401@gmail.com" 
               className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">joshi2401@gmail.com</p>
            </a>
            <a href="https://wa.me/918285803831"
               target="_blank"
               rel="noopener noreferrer" 
               className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">+91 8285803831</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}