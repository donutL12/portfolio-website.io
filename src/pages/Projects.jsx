import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Code2, ExternalLink, Star, GitFork, Sparkles, Rocket, Zap } from 'lucide-react';

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Sparkles },
    { id: 'web', name: 'Web Apps', icon: Code2 },
    { id: 'mobile', name: 'Mobile', icon: Rocket },
  ];

  const projects = [
    { 
      title: "FinanceTracker", 
      category: "mobile",
      tech: "C#, SQLITE", 
      desc: "The Finance Tracker App is a cross-platform mobile application built using .NET MAUI, designed to help users efficiently manage their personal finances anytime and anywhere. The app provides a simple and intuitive interface for tracking income and expenses, allowing users to gain better control over their daily spending and saving habits.",
      demo: "https://demo-link.com",
      github: "https://github.com/donutL12/FinanceTracker.git",
      stars: 124,
      forks: 32,
      image: "/pera.jpg"
    },
    { 
      title: "Financial Insight", 
      category: "web",
      tech: "PHP, Tailwind, PHPMysql", 
      desc: "Finsight is an intelligent, web-based personal finance management platform designed to help users take full control of their money. Powered by AI-driven categorization and smart financial insights, Finsight automatically tracks expenses, monitors budgets, analyzes spending habits, and provides easy-to-understand recommendations to improve financial health.",
      demo: "https://finesight.page.gd/",
      github: "https://github.com/donutL12/smart_expense.git",
      stars: 89,
      forks: 21,
      image: "/finance.jpg"
    },
    { 
      title: "Finance & Banking", 
      category: "web",
      tech: "HTML, CSS, JavaScript", 
      desc: "Content management system for creative professionals. Easy-to-use interface for managing portfolios, blogs, and client work.",
      demo: "https://donutl12.github.io/Finance-Banking.io/",
      github: "https://github.com/donutL12/Finance-Banking.io.git",
      stars: 92,
      forks: 24,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Custom cursor follower */}
      <div 
        className="fixed w-6 h-6 rounded-full border-2 border-blue-400/50 pointer-events-none z-50 transition-transform duration-100"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Animated Spaceship */}
      <div className="fixed pointer-events-none z-40 animate-spaceship-orbit">
        <div className="relative">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-l from-blue-400/60 to-transparent blur-sm"></div>
          <div className="absolute inset-0 blur-lg opacity-70">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
          <svg width="40" height="40" viewBox="0 0 40 40" className="relative drop-shadow-2xl">
            <path d="M20 5 L30 20 L20 35 L10 20 Z" fill="url(#shipGradient)" stroke="#60a5fa" strokeWidth="1"/>
            <circle cx="20" cy="20" r="4" fill="#3b82f6" opacity="0.8"/>
            <circle cx="20" cy="20" r="2" fill="#60a5fa" className="animate-pulse"/>
            <path d="M10 20 L5 15 L5 25 Z" fill="url(#wingGradient)" stroke="#60a5fa" strokeWidth="0.5"/>
            <path d="M30 20 L35 15 L35 25 Z" fill="url(#wingGradient)" stroke="#60a5fa" strokeWidth="0.5"/>
            <circle cx="10" cy="20" r="3" fill="#ec4899" opacity="0.6" className="animate-pulse"/>
            <defs>
              <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-shift"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-gradient-shift-reverse"></div>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" 
             style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-medium" 
             style={{ transform: `translateY(${-scrollY * 0.2}px)` }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float-fast" 
             style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-slow" 
             style={{ transform: `translateY(${scrollY * 0.25}px)` }} />
        
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
        
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
              <Link to="/projects" className="relative text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Projects
              </Link>
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
      <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Sparkles className="w-4 h-4 text-blue-400 relative z-10" />
              <span className="relative z-10 text-blue-400 text-sm font-medium">Portfolio Showcase</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient drop-shadow-2xl">
            My Projects
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            A collection of my work showcasing innovative solutions, creative designs, and technical expertise across various domains
          </p>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                  selectedCategory === cat.id
                    ? 'scale-105'
                    : ''
                }`}
              >
                {selectedCategory === cat.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
                {selectedCategory === cat.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                {selectedCategory !== cat.id && (
                  <div className="absolute inset-0 bg-slate-800/50 border border-slate-700"></div>
                )}
                {selectedCategory !== cat.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300"></div>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Grid */}
      <section className="relative py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, i) => (
              <div 
                key={i}
                className="group relative perspective-1000"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-75 transition duration-500 animate-gradient-xy"></div>
                
                <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 transform-gpu group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
                  
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500"></div>
                  </div>

                  <div className="relative p-6 z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                          <Code2 className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 rounded-full border border-slate-600/50">
                          <Star className="w-3 h-3 text-yellow-400" /> {project.stars}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 rounded-full border border-slate-600/50">
                          <GitFork className="w-3 h-3 text-blue-400" /> {project.forks}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-sm text-blue-400 mb-3 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      {project.tech}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.desc}
                    </p>
                    
                    <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative flex-1 px-4 py-2 overflow-hidden rounded-lg transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative text-sm text-white font-medium flex items-center justify-center gap-1">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex-1 px-4 py-2 border border-slate-600 hover:border-blue-500 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-blue-500/10"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <Code2 className="relative w-16 h-16 text-slate-600 mx-auto" />
              </div>
              <p className="text-xl text-slate-400">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Let's Work Together</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Like What You See?
                </h2>
                
                <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate on your next project and bring your ideas to life with innovative solutions
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2 text-white">
                      Start a Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/donutL12", label: "GitHub" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/ronaldo-manla-undefined-627108353/", label: "LinkedIn" },
                      { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target={social.href.startsWith('http') ? "_blank" : undefined}
                        rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="group/social relative p-4 rounded-full transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 group-hover/social:border-blue-500 transition-colors duration-300"></div>
                        <social.icon className="w-6 h-6 relative z-10 group-hover/social:text-blue-400 transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/donutL12" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ronaldo-manla-undefined-627108353/" },
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
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spaceship-orbit {
          0% { 
            left: 10%; 
            top: 20%;
            transform: rotate(0deg);
          }
          25% { 
            left: 80%; 
            top: 30%;
            transform: rotate(90deg);
          }
          50% { 
            left: 85%; 
            top: 70%;
            transform: rotate(180deg);
          }
          75% { 
            left: 15%; 
            top: 80%;
            transform: rotate(270deg);
          }
          100% { 
            left: 10%; 
            top: 20%;
            transform: rotate(360deg);
          }
        }
        .animate-gradient-shift { animation: gradient-shift 20s ease infinite; }
        .animate-gradient-shift-reverse { animation: gradient-shift-reverse 25s ease infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-particle { animation: particle 15s linear infinite; }
        .animate-gradient-xy { animation: gradient-xy 3s ease infinite; background-size: 200% 200%; }
        .animate-gradient { background-size: 200% auto; animation: gradient-xy 3s linear infinite; }
        .animate-spaceship-orbit { animation: spaceship-orbit 30s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-gpu { transform: translateZ(0); }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}