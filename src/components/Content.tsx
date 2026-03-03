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
  { name: "React", color: "#61DAFB", svg: `<svg viewBox="0 0 24 24" fill="#61DAFB"><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12z"/></svg>` },
  { name: "TypeScript", color: "#3178C6", svg: `<svg viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>` },
  { name: "JavaScript", color: "#F7DF1E", svg: `<svg viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>` },
  { name: "HTML5", color: "#E34F26", svg: `<svg viewBox="0 0 24 24" fill="#E34F26"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>` },
  { name: "CSS3", color: "#1572B6", svg: `<svg viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/></svg>` },
  { name: "Node.js", color: "#339933", svg: `<svg viewBox="0 0 24 24" fill="#339933"><path d="M11.998.016C5.37.016 0 5.394 0 12.021c0 6.628 5.37 12.006 11.998 12.006 6.629 0 11.999-5.378 11.999-12.006C23.997 5.394 18.627.016 11.998.016z"/></svg>` },
  { name: "Python", color: "#3776AB", svg: `<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.13V3.19S18.28 0 11.914 0zM8.708 1.84a1.047 1.047 0 1 1 0 2.094 1.047 1.047 0 0 1 0-2.094z"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.867s.109 3.402-3.35 3.402H9.45s-3.24-.052-3.24 3.13V20.81S5.72 24 12.086 24zm3.206-1.84a1.047 1.047 0 1 1 0-2.094 1.047 1.047 0 0 1 0 2.094z"/></svg>` },
  { name: "C#", color: "#239120", svg: `<svg viewBox="0 0 24 24" fill="#239120"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91z"/></svg>` },
  { name: "MongoDB", color: "#47A248", svg: `<svg viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z"/></svg>` },
  { name: "MySQL", color: "#4479A1", svg: `<svg viewBox="0 0 24 24" fill="#4479A1"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>` },
  { name: "Git", color: "#F05032", svg: `<svg viewBox="0 0 24 24" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>` },
  { name: "Figma", color: "#F24E1E", svg: `<svg viewBox="0 0 24 24" fill="#F24E1E"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z"/></svg>` },
  { name: "VS Code", color: "#007ACC", svg: `<svg viewBox="0 0 24 24" fill="#007ACC"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.983V4.017a1.5 1.5 0 0 0-.85-1.43zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>` },
  { name: "Tailwind", color: "#06B6D4", svg: `<svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>` },
  { name: ".NET", color: "#512BD4", svg: `<svg viewBox="0 0 24 24" fill="#512BD4"><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.44.323.537h.024c-.04-.233-.06-.629-.06-1.185V7.53h1.372zm-8.703-.693a.868.868 0 0 1-.869.868.868.868 0 0 1-.868-.868.868.868 0 0 1 .868-.868.868.868 0 0 1 .869.868z"/></svg>` },
  { name: "Docker", color: "#2496ED", svg: `<svg viewBox="0 0 24 24" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-11.69 1.867c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>` },
  { name: "Vercel", color: "#ffffff", svg: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>` },
];

const marqueeItems = [...skillLogos, ...skillLogos];

// ─── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ to, label }: { to: number; label: string }) {
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
    <div ref={ref as React.RefObject<HTMLDivElement>} style={{ textAlign: 'center', padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(56,189,248,0.15)', backdropFilter: 'blur(10px)' }}>
      <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {count}+
      </div>
      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>{label}</div>
    </div>
  );
}

// ─── Reveal wrapper ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = 'up' }: { children: React.ReactNode; delay?: number; direction?: string }) {
  const [ref, inView] = useInView();
  const transforms: Record<string, string> = { up: 'translateY(40px)', left: 'translateX(-40px)', right: 'translateX(40px)' };
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : transforms[direction],
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ─── Skill tabs data ────────────────────────────────────────────────────────────
const skillCategories: Record<string, { name: string; level: string }[]> = {
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

const levelBars: Record<string, number> = { Advanced: 3, Experienced: 2, Beginner: 1 };
const levelColors: Record<string, string> = { Advanced: '#10b981', Experienced: '#38bdf8', Beginner: '#818cf8' };

// ─── Projects ──────────────────────────────────────────────────────────────────
const allProjects = [
  { id:'p1', title:"Task Management App", description:"A full-stack MERN task management application featuring drag-and-drop task organization and responsive UI.", image:"/task-app.png", difficulty:"🔴 Advanced", github:"https://github.com/aiannyyyy/task-management-app.git", explanation:"Built my first full-stack application using the MERN stack, taking it from development to full cloud deployment. The app allows users to create, organize, and manage tasks with drag-and-drop functionality, workspace collaboration, dark mode, and attachment/comment support. Deployed the frontend on Vercel, backend on Railway, and database on MongoDB Atlas.", frontend:["React","Tailwind CSS","Typescript"], backend:["Node.js","Express.js","MongoDB"], other:["Drag and Drop (DnD)","REST API","Responsive Design","Animations"], tools:["Vite","Git","VS Code"], ongoing:false },
  { id:'p2', title:"Personal Portfolio Website", description:"A responsive portfolio website built with React and Tailwind CSS, featuring dark mode, smooth animations, and contact form integration.", image:"/1.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/my-portfolio.git", explanation:"Created to represent my work in web development. Demonstrates skills, displays projects, and provides ways to contact or collaborate.", frontend:["React","TypeScript","Tailwind CSS"], backend:[], other:["Responsive Design","Dark Mode","Animations"], tools:["Vite","Git","VS Code"], ongoing:false },
  { id:'p3', title:"Corporate Dashboard", ongoing:true, description:"Manages and visualizes corporate data through a centralized dashboard with Oracle and MySQL integration.", image:"/2.png", difficulty:"🔴 Advanced", github:"https://github.com/aiannyyyy/TEST-NSCSL-DASHBOARD.git", explanation:"Integrates Oracle for analytical queries and MySQL for CRUD operations, with a Node.js + Express backend and pure HTML/CSS/JS frontend. Also using Recharts for displaying trends and data.", frontend:["React","Typescript","Tailwind"], backend:["Node.js","Express.js","REST APIs"], other:["Oracle DB","MySQL","Data Visualization"], tools:["Postman","Git","VS Code","Crystal Reports","React Query"] },
  { id:'p4', title:"File Management System", ongoing:true, description:"Modern file management system built for NSCSL to organize, upload, and manage files efficiently.", image:"/3.png", difficulty:"🔴 Advanced", github:"https://github.com/aiannyyyy/nscsl-file-management-system.git", explanation:"Developed using React (TypeScript) for the frontend and Node.js + Express for the backend, styled with Tailwind CSS. Also has a messaging system with web sockets for internal communication.", frontend:["React","TypeScript","Tailwind CSS"], backend:["Node.js","Express.js","REST APIs"], other:["File Upload","Role-Based Access","Web Sockets"], tools:["Postman","Git","VS Code"] },
  { id:'p5', title:"Corporate Website", description:"Clean, static corporate website providing an online presence with company information.", image:"/4.png", difficulty:"🟢 Simple", github:"https://github.com/aiannyyyy/nscsl-website.git", explanation:"Serves as an online presence for the company, providing essential info such as services, contact details, and organizational background.", frontend:["React","TypeScript","Tailwind CSS"], backend:[], other:["Static Site","Responsive Design"], tools:["Vite","Git","VS Code"], ongoing:false },
  { id:'p6', title:"Replacement System", description:"VB.NET desktop application managing filter card replacement operations for internal corporate use.", image:"/5.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/ReplacementSystem.git", explanation:"Manages filter card replacement operations, recording, updating, and monitoring replacement transactions.", frontend:["WinForms","VB.NET UI"], backend:[".NET Framework","MySQL"], other:["Crystal Reports","CRUD Operations"], tools:["Visual Studio","Crystal Reports"], ongoing:false },
  { id:'p7', title:"Image Verification System", description:"VB.NET application for real-time image verification within a local area network.", image:"/6.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/TRANSFER.git", explanation:"Uses WebSocket technology for real-time notifications between connected clients during verification workflows.", frontend:["WinForms","VB.NET UI"], backend:[".NET Framework","Entity Framework"], other:["WebSockets","Real-Time LAN","Socket.io"], tools:["Visual Studio","Git"], ongoing:false },
  { id:'p8', title:"Accounting System", description:"Desktop-based Accounting System built with VB.NET for financial management and reporting.", image:"/7.png", difficulty:"🟡 Complex", github:"https://github.com/aiannyyyy/AccountingSystem.git", explanation:"Manages accounting operations like receivables, payables, and financial summaries with an intuitive interface for reports.", frontend:["WinForms","VB.NET UI"], backend:[".NET Framework","Entity Framework"], other:["Crystal Reports","Financial Reporting"], tools:["Visual Studio","Crystal Reports"], ongoing:false },
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
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const captcha = useCaptcha();
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
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
      <div style={{ position:'fixed', pointerEvents:'none', zIndex:9999, width:400, height:400, borderRadius:'50%', background: darkMode ? 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', transform:'translate(-50%,-50%)', left:cursorPos.x, top:cursorPos.y, transition:'left 0.1s, top 0.1s' }} />

      {/* Ambient orbs */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', overflow:'hidden', zIndex:0 }}>
        <div style={{ position:'absolute', top:'-10%', left:'-5%', width:500, height:500, borderRadius:'50%', background: darkMode ? 'radial-gradient(circle, rgba(56,189,248,0.08), transparent 60%)' : 'radial-gradient(circle, rgba(14,165,233,0.1), transparent 60%)', filter:'blur(40px)' }} />
        <div style={{ position:'absolute', top:'40%', right:'-10%', width:600, height:600, borderRadius:'50%', background: darkMode ? 'radial-gradient(circle, rgba(129,140,248,0.06), transparent 60%)' : 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 60%)', filter:'blur(50px)' }} />
        <div style={{ position:'absolute', bottom:'-10%', left:'30%', width:400, height:400, borderRadius:'50%', background: darkMode ? 'radial-gradient(circle, rgba(56,189,248,0.05), transparent 60%)' : 'radial-gradient(circle, rgba(14,165,233,0.07), transparent 60%)', filter:'blur(40px)' }} />
      </div>


      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section id="home" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'80px clamp(16px,4vw,80px) 60px', zIndex:1 }}>
        <div style={{ position:'absolute', inset:0, backgroundImage: darkMode ? 'linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)' : 'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)', backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)' }} />

        <div style={{ maxWidth:900, textAlign:'center', position:'relative' }}>
          <div style={{ marginBottom:32, display:'inline-block', animation:'float 4s ease-in-out infinite' }}>
            <div style={{ width:110, height:110, borderRadius:'50%', background:'linear-gradient(135deg, #38bdf8, #818cf8)', padding:3, margin:'0 auto', boxShadow:'0 0 40px rgba(56,189,248,0.35), 0 0 80px rgba(56,189,248,0.15)' }}>
              <div style={{ width:'100%', height:'100%', borderRadius:'50%', overflow:'hidden', background: darkMode ? '#0a0f1e' : '#f0f9ff' }}>
                <img src="/logo.jpg" alt="John" style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={(e: any) => { e.target.style.display='none'; e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px;">👨‍💻</div>'; }} />
              </div>
            </div>
          </div>

          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:50, background: darkMode ? 'rgba(16,185,129,0.12)' : 'rgba(5,150,105,0.1)', border:'1px solid rgba(16,185,129,0.25)', marginBottom:24, animation:'fadeIn 0.8s ease' }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#10b981', display:'inline-block', boxShadow:'0 0 8px #10b981', animation:'pulse 2s infinite' }} />
            <span style={{ fontSize:'0.8rem', color:'#10b981', fontWeight:600 }}>Open to Work</span>
          </div>

          <h1 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:800, fontSize:'clamp(2.5rem, 7vw, 5.5rem)', lineHeight:1.05, letterSpacing:'-0.03em', margin:'0 0 20px', animation:'slideUp 0.9s ease 0.1s both' }}>
            <span style={{ display:'block', color: darkMode ? '#f1f5f9' : '#0f172a' }}>John Adrian</span>
            <span style={{ display:'block', background:'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #38bdf8 100%)', backgroundSize:'200%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'shimmer 3s linear infinite' }}>Ticatic</span>
          </h1>

          <div style={{ display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center', marginBottom:28, animation:'slideUp 0.9s ease 0.25s both' }}>
            {['Full-Stack Development + AI','UI/UX Design Learner','Creative Problem Solver'].map((tag) => (
              <span key={tag} style={{ padding:'6px 16px', borderRadius:50, fontSize:'0.85rem', fontWeight:600, color:'#38bdf8', border:'1px solid rgba(56,189,248,0.3)', background:'rgba(56,189,248,0.06)', backdropFilter:'blur(10px)' }}>{tag}</span>
            ))}
          </div>

          <p style={{ fontSize:'clamp(0.95rem, 2vw, 1.1rem)', color: subtxt, maxWidth:580, margin:'0 auto 40px', lineHeight:1.7, animation:'slideUp 0.9s ease 0.4s both' }}>
            Exploring Full-Stack Development and UI/UX Design, with a passion for solving problems and building meaningful digital solutions.
          </p>

          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', animation:'slideUp 0.9s ease 0.55s both' }}>
            <a href="#projects" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 32px', borderRadius:50, background:'linear-gradient(135deg, #38bdf8, #818cf8)', color:'white', fontWeight:700, textDecoration:'none', fontSize:'0.95rem', boxShadow:'0 8px 30px rgba(56,189,248,0.35)', transition:'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px) scale(1.03)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none'; }}>
              View My Work <ArrowRight size={16} />
            </a>
            <a href="/JohnAdrianTicatic_CV.pdf" download style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 32px', borderRadius:50, border:'1px solid rgba(56,189,248,0.35)', color:'#38bdf8', fontWeight:700, textDecoration:'none', fontSize:'0.95rem', background:'rgba(56,189,248,0.06)', backdropFilter:'blur(10px)', transition:'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(56,189,248,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(56,189,248,0.06)'; }}>
              Download CV
            </a>
          </div>

          <div style={{ display:'flex', gap:14, justifyContent:'center', marginTop:36, animation:'slideUp 0.9s ease 0.65s both' }}>
            {[
              { href:'https://github.com/aiannyyyy', icon:<Github size={20} /> },
              { href:'https://www.linkedin.com/in/john-adrian-ticatic-a080b6206/', icon:<Linkedin size={20} /> },
              { href:'mailto:john.ticatic@gmail.com', icon:<Mail size={20} /> },
            ].map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ width:46, height:46, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:`1px solid ${cardBorder}`, color: subtxt, textDecoration:'none', background: cardBg, backdropFilter:'blur(10px)', transition:'all 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='#38bdf8'; (e.currentTarget as HTMLElement).style.color='#38bdf8'; (e.currentTarget as HTMLElement).style.transform='translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor=cardBorder; (e.currentTarget as HTMLElement).style.color=subtxt; (e.currentTarget as HTMLElement).style.transform='none'; }}>
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
                <div style={{ position:'absolute', top:'-16px', right:'-16px', width:52, height:52, borderRadius:14, background:'linear-gradient(135deg, #38bdf8, #0284c7)', display:'flex', alignItems:'center', justifyContent:'center', color:'white', boxShadow:'0 8px 24px rgba(0,0,0,0.2)' }}><Code size={22} /></div>
                <div style={{ position:'absolute', bottom:'-12px', left:'-12px', width:44, height:44, borderRadius:12, background:'linear-gradient(135deg, #818cf8, #6366f1)', display:'flex', alignItems:'center', justifyContent:'center', color:'white', boxShadow:'0 8px 24px rgba(0,0,0,0.2)' }}><Palette size={18} /></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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

        <div style={{ overflow:'hidden', marginBottom:60, padding:'8px 0' }}>
          <div style={{ display:'flex', animation:'marquee 30s linear infinite', width:'max-content', gap:24 }}>
            {marqueeItems.map((item, i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, padding:'16px 20px', borderRadius:16, background: cardBg, border:`1px solid ${cardBorder}`, backdropFilter:'blur(10px)', minWidth:90, transition:'all 0.3s', flexShrink:0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLElement).style.borderColor=item.color; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none'; (e.currentTarget as HTMLElement).style.borderColor=cardBorder; }}>
                <div style={{ width:36, height:36 }} dangerouslySetInnerHTML={{ __html: item.svg }} />
                <span style={{ fontSize:'0.7rem', fontWeight:700, color: subtxt, whiteSpace:'nowrap' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 clamp(16px,4vw,80px)' }}>
          <Reveal>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center', marginBottom:36 }}>
              {skillTabs.map(tab => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{ padding:'9px 20px', borderRadius:50, fontWeight:700, fontSize:'0.85rem', cursor:'pointer', transition:'all 0.3s', background: activeTab === tab.key ? 'linear-gradient(135deg, #38bdf8, #818cf8)' : (darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'), color: activeTab === tab.key ? 'white' : subtxt, border: activeTab === tab.key ? 'none' : `1px solid ${cardBorder}`, boxShadow: activeTab === tab.key ? '0 4px 20px rgba(56,189,248,0.35)' : 'none' }}>{tab.label}</button>
              ))}
            </div>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:16 }}>
            {skillCategories[activeTab]?.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 60}>
                <div style={{ padding:'20px', borderRadius:20, background: cardBg, border:`1px solid ${cardBorder}`, backdropFilter:'blur(10px)', transition:'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(56,189,248,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none'; (e.currentTarget as HTMLElement).style.borderColor=cardBorder; }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
                    <span style={{ fontWeight:700, fontSize:'0.88rem', color: darkMode ? '#e2e8f0' : '#1e293b' }}>{skill.name}</span>
                    <span style={{ fontSize:'0.62rem', fontWeight:700, padding:'3px 10px', borderRadius:50, color: levelColors[skill.level], background:`${levelColors[skill.level]}18`, border:`1px solid ${levelColors[skill.level]}30`, whiteSpace:'nowrap', marginLeft:6 }}>{skill.level}</span>
                  </div>
                  <div style={{ display:'flex', gap:4 }}>
                    {[1,2,3].map(l => (
                      <div key={l} style={{ flex:1, height:4, borderRadius:2, background: l <= (levelBars[skill.level] || 1) ? `linear-gradient(90deg, #38bdf8, ${levelColors[skill.level]})` : (darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'), transition:'all 0.5s ease' }} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                <div style={{ height:420, perspective:1200 }} onClick={() => setFlipped(prev => ({ ...prev, [project.id]: !prev[project.id] }))}>
                  <div style={{ position:'relative', width:'100%', height:'100%', transformStyle:'preserve-3d', transition:'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)', transform: flipped[project.id] ? 'rotateY(180deg)' : 'rotateY(0)', cursor:'pointer' }}>
                    <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', borderRadius:24, overflow:'hidden', background: cardBg, border:`1px solid ${cardBorder}`, backdropFilter:'blur(10px)', boxShadow:'0 4px 24px rgba(0,0,0,0.1)' }}>
                      <div style={{ height:180, overflow:'hidden', position:'relative' }}>
                        <img src={project.image} alt={project.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                        <div style={{ position:'absolute', top:12, right:12 }}>
                          <a href={project.github} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', justifyContent:'center', width:34, height:34, borderRadius:'50%', background:'rgba(255,255,255,0.9)', color:'#0f172a', textDecoration:'none' }}>
                            <Github size={16} />
                          </a>
                        </div>
                        {project.ongoing && (
                          <div style={{ position:'absolute', top:12, left:12 }}>
                            <span style={{ display:'inline-flex', alignItems:'center', gap:5, fontSize:'0.65rem', fontWeight:800, padding:'4px 10px', borderRadius:50, background:'rgba(251,146,60,0.92)', color:'#fff', letterSpacing:'0.04em' }}>
                              <span style={{ width:6, height:6, borderRadius:'50%', background:'#fff', display:'inline-block' }} /> In Progress
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
                        <h3 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:700, fontSize:'0.95rem', color: darkMode ? '#f1f5f9' : '#0f172a', marginBottom:6 }}>{project.title}</h3>
                        <p style={{ fontSize:'0.78rem', color:subtxt, lineHeight:1.55, marginBottom:12, overflow:'hidden', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical' } as React.CSSProperties}>{project.description}</p>
                        <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                          {[
                            { label:'Frontend', items: project.frontend, color:'#38bdf8', bg:'rgba(56,189,248,0.08)', border:'rgba(56,189,248,0.2)' },
                            { label:'Backend',  items: project.backend,  color:'#818cf8', bg:'rgba(129,140,248,0.08)', border:'rgba(129,140,248,0.2)' },
                            { label:'Other',    items: project.other,    color:'#10b981', bg:'rgba(16,185,129,0.08)', border:'rgba(16,185,129,0.2)' },
                            { label:'Tools',    items: project.tools,    color:'#f59e0b', bg:'rgba(245,158,11,0.08)',  border:'rgba(245,158,11,0.2)' },
                          ].filter(row => row.items && row.items.length > 0).map(row => (
                            <div key={row.label} style={{ display:'flex', alignItems:'flex-start', gap:6 }}>
                              <span style={{ fontSize:'0.58rem', fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color: row.color, minWidth:52, paddingTop:3, flexShrink:0 }}>{row.label}</span>
                              <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                                {row.items.map(item => (
                                  <span key={item} style={{ fontSize:'0.65rem', fontWeight:600, padding:'2px 8px', borderRadius:50, color: row.color, background: row.bg, border:`1px solid ${row.border}`, whiteSpace:'nowrap' }}>{item}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', transform:'rotateY(180deg)', borderRadius:24, background:'linear-gradient(135deg, #0284c7, #6366f1)', display:'flex', flexDirection:'column', padding:28 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
                        <div>
                          <div style={{ fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:4 }}>Technical Details</div>
                          <h3 style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:700, fontSize:'1rem', color:'white', margin:0 }}>{project.title}</h3>
                        </div>
                        <div style={{ width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                          <RotateCcw size={16} color="white" />
                        </div>
                      </div>
                      <p style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.85rem', lineHeight:1.7, flex:1, overflowY:'auto' }}>{project.explanation}</p>
                      <div style={{ marginTop:16, paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.15)' }}>
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
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none'; }}>
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
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(56,189,248,0.4)'; (e.currentTarget as HTMLElement).style.transform='translateX(4px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor=cardBorder; (e.currentTarget as HTMLElement).style.transform='none'; }}>
                    <div style={{ width:46, height:46, borderRadius:14, background:'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))', border:'1px solid rgba(56,189,248,0.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#38bdf8', flexShrink:0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize:'0.75rem', color:subtxt, fontWeight:600, marginBottom:2 }}>{label}</div>
                      <div style={{ fontSize:'0.9rem', color: darkMode ? '#e2e8f0' : '#1e293b', fontWeight:700 }}>{value}</div>
                    </div>
                  </a>
                ))}
                <div style={{ display:'flex', gap:12 }}>
                  {[
                    { href:'https://github.com/aiannyyyy', icon:<Github size={20} /> },
                    { href:'https://www.linkedin.com/in/john-adrian-ticatic-a080b6206/', icon:<Linkedin size={20} /> },
                    { href:'mailto:john.ticatic@gmail.com', icon:<Mail size={20} /> },
                  ].map(({ href, icon }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'14px', borderRadius:16, border:`1px solid ${cardBorder}`, background: cardBg, backdropFilter:'blur(10px)', color:subtxt, textDecoration:'none', transition:'all 0.3s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='#38bdf8'; (e.currentTarget as HTMLElement).style.color='#38bdf8'; (e.currentTarget as HTMLElement).style.transform='translateY(-3px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor=cardBorder; (e.currentTarget as HTMLElement).style.color=subtxt; (e.currentTarget as HTMLElement).style.transform='none'; }}>
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
                    { label:'Name', key:'name' as const, type:'text', ph:'Your full name' },
                    { label:'Email', key:'email' as const, type:'email', ph:'your.email@example.com' },
                    { label:'Subject', key:'subject' as const, type:'text', ph:'Project discussion' },
                  ].map(({ label, key, type, ph }) => (
                    <div key={key} style={{ marginBottom:18 }}>
                      <label style={{ display:'block', fontSize:'0.8rem', fontWeight:700, color:subtxt, marginBottom:8 }}>{label} *</label>
                      <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={ph} required
                        style={{ width:'100%', padding:'12px 16px', borderRadius:14, border:`1px solid ${cardBorder}`, background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', color:txt, fontSize:'0.9rem', outline:'none', transition:'all 0.3s', boxSizing:'border-box' }}
                        onFocus={e => { e.target.style.borderColor='#38bdf8'; }}
                        onBlur={e => { e.target.style.borderColor=cardBorder; }} />
                    </div>
                  ))}
                  <div style={{ marginBottom:18 }}>
                    <label style={{ display:'block', fontSize:'0.8rem', fontWeight:700, color:subtxt, marginBottom:8 }}>Message *</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows={4} required
                      style={{ width:'100%', padding:'12px 16px', borderRadius:14, border:`1px solid ${cardBorder}`, background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', color:txt, fontSize:'0.9rem', outline:'none', resize:'none', transition:'all 0.3s', boxSizing:'border-box', fontFamily:'inherit' }}
                      onFocus={e => { e.target.style.borderColor='#38bdf8'; }}
                      onBlur={e => { e.target.style.borderColor=cardBorder; }} />
                  </div>
                  <div style={{ marginBottom:20, padding:'16px', borderRadius:16, background: darkMode ? 'rgba(56,189,248,0.05)' : 'rgba(14,165,233,0.05)', border:`1px solid rgba(56,189,248,0.2)` }}>
                    <label style={{ display:'block', fontSize:'0.8rem', fontWeight:700, color:subtxt, marginBottom:10, textAlign:'center' }}>
                      🛡️ Security: What is {captcha.q.n1} + {captcha.q.n2}?
                    </label>
                    <div style={{ display:'flex', gap:10 }}>
                      <input type="number" value={captcha.ans} onChange={e => captcha.setAns(e.target.value)} disabled={captcha.verified} placeholder="Answer"
                        style={{ flex:1, padding:'10px 14px', borderRadius:12, border:`1px solid ${cardBorder}`, background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', color:txt, fontSize:'1rem', textAlign:'center', fontWeight:700, outline:'none', boxSizing:'border-box' }} />
                      <button type="button" onClick={() => { const ok = captcha.verify(); if (!ok) setStatus('Incorrect. Try again.'); else setStatus(''); }} disabled={captcha.verified || !captcha.ans}
                        style={{ padding:'10px 18px', borderRadius:12, border:'none', cursor: captcha.verified ? 'default' : 'pointer', background: captcha.verified ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #38bdf8, #818cf8)', color:'white', fontWeight:700, fontSize:'0.85rem' }}>
                        {captcha.verified ? '✓' : 'Verify'}
                      </button>
                    </div>
                    {captcha.verified && <p style={{ textAlign:'center', color:'#10b981', fontSize:'0.75rem', fontWeight:600, marginTop:8, marginBottom:0 }}>✓ Verification successful!</p>}
                  </div>
                  <button type="submit" disabled={submitting || !captcha.verified}
                    style={{ width:'100%', padding:'14px', borderRadius:14, border:'none', background: submitting || !captcha.verified ? 'rgba(56,189,248,0.3)' : 'linear-gradient(135deg, #38bdf8, #818cf8)', color:'white', fontWeight:700, fontSize:'1rem', cursor: submitting || !captcha.verified ? 'not-allowed' : 'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                    {submitting ? 'Sending...' : <><Mail size={18} />Hire Me</>}
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
            <div style={{ width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg, #38bdf8, #818cf8)', overflow:'hidden' }}>
              <img src="/logo.jpg" alt="Logo" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </div>
            <span style={{ fontFamily:'"Space Grotesk", sans-serif', fontWeight:700, color: darkMode ? '#e2e8f0' : '#1e293b' }}>John<span style={{ color:'#38bdf8' }}>.</span>dev</span>
          </div>
          <p style={{ color:subtxt, fontSize:'0.82rem' }}>© 2025 John Adrian Ticatic. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-10px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: #64748b; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}