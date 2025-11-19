
import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Download, ArrowLeft, Briefcase, GraduationCap, Award, Code2, Terminal, Database, Palette, ArrowRight, User, Phone, MapPin, Sparkles, Zap } from 'lucide-react';

export default function Resume() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const profile = {
    name: "Ronaldo Manla",
    title: "Front End na May Back End",
    bio: "I'm a passionate full-stack developer with a love for creating beautiful and functional web applications. My journey in tech started with curiosity and evolved into a career focused on building user-centric solutions. I believe in writing clean, maintainable code and staying current with the latest web technologies.",
    location: "Tuktukan, Guiguinto, Bulacan",
    email: "mustangshilvy09@gmail.com",
    phone: "+639353904343",
      image: "/portfolio-website.io/pogi.jpeg"
  };

  const experience = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Building responsive and modern web applications for clients using cutting-edge technologies.",
      achievements: [
        "Academic projects from your coursework",
        "Completed numerous projects, showcasing AI integrations",
        "People Engineers as final project"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science Information Technology",
      school: "College of Our Lady of Mercy",
      period: "2022 - 2026",
      gpa: "Current Student",
      highlights: [
        "Focused on web development and software engineering",
        "Active participant in coding competitions",
        "Building portfolio of real-world projects"
      ]
    }
  ];

  const technicalSkills = {
    "Front End": ["HTML", "CSS", "JavaScript", "React"],
    "Back End": ["PHP", "Python", "C#", "MySQL"]
  };

  const hobbies = [
    "Music",
    "Watch Anime",
    "Play Mobile",
    "Travel"
  ];


  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/portfolio-website.io/resumes.pdf';
    link.download = 'Ronaldo_Manla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        
        {/* Floating orbs */}
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
              <a href="/" className="relative text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Resume
              </a>
            </div>

            {/* Desktop Navigation */}
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

            {/* Mobile menu button */}
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
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            {/* Enhanced Profile Image */}
            <div className="mb-8 flex justify-center perspective-1000">
              <div className="relative group transform-gpu hover:scale-105 transition-transform duration-500">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 group-hover:blur-2xl transition duration-500 animate-pulse-slow"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-50 group-hover:opacity-75 transition duration-500 animate-spin-slow"></div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 transform group-hover:rotate-3 transition-transform duration-500">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Orbiting rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping-slow"></div>
                <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-ping-slower"></div>
              </div>
            </div>
            
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative text-blue-400 text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Professional Resume
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 ">
              {profile.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              {profile.title}
            </p>
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              <Download className="w-5 h-5 relative z-10 text-white" />
              <span className="relative z-10 text-white">Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="relative p-3 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-600/30 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
              <User className="w-6 h-6 text-green-400 relative z-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
              About Me
            </h2>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-green-500/50 transition-all duration-300 transform-gpu group-hover:scale-[1.01] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 via-blue-600/0 to-green-600/0 group-hover:from-green-600/10 group-hover:via-blue-600/10 group-hover:to-green-600/10 transition-all duration-500"></div>
              
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">{profile.bio}</p>
              
              <div className="grid sm:grid-cols-3 gap-4 relative z-10">
                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-sm text-slate-200">{profile.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="text-sm text-slate-200">{profile.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-sm text-slate-200">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="relative p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
              <Briefcase className="w-6 h-6 text-blue-400 relative z-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-300 transform-gpu group-hover:scale-[1.01] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
                  
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block px-4 py-2 bg-slate-700/50 rounded-full text-sm text-slate-300 font-medium self-start border border-slate-600/50">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-400" />
                        Key Achievements:
                      </p>
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 group/item">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <p className="text-slate-300 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="relative p-3 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
              <GraduationCap className="w-6 h-6 text-purple-400 relative z-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Education
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 h-full transform-gpu group-hover:scale-[1.01] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{edu.degree}</h3>
                    <p className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-sm text-slate-400">{edu.period}</span>
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 font-medium border border-purple-500/30">
                        {edu.gpa}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 group/item">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <p className="text-slate-300 text-sm group-hover/item:text-white transition-colors duration-300">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="relative p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
              <Code2 className="w-6 h-6 text-blue-400 relative z-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Skills
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(technicalSkills).map(([category, skills], i) => (
              <div key={i} className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 transform-gpu group-hover:scale-[1.02] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
                  
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
                      {category === "Front End" && <Palette className="w-5 h-5 text-blue-400" />}
                      {category === "Back End" && <Terminal className="w-5 h-5 text-purple-400" />}
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-sm hover:bg-slate-700 hover:text-white hover:scale-110 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="relative p-3 bg-gradient-to-br from-pink-500/20 to-orange-600/20 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-orange-600/30 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
              <Award className="w-6 h-6 text-pink-400 relative z-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400">
              Hobbies & Interests
            </h2>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-pink-500/50 transition-all duration-300 transform-gpu group-hover:scale-[1.01] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 via-orange-600/0 to-pink-600/0 group-hover:from-pink-600/10 group-hover:via-orange-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {hobbies.map((hobby, idx) => (
                    <div key={idx} className="group/hobby flex items-center gap-2 bg-slate-700/30 rounded-lg p-3 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-600/30 hover:border-pink-500/50">
                      <div className="w-2 h-2 bg-pink-400 rounded-full group-hover/hobby:animate-pulse"></div>
                      <p className="text-slate-300 group-hover/hobby:text-white transition-colors duration-300">{hobby}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-6">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Let's Work Together</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Let's Build Something Great
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-white">Get In Touch</span>
                    <ArrowRight className="w-5 h-5 relative z-10 text-white group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={handleDownload}
                    className="group px-8 py-4 border-2 border-slate-600 rounded-full font-semibold hover:bg-slate-800/50 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 {profile.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 group-hover:border-blue-500 transition-colors duration-300"></div>
                  <social.icon className="w-5 h-5 text-slate-300 relative z-10 group-hover:text-blue-400 transition-colors duration-300" />
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-gradient-shift { animation: gradient-shift 20s ease infinite; }
        .animate-gradient-shift-reverse { animation: gradient-shift-reverse 25s ease infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-particle { animation: particle 15s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-ping-slower { animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-gradient { background-size: 200% auto; animation: gradient-shift 3s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-gpu { transform: translateZ(0); }
      `}</style>
    </div>
  );
}