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

  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6Lczq_grAAAAAOAqYYzrzyANL7SXylZyVpC_T0BC';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Simple CAPTCHA verification (client-side demo)
  const verifyCaptcha = () => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute('6Lczq_grAAAAAOAqYYzrzyANL7SXylZyVpC_T0BC', { action: 'submit' }).then(() => {
          setCaptchaVerified(true);
        });
      });
    } else {
      // Fallback: Simple math CAPTCHA
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const answer = prompt(`CAPTCHA: What is ${num1} + ${num2}?`);
      if (parseInt(answer) === num1 + num2) {
        setCaptchaVerified(true);
      } else {
        setSubmitStatus('CAPTCHA verification failed. Please try again.');
      }
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
      tags: ["Node/Express JS", "HTML/CSS", "REST APIs"], 
      difficulty: "🔴 Advanced", 
      github: "https://github.com/aiannyyyy/TEST-NSCSL-DASHBOARD.git", 
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
              Download CV
            </a>
          </div>

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
          </div>
        </div>
      </section>

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

                <div className="p-4 sm:p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                  <button 
                    type="button"
                    onClick={verifyCaptcha}
                    disabled={captchaVerified}
                    className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-2 ${
                      captchaVerified
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                    }`}>
                    {captchaVerified ? (
                      <>✓ CAPTCHA Verified</>
                    ) : (
                      <>🛡️ Verify CAPTCHA</>
                    )}
                  </button>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center">
                    Please verify you're human before submitting
                  </p>
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
          </div>
        </div>
      </section>

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
        }
      `}</style>
    </div>
  );
}