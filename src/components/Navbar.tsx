import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-2xl shadow-violet-500/10 border-b border-violet-200/30 dark:border-violet-800/30' 
          : 'bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl'
      }`}>
        
        {/* Animated gradient border */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500 via-blue-500 to-transparent opacity-80"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <a href="#home" className="group transform hover:scale-105 transition-transform duration-300">
              <img
                src={darkMode ? "/logo-dark.png" : "/logo-white.png"}
                alt="Logo"
                className="h-12 filter drop-shadow-lg"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative px-5 py-2.5 text-slate-700 dark:text-slate-200 font-semibold rounded-full transition-all duration-500 hover:text-violet-600 dark:hover:text-violet-400 group overflow-hidden"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-white dark:group-hover:text-white">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full scale-0 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 dark:from-violet-500/20 dark:to-blue-500/20 rounded-full scale-0 group-hover:scale-110 transition-all duration-700"></div>
                </a>
              ))}

              {/* Modern Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative ml-4 p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-violet-100 hover:to-blue-100 dark:hover:from-violet-900/50 dark:hover:to-blue-900/50 transition-all duration-500 group border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`relative z-10 transform transition-all duration-700 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                  {darkMode ? 
                    <span className="block w-5 h-5 text-amber-400">☀</span> : 
                    <span className="block w-5 h-5 text-slate-600 dark:text-slate-300">🌙</span>
                  }
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            >
              <div className={`transform transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0'}`}>
                {isOpen ? 
                  <span className="block w-6 h-6 text-slate-600 dark:text-slate-300">✕</span> : 
                  <span className="block w-6 h-6 text-slate-600 dark:text-slate-300">☰</span>
                }
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-screen opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-violet-200/30 dark:border-violet-800/30 shadow-2xl">
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-6 py-4 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-violet-50 hover:to-blue-50 dark:hover:from-violet-900/30 dark:hover:to-blue-900/30 hover:text-violet-600 dark:hover:text-violet-400 hover:translate-x-2 transform border border-transparent hover:border-violet-200/50 dark:hover:border-violet-700/50"
                  onClick={toggleMenu}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? `slideIn 0.6s ease-out forwards` : 'none'
                  }}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={() => { toggleDarkMode(); toggleMenu(); }}
                className="flex items-center gap-4 w-full px-6 py-4 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-900/30 dark:hover:to-orange-900/30 hover:translate-x-2 transform border border-transparent hover:border-amber-200/50 dark:hover:border-amber-700/50 mt-4"
              >
                <div className={`transform transition-all duration-700 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
                  {darkMode ? 
                    <span className="block w-5 h-5 text-amber-400">☀</span> : 
                    <span className="block w-5 h-5">🌙</span>
                  }
                </div>
                <span className="hover:text-amber-600 dark:hover:text-amber-400">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}