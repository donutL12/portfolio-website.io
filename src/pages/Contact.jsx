import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Send, MapPin, Phone, Clock, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mustangshivy@gmail.com',
      link: 'mailto:mustangshivy@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '09603904343',
      link: 'tel:09603904343'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tuktukan Guiguinto Bulacan',
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

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
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float-fast" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-slow" />
        
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
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
              <Link to="/contact" className="relative text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Contact
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

      {/* Main Content */}
      <div className="relative pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <MessageCircle className="w-4 h-4 text-blue-400 relative z-10" />
                <span className="text-blue-400 text-sm font-medium relative z-10">Get In Touch</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient drop-shadow-2xl">
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Contact Information
              </h2>

              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="group relative overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="relative">
                        <h3 className="text-sm font-medium text-slate-400 mb-1">{item.title}</h3>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={index} href={item.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/donutL12", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/ronaldo-manla-undefined-627108353/", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:mustangshivy@gmail.com", label: "Email" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target={social.href.startsWith('http') ? "_blank" : undefined}
                      rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 group-hover:border-blue-500 transition-colors duration-300"></div>
                      <social.icon className="w-5 h-5 relative z-10 group-hover:text-blue-400 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
                      <Send className="w-6 h-6 text-blue-400" />
                      Send Me a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 group-hover:text-blue-400 transition-colors">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-white placeholder-slate-500"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 group-hover:text-blue-400 transition-colors">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-white placeholder-slate-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2 group-hover:text-blue-400 transition-colors">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-white placeholder-slate-500"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 group-hover:text-blue-400 transition-colors">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-white placeholder-slate-500 resize-none"
                          placeholder="Tell me about your project or inquiry..."
                        ></textarea>
                      </div>

                      {/* Submit Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur"></div>
                          <div className="relative p-4 bg-green-500/10 border border-green-500/50 rounded-lg backdrop-blur-sm">
                            <p className="font-medium text-green-400 flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              ✓ Message sent successfully!
                            </p>
                            <p className="text-sm text-green-300 mt-1">I'll get back to you soon.</p>
                          </div>
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-rose-500/20 blur"></div>
                          <div className="relative p-4 bg-red-500/10 border border-red-500/50 rounded-lg backdrop-blur-sm">
                            <p className="font-medium text-red-400 flex items-center gap-2">
                              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                              ✗ Something went wrong.
                            </p>
                            <p className="text-sm text-red-300 mt-1">Please try again later.</p>
                          </div>
                        </div>
                      )}
                      
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full sm:w-auto px-8 py-4 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </div>
                        <span className="relative flex items-center justify-center gap-2 text-white">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                { icon: Mail, href: "mailto:mustangshivy@gmail.com" }
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
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-ping-slower { animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-slide { animation: slide 2s infinite; }
        .animate-gradient-xy { animation: gradient-xy 3s ease infinite; background-size: 200% 200%; }
        .animate-gradient { background-size: 200% auto; animation: gradient-xy 3s linear infinite; }
        .animate-spaceship-orbit { animation: spaceship-orbit 30s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-gpu { transform: translateZ(0); }
      `}</style>
    </div>
  );
}