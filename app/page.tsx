'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import { Orbitron } from 'next/font/google'
import { FaArrowRight } from 'react-icons/fa';
import Typed from 'typed.js';

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home() {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false);
  const [showHiringFields, setShowHiringFields] = useState(false);
  const [formName, setFormName] = useState('');
  const el = useRef(null);

  // Add form name handler
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(e.target.value);
  };

  // Add handleReasonChange function
  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowHiringFields(e.target.value === 'hiring');
  };

  // Typing effect
  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          'Full Stack Developer',
          'Web Developer',
          'API Specialist',
          'Cloud Enthusiast'
        ],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  // Form visibility handler
  useEffect(() => {
    if (isQueryFormOpen) {
      const reasonSelect = document.getElementById('reason');
      const hiringDetails = document.querySelector('.hiring-details');

      const handleChange = (e: Event) => {
        if ((e.target as HTMLSelectElement).value === 'hiring') {
          hiringDetails?.classList.remove('hidden');
        } else {
          hiringDetails?.classList.add('hidden');
        }
      };

      reasonSelect?.addEventListener('change', handleChange);

      return () => {
        reasonSelect?.removeEventListener('change', handleChange);
      };
    }
  }, [isQueryFormOpen]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-x-hidden">
      {/* Rest of your JSX remains the same */}
      {/* Hero section with typing effect */}
      {/* Hero section */}
      <div className="pt-14 pb-6 flex items-center justify-center bg-gradient-to-r from-gray-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Hello, I'm Prateek
          </h1>
          <div className="text-base md:text-xl font-medium">
            <span className="mr-1.5 text-gray-200">I'm a</span>
            <span ref={el} className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"></span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <header className="w-full bg-white/80 backdrop-blur-md py-1.5 px-6 shadow-sm border-b border-purple-100">
          <nav className="max-w-7xl mx-auto flex justify-between items-center h-10">
            <div className="flex items-center gap-4">
              <div className={`${orbitron.className} text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300`}>
                PJ
              </div>
              <div className="hidden md:flex gap-2">
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full text-xs text-purple-600 font-medium">Java</span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-xs text-blue-600 font-medium">React.js</span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-green-100 to-green-50 rounded-full text-xs text-green-600 font-medium">Node.js</span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full text-xs text-orange-600 font-medium">AWS</span>
              </div>
            </div>
            <ul className="flex gap-8">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm text-gray-700 hover:text-purple-600 transition-all duration-300 relative group font-medium"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>

      {/* About Section with Instagram-inspired design */}
      <section id="about" className="pt-32 pb-10 px-8 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative">
          {/* Instagram-style profile card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-purple-100/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image with Stories-like ring */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 animate-spin-slow p-1"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-white">
                  <Image
                    src="/images/Photo.jpeg"
                    alt="Profile"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Prateek Joshi</h2>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setIsQueryFormOpen(true)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Follow
                    </button>
                    <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-all duration-300">
                      Message
                    </button>
                  </div>
                </div>

                {/* Stats with hover effects */}
                <div className="flex justify-center md:justify-start gap-12 mb-6">
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-2xl text-gray-800 group-hover:text-purple-600 transition-colors">6+</div>
                    <div className="text-sm text-gray-500 group-hover:text-purple-500 transition-colors">Years</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-2xl text-gray-800 group-hover:text-purple-600 transition-colors">50+</div>
                    <div className="text-sm text-gray-500 group-hover:text-purple-500 transition-colors">Projects</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-2xl text-gray-800 group-hover:text-purple-600 transition-colors">100%</div>
                    <div className="text-sm text-gray-500 group-hover:text-purple-500 transition-colors">Success</div>
                  </div>
                </div>
                
                {/* Bio with gradient text */}
                <div className="space-y-3">
                  <p className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Full Stack Developer | Cloud Enthusiast
                  </p>
                  <p className="text-gray-600">Building scalable applications and implementing innovative solutions for complex business challenges.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors cursor-pointer">#developer</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">#cloud</span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium hover:bg-pink-100 transition-colors cursor-pointer">#fullstack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Experience Section - Professional Journey */}
      <section className="py-16 px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Consultant",
                company: "ADP",
                period: "Dec 2024 - Present",
                skills: ["Cloud", "AWS", "System Design"],
              },
              {
                title: "Senior Associate",
                company: "Publicis Sapient",
                period: "Oct 2021 - Dec 2024",
                skills: ["AWS Lambda", "Microservices"],
              },
              {
                title: "Software Engineer",
                company: "FarEye",
                period: "Dec 2019 - Oct 2021",
                skills: ["AWS", "PostgreSQL", "Node.js"],
              },
              {
                title: "Software Engineer",
                company: "Comviva",
                period: "Aug 2017 - Nov 2019",
                skills: ["Java", "Spring Boot"],
              }
            ].map((job, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">{job.title}</h4>
                    <p className="text-purple-600 font-medium">{job.company} • {job.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            {/* Web Development */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166"
                  alt="Web Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
                  <p className="text-gray-200 mb-4">
                    Modern web applications using React, Next.js, and TailwindCSS
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">React</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Next.js</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">TailwindCSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* API Development */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative h-64 w-full">
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
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative h-64 w-full">
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

            {/* UI/UX Design */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d"
                  alt="UI/UX Design"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
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
                        onChange={handleNameChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800"
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">What can I help you with?</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-800"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Website Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="api-development">API Development</option>
                      <option value="integration">System Integration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Project Details</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800"
                      placeholder="Please describe your project requirements, goals, timeline, and budget expectations..."
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