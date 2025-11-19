import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2, Palette, Zap, BookOpen, Coffee, Music, Plane, Github, Linkedin, Mail, Sparkles, Rocket, ArrowRight } from 'lucide-react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const skills = [
    { 
      icon: <Code2 className="w-6 h-6" />, 
      title: "Frontend Development", 
      items: ["React","Bootstrap", "Tailwind CSS"]
    },
    { 
      icon: <Code2 className="w-6 h-6" />, 
      title: "Backend Development", 
      items: ["PHP", "Express", "Python"]
    },
    { 
      icon: <Palette className="w-6 h-6" />, 
      title: "Design & Tools", 
      items: ["Figma", "UI/UX Design", "Canva"]
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "College of Our Lady of Mercy",
      year: "2022 - 2026",
      desc: "4th Year"
    },
    {
      degree: "Full Stack Web Development AI prompt",
      school: "Chatgpt,Claude.ai",
      desc: "Intensive program covering modern web development practices and frameworks"
    }
  ];

  const hobbies = [
    { icon: <Coffee className="w-6 h-6" />, title: "Coffee Enthusiast", desc: "Love exploring different brewing methods" },
    { icon: <Music className="w-6 h-6" />, title: "Music", desc: "Playing guitar and discovering new artists" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Reading", desc: "Tech blogs, sci-fi novels, and philosophy" },
    { icon: <Plane className="w-6 h-6" />, title: "Travel", desc: "Exploring new cultures and cuisines" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        
        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" 
             style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-medium" 
             style={{ transform: `translateY(${-scrollY * 0.2}px)` }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float-fast" 
             style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-slow" 
             style={{ transform: `translateY(${scrollY * 0.25}px)` }} />
        
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Navigation Bar with glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-blue-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <span className="relative text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Home
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 font-medium group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </Link>
              ))}
              <Link 
                to="/resume" 
                className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 font-medium group"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 hover:bg-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-blue-500/20">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="relative block px-4 py-3 rounded-lg text-slate-300 hover:text-white transition-all duration-200 border border-transparent hover:border-blue-500/30 group overflow-hidden"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="relative block px-4 py-3 rounded-lg text-slate-300 hover:text-white transition-all duration-200 border border-transparent hover:border-blue-500/30 group overflow-hidden"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
              </Link>
              <Link 
                to="/projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="relative block px-4 py-3 rounded-lg text-slate-300 hover:text-white transition-all duration-200 border border-transparent hover:border-blue-500/30 group overflow-hidden"
              >
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="relative block px-4 py-3 rounded-lg text-slate-300 hover:text-white transition-all duration-200 border border-transparent hover:border-blue-500/30 group overflow-hidden"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
              </Link>
              <Link 
                to="/resume" 
                onClick={() => setMobileMenuOpen(false)}
                className="relative block px-4 py-3 rounded-lg text-slate-300 hover:text-white transition-all duration-200 border border-transparent hover:border-blue-500/30 group overflow-hidden"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Get to Know Me</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative group/avatar">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 group-hover/avatar:opacity-100 transition duration-500 animate-pulse-slow"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl opacity-50 group-hover/avatar:opacity-75 transition duration-500"></div>
                  
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 transform group-hover/avatar:scale-105 transition-transform duration-500">
                    <img 
                      src="/portfolio-website.io/pogi.jpeg"  
                      alt="Profile"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Hello, Ronaldo</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    I'm a passionate full-stack developer with over 3 years of experience building web applications that make a difference. My journey in tech started with a curiosity about how things work, which quickly evolved into a love for creating elegant solutions to complex problems.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    I specialize in modern JavaScript frameworks and have a keen eye for design, ensuring that the applications I build are not only functional but also beautiful and intuitive to use.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Technical Arsenal</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div 
                key={i}
                className="group relative perspective-1000"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative p-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-500 transform-gpu group-hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
                  
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="relative w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        {skill.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item, j) => (
                        <li key={j} className="text-sm text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-medium">Academic Journey</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div 
                key={i}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative p-6 sm:p-8 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                          {edu.degree}
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </h3>
                        <p className="text-blue-400 font-medium">{edu.school}</p>
                      </div>
                      {edu.year && (
                        <span className="inline-block mt-2 sm:mt-0 px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-slate-300 text-sm">{edu.year}</span>
                      )}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{edu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400 text-sm font-medium">Personal Interests</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Beyond Coding
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, i) => (
              <div 
                key={i}
                className="group relative perspective-1000"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative p-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-500 transform-gpu group-hover:scale-105 group-hover:-translate-y-2 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="relative w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                        {hobby.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{hobby.title}</h3>
                    <p className="text-sm text-slate-400">{hobby.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Let's Work Together</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Let's Connect
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full font-semibold hover:border-blue-500 hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full font-semibold hover:border-blue-500 hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="group relative px-8 py-4 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Mail className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Email Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/yourusername" },
                { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                { icon: Mail, href: "mailto:your.email@example.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 50px); }
        }
        @keyframes gradient-shift-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, -50px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 40px) scale(1.15); }
        }
        @keyframes particle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift { animation: gradient-shift 20s ease infinite; }
        .animate-gradient-shift-reverse { animation: gradient-shift-reverse 25s ease infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-particle { animation: particle 15s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-gpu { transform: translateZ(0); }
      `}</style>
    </div>
  );
}