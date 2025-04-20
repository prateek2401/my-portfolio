'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import { Orbitron } from 'next/font/google'
import { FaArrowRight } from 'react-icons/fa';
import Typed from 'typed.js';

const orbitron = Orbitron({ subsets: ['latin'] })

import Chat from '../components/Chat';

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
      <div className="pt-8 pb-4 flex items-center justify-center bg-gradient-to-r from-gray-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Hello, I'm Prateek
          </h1>
          <div className="text-sm md:text-base font-medium">
            <span className="mr-1 text-gray-200">I'm a</span>
            <span ref={el} className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"></span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <header className="w-full bg-white/10 backdrop-blur-lg py-1.5 px-6 border-b border-white/10">
          <nav className="max-w-7xl mx-auto flex justify-between items-center h-10">
            <div className="flex items-center gap-4">
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-purple-400/50 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500 cursor-pointer">
                <Image
                  src="/images/Photo.jpeg"
                  alt="Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden md:flex gap-1.5">
                <span className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-medium border border-white/10">Java</span>
                <span className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-medium border border-white/10">React.js</span>
                <span className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-medium border border-white/10">Node.js</span>
                <span className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-medium border border-white/10">AWS</span>
              </div>
            </div>
            <ul className="flex gap-6">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-xs text-white/70 hover:text-white transition-all duration-300 relative group font-medium tracking-wide"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>

      {/* About Section with Instagram-inspired design */}
      <section id="about" className="pt-8 pb-4 px-4 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="max-w-2xl mx-auto relative">
          {/* Instagram-style profile card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-4 hover:shadow-purple-100/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 animate-spin-slow p-1"></div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-white">
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
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg font-bold text-gray-800">Prateek Joshi</h2>
                  <div className="flex gap-1.5">
                    <button 
                      onClick={() => setIsQueryFormOpen(true)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-0.5 rounded-full text-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Follow
                    </button>
                    <button className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs hover:bg-gray-200 transition-all duration-300">
                      Message
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center md:justify-start gap-4 mb-2">
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-xl text-gray-800 group-hover:text-purple-600 transition-colors">6+</div>
                    <div className="text-xs text-gray-500 group-hover:text-purple-500 transition-colors">Years</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-xl text-gray-800 group-hover:text-purple-600 transition-colors">50+</div>
                    <div className="text-xs text-gray-500 group-hover:text-purple-500 transition-colors">Projects</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-xl text-gray-800 group-hover:text-purple-600 transition-colors">100%</div>
                    <div className="text-xs text-gray-500 group-hover:text-purple-500 transition-colors">Success</div>
                  </div>
                </div>
                
                {/* Bio */}
                <div className="space-y-1">
                  <p className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-sm">
                    Full Stack Developer | Cloud Enthusiast
                  </p>
                  <p className="text-gray-600 text-xs">Building scalable applications and implementing innovative solutions for complex business challenges.</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    <span className="px-1.5 py-0.5 bg-purple-50 text-purple-600 rounded-full text-[10px] font-medium hover:bg-purple-100 transition-colors cursor-pointer">#developer</span>
                    <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-medium hover:bg-blue-100 transition-colors cursor-pointer">#cloud</span>
                    <span className="px-1.5 py-0.5 bg-pink-50 text-pink-600 rounded-full text-[10px] font-medium hover:bg-pink-100 transition-colors cursor-pointer">#fullstack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Experience & Expertise Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
              Experience & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Professional Journey */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-purple-400">⚡</span> Professional Journey
              </h3>
              <div className="space-y-4 relative">
                <div className="absolute left-[17px] top-[30px] bottom-8 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                {[
                  {
                    title: "Consultant",
                    company: "ADP",
                    period: "Dec 2024 - Present",
                    icon: "🚀"
                  },
                  {
                    title: "Senior Associate",
                    company: "Publicis Sapient",
                    period: "Oct 2021 - Dec 2024",
                    icon: "💼"
                  },
                  {
                    title: "Software Engineer",
                    company: "FarEye",
                    period: "Dec 2019 - Oct 2021",
                    icon: "💻"
                  },
                  {
                    title: "Software Engineer",
                    company: "Comviva",
                    period: "Aug 2017 - Nov 2019",
                    icon: "🔧"
                  }
                ].map((job, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 w-7 h-7 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-500">
                      <span className="text-base">{job.icon}</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <h4 className="font-bold text-white text-base">{job.title}</h4>
                      <p className="text-purple-300 text-sm">{job.company}</p>
                      <p className="text-xs text-gray-400">{job.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-purple-400">🎯</span> Technical Skills
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Java/Spring Boot", level: 90, color: "from-red-400 to-orange-400" },
                  { skill: "React.js", level: 80, color: "from-blue-400 to-cyan-400" },
                  { skill: "Node.js", level: 75, color: "from-green-400 to-emerald-400" },
                  { skill: "AWS", level: 70, color: "from-yellow-400 to-amber-400" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex justify-between items-center mb-1.5">
                      <h3 className="text-white font-bold text-sm">{item.skill}</h3>
                      <span className="text-xs text-purple-300">{item.level}%</span>
                    </div>
                    <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Core Areas */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { area: "Backend", level: "Expert", icon: "🔧" },
                    { area: "Frontend", level: "Advanced", icon: "🎨" },
                    { area: "Cloud", level: "Advanced", icon: "☁️" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-all duration-300">
                      <div className="text-xl mb-1">{item.icon}</div>
                      <div className="font-medium text-white text-sm">{item.area}</div>
                      <div className="text-xs text-purple-300">{item.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-8 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              My Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {/* Web Development */}
            <div className="group relative h-32 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166"
                  alt="Web Development"
                  fill
                  className="object-cover filter brightness-[0.85] group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="relative h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <h3 className="text-base font-bold text-white mb-1">Web Development</h3>
                <div className="flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">React</span>
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">Next.js</span>
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">Java</span>
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">SpringBoot</span>
                </div>
              </div>
            </div>

            {/* Similar structure for other cards with updated classes */}
            <div className="group relative h-32 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1623282033815-40b05d96c903"
                  alt="API Development"
                  fill
                  className="object-cover filter brightness-[0.85] group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="relative h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <h3 className="text-base font-bold text-white mb-1">API Development</h3>
                <div className="flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">Node.js</span>
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">REST</span>
                </div>
              </div>
            </div>

            <div className="group relative h-32 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="Integration Development"
                  fill
                  className="object-cover filter brightness-[0.85] group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="relative h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <h3 className="text-base font-bold text-white mb-1">Integration Dev</h3>
                <div className="flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">AWS</span>
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">API</span>
                </div>
              </div>
            </div>

            <div className="group relative h-32 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d"
                  alt="UI/UX Design"
                  fill
                  className="object-cover filter brightness-[0.85] group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="relative h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <h3 className="text-base font-bold text-white mb-1">UI/UX Design</h3>
                <div className="flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">Figma</span>
                  <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-white">Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
              Services & Pricing
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 p-0.5">
                  <div className="w-full h-full bg-black/50 backdrop-blur-xl rounded-[7px] flex items-center justify-center">
                    <span className="text-xl">💻</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Web Development</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-green-400">✓</span> Websites with Admin Panel
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-green-400">✓</span> Starting from ₹15,000
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-green-400">✓</span> Custom pricing for dynamic features
                </div>
              </div>
              <button 
                onClick={() => setIsQueryFormOpen(true)}
                className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-white px-4 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium"
              >
                Get Quote →
              </button>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 p-0.5">
                  <div className="w-full h-full bg-black/50 backdrop-blur-xl rounded-[7px] flex items-center justify-center">
                    <span className="text-xl">🎨</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Graphic Design</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-green-400">✓</span> UI/UX Design
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-green-400">✓</span> Logo & Brand Identity
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-green-400">✓</span> Custom Design Solutions
                </div>
              </div>
              <a 
                href="https://mellificdesigns.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-white px-4 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium inline-block text-center"
              >
                Visit Mellific Designs →
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
      <section id="contact" className="py-8 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-purple-900/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-2xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 mb-4 text-sm">Ready to bring your ideas to life? Let's make it happen!</p>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-2 max-w-lg mx-auto">
            <a href="https://wa.me/918285803831" target="_blank" rel="noopener noreferrer"
               className="bg-white/10 backdrop-blur-md rounded-md p-2 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-base mb-0.5">📱</div>
              <h3 className="text-white font-medium text-xs mb-0.5">WhatsApp</h3>
              <p className="text-gray-400 text-[10px]">+91 8285803831</p>
            </a>

            <a href="https://www.linkedin.com/in/prateek-joshi-734b55ba/" target="_blank" rel="noopener noreferrer"
               className="bg-white/10 backdrop-blur-md rounded-md p-2 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-base mb-0.5">💼</div>
              <h3 className="text-white font-medium text-xs mb-0.5">LinkedIn</h3>
              <p className="text-gray-400 text-[10px]">Connect with me</p>
            </a>

            <a href="mailto:joshi2401@gmail.com"
               className="bg-white/10 backdrop-blur-md rounded-md p-2 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-base mb-0.5">✉️</div>
              <h3 className="text-white font-medium text-xs mb-0.5">Email</h3>
              <p className="text-gray-400 text-[10px]">joshi2401@gmail.com</p>
            </a>
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 text-gray-400 text-xs">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Available for freelance projects
          </div>
        </div>
      </section>
      <Chat />
    </main>
  )
}

{/* Add Chat component here, before closing main tag */}

// Remove this line as it's outside the component
// <Chat />