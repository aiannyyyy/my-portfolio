<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe, ArrowRight, RotateCcw } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 border-b border-blue-200/30 dark:border-blue-800/30' 
        : 'bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl'
    }`}>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 via-cyan-500 to-transparent opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#home" className="group transform hover:scale-105 transition-transform duration-300">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a key={index} href={item.href}
                className="relative px-5 py-2.5 text-slate-700 dark:text-slate-200 font-semibold rounded-full transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 group overflow-hidden">
                <span className="relative z-10 transition-all duration-300 group-hover:text-white">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full scale-0 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </a>
            ))}

            <button onClick={toggleDarkMode}
              className="relative ml-4 p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/50 dark:hover:to-cyan-900/50 transition-all duration-500 group border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
              <div className={`relative z-10 transform transition-all duration-700 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                {darkMode ? <span className="block w-5 h-5 text-amber-400">☀</span> : <span className="block w-5 h-5 text-slate-600 dark:text-slate-300">🌙</span>}
              </div>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleDarkMode}
              className="relative p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
              <div className={`transform transition-all duration-700 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                {darkMode ? <span className="block w-5 h-5 text-amber-400">☀</span> : <span className="block w-5 h-5 text-slate-600 dark:text-slate-300">🌙</span>}
              </div>
            </button>

            <button onClick={() => setIsOpen(!isOpen)}
              className="relative p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
              <div className={`transform transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0'}`}>
                {isOpen ? <span className="block w-5 h-5 text-slate-600 dark:text-slate-300">✕</span> : <span className="block w-5 h-5 text-slate-600 dark:text-slate-300">☰</span>}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}>
        <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-blue-200/30 dark:border-blue-800/30 shadow-2xl">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2 transform border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function ModernPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [activeSkillTab, setActiveSkillTab] = useState('frontend');
  const [flippedCards, setFlippedCards] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Generate CAPTCHA on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2 });
    setCaptchaAnswer('');
    setCaptchaVerified(false);
  };

  const verifyCaptcha = () => {
    const correctAnswer = captchaQuestion.num1 + captchaQuestion.num2;
    if (parseInt(captchaAnswer) === correctAnswer) {
      setCaptchaVerified(true);
      setSubmitStatus('');
    } else {
      setSubmitStatus('Incorrect answer. Please try again.');
      generateCaptcha();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    if (!captchaVerified) {
      setSubmitStatus('Please verify the CAPTCHA first.');
      setIsSubmitting(false);
      return;
    }

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Hello John,\n\nMy name is ${formData.name} and I would like to discuss the following:\n\n${formData.message}\n\nBest regards,\n${formData.name}\n\nEmail: ${formData.email}`);
    window.location.href = `mailto:john.ticatic@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCaptchaVerified(false);
      generateCaptcha();
      setSubmitStatus('Email client opened! Thank you for reaching out.');
      setIsSubmitting(false);
    }, 1000);
  };

  const skillCategories = {
    frontend: [
      { name: "React", level: "Beginner", icon: "⚛️" },
      { name: "HTML/CSS", level: "Experienced", icon: "🌐" },
      { name: "JavaScript", level: "Experienced", icon: "📜" },
      { name: "TypeScript", level: "Beginner", icon: "📘" },
      { name: "Tailwind CSS", level: "Experienced", icon: "🎨" },
      { name: "Responsive Design", level: "Experienced", icon: "📱" }
    ],
    backend: [
      { name: "C#", level: "Experienced", icon: "🔷" },
      { name: ".NET Framework", level: "Experienced", icon: "🏗️" },
      { name: "Node.js", level: "Beginner", icon: "🟢" },
      { name: "Python", level: "Experienced", icon: "🐍" },
      { name: "Express.js", level: "Beginner", icon: "🚀" },
      { name: "API Development", level: "Experienced", icon: "🔗" }
    ],
    database: [
      { name: "SQL Server", level: "Experienced", icon: "🗄️" },
      { name: "MySQL", level: "Experienced", icon: "🐬" },
      { name: "MongoDB", level: "Beginner", icon: "🍃" },
      { name: "Database Design", level: "Experienced", icon: "📊" },
      { name: "Stored Procedures", level: "Experienced", icon: "⚙️" },
      { name: "Data Analysis", level: "Experienced", icon: "📈" }
    ],
    aitools: [
      { name: "ChatGPT", level: "Experienced", icon: "🤖" },
      { name: "Claude AI", level: "Experienced", icon: "🧠" },
      { name: "GitHub Copilot", level: "Experienced", icon: "👥" },
      { name: "Cursor IDE", level: "Experienced", icon: "⚡" },
      { name: "AI Prompt Engineering", level: "Experienced", icon: "💭" },
      { name: "AI-Assisted Development", level: "Experienced", icon: "🔧" }
    ],
    uiux: [
      { name: "Figma", level: "Experienced", icon: "🎨" },
      { name: "User Research", level: "Beginner", icon: "🔍" },
      { name: "Wireframing", level: "Experienced", icon: "📋" },
      { name: "Prototyping", level: "Experienced", icon: "🛠️" },
      { name: "Adobe Photoshop", level: "Experienced", icon: "🖼️" },
      { name: "Typography", level: "Beginner", icon: "✏️" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Experienced", icon: "📝" },
      { name: "VS Code", level: "Experienced", icon: "💻" },
      { name: "Visual Studio", level: "Experienced", icon: "🔵" },
      { name: "Chrome DevTools", level: "Experienced", icon: "🔧" },
      { name: "Crystal Reports", level: "Experienced", icon: "📋" },
      { name: "Documentation", level: "Advanced", icon: "📚" },
      { name: "Technical Writing", level: "Experienced", icon: "✍️" },
      { name: "Postman", level: "Experienced", icon: "📮" },
      { name: "Electron JS", level: "Beginner", icon: "🖥️" },
      { name: "Socket.io", level: "Beginner", icon: "🔌" },
      { name: "Rest APIs", level: "Experienced", icon: "🌐" }
    ]
  };

  const skillTabs = [
    { key: 'frontend', label: 'Frontend', icon: '🌐' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'database', label: 'Database', icon: '🗄️' },
    { key: 'aitools', label: 'AI Tools', icon: '🤖' },
    { key: 'uiux', label: 'UI/UX', icon: '🎨' },
    { key: 'tools', label: 'Tools & Others', icon: '🛠️' }
  ];

  const allProjects = [
    { id: 'p1', 
      title: "Personal Portfolio Website", 
      description: "A responsive portfolio website built with React and Tailwind CSS, featuring dark mode, smooth animations, and contact form integration.", 
      image: "/1.png", 
      tags: ["React", "Tailwind CSS", "Typescript"], 
      difficulty: "🟡 Complex", 
      github: "https://github.com/aiannyyyy/my-portfolio.git",  
      explanation: "This portfolio was created to represent my work in web development, desktop applications, and IT support. It demonstrates my skills, displays my recent projects, and provides ways to contact or collaborate with me." },
    { id: 'p2', 
      title: "Corporate Dashboard", 
      description: "This project is designed to manage and visualize corporate data through a centralized dashboard.", 
      image: "/2.png", 
      tags: ["Node/Express JS", "TypeScript", "REST APIs"], 
      difficulty: "🔴 Advanced", 
      github: "https://github.com/aiannyyyy/nscsl-modern-dashboard.git", 
      explanation: "It integrates Oracle for analytical queries and MySQL for CRUD operations, with a Node.js + Express backend and a pure HTML, CSS, and JavaScript frontend." },
    { id: 'p3', 
      title: "File Management System", 
      description: "A modern file management system built for NSCSL to organize, upload, and manage files efficiently.", 
      image: "/3.png", 
      tags: ["React/TS", "API Integration", "Node/Express JS"], 
      difficulty: "🔴 Advanced", 
      github: "https://github.com/aiannyyyy/nscsl-file-management-system.git",  
      explanation: "Developed using React (TypeScript) for the frontend and Node.js + Express for the backend, styled with Tailwind CSS for a clean and responsive UI." },
    { id: 'p4', 
      title: "Corporate Website", 
      description: "NSCSL Website is a simple, static corporate website built using HTML, CSS, and JavaScript.", 
      image: "/4.png", 
      tags: ["HTML", "CSS", "Vanilla JS"], 
      difficulty: "🟢 Simple", 
      github: "https://github.com/aiannyyyy/nscsl-website.git", 
      explanation: "It serves as an online presence for the company, providing essential information such as services, contact details, and organizational background in a clean and professional layout." },
    { id: 'p5', 
      title: "Replacement System", 
      description: "Replacement System is a VB.NET-based desktop application built for internal corporate use.", 
      image: "/5.png", 
      tags: [".NET", "Crystal Reports", "My SQL"], 
      difficulty: "🟡 Complex", 
      github: "https://github.com/aiannyyyy/ReplacementSystem.git", 
      explanation: "It manages filter card replacement operations, providing a simple and efficient way to record, update, and monitor replacement transactions." },
    { id: 'p6', 
      title: "Image Verification System", 
      description: "TRANSFER is a VB.NET-based application built for image verification within a local area network (LAN).", 
      image: "/6.png",  
      tags: [".NET", "Socket.io", "Entity Framework"], 
      difficulty: "🟡 Complex", 
      github: "https://github.com/aiannyyyy/TRANSFER.git", 
      explanation: "It uses WebSocket technology to deliver real-time notifications between connected clients, providing instant updates during verification and image management workflows." },
    { id: 'p7', 
      title: "Accounting System", 
      description: "A desktop-based Accounting System built with VB.NET, designed to simplify financial management, reporting, and record tracking.", 
      image: "/7.png",  
      tags: [".NET", "Crystal Reports", "Entity Framework"], 
      difficulty: "🟡 Complex", 
      github: "https://github.com/aiannyyyy/AccountingSystem.git", 
      explanation: "This project was developed to manage accounting operations such as receivables, payables, and financial summaries. It provides an intuitive interface for users to view, search, and generate reports efficiently." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-500">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
          style={{ left: mousePosition.x / 10, top: mousePosition.y / 10, transition: 'all 0.3s ease-out' }}></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-2xl animate-pulse"></div>
      </div>

      <Navbar />

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 sm:mb-8 animate-bounce">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 overflow-hidden">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent leading-tight px-4">
            John Adrian Ticatic
          </h1>
          
          <div className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 space-y-2 px-4">
            <div className="overflow-hidden"><p className="animate-slide-up">Learning Full-Stack Development</p></div>
            <div className="overflow-hidden"><p className="animate-slide-up delay-200">UI/UX Design Learner</p></div>
            <div className="overflow-hidden"><p className="animate-slide-up delay-400">Creative Problem Solver</p></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Exploring Full-Stack Development and UI/UX Design, with a passion for solving problems and building meaningful digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            <a href="#projects" className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/25 text-center">
              <span className="flex items-center justify-center gap-2">View My Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a 
              href="/JohnAdrianTicatic_CV.pdf" 
              download="John-Adrian-Ticatic_CV.pdf"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300 text-center"
            >
=======
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Palette, Smartphone, Globe, ArrowRight, RotateCcw } from 'lucide-react';

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.15, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

// ─── Skill Logos Marquee Data ──────────────────────────────────────────────────
const skillLogos = [
  { name: "React", color: "#61DAFB", svg: `<svg viewBox="0 0 24 24" fill="#61DAFB"><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 3.124l-.127.212-.25.02a23.randomized 23.randomized 0 0 0-3.699.735l-.551.144zm1.54-4.781c-.314 0-.588.067-.8.19-.537.310-.765 1.211-.622 2.456a25.133 25.133 0 0 1 3.11-.621 24.993 24.993 0 0 1 2.096-2.759c-1.27-1.123-2.537-1.666-3.783-1.666zm9.848 4.781l-.552-.143a23.775 23.775 0 0 0-3.698-.735l-.251-.02-.127-.212a23.552 23.552 0 0 0-2.422-3.124l-.34-.349.34-.349C11.605 2.277 13.986 1.266 15.47 2.122c1.512.872 1.812 3.37.823 6.856l-.133.468zm-4.998-1.658a24.887 24.887 0 0 1 3.11.621c.143-1.245-.085-2.146-.622-2.456-1.537-.888-3.896.612-5.396 2.196a24.993 24.993 0 0 1 2.908-.361zm-5.49 10.921c-1.249 0-2.312-.443-2.913-.808-1.512-.872-1.812-3.37-.823-6.856l.133-.468.552.143a23.775 23.775 0 0 0 3.698.735l.251.02.127.212a23.552 23.552 0 0 0 2.422 3.124l.34.349-.34.349c-1.453 1.485-2.87 2.2-4.447 2.2zm-1.37-6.55c-.751 2.7-.527 4.58.622 5.241.727.419 1.903.293 3.302-.519a24.99 24.99 0 0 1-2.096-2.759 25.133 25.133 0 0 1-3.11-.621l-.718.658zm13.202 4.35c-1.577 0-2.994-.715-4.447-2.2l-.34-.349.34-.349a23.552 23.552 0 0 0 2.422-3.124l.127-.212.251-.02a23.775 23.775 0 0 0 3.698-.735l.552-.143.133.468c.989 3.486.689 5.984-.823 6.856-.601.365-1.664.808-2.913.808zm-.622-5.879a24.99 24.99 0 0 1-2.096 2.759c.997.153 1.977.367 2.908.619-.231-1.233.085-2.146.622-2.456a2.247 2.247 0 0 0-.718-.658l.284.736z"/></svg>` },
  { name: "TypeScript", color: "#3178C6", svg: `<svg viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>` },
  { name: "JavaScript", color: "#F7DF1E", svg: `<svg viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>` },
  { name: "HTML5", color: "#E34F26", svg: `<svg viewBox="0 0 24 24" fill="#E34F26"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>` },
  { name: "CSS3", color: "#1572B6", svg: `<svg viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/></svg>` },
  { name: "Node.js", color: "#339933", svg: `<svg viewBox="0 0 24 24" fill="#339933"><path d="M11.998.016C5.37.016 0 5.394 0 12.021c0 6.628 5.37 12.006 11.998 12.006 6.629 0 11.999-5.378 11.999-12.006C23.997 5.394 18.627.016 11.998.016zm-.223 3.86l.172 1.343.173-1.343h-.345zm4.065.648l-2.218.648-.648 2.218.648-2.218h-.322l-2.218-.648-2.218.648.648 2.218-.648-2.218-2.218-.648 2.218-.648.648-2.218-.648 2.218h.322l2.218.648 2.218-.648zM12.022 4.7l2.565 7.44H9.457L12.022 4.7zM7.06 12.14l-.648-1.78.648 1.78zm9.865 0l.648-1.78-.648 1.78zm-4.932 7.162l-4.941-7.162H5.29l6.68 7.162h.023zm0 0l4.942-7.162h1.762l-6.68 7.162h-.024z"/></svg>` },
  { name: "Python", color: "#3776AB", svg: `<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.04zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></svg>` },
  { name: "C#", color: "#239120", svg: `<svg viewBox="0 0 24 24" fill="#239120"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.109c-3.92 0-7.109-3.19-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.554 0 1.96 1.595 3.555 3.554 3.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/></svg>` },
  { name: "MongoDB", color: "#47A248", svg: `<svg viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>` },
  { name: "MySQL", color: "#4479A1", svg: `<svg viewBox="0 0 24 24" fill="#4479A1"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.186.alpha.234l.066.08v-.1c.105-.007.127-.06.14-.14 0 0-.001-.058-.014-.12z"/><path d="M23.1 12.027c0-.085-.009-.212-.022-.308h-.008c-.023-.17-.04-.348-.07-.513l-.002-.011c-.027-.16-.06-.314-.09-.47l-.014-.069c-.033-.156-.073-.308-.114-.46l-.006-.021a14.63 14.63 0 0 0-.28-.83c-.034-.091-.07-.18-.105-.268l-.016-.04a14.14 14.14 0 0 0-.27-.601l-.006-.012c-.1-.198-.2-.393-.308-.585l-.024-.043a13.37 13.37 0 0 0-.35-.577l-.02-.031a13.1 13.1 0 0 0-.397-.561l-.01-.014a11.866 11.866 0 0 0-.436-.543l-.025-.027a12.258 12.258 0 0 0-.48-.52l-.007-.008a12.22 12.22 0 0 0-.52-.486l-.02-.017a11.94 11.94 0 0 0-.56-.453l-.007-.005a11.7 11.7 0 0 0-.6-.415l-.028-.018a11.5 11.5 0 0 0-.632-.37l-.017-.009a11.2 11.2 0 0 0-.665-.322l-.026-.011a11.05 11.05 0 0 0-.695-.272l-.016-.006a10.75 10.75 0 0 0-.724-.218l-.023-.006a10.55 10.55 0 0 0-.752-.162h-.007a10.12 10.12 0 0 0-.78-.103l-.028-.003a9.91 9.91 0 0 0-.807-.042h-.01C12 0 0 12.076 0 12.076V12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-.031-.002-.062-.002-.092-.018-.016-.025-.03-.025-.03z"/></svg>` },
  { name: "Git", color: "#F05032", svg: `<svg viewBox="0 0 24 24" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>` },
  { name: "Figma", color: "#F24E1E", svg: `<svg viewBox="0 0 24 24" fill="#F24E1E"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.354-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49z"/></svg>` },
  { name: "VS Code", color: "#007ACC", svg: `<svg viewBox="0 0 24 24" fill="#007ACC"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.983V4.017a1.5 1.5 0 0 0-.85-1.43zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>` },
  { name: "Tailwind", color: "#06B6D4", svg: `<svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>` },
  { name: ".NET", color: "#512BD4", svg: `<svg viewBox="0 0 24 24" fill="#512BD4"><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.44.323.537h.024c-.04-.233-.06-.629-.06-1.185V7.53h1.372zm-8.703-.693a.868.868 0 0 1-.869.868.868.868 0 0 1-.868-.868.868.868 0 0 1 .868-.868.868.868 0 0 1 .869.868z"/></svg>` },
  { name: "Docker", color: "#2496ED", svg: `<svg viewBox="0 0 24 24" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>` },
  { name: "Vercel", color: "#ffffff", svg: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>` },
];

// Double the array for seamless loop
const marqueeItems = [...skillLogos, ...skillLogos];

// ─── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ to, label }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, to]);
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(56,189,248,0.15)', backdropFilter: 'blur(10px)' }}>
      <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: '"Clash Display", "Space Grotesk", sans-serif' }}>
        {count}+
      </div>
      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px', fontFamily: '"DM Sans", sans-serif' }}>{label}</div>
    </div>
  );
}

// ─── Reveal wrapper ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView();
  const transforms = { up: 'translateY(40px)', left: 'translateX(-40px)', right: 'translateX(40px)' };
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : transforms[direction],
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ─── Skill tabs ────────────────────────────────────────────────────────────────
const skillCategories = {
  frontend: [ { name:"React",level:"Experienced" },{ name:"HTML/CSS",level:"Experienced" },{ name:"JavaScript",level:"Experienced" },{ name:"TypeScript",level:"Beginner" },{ name:"Tailwind CSS",level:"Experienced" },{ name:"Responsive Design",level:"Experienced" } ],
  backend: [ { name:"C#",level:"Experienced" },{ name:".NET Framework",level:"Experienced" },{ name:"Node.js",level:"Experienced" },{ name:"Python",level:"Experienced" },{ name:"Express.js",level:"Experienced" },{ name:"API Development",level:"Experienced" } ],
  database: [ { name:"SQL Server",level:"Experienced" },{ name:"MySQL",level:"Experienced" },{ name:"MongoDB",level:"Beginner" },{ name:"Database Design",level:"Experienced" },{ name:"Stored Procedures",level:"Experienced" },{ name:"Data Analysis",level:"Experienced" } ],
  aitools: [ { name:"ChatGPT",level:"Experienced" },{ name:"Claude AI",level:"Experienced" },{ name:"GitHub Copilot",level:"Experienced" },{ name:"Cursor IDE",level:"Experienced" },{ name:"AI Prompt Engineering",level:"Experienced" },{ name:"AI-Assisted Dev",level:"Experienced" } ],
  uiux: [ { name:"Figma",level:"Experienced" },{ name:"User Research",level:"Experienced" },{ name:"Wireframing",level:"Experienced" },{ name:"Prototyping",level:"Experienced" },{ name:"Adobe Photoshop",level:"Experienced" },{ name:"Typography",level:"Beginner" } ],
  tools: [ { name:"Git & GitHub",level:"Experienced" },{ name:"VS Code",level:"Experienced" },{ name:"Visual Studio",level:"Experienced" },{ name:"Chrome DevTools",level:"Experienced" },{ name:"Crystal Reports",level:"Experienced" },{ name:"Postman",level:"Experienced" },{ name:"Electron JS",level:"Beginner" },{ name:"Socket.io",level:"Experienced" },{ name:"REST APIs",level:"Experienced" },{ name:"Docker",level:"Beginner" },{ name:"Vercel",level:"Beginner" },{ name:"React Query",level:"Beginner" },{ name:"MongoDB Atlas",level:"Beginner" },{ name:"Railway",level:"Beginner" } ],
};

const skillTabs = [
  { key:'frontend', label:'Frontend' },
  { key:'backend',  label:'Backend'  },
  { key:'database', label:'Database' },
  { key:'aitools',  label:'AI Tools' },
  { key:'uiux',     label:'UI/UX'    },
  { key:'tools',    label:'Tools'    },
];

const levelBars = { Advanced: 3, Experienced: 2, Beginner: 1 };
const levelColors = { Advanced: '#10b981', Experienced: '#38bdf8', Beginner: '#818cf8' };

// ─── Skill SVG Icons ───────────────────────────────────────────────────────────
const SkillIcon = ({ name, size = 20 }) => {
  const icons = {
    // Frontend
    "React": <svg width={size} height={size} viewBox="0 0 24 24" fill="#61DAFB"><path d="M12 9.861A2.139 2.139 0 1 0 12 14.14 2.139 2.139 0 0 0 12 9.86zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.1.213-.1.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zm11.984 0l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.1-.213.1-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 3.124l-.127.212-.25.02a23.13 23.13 0 0 0-3.699.735l-.551.143zm13.38 0l-.552-.143a23.775 23.775 0 0 0-3.698-.735l-.251-.02-.127-.212a23.552 23.552 0 0 0-2.422-3.124l-.34-.349.34-.349C14.136 1.777 16.517.766 18 1.622c1.512.872 1.812 3.37.823 6.856l-.133.467zM5.31 15.056l-.552-.144C2.018 13.92.001 12.41.001 11.669c0-.742 2.018-2.25 4.757-3.244l.552-.143.133.468a23.775 23.775 0 0 0 3.698.735l.251.02.127.212a23.552 23.552 0 0 0 2.422 3.124l.34.349-.34.349C9.395 15.1 7.014 16.11 5.531 15.255c-.08-.046-.146-.13-.221-.199zm13.38 0c-.075.07-.141.153-.22.2-1.484.855-3.865-.156-6.36-2.717l-.34-.349.34-.349a23.552 23.552 0 0 0 2.422-3.124l.127-.212.25-.02a23.775 23.775 0 0 0 3.699-.735l.552.143c2.739.994 4.757 2.502 4.757 3.244 0 .741-2.018 2.25-4.757 3.244l-.47-.325z"/></svg>,
    "HTML/CSS": <svg width={size} height={size} viewBox="0 0 24 24"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>,
    "JavaScript": <svg width={size} height={size} viewBox="0 0 24 24"><rect width="24" height="24" fill="#F7DF1E" rx="2"/><path d="M6.235 8.463h2.353v6.74c0 2.964-1.345 3.97-3.457 3.97-.52 0-1.177-.09-1.62-.234l.245-1.93c.3.105.69.18.975.18.855 0 1.504-.375 1.504-2.01V8.463zm4.965 7.23c.555.315 1.44.63 2.34.63.976 0 1.49-.435 1.49-1.09 0-.63-.45-1.005-1.574-1.395-1.56-.54-2.595-1.38-2.595-2.73 0-1.58 1.305-2.79 3.48-2.79 1.05 0 1.815.225 2.37.48l-.465 1.905c-.375-.18-.99-.45-1.95-.45-.915 0-1.36.435-1.36.975 0 .645.525.93 1.74 1.38 1.65.6 2.445 1.44 2.445 2.775 0 1.56-1.185 2.88-3.705 2.88-1.05 0-2.085-.285-2.61-.585l.394-1.985z" fill="#000"/></svg>,
    "TypeScript": <svg width={size} height={size} viewBox="0 0 24 24"><rect width="24" height="24" fill="#3178C6" rx="2"/><path d="M13.5 11.5h3v1.5h-3V15h-1.5v-2h-3v-1.5h3V10h1.5v1.5zM3 4h18v2H3V4zm0 5h18v1.5H3V9zm0 5h18v1.5H3V14zm0 4.5h18V20H3v-1.5z" fill="white"/><path d="M12.828 4h1.856l-3.657 16h-1.856L12.828 4z" fill="white"/></svg>,
    "Tailwind CSS": <svg width={size} height={size} viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>,
    "Responsive Design": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><rect x="7" y="14" width="4" height="7" rx="1"/></svg>,
    // Backend
    "C#": <svg width={size} height={size} viewBox="0 0 24 24" fill="#239120"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.109c-3.92 0-7.109-3.19-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.554 0 1.96 1.595 3.555 3.554 3.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/></svg>,
    ".NET Framework": <svg width={size} height={size} viewBox="0 0 24 24" fill="#512BD4"><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.44.323.537h.024c-.04-.233-.06-.629-.06-1.185V7.53h1.372zm-8.703-.693a.868.868 0 0 1-.869.868.868.868 0 0 1-.868-.868.868.868 0 0 1 .868-.868.868.868 0 0 1 .869.868z"/></svg>,
    "Node.js": <svg width={size} height={size} viewBox="0 0 24 24" fill="#339933"><path d="M11.998.016C5.37.016 0 5.394 0 12.021c0 6.628 5.37 12.006 11.998 12.006 6.629 0 11.999-5.378 11.999-12.006C23.997 5.394 18.627.016 11.998.016zm-.223 3.86l.172 1.343.173-1.343h-.345zm4.065.648l-2.218.648-.648 2.218.648-2.218h-.322l-2.218-.648-2.218.648.648 2.218-.648-2.218-2.218-.648 2.218-.648.648-2.218-.648 2.218h.322l2.218.648 2.218-.648zM12.022 4.7l2.565 7.44H9.457L12.022 4.7z"/></svg>,
    "Python": <svg width={size} height={size} viewBox="0 0 24 24" fill="#3776AB"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.13V3.19S18.28 0 11.914 0zM8.708 1.84a1.047 1.047 0 1 1 0 2.094 1.047 1.047 0 0 1 0-2.094z"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.867s.109 3.402-3.35 3.402H9.45s-3.24-.052-3.24 3.13V20.81S5.72 24 12.086 24zm3.206-1.84a1.047 1.047 0 1 1 0-2.094 1.047 1.047 0 0 1 0 2.094z"/></svg>,
    "Express.js": <svg width={size} height={size} viewBox="0 0 24 24" fill="#888"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.138-.68zm1.186-.5h9.167C10.164 7.576 8.292 5.743 5.786 5.899c-2.329.138-3.406 1.716-4.598 5.177z"/></svg>,
    "API Development": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 9l3 3-3 3M13 15h3M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/></svg>,
    // Database
    "SQL Server": <svg width={size} height={size} viewBox="0 0 24 24" fill="#CC2927"><path d="M12 0C5.373 0 0 2.612 0 5.836v12.328C0 21.388 5.373 24 12 24s12-2.612 12-5.836V5.836C24 2.612 18.627 0 12 0zm0 2c5.523 0 10 2.015 10 3.836S17.523 9.672 12 9.672 2 7.657 2 5.836 6.477 2 12 2zM2 8.614C3.723 10.178 7.546 11.27 12 11.27s8.277-1.092 10-2.656v3.222c0 1.821-4.477 3.836-10 3.836S2 13.657 2 11.836V8.614zm0 5.836C3.723 16.014 7.546 17.106 12 17.106s8.277-1.092 10-2.656v3.222c0 1.821-4.477 3.836-10 3.836S2 19.493 2 17.672v-3.222z"/></svg>,
    "MySQL": <svg width={size} height={size} viewBox="0 0 24 24" fill="#4479A1"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.186.214.234l.066.08v-.1c.105-.007.125-.06.14-.14 0 0-.001-.058-.014-.12h-.146zm-9.045.561c-.18 0-.356.016-.53.048v.015h.015c.095.114.167.228.222.35l.07.114.017.041a11.6 11.6 0 0 0 .79-.196c.012-.005.02-.016.02-.029a.12.12 0 0 0-.012-.042c-.025-.06-.093-.1-.17-.1a.42.42 0 0 0-.078-.008l-.344-.193zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>,
    "MongoDB": <svg width={size} height={size} viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>,
    "Database Design": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    "Stored Procedures": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>,
    "Data Analysis": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    // AI Tools
    "ChatGPT": <svg width={size} height={size} viewBox="0 0 24 24" fill="#10a37f"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.371 2.019-1.168a.076.076 0 0 1 .072 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.679zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>,
    "Claude AI": <svg width={size} height={size} viewBox="0 0 24 24" fill="#cc785c"><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.4l-.79.128-2.698.384-.41.25-.1.25.307.25 1.019.512-.013-.013.013.013-.013-.013h.013L4.71 15.955zm11.8-8.876l-.23.077-2.52 1.45-.154.27.231.27 2.29.384.31-.077.23-.27-.23-.27-2.52-1.45-.154-.27.231-.27-.154-.077-.077.154.077.077-.077-.077.077.154z"/></svg>,
    "GitHub Copilot": <svg width={size} height={size} viewBox="0 0 24 24" fill="#888"><path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm5.06 16.46c-.23.63-.92 1.01-1.56.91-1.5-.25-2.37-1.32-2.37-1.32s-.87 1.07-2.37 1.32c-.64.1-1.33-.28-1.56-.91-.45-1.27.36-2.37 1.27-3.1.93-.73.93-1.46.93-1.46s0-.73-.93-1.46c-.91-.73-1.72-1.83-1.27-3.1.23-.63.92-1.01 1.56-.91 1.5.25 2.37 1.32 2.37 1.32s.87-1.07 2.37-1.32c.64-.1 1.33.28 1.56.91.45 1.27-.36 2.37-1.27 3.1-.93.73-.93 1.46-.93 1.46s0 .73.93 1.46c.91.73 1.72 1.83 1.27 3.1z"/></svg>,
    "Cursor IDE": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-14 9V3z"/><line x1="19" y1="12" x2="24" y2="12"/></svg>,
    "AI Prompt Engineering": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    "AI-Assisted Dev": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    // UI/UX
    "Figma": <svg width={size} height={size} viewBox="0 0 24 24" fill="#F24E1E"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.354-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49z"/></svg>,
    "User Research": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    "Wireframing": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    "Prototyping": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
    "Adobe Photoshop": <svg width={size} height={size} viewBox="0 0 24 24" fill="#31A8FF"><path d="M0 0v24h24V0H0zm13.5 4.804c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-5.45.188H5.696v9.647H3v-9.647H.553V4.756h7.498z"/></svg>,
    "Typography": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>,
    // Tools
    "Git & GitHub": <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>,
    "VS Code": <svg width={size} height={size} viewBox="0 0 24 24" fill="#007ACC"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.983V4.017a1.5 1.5 0 0 0-.85-1.43zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>,
    "Visual Studio": <svg width={size} height={size} viewBox="0 0 24 24" fill="#5C2D91"><path d="M17.583.063L9.353 9.578 3.784 5.12 0 7.028v9.953l3.784 1.906 5.588-4.464 8.211 9.517L24 21.498V2.502zm-.006 17.056L10.99 12l6.587-5.119v10.238zM1.822 14.613V9.386l3.14 2.613z"/></svg>,
    "Chrome DevTools": <svg width={size} height={size} viewBox="0 0 24 24" fill="#4285F4"><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 10.545a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91z"/></svg>,
    "Crystal Reports": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>,
    "Postman": <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF6C37"><path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm3.912 7.16L8.31 16.395 6.59 14.675l9.146-9.147 1.703 1.731zm-9.146 9.147l-1.72-1.72 9.146-9.147 1.72 1.72-9.146 9.147zm10.866-8.88l-1.31 1.31-1.82-1.82 1.31-1.31c.503-.502 1.317-.502 1.82 0 .503.503.503 1.317 0 1.82z"/></svg>,
    "Electron JS": <svg width={size} height={size} viewBox="0 0 24 24" fill="#47848F"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824c5.04 0 9.176 4.136 9.176 9.176S17.04 21.176 12 21.176 2.824 17.04 2.824 12 6.96 2.824 12 2.824zM8.48 7.264a4.234 4.234 0 0 0-1.265.19c-1.01.304-1.742.978-2.048 1.86-.306.883-.13 1.941.482 2.882.614.94 1.655 1.73 2.944 2.165 1.29.436 2.64.425 3.71.005 1.07-.42 1.835-1.246 2.108-2.235l-.785-.207c-.206.78-.775 1.377-1.634 1.71-.858.332-1.99.342-3.1-.032-1.11-.373-2.007-1.065-2.525-1.853-.517-.789-.646-1.626-.413-2.31.232-.683.83-1.187 1.665-1.44.836-.252 1.867-.208 2.823.11l.253-.761c-1.09-.362-2.285-.432-3.215-.084zm7.038 0c-.929 0-1.977.32-2.882.932l.44.666c.776-.518 1.664-.79 2.442-.79.778 0 1.39.243 1.746.663.355.42.472 1.025.262 1.778-.21.754-.744 1.572-1.524 2.278-.78.706-1.71 1.226-2.596 1.437l.196.784c1.03-.256 2.075-.845 2.952-1.64.876-.797 1.51-1.726 1.772-2.69.263-.964.095-1.885-.422-2.517-.518-.631-1.365-.9-2.386-.9zM12 9.176c-1.558 0-2.824 1.266-2.824 2.824S10.442 14.824 12 14.824s2.824-1.266 2.824-2.824S13.558 9.176 12 9.176z"/></svg>,
    "Socket.io": <svg width={size} height={size} viewBox="0 0 24 24" fill="#888"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.001 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.3-4.298 9.6-9.6 9.6-5.301 0-9.6-4.3-9.6-9.6 0-5.302 4.299-9.6 9.6-9.6zm4.44 3.58L8.658 13.78l-.002.002a1.04 1.04 0 0 0 1.47 1.47l7.782-7.782a1.041 1.041 0 0 0-1.467-1.49zm-7.217 5.64a1.04 1.04 0 0 0-.003 1.47l.003.003 1.47 1.47a1.04 1.04 0 0 0 1.47-1.47l-.003-.004-1.47-1.47a1.04 1.04 0 0 0-1.467 0z"/></svg>,
    "REST APIs": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    "Docker": <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>,
    "Vercel": <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>,
    "React Query": <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF4154"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 7.448l-1.444 1.444a5.579 5.579 0 0 0-7.848 7.848l-1.444 1.444a7.699 7.699 0 0 1 10.736-10.736zm-1.04 3.328a4.002 4.002 0 0 1 .528 5.04l-5.568-5.568a4.002 4.002 0 0 1 5.04.528zm-7.096 5.568a4.002 4.002 0 0 1-.528-5.04l5.568 5.568a4.002 4.002 0 0 1-5.04-.528z"/></svg>,"MongoDB Atlas": <svg width={size} height={size} viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>,

    "Railway": <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="8" cy="10" r="1.5" fill="#7c3aed" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="#7c3aed" stroke="none"/><path d="M8 10h8"/></svg>,
  };
  return icons[name] || (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
    </svg>
  );
};

// ─── Projects ──────────────────────────────────────────────────────────────────
const allProjects = [
  {
    id: 'p1',
    title: "Task Management App",
    description: "A full-stack MERN task management application featuring drag-and-drop task organization and responsive UI.",
    image: "/task-app.png",
    difficulty: "🔴 Advanced",
    github: "https://github.com/aiannyyyy/task-management-app.git",
    explanation: "Built my first full-stack application using the MERN stack, taking it from development to full cloud deployment. The app allows users to create, organize, and manage tasks with drag-and-drop functionality, workspace collaboration, dark mode, and attachment/comment support. Deployed the frontend on Vercel, backend on Railway, and database on MongoDB Atlas — gaining hands-on experience with the full deployment pipeline end to end.",
    frontend: ["React", "Tailwind CSS", "Typescript"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    other: ["Drag and Drop (DnD)", "REST API", "Responsive Design", "Animations"],
    tools: ["Vite", "Git", "VS Code"],
  },
  {
    id:'p2', title:"Personal Portfolio Website",
    description:"A responsive portfolio website built with React and Tailwind CSS, featuring dark mode, smooth animations, and contact form integration.",
    image:"/1.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/my-portfolio.git",
    explanation:"Created to represent my work in web development. Demonstrates skills, displays projects, and provides ways to contact or collaborate.",
    frontend:["React","TypeScript","Tailwind CSS"], backend:[], other:["Responsive Design","Dark Mode","Animations"], tools:["Vite","Git","VS Code"],
  },
  {
    id:'p3', title:"Corporate Dashboard", ongoing: true,
    description:"Manages and visualizes corporate data through a centralized dashboard with Oracle and MySQL integration.",
    image:"/2.png", difficulty:"🔴 Advanced", github:"https://github.com/aiannyyyy/TEST-NSCSL-DASHBOARD.git",
    explanation:"Integrates Oracle for analytical queries and MySQL for CRUD operations, with a Node.js + Express backend and pure HTML/CSS/JS frontend. Also using Recharts for displaying trends and data.",
    frontend:["React","Typescript", "Tailwind"], backend:["Node.js","Express.js","REST APIs"], other:["Oracle DB","MySQL","Data Visualization"], tools:["Postman","Git","VS Code", "Crystal Reports", "React Query"],
  },
  {
    id:'p4', title:"File Management System", ongoing: true,
    description:"Modern file management system built for NSCSL to organize, upload, and manage files efficiently.",
    image:"/3.png", difficulty:"🔴 Advanced", github:"https://github.com/aiannyyyy/nscsl-file-management-system.git",
    explanation:"Developed using React (TypeScript) for the frontend and Node.js + Express for the backend, styled with Tailwind CSS. Also has a messaging system with a help of web sockets for internal communication.",
    frontend:["React","TypeScript","Tailwind CSS"], backend:["Node.js","Express.js","REST APIs"], other:["File Upload","Role-Based Access", "Web Sockets"], tools:["Postman","Git","VS Code"],
  },
  {
    id:'p5', title:"Corporate Website",
    description:"Clean, static corporate website providing an online presence with company information.",
    image:"/4.png", difficulty:"🟢 Simple", github:"https://github.com/aiannyyyy/nscsl-website.git",
    explanation:"Serves as an online presence for the company, providing essential info such as services, contact details, and organizational background.",
    frontend:["React","TypeScript","Tailwind CSS"], backend:[], other:["Static Site","Responsive Design"], tools:["Vite","Git","VS Code"],
  },
  {
    id:'p6', title:"Replacement System",
    description:"VB.NET desktop application managing filter card replacement operations for internal corporate use.",
    image:"/5.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/ReplacementSystem.git",
    explanation:"Manages filter card replacement operations, recording, updating, and monitoring replacement transactions.",
    frontend:["WinForms","VB.NET UI"], backend:[".NET Framework","MySQL"], other:["Crystal Reports","CRUD Operations"], tools:["Visual Studio","Crystal Reports"],
  },
  {
    id:'p7', title:"Image Verification System",
    description:"VB.NET application for real-time image verification within a local area network.",
    image:"/6.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/TRANSFER.git",
    explanation:"Uses WebSocket technology for real-time notifications between connected clients during verification workflows.",
    frontend:["WinForms","VB.NET UI"], backend:[".NET Framework","Entity Framework"], other:["WebSockets","Real-Time LAN","Socket.io"], tools:["Visual Studio","Git"],
  },
  {
    id:'p8', title:"Accounting System",
    description:"Desktop-based Accounting System built with VB.NET for financial management and reporting.",
    image:"/7.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/AccountingSystem.git",
    explanation:"Manages accounting operations like receivables, payables, and financial summaries with an intuitive interface for reports.",
    frontend:["WinForms","VB.NET UI"], backend:[".NET Framework","Entity Framework"], other:["Crystal Reports","Financial Reporting"], tools:["Visual Studio","Crystal Reports"],
  },
];

// ─── CAPTCHA ───────────────────────────────────────────────────────────────────
function useCaptcha() {
  const [q, setQ] = useState({ n1: 3, n2: 7 });
  const [ans, setAns] = useState('');
  const [verified, setVerified] = useState(false);
  const regenerate = () => { setQ({ n1: Math.ceil(Math.random()*10), n2: Math.ceil(Math.random()*10) }); setAns(''); setVerified(false); };
  const verify = () => { if (parseInt(ans) === q.n1 + q.n2) { setVerified(true); return true; } regenerate(); return false; };
  return { q, ans, setAns, verified, verify, regenerate };
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('frontend');
  const [flipped, setFlipped] = useState({});
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const captcha = useCaptcha();
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = e => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!captcha.verified) { setStatus('Please verify the CAPTCHA first.'); return; }
    setSubmitting(true);
    const sub = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`Hello John,\n\nMy name is ${form.name}.\n\n${form.message}\n\nEmail: ${form.email}`);
    window.location.href = `mailto:john.ticatic@gmail.com?subject=${sub}&body=${body}`;
    setTimeout(() => {
      setForm({ name:'',email:'',subject:'',message:'' });
      captcha.regenerate();
      setStatus('Email client opened! Thank you for reaching out.');
      setSubmitting(false);
    }, 1000);
  };

  const bg = darkMode
    ? 'linear-gradient(135deg, #020617 0%, #0a0f1e 50%, #060d1f 100%)'
    : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)';

  const txt = darkMode ? '#e2e8f0' : '#1e293b';
  const subtxt = darkMode ? '#94a3b8' : '#64748b';
  const cardBg = darkMode ? 'rgba(15,23,42,0.7)' : 'rgba(255,255,255,0.8)';
  const cardBorder = darkMode ? 'rgba(56,189,248,0.12)' : 'rgba(14,165,233,0.2)';

  return (
    <div style={{ background: bg, color: txt, fontFamily: '"DM Sans", system-ui, sans-serif', minHeight:'100vh', overflowX:'hidden' }}>
      {/* Custom cursor glow */}
      <div style={{
        position:'fixed', pointerEvents:'none', zIndex:9999,
        width:400, height:400, borderRadius:'50%',
        background: darkMode ? 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
        transform:'translate(-50%,-50%)',
        left:cursorPos.x, top:cursorPos.y,
        transition:'left 0.1s, top 0.1s',
      }} />

      {/* Ambient orbs */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', overflow:'hidden', zIndex:0 }}>
        <div style={{ position:'absolute', top:'-10%', left:'-5%', width:500, height:500, borderRadius:'50%', background: darkMode ? 'radial-gradient(circle, rgba(56,189,248,0.08), transparent 60%)' : 'radial-gradient(circle, rgba(14,165,233,0.1), transparent 60%)', filter:'blur(40px)' }} />
        <div style={{ position:'absolute', top:'40%', right:'-10%', width:600, height:600, borderRadius:'50%', background: darkMode ? 'radial-gradient(circle, rgba(129,140,248,0.06), transparent 60%)' : 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 60%)', filter:'blur(50px)' }} />
        <div style={{ position:'absolute', bottom:'-10%', left:'30%', width:400, height:400, borderRadius:'50%', background: darkMode ? 'radial-gradient(circle, rgba(56,189,248,0.05), transparent 60%)' : 'radial-gradient(circle, rgba(14,165,233,0.07), transparent 60%)', filter:'blur(40px)' }} />
      </div>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section id="home" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'60px clamp(16px,4vw,80px) 60px', zIndex:1 }}>
        {/* Subtle grid background */}
        <div style={{ position:'absolute', inset:0, backgroundImage: darkMode ? 'linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)' : 'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)', backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)' }} />

        <div style={{ maxWidth:900, textAlign:'center', position:'relative' }}>
          {/* Avatar */}
          <div style={{ marginBottom:32, display:'inline-block', animation:'float 4s ease-in-out infinite' }}>
            <div style={{ width:110, height:110, borderRadius:'50%', background:'linear-gradient(135deg, #38bdf8, #818cf8)', padding:3, margin:'0 auto', boxShadow:'0 0 40px rgba(56,189,248,0.35), 0 0 80px rgba(56,189,248,0.15)' }}>
              <div style={{ width:'100%', height:'100%', borderRadius:'50%', overflow:'hidden', background: darkMode ? '#0a0f1e' : '#f0f9ff' }}>
                <img src="/logo.jpg" alt="John" style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;">👨‍💻</div>'; }} />
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:50, background: darkMode ? 'rgba(16,185,129,0.12)' : 'rgba(5,150,105,0.1)', border:'1px solid rgba(16,185,129,0.25)', marginBottom:24, animation:'fadeIn 0.8s ease' }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#10b981', display:'inline-block', boxShadow:'0 0 8px #10b981', animation:'pulse 2s infinite' }} />
            <span style={{ fontSize:'0.8rem', color:'#10b981', fontWeight:600 }}>Open to Work</span>
          </div>

          <h1 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:800, fontSize:'clamp(2.5rem, 7vw, 5.5rem)', lineHeight:1.05, letterSpacing:'-0.03em', margin:'0 0 20px', animation:'slideUp 0.9s ease 0.1s both' }}>
            <span style={{ display:'block', color: darkMode ? '#f1f5f9' : '#0f172a' }}>John Adrian</span>
            <span style={{ display:'block', background:'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #38bdf8 100%)', backgroundSize:'200%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'shimmer 3s linear infinite' }}>Ticatic</span>
          </h1>

          <div style={{ display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center', marginBottom:28, animation:'slideUp 0.9s ease 0.25s both' }}>
            {['Full-Stack Development + AI','UI/UX Design Learner','Creative Problem Solver'].map((tag, i) => (
              <span key={tag} style={{ padding:'6px 16px', borderRadius:50, fontSize:'0.85rem', fontWeight:600, color:'#38bdf8', border:'1px solid rgba(56,189,248,0.3)', background:'rgba(56,189,248,0.06)', backdropFilter:'blur(10px)' }}>
                {tag}
              </span>
            ))}
          </div>

          <p style={{ fontSize:'clamp(0.95rem, 2vw, 1.1rem)', color: subtxt, maxWidth:580, margin:'0 auto 40px', lineHeight:1.7, animation:'slideUp 0.9s ease 0.4s both' }}>
            Exploring Full-Stack Development and UI/UX Design, with a passion for solving problems and building meaningful digital solutions.
          </p>

          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', animation:'slideUp 0.9s ease 0.55s both' }}>
            <a href="#projects" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 32px', borderRadius:50, background:'linear-gradient(135deg, #38bdf8, #818cf8)', color:'white', fontWeight:700, textDecoration:'none', fontSize:'0.95rem', boxShadow:'0 8px 30px rgba(56,189,248,0.35)', transition:'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px) scale(1.03)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(56,189,248,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 8px 30px rgba(56,189,248,0.35)'; }}>
              View My Work <ArrowRight size={16} />
            </a>
            <a href="/JohnAdrianTicatic_CV.pdf" download style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 32px', borderRadius:50, border:'1px solid rgba(56,189,248,0.35)', color:'#38bdf8', fontWeight:700, textDecoration:'none', fontSize:'0.95rem', background:'rgba(56,189,248,0.06)', backdropFilter:'blur(10px)', transition:'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(56,189,248,0.12)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(56,189,248,0.06)'; e.currentTarget.style.transform='none'; }}>
>>>>>>> 47c07c23025afd218406179ee2b21a0cb4fbf8e8
              Download CV
            </a>
          </div>

<<<<<<< HEAD
          <div className="flex justify-center gap-4 sm:gap-6 px-4">
            <a href="https://github.com/aiannyyyy" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-slate-200 dark:border-slate-700">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/john-adrian-ticatic-a080b6206/" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-slate-200 dark:border-slate-700">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a href="mailto:john.ticatic@gmail.com" className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-slate-200 dark:border-slate-700">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-8 h-8 text-blue-500" />
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a developer with 2 years of experience creating web applications, desktop applications, and providing hardware troubleshooting and support in a corporate setting.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm eager to collaborate with other developers and grow under the guidance of a mentor who can help me showcase my skills while learning from their expertise.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                  <div className="text-xs sm:text-base text-slate-600 dark:text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">2+</div>
                  <div className="text-xs sm:text-base text-slate-600 dark:text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 sm:p-8 border border-blue-200/30 dark:border-blue-800/30">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl opacity-50">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl rotate-12 flex items-center justify-center shadow-xl">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl -rotate-12 flex items-center justify-center shadow-xl">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {skillTabs.map((tab) => (
                <button key={tab.key} onClick={() => setActiveSkillTab(tab.key)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-base ${
                    activeSkillTab === tab.key
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/25'
                      : 'bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-blue-200/30 dark:border-blue-800/30'
                  }`}>
                  <span className="text-base sm:text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skillCategories[activeSkillTab]?.map((skill) => (
                <div key={skill.name}
                  className="group p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-xl sm:text-2xl">{skill.icon}</div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">{skill.name}</h3>
                    </div>
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      skill.level === 'Advanced' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : skill.level === 'Experienced' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400'
                    }`}>{skill.level}</div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((level) => (
                      <div key={level} className={`flex-1 h-2 rounded-full transition-colors duration-300 ${
                        (skill.level === 'Advanced' && level <= 3) || (skill.level === 'Experienced' && level <= 2) || (skill.level === 'Beginner' && level <= 1)
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-slate-200 dark:bg-slate-700'
                      }`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
=======
          <div style={{ display:'flex', gap:14, justifyContent:'center', marginTop:36, animation:'slideUp 0.9s ease 0.65s both' }}>
            {[
              { href:'https://github.com/aiannyyyy', icon:<Github size={20} /> },
              { href:'https://www.linkedin.com/in/john-adrian-ticatic-a080b6206/', icon:<Linkedin size={20} /> },
              { href:'mailto:john.ticatic@gmail.com', icon:<Mail size={20} /> },
            ].map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                width:46, height:46, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                border:`1px solid ${cardBorder}`, color: subtxt, textDecoration:'none',
                background: cardBg, backdropFilter:'blur(10px)', transition:'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='#38bdf8'; e.currentTarget.style.color='#38bdf8'; e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 20px rgba(56,189,248,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=cardBorder; e.currentTarget.style.color=subtxt; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', animation:'bounce 2s infinite', color:'#38bdf8', opacity:0.6 }}>
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" style={{ padding:'100px clamp(16px,4vw,80px)', position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <span style={{ fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#38bdf8' }}>Who I Am</span>
              <h2 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:800, fontSize:'clamp(2rem, 5vw, 3.5rem)', margin:'12px 0 0', letterSpacing:'-0.02em', color: darkMode ? '#f1f5f9' : '#0f172a' }}>About Me</h2>
              <div style={{ width:60, height:3, background:'linear-gradient(90deg, #38bdf8, #818cf8)', margin:'16px auto 0', borderRadius:2 }} />
            </div>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }} className="about-grid">
            <Reveal direction="left">
              <div>
                <p style={{ fontSize:'1.05rem', lineHeight:1.8, color: subtxt, marginBottom:20 }}>
                  I'm a developer with <strong style={{ color:'#38bdf8' }}>2 years of experience</strong> creating web applications, desktop applications, and providing hardware troubleshooting in a corporate setting.
                </p>
                <p style={{ fontSize:'1.05rem', lineHeight:1.8, color: subtxt, marginBottom:40 }}>
                  I'm eager to collaborate with other developers and grow under the guidance of a mentor who can help me showcase my skills while learning from their expertise.
                </p>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                  <Counter to={7} label="Projects Completed" />
                  <Counter to={2} label="Years Experience" />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div style={{ position:'relative' }}>
                <div style={{ aspectRatio:'1', borderRadius:32, background: darkMode ? 'linear-gradient(135deg, rgba(56,189,248,0.08), rgba(129,140,248,0.08))' : 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(99,102,241,0.08))', border:`1px solid ${cardBorder}`, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(10px)', overflow:'hidden' }}>
                  <span style={{ fontSize:'80px', opacity:0.4 }}>👨‍💻</span>
                </div>
                {[
                  { icon:<Code size={22} />, top:'-16px', right:'-16px', bg:'linear-gradient(135deg, #38bdf8, #0284c7)' },
                  { icon:<Palette size={18} />, bottom:'-12px', left:'-12px', bg:'linear-gradient(135deg, #818cf8, #6366f1)' },
                ].map(({ icon, bg, ...pos }, i) => (
                  <div key={i} style={{ position:'absolute', width:52, height:52, borderRadius:14, background:bg, display:'flex', alignItems:'center', justifyContent:'center', color:'white', boxShadow:'0 8px 24px rgba(0,0,0,0.2)', ...pos }} >{icon}</div>
                ))}
              </div>
            </Reveal>
>>>>>>> 47c07c23025afd218406179ee2b21a0cb4fbf8e8
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              Explore my projects ranging from simple to advanced complexity. Click any card to learn more about the technical implementation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className="perspective-1000 h-96" style={{ perspective: '1000px' }}>
                <div className={`relative w-full h-full transition-transform duration-700 cursor-pointer ${flippedCards[project.id] ? 'rotate-y-180' : ''}`}
                  style={{ transformStyle: 'preserve-3d', transform: flippedCards[project.id] ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                  onClick={() => setFlippedCards(prev => ({ ...prev, [project.id]: !prev[project.id] }))}>
                  
                  <div className="absolute w-full h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-blue-200/30 dark:border-blue-800/30 shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                          <Github className="w-4 h-4 text-slate-700" />
                        </a>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-white/90 text-slate-700 rounded-full">{project.difficulty}</span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="p-2 bg-blue-600 text-white rounded-full">
                          <RotateCcw className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200 mb-2 sm:mb-3">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 sm:px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl overflow-hidden border border-blue-400/30 shadow-xl flex flex-col"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white">Technical Details</h3>
                        <div className="p-2 bg-white/20 rounded-full">
                          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-white/90 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-6">
                          {project.explanation}
                        </p>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-white rounded-full mt-1 flex-shrink-0"></div>
                            <p className="text-white/80 text-xs sm:text-sm">
                              These projects were developed both for personal learning and for supporting my current corporate work.
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-white rounded-full mt-1 flex-shrink-0"></div>
                            <p className="text-white/80 text-xs sm:text-sm">
                              I also utilized AI tools and resources to assist me during the development process.
                            </p> 
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                        <p className="text-white/60 text-xs text-center">Click to flip back</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a href="https://github.com/aiannyyyy" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/25 text-sm sm:text-base">
              View All on GitHub <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Open to Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mt-4 sm:mt-6 px-4">
              I'm actively seeking new career opportunities where I can contribute my skills and grow as a developer. 
              If you think I'd be a good fit for your team, feel free to connect with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base break-all">john.ticatic@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base">Phone (Viber & WhatsApp)</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base">+699558225148</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base">Batangas, Philippines, 4223</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
                <a href="https://github.com/aiannyyyy" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-110 transition-all duration-300 shadow-lg">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/john-adrian-ticatic-a080b6206/" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-110 transition-all duration-300 shadow-lg">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="mailto:john.ticatic@gmail.com" className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white hover:scale-110 transition-all duration-300 shadow-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-blue-200/30 dark:border-blue-800/30">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {submitStatus && (
                  <div className={`p-3 sm:p-4 rounded-xl text-center font-medium text-xs sm:text-sm ${
                    submitStatus.includes('Thank you') 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                  }`}>{submitStatus}</div>
                )}

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name *</label>
                  <input type="text" name="name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base"
                    placeholder="Your full name" />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base"
                    placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject *</label>
                  <input type="text" name="subject" value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base"
                    placeholder="Project discussion" />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                  <textarea name="message" value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-700 dark:text-slate-200 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."></textarea>
                </div>

                <div className="p-4 sm:p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl space-y-3">
                  <div className="text-center">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      🛡️ Security Check: What is {captchaQuestion.num1} + {captchaQuestion.num2}?
                    </label>
                    <input
                      type="number"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      disabled={captchaVerified}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-center text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                      placeholder="Your answer"
                    />
                  </div>
                  <button 
                    type="button"
                    onClick={verifyCaptcha}
                    disabled={captchaVerified || !captchaAnswer}
                    className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 ${
                      captchaVerified
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}>
                    {captchaVerified ? (
                      <>✓ Verified</>
                    ) : (
                      <>Verify Answer</>
                    )}
                  </button>
                  {captchaVerified && (
                    <p className="text-xs text-green-600 dark:text-green-400 text-center font-medium">
                      ✓ Verification successful!
                    </p>
                  )}
                </div>

                <button type="submit" disabled={isSubmitting || !captchaVerified}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isSubmitting || !captchaVerified ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40'
                  }`}>
                  {isSubmitting ? (
                    <><div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Sending...</>
                  ) : (
                    <><Mail className="w-4 h-4 sm:w-5 sm:h-5" />Hire Me</>
                  )}
                </button>
              </form>
            </div>
=======
      {/* ─── SKILLS ──────────────────────────────────────────────── */}
      <section id="skills" style={{ padding:'100px 0', position:'relative', zIndex:1, background: darkMode ? 'rgba(2,6,23,0.5)' : 'rgba(240,249,255,0.5)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,80px)' }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <span style={{ fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#38bdf8' }}>What I Know</span>
              <h2 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:800, fontSize:'clamp(2rem, 5vw, 3.5rem)', margin:'12px 0 0', letterSpacing:'-0.02em', color: darkMode ? '#f1f5f9' : '#0f172a' }}>Skills & Expertise</h2>
              <div style={{ width:60, height:3, background:'linear-gradient(90deg, #38bdf8, #818cf8)', margin:'16px auto 0', borderRadius:2 }} />
            </div>
          </Reveal>
        </div>

        {/* ─── Marquee ─── */}
        <div style={{ overflow:'hidden', marginBottom:60, padding:'8px 0' }}>
          <div style={{ display:'flex', animation:'marquee 30s linear infinite', width:'max-content', gap:24 }}>
            {marqueeItems.map((item, i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, padding:'16px 20px', borderRadius:16, background: cardBg, border:`1px solid ${cardBorder}`, backdropFilter:'blur(10px)', minWidth:90, transition:'all 0.3s', flexShrink:0 }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor=item.color; e.currentTarget.style.boxShadow=`0 8px 24px ${item.color}30`; }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor=cardBorder; e.currentTarget.style.boxShadow='none'; }}>
                <div style={{ width:36, height:36 }} dangerouslySetInnerHTML={{ __html: item.svg.replace('fill=', `fill="${item.color}" data-fill=`).replace(/fill="[^"]*"/, `fill="${item.color}"`) }} />
                <span style={{ fontSize:'0.7rem', fontWeight:700, color: subtxt, whiteSpace:'nowrap' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill tabs */}
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,80px)' }}>
          <Reveal>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center', marginBottom:36 }}>
              {skillTabs.map(tab => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                  padding:'9px 20px', borderRadius:50, fontWeight:700, fontSize:'0.85rem', cursor:'pointer', transition:'all 0.3s',
                  background: activeTab === tab.key ? 'linear-gradient(135deg, #38bdf8, #818cf8)' : (darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'),
                  color: activeTab === tab.key ? 'white' : subtxt,
                  border: activeTab === tab.key ? 'none' : `1px solid ${cardBorder}`,
                  boxShadow: activeTab === tab.key ? '0 4px 20px rgba(56,189,248,0.35)' : 'none',
                }}>{tab.label}</button>
              ))}
            </div>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:16 }}>
            {skillCategories[activeTab]?.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 60}>
                <div style={{ padding:'20px', borderRadius:20, background: cardBg, border:`1px solid ${cardBorder}`, backdropFilter:'blur(10px)', transition:'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(56,189,248,0.4)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(56,189,248,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor=cardBorder; e.currentTarget.style.boxShadow='none'; }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <div style={{ width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:8, background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)', flexShrink:0 }}>
                        <SkillIcon name={skill.name} size={18} />
                      </div>
                      <span style={{ fontWeight:700, fontSize:'0.88rem', color: darkMode ? '#e2e8f0' : '#1e293b', lineHeight:1.2 }}>{skill.name}</span>
                    </div>
                    <span style={{ fontSize:'0.62rem', fontWeight:700, padding:'3px 10px', borderRadius:50, color: levelColors[skill.level], background:`${levelColors[skill.level]}18`, border:`1px solid ${levelColors[skill.level]}30`, whiteSpace:'nowrap', marginLeft:6 }}>
                      {skill.level}
                    </span>
                  </div>
                  <div style={{ display:'flex', gap:4 }}>
                    {[1,2,3].map(l => (
                      <div key={l} style={{ flex:1, height:4, borderRadius:2, background: l <= (levelBars[skill.level] || 1) ? `linear-gradient(90deg, #38bdf8, ${levelColors[skill.level]})` : (darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'), transition:'all 0.5s ease' }} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
>>>>>>> 47c07c23025afd218406179ee2b21a0cb4fbf8e8
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-200/30 dark:border-blue-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base">John Adrian Ticatic</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">© 2025 John Adrian Ticatic. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
=======
      {/* ─── PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" style={{ padding:'100px clamp(16px,4vw,80px)', position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <span style={{ fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#38bdf8' }}>My Work</span>
              <h2 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:800, fontSize:'clamp(2rem, 5vw, 3.5rem)', margin:'12px 0 0', letterSpacing:'-0.02em', color: darkMode ? '#f1f5f9' : '#0f172a' }}>Featured Projects</h2>
              <div style={{ width:60, height:3, background:'linear-gradient(90deg, #38bdf8, #818cf8)', margin:'16px auto 0', borderRadius:2 }} />
              <p style={{ color:subtxt, marginTop:16, maxWidth:520, margin:'16px auto 0' }}>Click any card to learn about the technical implementation.</p>
            </div>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:24 }}>
            {allProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <div style={{ height:420, perspective:1200 }}
                  onClick={() => setFlipped(prev => ({ ...prev, [project.id]: !prev[project.id] }))}>
                  <div style={{ position:'relative', width:'100%', height:'100%', transformStyle:'preserve-3d', transition:'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)', transform: flipped[project.id] ? 'rotateY(180deg)' : 'rotateY(0)', cursor:'pointer' }}>
                    {/* Front */}
                    <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', borderRadius:24, overflow:'hidden', background: cardBg, border:`1px solid ${cardBorder}`, backdropFilter:'blur(10px)', boxShadow:'0 4px 24px rgba(0,0,0,0.1)' }}>
                      <div style={{ height:180, overflow:'hidden', position:'relative' }}>
                        <img src={project.image} alt={project.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }}
                        onMouseEnter={e => e.currentTarget.style.transform='scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform='none'} />
                        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                        <div style={{ position:'absolute', top:12, right:12 }}>
                          <a href={project.github} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', justifyContent:'center', width:34, height:34, borderRadius:'50%', background:'rgba(255,255,255,0.9)', color:'#0f172a', transition:'all 0.2s', textDecoration:'none' }}>
                            <Github size={16} />
                          </a>
                        </div>
                        {project.ongoing && (
                          <div style={{ position:'absolute', top:12, left:12 }}>
                            <span style={{
                              display:'inline-flex', alignItems:'center', gap:5,
                              fontSize:'0.65rem', fontWeight:800, padding:'4px 10px', borderRadius:50,
                              background:'rgba(251,146,60,0.92)', color:'#fff',
                              backdropFilter:'blur(6px)',
                              animation:'ongoingPulse 2s ease-in-out infinite',
                              letterSpacing:'0.04em',
                            }}>
                              <span style={{ width:6, height:6, borderRadius:'50%', background:'#fff', display:'inline-block', flexShrink:0 }} />
                              In Progress
                            </span>
                          </div>
                        )}
                        <div style={{ position:'absolute', bottom:12, left:12 }}>
                          <span style={{ fontSize:'0.7rem', fontWeight:700, padding:'4px 12px', borderRadius:50, background:'rgba(255,255,255,0.9)', color:'#0f172a' }}>{project.difficulty}</span>
                        </div>
                        <div style={{ position:'absolute', bottom:12, right:12, width:30, height:30, borderRadius:'50%', background:'linear-gradient(135deg, #38bdf8, #818cf8)', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>
                          <RotateCcw size={14} />
                        </div>
                      </div>
                      <div style={{ padding:'16px 20px 20px' }}>
                        <h3 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:700, fontSize:'0.95rem', color: darkMode ? '#f1f5f9' : '#0f172a', marginBottom:6, lineHeight:1.3 }}>{project.title}</h3>
                        <p style={{ fontSize:'0.78rem', color:subtxt, lineHeight:1.55, marginBottom:12, overflow:'hidden', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical' }}>{project.description}</p>

                        {/* ── Tech stack rows ── */}
                        <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                          {[
                            { label:'Frontend', items: project.frontend, color:'#38bdf8', bg:'rgba(56,189,248,0.08)', border:'rgba(56,189,248,0.2)' },
                            { label:'Backend',  items: project.backend,  color:'#818cf8', bg:'rgba(129,140,248,0.08)', border:'rgba(129,140,248,0.2)' },
                            { label:'Other',    items: project.other,    color:'#10b981', bg:'rgba(16,185,129,0.08)', border:'rgba(16,185,129,0.2)' },
                            { label:'Tools',    items: project.tools,    color:'#f59e0b', bg:'rgba(245,158,11,0.08)',  border:'rgba(245,158,11,0.2)' },
                          ].filter(row => row.items && row.items.length > 0).map(row => (
                            <div key={row.label} style={{ display:'flex', alignItems:'flex-start', gap:6 }}>
                              <span style={{
                                fontSize:'0.58rem', fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase',
                                color: row.color, minWidth:52, paddingTop:3, flexShrink:0,
                              }}>{row.label}</span>
                              <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                                {row.items.map(item => (
                                  <span key={item} style={{
                                    fontSize:'0.65rem', fontWeight:600, padding:'2px 8px', borderRadius:50,
                                    color: row.color, background: row.bg, border:`1px solid ${row.border}`,
                                    whiteSpace:'nowrap',
                                  }}>{item}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', transform:'rotateY(180deg)', borderRadius:24, background:'linear-gradient(135deg, #0284c7, #6366f1)', display:'flex', flexDirection:'column', padding:28, border:'1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
                        <div>
                          <div style={{ fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:4 }}>Technical Details</div>
                          <h3 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:700, fontSize:'1rem', color:'white', margin:0 }}>{project.title}</h3>
                          {project.ongoing && (
                            <div style={{ display:'inline-flex', alignItems:'center', gap:5, marginTop:6, padding:'3px 10px', borderRadius:50, background:'rgba(251,146,60,0.25)', border:'1px solid rgba(251,146,60,0.45)' }}>
                              <span style={{ width:5, height:5, borderRadius:'50%', background:'#fb923c', display:'inline-block', animation:'ongoingPulse 2s ease-in-out infinite' }} />
                              <span style={{ fontSize:'0.6rem', fontWeight:800, color:'#fb923c', letterSpacing:'0.05em' }}>IN PROGRESS</span>
                            </div>
                          )}
                        </div>
                        <div style={{ width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                          <RotateCcw size={16} color="white" />
                        </div>
                      </div>
                      <p style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.85rem', lineHeight:1.7, flex:1, overflowY:'auto' }}>{project.explanation}</p>
                      <div style={{ marginTop:16, paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.15)' }}>
                        <div style={{ display:'flex', flexDirection:'column', gap:5, marginBottom:10 }}>
                          {[
                            { label:'FE', items: project.frontend },
                            { label:'BE', items: project.backend  },
                            { label:'Other', items: project.other    },
                            { label:'Tools', items: project.tools    },
                          ].filter(r => r.items && r.items.length > 0).map(row => (
                            <div key={row.label} style={{ display:'flex', alignItems:'flex-start', gap:6 }}>
                              <span style={{ fontSize:'0.55rem', fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', minWidth:30, paddingTop:3, flexShrink:0 }}>{row.label}</span>
                              <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                                {row.items.map(item => (
                                  <span key={item} style={{ fontSize:'0.62rem', fontWeight:600, padding:'2px 8px', borderRadius:50, color:'white', background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.18)', whiteSpace:'nowrap' }}>{item}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <p style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.5)', textAlign:'center', margin:0 }}>Click to flip back</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ textAlign:'center', marginTop:48 }}>
              <a href="https://github.com/aiannyyyy" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 32px', borderRadius:50, background:'linear-gradient(135deg, #38bdf8, #818cf8)', color:'white', fontWeight:700, textDecoration:'none', fontSize:'0.95rem', boxShadow:'0 8px 30px rgba(56,189,248,0.3)', transition:'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(56,189,248,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 8px 30px rgba(56,189,248,0.3)'; }}>
                View All on GitHub <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" style={{ padding:'100px clamp(16px,4vw,80px)', position:'relative', zIndex:1, background: darkMode ? 'rgba(2,6,23,0.5)' : 'rgba(240,249,255,0.5)' }}>
        <div style={{ maxWidth:1000, margin:'0 auto' }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <span style={{ fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#38bdf8' }}>Let's Talk</span>
              <h2 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:800, fontSize:'clamp(2rem, 5vw, 3.5rem)', margin:'12px 0 0', letterSpacing:'-0.02em', color: darkMode ? '#f1f5f9' : '#0f172a' }}>Open to Work</h2>
              <div style={{ width:60, height:3, background:'linear-gradient(90deg, #38bdf8, #818cf8)', margin:'16px auto 0', borderRadius:2 }} />
              <p style={{ color:subtxt, marginTop:16, maxWidth:520, margin:'16px auto 0', lineHeight:1.7 }}>
                I'm actively seeking opportunities to contribute and grow as a developer. Feel free to connect!
              </p>
            </div>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:40, alignItems:'start' }} className="contact-grid">
            <Reveal direction="left">
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {[
                  { icon:<Mail size={20} />, label:'Email', value:'john.ticatic@gmail.com', href:'mailto:john.ticatic@gmail.com' },
                  { icon:<Smartphone size={20} />, label:'Phone (Viber & WhatsApp)', value:'+699558225148', href:'#' },
                  { icon:<Globe size={20} />, label:'Location', value:'Batangas, Philippines, 4223', href:'#' },
                ].map(({ icon, label, value, href }) => (
                  <a key={label} href={href} style={{ display:'flex', alignItems:'center', gap:16, padding:'20px', borderRadius:20, background: cardBg, border:`1px solid ${cardBorder}`, backdropFilter:'blur(10px)', textDecoration:'none', transition:'all 0.3s', color:'inherit' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(56,189,248,0.4)'; e.currentTarget.style.transform='translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=cardBorder; e.currentTarget.style.transform='none'; }}>
                    <div style={{ width:46, height:46, borderRadius:14, background:'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))', border:'1px solid rgba(56,189,248,0.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#38bdf8', flexShrink:0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize:'0.75rem', color:subtxt, fontWeight:600, marginBottom:2 }}>{label}</div>
                      <div style={{ fontSize:'0.9rem', color: darkMode ? '#e2e8f0' : '#1e293b', fontWeight:700 }}>{value}</div>
                    </div>
                  </a>
                ))}
                <div style={{ display:'flex', gap:12, paddingTop:8 }}>
                  {[
                    { href:'https://github.com/aiannyyyy', icon:<Github size={20} /> },
                    { href:'https://www.linkedin.com/in/john-adrian-ticatic-a080b6206/', icon:<Linkedin size={20} /> },
                    { href:'mailto:john.ticatic@gmail.com', icon:<Mail size={20} /> },
                  ].map(({ href, icon }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'14px', borderRadius:16, border:`1px solid ${cardBorder}`, background: cardBg, backdropFilter:'blur(10px)', color:subtxt, textDecoration:'none', transition:'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='#38bdf8'; e.currentTarget.style.color='#38bdf8'; e.currentTarget.style.transform='translateY(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor=cardBorder; e.currentTarget.style.color=subtxt; e.currentTarget.style.transform='none'; }}>
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div style={{ background: cardBg, backdropFilter:'blur(20px)', borderRadius:28, padding:'36px', border:`1px solid ${cardBorder}` }}>
                {status && (
                  <div style={{ padding:'12px 16px', borderRadius:12, marginBottom:20, fontSize:'0.85rem', fontWeight:600, textAlign:'center', background: status.includes('Thank') ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)', color: status.includes('Thank') ? '#10b981' : '#ef4444', border: `1px solid ${status.includes('Thank') ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}` }}>{status}</div>
                )}
                <form onSubmit={handleSubmit}>
                  {[
                    { label:'Name', key:'name', type:'text', ph:'Your full name' },
                    { label:'Email', key:'email', type:'email', ph:'your.email@example.com' },
                    { label:'Subject', key:'subject', type:'text', ph:'Project discussion' },
                  ].map(({ label, key, type, ph }) => (
                    <div key={key} style={{ marginBottom:18 }}>
                      <label style={{ display:'block', fontSize:'0.8rem', fontWeight:700, color:subtxt, marginBottom:8 }}>{label} *</label>
                      <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={ph} required
                        style={{ width:'100%', padding:'12px 16px', borderRadius:14, border:`1px solid ${cardBorder}`, background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', color:txt, fontSize:'0.9rem', outline:'none', transition:'all 0.3s', boxSizing:'border-box' }}
                        onFocus={e => { e.target.style.borderColor='#38bdf8'; e.target.style.boxShadow='0 0 0 3px rgba(56,189,248,0.1)'; }}
                        onBlur={e => { e.target.style.borderColor=cardBorder; e.target.style.boxShadow='none'; }} />
                    </div>
                  ))}
                  <div style={{ marginBottom:18 }}>
                    <label style={{ display:'block', fontSize:'0.8rem', fontWeight:700, color:subtxt, marginBottom:8 }}>Message *</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows={4} required
                      style={{ width:'100%', padding:'12px 16px', borderRadius:14, border:`1px solid ${cardBorder}`, background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', color:txt, fontSize:'0.9rem', outline:'none', resize:'none', transition:'all 0.3s', boxSizing:'border-box', fontFamily:'inherit' }}
                      onFocus={e => { e.target.style.borderColor='#38bdf8'; e.target.style.boxShadow='0 0 0 3px rgba(56,189,248,0.1)'; }}
                      onBlur={e => { e.target.style.borderColor=cardBorder; e.target.style.boxShadow='none'; }} />
                  </div>

                  {/* CAPTCHA */}
                  <div style={{ marginBottom:20, padding:'16px', borderRadius:16, background: darkMode ? 'rgba(56,189,248,0.05)' : 'rgba(14,165,233,0.05)', border:`1px solid rgba(56,189,248,0.2)` }}>
                    <label style={{ display:'block', fontSize:'0.8rem', fontWeight:700, color:subtxt, marginBottom:10, textAlign:'center' }}>
                      🛡️ Security: What is {captcha.q.n1} + {captcha.q.n2}?
                    </label>
                    <div style={{ display:'flex', gap:10 }}>
                      <input type="number" value={captcha.ans} onChange={e => captcha.setAns(e.target.value)} disabled={captcha.verified} placeholder="Answer" style={{ flex:1, padding:'10px 14px', borderRadius:12, border:`1px solid ${cardBorder}`, background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', color:txt, fontSize:'1rem', textAlign:'center', fontWeight:700, outline:'none', boxSizing:'border-box' }} />
                      <button type="button" onClick={() => { const ok = captcha.verify(); if (!ok) setStatus('Incorrect. Try again.'); else setStatus(''); }} disabled={captcha.verified || !captcha.ans} style={{ padding:'10px 18px', borderRadius:12, border:'none', cursor: captcha.verified ? 'default' : 'pointer', background: captcha.verified ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #38bdf8, #818cf8)', color:'white', fontWeight:700, fontSize:'0.85rem', transition:'all 0.3s' }}>
                        {captcha.verified ? '✓' : 'Verify'}
                      </button>
                    </div>
                    {captcha.verified && <p style={{ textAlign:'center', color:'#10b981', fontSize:'0.75rem', fontWeight:600, marginTop:8, marginBottom:0 }}>✓ Verification successful!</p>}
                  </div>

                  <button type="submit" disabled={submitting || !captcha.verified} style={{ width:'100%', padding:'14px', borderRadius:14, border:'none', background: submitting || !captcha.verified ? 'rgba(56,189,248,0.3)' : 'linear-gradient(135deg, #38bdf8, #818cf8)', color:'white', fontWeight:700, fontSize:'1rem', cursor: submitting || !captcha.verified ? 'not-allowed' : 'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', justifyContent:'center', gap:8, boxShadow: !captcha.verified ? 'none' : '0 8px 24px rgba(56,189,248,0.3)' }}
                  onMouseEnter={e => { if (!submitting && captcha.verified) { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(56,189,248,0.4)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow=captcha.verified ? '0 8px 24px rgba(56,189,248,0.3)' : 'none'; }}>
                    {submitting ? <><div style={{ width:18, height:18, border:'2px solid rgba(255,255,255,0.3)', borderTopColor:'white', borderRadius:'50%', animation:'spin 0.8s linear infinite' }} />Sending...</> : <><Mail size={18} />Hire Me</>}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ padding:'32px clamp(16px,4vw,80px)', borderTop:`1px solid ${cardBorder}`, position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg, #38bdf8, #818cf8)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
              <img src="/logo.jpg" alt="Logo" style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML = '<span style="color:white;font-weight:700;font-size:12px">JT</span>'; }} />
            </div>
            <span style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:700, color: darkMode ? '#e2e8f0' : '#1e293b' }}>John<span style={{ color:'#38bdf8' }}>.</span>dev</span>
          </div>
          <p style={{ color:subtxt, fontSize:'0.82rem' }}>© 2025 John Adrian Ticatic. All rights reserved.</p>
        </div>
      </footer>

      {/* ─── STYLES ────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #10b981; }
          50% { opacity: 0.6; box-shadow: 0 0 16px #10b981; }
        }
        @keyframes ongoingPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251,146,60,0.4); }
          50%       { box-shadow: 0 0 0 6px rgba(251,146,60,0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        input::placeholder, textarea::placeholder { color: #64748b; }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
>>>>>>> 47c07c23025afd218406179ee2b21a0cb4fbf8e8
        }
      `}</style>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 47c07c23025afd218406179ee2b21a0cb4fbf8e8
