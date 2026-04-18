import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip as RechartsTooltip
} from 'recharts';
import { 
  Shield, 
  Server, 
  Cpu, 
  Activity, 
  Lock, 
  RefreshCw, 
  ChevronRight, 
  Menu, 
  X,
  Globe,
  Database,
  Cloud,
  Zap,
  Phone,
  Mail,
  MapPin,
  Bot,
  Radar,
  ShieldCheck,
  Monitor, 
  Smartphone, 
  Wrench, 
  UserCog,
  BookOpen, 
  GraduationCap, 
  Pencil, 
  Building,
  Brain, 
  Target, 
  BarChart, 
  Binary, 
  FileText, 
  ArrowUpDown,
  Info,
  Network,
  BrainCircuit,
  DatabaseZap,
  Settings2,
  ShieldAlert,
  Triangle,
  Calendar,
  Coffee,
  Search,
  UserPlus,
  Sparkles,
  Send,
  MessageSquare,
  CheckCircle2,
  ArrowDown,
  Layers,
  Filter,
  Zap,
  Timer,
  Bug,
  GitMerge,
  AlertTriangle,
  FileCode2,
  ArrowRight,
  TrendingUp,
  Terminal,
  School,
  Calendar,
  Package,
  PhoneCall,
  Star,
  Clock,
  Briefcase,
  Quote,
  ThumbsUp,
  QrCode,
  ChevronDown,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  User,
  HelpCircle,
  Infinity
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '#首页' },
    { name: '流程演示', href: '#流程演示' },
    { name: '产品架构', href: '#产品架构', subItems: ['表现层', '业务服务层', '核心引擎层', '数据持久层'] },
    { name: '智能服务', href: '#智能服务', subItems: ['教务百事通', '校园生活助手', '师范生实训'] },
    { name: '安全防御', href: '#安全防御', subItems: ['PromptShield', 'FastScanEngine'] },
    { name: 'Open Cloud', href: '#Open Cloud中枢', subItems: ['全域调度', '智能学习', '自动化运维'] },
    { name: '应用案例', href: '#应用案例' },
    { name: '联系我们', href: '#联系我们' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-cyan/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <Shield className="w-8 h-8 text-brand-cyan" />
            <span className="text-xl font-bold text-white tracking-wider">智御云枢</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group px-3 py-2">
                <a href={item.href} className="text-slate-300 hover:text-brand-cyan transition-colors text-sm font-medium flex items-center gap-1">
                  {item.name}
                  {item.subItems && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                </a>
                
                {/* Dropdown */}
                {item.subItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-brand-dark/95 backdrop-blur-md border border-brand-cyan/30 rounded-xl shadow-[0_10px_30px_rgba(0,163,196,0.2)] py-2 w-36 flex flex-col">
                      {item.subItems.map((sub, idx) => (
                        <a key={idx} href={item.href} className="px-4 py-2 text-sm text-slate-300 hover:text-brand-cyan hover:bg-brand-cyan/10 transition-colors">
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark border-b border-brand-cyan/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-brand-cyan hover:bg-brand-cyan/10 rounded-md" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="首页">
      <div className="absolute inset-0 bg-grid-animated pointer-events-none"></div>
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
              <span className="block mb-2">服务 · 攻击 · 防御</span>
              <span className="text-gradient-animated">三位一体自进化</span>
              <span className="block mt-2 text-3xl md:text-5xl">智慧校园平台</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            基于 Open Cloud 中枢，构建主动防御与智能服务闭环，让校园安全与管理实现真正的自我进化与无人值守。
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-cyber px-8 py-4 rounded-full text-lg flex items-center justify-center">
              接入云枢中枢 <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="btn-glow-border">
              <span className="btn-glow-border-inner text-white font-bold text-lg px-8 py-3 flex items-center justify-center">
                查看技术白皮书
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % 6);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + 6) % 6);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % 6);
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden" id="流程演示">
      {/* Deep Blue Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">核心技术流程演示</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
            <div 
              className="bg-brand-cyan h-full transition-all duration-500 ease-in-out"
              style={{ width: `${((currentStep + 1) / 6) * 100}%` }}
            ></div>
          </div>
          <div className="text-brand-cyan font-mono text-sm">Step {currentStep + 1} / 6</div>
        </div>

        {/* Main Area */}
        <div className="relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-16 min-h-[600px] flex flex-col justify-center">
          
          {/* Global Infinity (Step 5) */}
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000 z-0 ${currentStep === 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <Infinity className="w-96 h-96 text-brand-cyan/10" />
          </div>

          {/* 3 Columns */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-12 md:gap-0">
            
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <filter id="glow-trail" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Left to Center */}
                <path d="M 25% 50% L 40% 50%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 25% 50% L 40% 50%" stroke="#00A3C4" strokeWidth="3" strokeDasharray="15 150" fill="none" filter="url(#glow-trail)" className={`transition-opacity duration-500 ${currentStep === 0 ? 'opacity-100 animate-[flow-particle_1.5s_linear_infinite]' : 'opacity-0'}`} />
                
                {/* Center to Right (Globe) */}
                <path d="M 60% 50% L 75% 25%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 60% 50% L 75% 25%" stroke="#00A3C4" strokeWidth="3" strokeDasharray="15 150" fill="none" filter="url(#glow-trail)" className={`transition-opacity duration-500 ${currentStep === 2 ? 'opacity-100 animate-[flow-particle_1.5s_linear_infinite]' : 'opacity-0'}`} />
                
                {/* Right Bug to Server */}
                <path d="M 83% 45% L 83% 75%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 83% 45% L 83% 75%" stroke="#EF4444" strokeWidth="3" strokeDasharray="15 150" fill="none" filter="url(#glow-trail)" className={`transition-opacity duration-500 ${currentStep === 3 ? 'opacity-100 animate-[flow-particle_1.5s_linear_infinite]' : 'opacity-0'}`} />
                
                {/* Server to Center */}
                <path d="M 75% 85% L 60% 60%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 75% 85% L 60% 60%" stroke="#EF4444" strokeWidth="3" strokeDasharray="15 150" fill="none" filter="url(#glow-trail)" className={`transition-opacity duration-500 ${currentStep === 4 ? 'opacity-100 animate-[flow-particle_1.5s_linear_infinite]' : 'opacity-0'}`} />
                
                {/* Center to Shield */}
                <path d="M 60% 50% L 75% 50%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 60% 50% L 75% 50%" stroke="#3B82F6" strokeWidth="3" strokeDasharray="15 150" fill="none" filter="url(#glow-trail)" className={`transition-opacity duration-500 ${currentStep === 4 ? 'opacity-100 animate-[flow-particle_1.5s_linear_infinite]' : 'opacity-0'}`} />
              </svg>
            </div>

            {/* Left: Campus */}
            <div className={`w-full md:w-1/3 flex flex-col items-center space-y-12 relative p-8 rounded-2xl transition-all duration-500 border ${
              currentStep === 0 ? 'bg-slate-800/80 border-brand-cyan shadow-[0_0_20px_rgba(0,163,196,0.4)]' : 
              currentStep === 2 ? 'bg-slate-800/80 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]' : 
              currentStep === 5 ? 'bg-slate-800/80 border-brand-cyan/50 shadow-[0_0_20px_rgba(0,163,196,0.2)]' :
              'bg-slate-900/30 border-slate-800'
            }`}>
              <div className="text-slate-400 font-bold tracking-widest mb-4">校园场景</div>
              
              {/* Phone & User */}
              <div className="relative">
                <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-brand-cyan text-brand-dark px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-500 ${currentStep === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  帮我查成绩
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-cyan rotate-45"></div>
                </div>
                <div className={`w-20 h-20 rounded-2xl bg-slate-800 border-2 flex items-center justify-center transition-all duration-500 ${currentStep === 0 ? 'border-brand-cyan shadow-[0_0_20px_rgba(0,163,196,0.5)] animate-[wiggle_0.5s_ease-in-out_infinite]' : 'border-slate-700'}`}>
                  <Smartphone className={`w-10 h-10 ${currentStep === 0 ? 'text-brand-cyan' : 'text-slate-400'}`} />
                </div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-300" />
                </div>
              </div>

              {/* Knowledge Base */}
              <div className="relative">
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap transition-all duration-500 ${currentStep === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                  +1 新知识
                </div>
                <div className={`w-20 h-20 rounded-2xl bg-slate-800 border-2 flex items-center justify-center transition-all duration-500 ${currentStep === 2 ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]' : 'border-slate-700'}`}>
                  <Database className={`w-10 h-10 ${currentStep === 2 ? 'text-green-500' : 'text-slate-400'}`} />
                </div>
              </div>
            </div>

            {/* Mobile Arrow Down (Left to Center) */}
            <div className="md:hidden flex justify-center w-full">
              <ArrowDown className={`w-8 h-8 transition-colors duration-500 ${currentStep === 0 ? 'text-brand-cyan animate-bounce' : 'text-slate-700'}`} />
            </div>

            {/* Center: Open Cloud */}
            <div className={`w-full md:w-1/3 flex flex-col items-center relative p-8 rounded-2xl transition-all duration-500 border ${
              currentStep === 1 || currentStep === 2 ? 'bg-slate-800/80 border-brand-cyan shadow-[0_0_20px_rgba(0,163,196,0.4)]' : 
              currentStep === 4 ? 'bg-slate-800/80 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 
              currentStep === 5 ? 'bg-slate-800/80 border-brand-cyan/50 shadow-[0_0_20px_rgba(0,163,196,0.2)]' :
              'bg-slate-900/30 border-slate-800'
            }`}>
              <div className="text-brand-cyan font-bold tracking-widest mb-8">Open Cloud 中枢</div>
              
              <div className="relative">
                {/* Question Mark */}
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 transition-all duration-500 ${currentStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <HelpCircle className="w-12 h-12 text-yellow-400 animate-pulse" />
                </div>

                {/* Brain Hexagon */}
                <div className={`relative w-40 h-40 flex items-center justify-center transition-all duration-500 ${currentStep === 1 || currentStep === 4 ? 'scale-110' : 'scale-100'}`}>
                  {/* Hexagon SVG Background */}
                  <svg className={`absolute inset-0 w-full h-full transition-all duration-1000 ${currentStep === 1 ? 'animate-[spin_4s_linear_infinite] text-brand-cyan' : currentStep === 4 ? 'text-blue-500' : 'text-slate-700'}`} viewBox="0 0 100 100">
                    <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <Brain className={`w-16 h-16 relative z-10 transition-colors duration-500 ${currentStep === 1 ? 'text-brand-cyan' : currentStep === 4 ? 'text-blue-500' : 'text-slate-400'}`} />
                  
                  {/* Data flow circles */}
                  <div className={`absolute inset-0 border-2 rounded-full transition-all duration-500 ${currentStep === 1 || currentStep === 4 ? 'border-brand-cyan/50 scale-125 animate-ping' : 'border-transparent scale-100'}`}></div>
                </div>
              </div>
            </div>

            {/* Mobile Arrow Down (Center to Right) */}
            <div className="md:hidden flex justify-center w-full">
              <ArrowDown className={`w-8 h-8 transition-colors duration-500 ${currentStep === 2 || currentStep === 4 ? 'text-brand-cyan animate-bounce' : 'text-slate-700'}`} />
            </div>

            {/* Right: Security */}
            <div className={`w-full md:w-1/3 flex flex-col items-center justify-between min-h-[300px] relative p-8 rounded-2xl transition-all duration-500 border ${
              currentStep === 3 ? 'bg-slate-800/80 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' : 
              currentStep === 4 ? 'bg-slate-800/80 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 
              currentStep === 5 ? 'bg-slate-800/80 border-brand-cyan/50 shadow-[0_0_20px_rgba(0,163,196,0.2)]' :
              'bg-slate-900/30 border-slate-800'
            }`}>
              <div className="text-slate-400 font-bold tracking-widest mb-4 absolute -top-12">安全端</div>
              
              {/* Globe */}
              <div className={`w-16 h-16 rounded-full bg-slate-800 border-2 flex items-center justify-center transition-all duration-500 mb-8 ${currentStep === 2 ? 'border-brand-cyan shadow-[0_0_20px_rgba(0,163,196,0.5)]' : 'border-slate-700'}`}>
                <Globe className={`w-8 h-8 ${currentStep === 2 ? 'text-brand-cyan animate-[spin_4s_linear_infinite]' : 'text-slate-400'}`} />
              </div>

              {/* Bug & Shield Row */}
              <div className="flex gap-8 mb-8">
                {/* Bug */}
                <div className="relative">
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap transition-all duration-500 ${currentStep === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    攻击包
                  </div>
                  <div className={`w-16 h-16 rounded-xl bg-slate-800 border-2 flex items-center justify-center transition-all duration-500 ${currentStep === 3 ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse' : 'border-slate-700'}`}>
                    <Bug className={`w-8 h-8 ${currentStep === 3 ? 'text-red-500' : 'text-slate-400'}`} />
                  </div>
                </div>

                {/* Shield */}
                <div className="relative">
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap transition-all duration-500 ${currentStep === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    新规则
                  </div>
                  <div className={`w-16 h-16 rounded-xl bg-slate-800 border-2 flex items-center justify-center transition-all duration-500 ${currentStep === 4 ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.8)] scale-125' : 'border-slate-700'}`}>
                    <Shield className={`w-8 h-8 ${currentStep === 4 ? 'text-blue-500' : 'text-slate-400'}`} />
                  </div>
                </div>
              </div>

              {/* Server */}
              <div className={`w-20 h-20 rounded-2xl bg-slate-800 border-2 flex items-center justify-center transition-all duration-500 ${currentStep === 3 ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-[server-shake_0.5s_ease-in-out_infinite]' : currentStep === 4 ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'border-slate-700'}`}>
                <Server className={`w-10 h-10 ${currentStep === 3 ? 'text-red-500' : currentStep === 4 ? 'text-blue-500' : 'text-slate-400'}`} />
              </div>

            </div>
          </div>

          {/* Text Description */}
          <div className="mt-16 h-16 flex items-center justify-center text-center z-10">
            <p className={`text-xl md:text-2xl font-bold transition-all duration-500 ${currentStep === 5 ? 'text-brand-cyan scale-110' : 'text-white'}`}>
              {currentStep === 0 && "① 师生通过手机H5发起自然语言请求"}
              {currentStep === 1 && "② Open Cloud 识别意图，发现是‘未知问题’"}
              {currentStep === 2 && "③ 触发自进化：联网检索权威答案"}
              {currentStep === 3 && "④ 自动化渗透：模拟最新漏洞攻击"}
              {currentStep === 4 && "⑤ Open Cloud 分析攻击结果，生成新防御规则"}
              {currentStep === 5 && "⑥ 服务越用越聪明 · 防御越用越安全"}
            </p>
          </div>

          {/* Data Board (Step 5) */}
          <div className={`absolute bottom-8 right-8 bg-slate-800/80 backdrop-blur border border-slate-700 p-4 rounded-xl transition-all duration-500 ${currentStep === 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-sm text-slate-400 mb-2">进化成果</div>
            <div className="flex gap-6">
              <div>
                <div className="text-xs text-slate-500">规则库</div>
                <div className="text-lg font-bold text-blue-400">+1</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">准确率</div>
                <div className="text-lg font-bold text-green-400">+0.5%</div>
              </div>
            </div>
          </div>

        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            title="上一步"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleTogglePlay}
            className="px-6 py-3 rounded-full bg-brand-cyan hover:bg-brand-cyan/80 text-brand-dark font-bold flex items-center gap-2 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" /> 暂停
              </>
            ) : (
              <>
                <Play className="w-5 h-5" /> 播放
              </>
            )}
          </button>

          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            title="下一步"
          >
            <SkipForward className="w-5 h-5" />
          </button>

          <button 
            onClick={() => { setIsPlaying(true); setCurrentStep(0); }}
            className={`p-3 rounded-full transition-colors ${isPlaying ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
            title="重新播放"
          >
            <RefreshCw className={`w-5 h-5 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} />
          </button>
        </div>

      </div>

      {/* Styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow-particle {
          from { stroke-dashoffset: 165; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes server-shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
      `}} />
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      title: "智能服务闭环",
      desc: "全场景校园服务感知，从报修到审批，AI智能路由分发，实现服务请求的秒级响应与自动化处理闭环。"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-cyan" />,
      title: "主动安全闭环",
      desc: "零信任架构底座，全天候持续评估终端与身份风险，微隔离技术阻断横向威胁，将安全前置于攻击发生前。"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-teal-400" />,
      title: "防御进化闭环",
      desc: "基于联邦学习的威胁情报共享，每次攻击拦截都会转化为全局防御策略更新，让系统越用越安全。"
    }
  ];

  return (
    <section className="py-20 relative z-10" id="智能服务">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">三大核心能力</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-dark/50 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-brand-cyan/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CloudNativeArchitecture = () => {
  const layers = [
    {
      id: 'presentation',
      name: '表现层',
      desc: '师生统一访问入口，多终端自适应',
      theme: 'border-blue-500/30 hover:border-blue-500/60',
      bg: 'bg-blue-900/10 hover:bg-blue-900/20',
      text: 'text-blue-400',
      itemBg: 'bg-brand-dark/40 hover:bg-blue-900/30',
      itemBorder: 'border-blue-500/20 hover:border-blue-500/50',
      iconColor: 'text-blue-400',
      items: [
        { name: '校园Web门户网站', icon: <Monitor className="w-6 h-6 mb-2" /> },
        { name: '移动端H5页面', icon: <Smartphone className="w-6 h-6 mb-2" /> },
        { name: '教务管理后台', icon: <Wrench className="w-6 h-6 mb-2" /> },
        { name: '管理员管控平台', icon: <UserCog className="w-6 h-6 mb-2" /> },
      ]
    },
    {
      id: 'business',
      name: '业务服务层',
      desc: '承载高校核心业务场景',
      theme: 'border-cyan-500/30 hover:border-cyan-500/60',
      bg: 'bg-cyan-900/10 hover:bg-cyan-900/20',
      text: 'text-cyan-400',
      itemBg: 'bg-brand-dark/40 hover:bg-cyan-900/30',
      itemBorder: 'border-cyan-500/20 hover:border-cyan-500/50',
      iconColor: 'text-cyan-400',
      items: [
        { name: '教务管理系统', icon: <BookOpen className="w-6 h-6 mb-2" /> },
        { name: '师生服务系统', icon: <GraduationCap className="w-6 h-6 mb-2" /> },
        { name: '教学实训系统', icon: <Pencil className="w-6 h-6 mb-2" /> },
        { name: '后勤管理系统', icon: <Building className="w-6 h-6 mb-2" /> },
      ]
    },
    {
      id: 'core',
      name: '核心引擎层',
      desc: '平台核心能力底座',
      theme: 'border-brand-cyan shadow-[0_0_30px_rgba(0,163,196,0.2)] hover:shadow-[0_0_50px_rgba(0,163,196,0.4)]',
      bg: 'bg-brand-cyan/10 hover:bg-brand-cyan/20',
      text: 'text-brand-cyan',
      itemBg: 'bg-brand-dark/60 hover:bg-brand-cyan/10',
      itemBorder: 'border-brand-cyan/30 hover:border-brand-cyan',
      iconColor: 'text-brand-cyan',
      isHighlight: true,
      items: [
        { name: 'Open Cloud云控中枢', desc: '全域调度与进化驱动', icon: <Brain className="w-8 h-8 mb-3" /> },
        { name: 'PromptShield AI防御系统', desc: '全场景安全防护', icon: <Shield className="w-8 h-8 mb-3" /> },
        { name: 'LangGraph校园智能助手', desc: '流式算法智能服务', icon: <Bot className="w-8 h-8 mb-3" /> },
        { name: 'FastScanEngine渗透引擎', desc: '主动安全检测', icon: <Target className="w-8 h-8 mb-3" /> },
      ]
    },
    {
      id: 'data',
      name: '数据持久层',
      desc: '全量数据存储与管理',
      theme: 'border-purple-500/30 hover:border-purple-500/60',
      bg: 'bg-purple-900/10 hover:bg-purple-900/20',
      text: 'text-purple-400',
      itemBg: 'bg-brand-dark/40 hover:bg-purple-900/30',
      itemBorder: 'border-purple-500/20 hover:border-purple-500/50',
      iconColor: 'text-purple-400',
      items: [
        { name: 'MongoDB', icon: <Database className="w-6 h-6 mb-2" /> },
        { name: 'PostgreSQL', icon: <BarChart className="w-6 h-6 mb-2" /> },
        { name: '向量数据库', icon: <Binary className="w-6 h-6 mb-2" /> },
        { name: '分布式日志存储', icon: <FileText className="w-6 h-6 mb-2" /> },
      ]
    }
  ];

  return (
    <section className="py-20 relative" id="产品架构">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">四层云原生架构</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">基于云原生技术栈，构建高可用、可扩展的智慧校园底层架构</p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {layers.map((layer, index) => (
            <React.Fragment key={layer.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-full glass-panel border-2 ${layer.theme} ${layer.bg} transition-all duration-300 relative group rounded-2xl`}
              >
                {/* Tooltip on Hover */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-brand-dark border border-slate-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-center shadow-xl whitespace-nowrap">
                  <Info className="w-4 h-4 mr-2 text-brand-cyan" />
                  {layer.desc}
                </div>

                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
                  {/* Layer Title */}
                  <div className={`md:w-1/4 text-center md:text-left mb-6 md:mb-0 md:pr-6 md:border-r border-slate-700/50 ${layer.text}`}>
                    <h3 className="text-2xl font-bold tracking-wider">{layer.name}</h3>
                    {layer.isHighlight && (
                      <span className="inline-block mt-2 px-3 py-1 bg-brand-cyan/20 border border-brand-cyan/50 rounded-full text-xs font-medium text-brand-cyan">
                        核心能力底座
                      </span>
                    )}
                  </div>

                  {/* Layer Items */}
                  <div className="md:w-3/4 w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:pl-6">
                    {layer.items.map((item, i) => (
                      <div 
                        key={i} 
                        className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 border ${layer.itemBg} ${layer.itemBorder}`}
                      >
                        <div className={`${layer.iconColor}`}>
                          {item.icon}
                        </div>
                        <span className={`text-center font-medium ${layer.isHighlight ? 'text-white text-base' : 'text-slate-200 text-sm'}`}>
                          {item.name}
                        </span>
                        {item.desc && (
                          <span className={`text-xs mt-2 text-center ${layer.iconColor} opacity-80`}>
                            {item.desc}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Data Flow Arrow */}
              {index < layers.length - 1 && (
                <div className="my-4 flex flex-col items-center text-slate-500 animate-pulse">
                  <ArrowUpDown className="w-8 h-8" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const SmartAssistant = () => {
  const chatSequence = [
    { role: 'user', content: '图书馆今天几点关门？' },
    { role: 'bot', content: '📚 图书馆今日开放时间为8:00-22:00，当前正常开放中。' },
    { role: 'user', content: '我的宿舍空调坏了怎么办？' },
    { role: 'bot', content: '🏠 已为您识别报修需求：\n- 故障地点：学生宿舍\n- 故障类型：空调故障\n- 责任部门：公寓管理中心\n- 报修电话：0391-XXXXXXX\n请拨打上述电话进行报修，维修人员会尽快上门处理。' },
    { role: 'user', content: '帮我生成一份小学数学《分数的认识》教案' },
    { role: 'bot', content: '📝 正在为您生成师范生标准教案...\n\n【课题信息】小学数学《分数的认识》\n【教学目标】理解分数的意义，掌握读写方法。\n【教学重难点】理解单位"1"的概念。\n【教学过程】\n1. 创设情境，引入新课\n2. 动手操作，探究新知\n3. 巩固练习，拓展应用' }
  ];

  const [visibleMessages, setVisibleMessages] = useState<Array<{role: string, content: string}>>([]);
  const [typingMessage, setTypingMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex >= chatSequence.length) {
      // Loop the chat after a delay
      const timeout = setTimeout(() => {
        setVisibleMessages([]);
        setTypingMessage('');
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentMsg = chatSequence[currentIndex];

    if (currentMsg.role === 'user') {
      // Show user message immediately
      const timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, currentMsg]);
        setCurrentIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      // Typewriter effect for bot
      setIsTyping(true);
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= currentMsg.content.length) {
          setTypingMessage(currentMsg.content.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setVisibleMessages(prev => [...prev, currentMsg]);
          setTypingMessage('');
          setCurrentIndex(prev => prev + 1);
        }
      }, 30); // Typing speed
      return () => clearInterval(typeInterval);
    }
  }, [currentIndex]);

  const features = [
    { title: '教务百事通', desc: '校历/选课/成绩查询', icon: <Calendar className="w-5 h-5 text-blue-400" /> },
    { title: '校园生活助手', desc: '报修/食堂/图书馆', icon: <Coffee className="w-5 h-5 text-orange-400" /> },
    { title: '师范生实训', desc: '教案生成/试讲评价/教资模拟', icon: <BookOpen className="w-5 h-5 text-green-400" /> },
    { title: '学术科研辅助', desc: '文献检索/论文校对', icon: <Search className="w-5 h-5 text-purple-400" /> },
    { title: '招生新生服务', desc: '政策查询/入学指南', icon: <UserPlus className="w-5 h-5 text-pink-400" /> },
    { title: '个性化记忆', desc: '多轮对话/千人千面', icon: <BrainCircuit className="w-5 h-5 text-brand-cyan" /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="智能服务">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">LangGraph 校园智能助手</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">基于流式算法与大模型，提供全场景、拟人化的校园智能服务体验</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left: Phone Mockup */}
          <div className="relative w-[320px] h-[650px] bg-slate-900 border-[10px] border-slate-800 rounded-[3rem] shadow-[0_0_50px_rgba(0,163,196,0.2)] overflow-hidden shrink-0">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
            
            {/* Chat Header */}
            <div className="bg-slate-800/80 backdrop-blur-md pt-10 pb-3 px-4 border-b border-slate-700 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">云枢助手</div>
                  <div className="text-[10px] text-brand-cyan flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mr-1 animate-pulse"></span> 在线
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-4 space-y-4 h-[calc(100%-140px)] overflow-y-auto scrollbar-hide flex flex-col justify-end pb-4">
              {visibleMessages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-cyan text-brand-dark rounded-tr-sm' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700">
                    {typingMessage}
                    <span className="inline-block w-1.5 h-4 bg-brand-cyan ml-1 animate-pulse align-middle"></span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-0 w-full p-4 bg-slate-800/90 backdrop-blur-md border-t border-slate-700 flex items-center gap-2">
              <div className="flex-1 bg-slate-900 rounded-full h-10 px-4 flex items-center text-slate-500 text-sm border border-slate-700">
                输入您的问题...
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center shrink-0">
                <Send className="w-4 h-4 text-brand-dark ml-1" />
              </div>
            </div>
          </div>

          {/* Right: Features List */}
          <div className="max-w-lg w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="glass-panel p-4 flex items-start gap-4 hover:bg-slate-800/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-brand-cyan/10 to-blue-500/10 border border-brand-cyan/30 rounded-xl p-4 flex items-center justify-center gap-3 text-sm text-brand-cyan font-medium"
            >
              <Sparkles className="w-5 h-5" />
              <span>流式算法贯穿全流程 | 手机网页直接访问 | 无需下载APP</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OpenCloudHub = () => {
  const hexModules = [
    { title: "全域调度模块", desc: "统一任务调度与资源调配", icon: <Network className="w-8 h-8 mb-2" /> },
    { title: "智能学习模块", desc: "问答/漏洞/防御三大学习引擎", icon: <BrainCircuit className="w-8 h-8 mb-2" /> },
    { title: "数据中枢模块", desc: "全系统数据打通与共享", icon: <DatabaseZap className="w-8 h-8 mb-2" /> },
    { title: "自动化运维模块", desc: "7×24小时监控与故障自愈", icon: <Settings2 className="w-8 h-8 mb-2" /> },
    { title: "管理员管控模块", desc: "可视化配置与安全审计", icon: <ShieldAlert className="w-8 h-8 mb-2" /> },
  ];

  const serviceData = [
    { name: 'Mon', value: 82 }, { name: 'Tue', value: 85 }, { name: 'Wed', value: 89 }, { name: 'Thu', value: 91 }, { name: 'Fri', value: 94 }, { name: 'Sat', value: 96 }, { name: 'Sun', value: 98 }
  ];
  const attackData = [
    { name: 'Mon', value: 120 }, { name: 'Tue', value: 145 }, { name: 'Wed', value: 190 }, { name: 'Thu', value: 240 }, { name: 'Fri', value: 310 }, { name: 'Sat', value: 380 }, { name: 'Sun', value: 450 }
  ];
  const defenseData = [
    { name: 'Mon', value: 90 }, { name: 'Tue', value: 92 }, { name: 'Wed', value: 95 }, { name: 'Thu', value: 96 }, { name: 'Fri', value: 98 }, { name: 'Sat', value: 99 }, { name: 'Sun', value: 99.9 }
  ];

  const FlowCard = ({ title, theme, steps, statLabel, statValue, chartData, chartColor, chartLabel }: any) => {
    const themes: Record<string, string> = {
      blue: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
      orange: 'border-orange-500/30 text-orange-400 bg-orange-500/5',
      green: 'border-green-500/30 text-green-400 bg-green-500/5',
    };

    return (
      <div className={`glass-panel p-6 ${themes[theme]} flex flex-col h-full relative z-10 hover:-translate-y-2 transition-transform duration-300`}>
        <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700/50 pb-4">{title}</h3>
        
        <div className="flex-grow space-y-4 mb-8 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-slate-700/50 -z-10"></div>
          
          {steps.map((step: string, idx: number) => (
            <div key={idx} className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 bg-brand-dark border ${themes[theme].split(' ')[0]}`}>
                {idx + 1}
              </div>
              <span className="text-sm text-slate-300">{step}</span>
            </div>
          ))}
        </div>

        <div className="bg-brand-dark/80 rounded-xl p-4 border border-slate-700/50 shadow-inner">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-xs text-slate-400 mb-1">{statLabel}</div>
              <div className="text-2xl font-mono font-bold text-white">{statValue}</div>
            </div>
            <div className="text-xs text-slate-400">{chartLabel}</div>
          </div>
          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#0a1128', borderColor: chartColor, fontSize: '12px', borderRadius: '8px' }}
                  itemStyle={{ color: chartColor }}
                  labelStyle={{ display: 'none' }}
                />
                <Line type="monotone" dataKey="value" stroke={chartColor} strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 relative bg-brand-dark/50 border-y border-brand-cyan/20" id="Open Cloud中枢">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400"
          >
            Open Cloud——7×24小时自动化运维工程师
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            全域调度、智能学习、数据共享、故障自愈，打造真正的无人值守智慧校园大脑。
          </p>
        </div>

        {/* Hexagon Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-32">
          {hexModules.map((mod, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="relative group w-40 h-44 md:w-48 md:h-56"
            >
              <div 
                className="absolute inset-0 bg-brand-cyan/20 group-hover:bg-brand-cyan/40 transition-colors duration-300"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              ></div>
              <div 
                className="absolute inset-[2px] bg-brand-dark flex flex-col items-center justify-center p-4 text-center group-hover:bg-brand-blue/20 transition-colors duration-300"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <div className="text-brand-cyan group-hover:scale-110 transition-transform duration-300">
                  {mod.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-[10px] md:text-xs text-slate-400 leading-tight">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Evolution Flows */}
        <div className="relative mt-20">
          {/* Central Rotating Triangle & Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:flex flex-col items-center justify-center w-full h-full pointer-events-none opacity-20">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-[800px] h-[800px] border-2 border-dashed border-brand-cyan rounded-full flex items-center justify-center"
            >
              <Triangle className="w-[600px] h-[600px] text-brand-cyan opacity-30" strokeWidth={0.5} />
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center pointer-events-none">
             <div className="bg-brand-dark/90 backdrop-blur-xl border border-brand-cyan px-8 py-4 rounded-full text-brand-cyan font-bold tracking-[0.2em] shadow-[0_0_40px_rgba(0,163,196,0.5)] text-xl flex items-center">
               <RefreshCw className="w-6 h-6 mr-3 animate-spin-slow" />
               越用越聪明 · 越用越安全
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Flow 1: Service */}
            <FlowCard 
              title="📝 服务能力进化流程"
              theme="blue"
              steps={['学生提问(未知问题)', 'Open Cloud全网搜索', '答案返回智能体', '存入后端数据库', '知识库持续完善']}
              statLabel="知识库条目数"
              statValue="12,458"
              chartData={serviceData}
              chartColor="#3b82f6"
              chartLabel="问答准确率趋势"
            />
            {/* Flow 2: Attack */}
            <FlowCard 
              title="🎯 攻击能力进化流程"
              theme="orange"
              steps={['监控全网漏洞情报', 'Open Cloud学习分析', '生成POC脚本', '更新攻击模块', '定时测试系统']}
              statLabel="漏洞库POC数量"
              statValue="8,932"
              chartData={attackData}
              chartColor="#f97316"
              chartLabel="新增漏洞趋势"
            />
            {/* Flow 3: Defense */}
            <FlowCard 
              title="🛡️ 防御能力进化流程"
              theme="green"
              steps={['接收攻击测试结果', 'Open Cloud分析生成规则', '更新PromptShield', '拦截新型攻击', '防御能力持续进化']}
              statLabel="防御规则数量"
              statValue="15,204"
              chartData={defenseData}
              chartColor="#22c55e"
              chartLabel="攻击拦截率趋势"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PromptShield = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="安全防御">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            PromptShield AI——全场景智能防御系统
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-brand-cyan font-medium text-lg max-w-2xl mx-auto tracking-wide">
            AI智能体防护 + Web网站防护 一体化防御
          </p>
        </div>

        {/* Funnel Visualization */}
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto mb-20">
          {/* Layer 1 */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-blue-400/10 border border-blue-400/30 rounded-t-3xl rounded-b-xl p-6 md:p-8 text-center shadow-[0_0_20px_rgba(96,165,250,0.05)] backdrop-blur-sm relative group hover:bg-blue-400/20 transition-colors"
          >
            <div className="absolute top-4 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Filter className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-blue-300 font-bold text-xl md:text-2xl mb-3 tracking-wider">第一层 - 文本预处理层</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-slate-300">
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-400/20">HTML标签移除</span>
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-400/20">编码解码</span>
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-400/20">Unicode隐写检测</span>
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-400/20">特征提取</span>
            </div>
          </motion.div>

          <div className="h-4 w-1.5 bg-blue-400/30"></div>

          {/* Layer 2 */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-11/12 bg-blue-500/20 border border-blue-500/40 rounded-xl p-6 md:p-8 text-center shadow-[0_0_25px_rgba(59,130,246,0.1)] backdrop-blur-sm relative group hover:bg-blue-500/30 transition-colors"
          >
            <div className="absolute top-4 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Layers className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-blue-400 font-bold text-xl md:text-2xl mb-3 tracking-wider">第二层 - 规则引擎检测层</h3>
            <p className="text-white font-medium mb-4">11大类100+恶意模式 | 正则表达式匹配 | 毫秒级检测</p>
            <div className="text-xs md:text-sm text-blue-200/80 flex flex-wrap justify-center gap-x-4 gap-y-2">
              <span>✓ 提示注入</span>
              <span>✓ 越狱</span>
              <span>✓ 数据外泄</span>
              <span>✓ 编码绕过</span>
              <span>✓ 角色扮演</span>
              <span>✓ 间接攻击</span>
            </div>
          </motion.div>

          <div className="h-4 w-1.5 bg-blue-500/40"></div>

          {/* Layer 3 */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-5/6 bg-blue-600/30 border border-blue-600/50 rounded-t-xl rounded-b-3xl p-6 md:p-8 text-center shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-sm relative group hover:bg-blue-600/40 transition-colors"
          >
            <div className="absolute top-4 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <BrainCircuit className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-blue-400 font-bold text-xl md:text-2xl mb-3 tracking-wider">第三层 - BERT语义分类层</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-white">
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-500/30">上下文语义理解</span>
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-500/30">混淆攻击识别</span>
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-500/30">零日攻击检测</span>
              <span className="px-3 py-1 bg-brand-dark/50 rounded-md border border-blue-500/30">GPU/CPU自适应</span>
            </div>
          </motion.div>

          <div className="h-10 w-1.5 bg-gradient-to-b from-blue-600/50 to-brand-cyan flex justify-center relative">
            <ArrowDown className="w-6 h-6 text-brand-cyan absolute -bottom-3 animate-bounce" />
          </div>

          {/* Bottom Output */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-2/3 mt-6 bg-brand-dark border-2 border-brand-cyan rounded-2xl p-6 text-center shadow-[0_0_40px_rgba(0,163,196,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-cyan/5 animate-pulse"></div>
            <h3 className="text-brand-cyan font-bold text-xl mb-4 relative z-10 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 mr-2" /> 多因素风险评估
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
              <span className="text-white font-mono bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">0.0 - 1.0 风险评分</span>
              <span className="text-slate-400 hidden md:inline">→</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded">允许</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded">修改</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded">审查</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded">拒绝</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real-time Data Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {[
            { icon: <Shield className="w-8 h-8 text-brand-cyan" />, title: "今日拦截攻击", value: "2,847", suffix: "次" },
            { icon: <Bot className="w-8 h-8 text-blue-400" />, title: "AI攻击拦截率", value: "95.2", suffix: "%" },
            { icon: <Globe className="w-8 h-8 text-teal-400" />, title: "Web攻击拦截率", value: "93.8", suffix: "%" },
            { icon: <BarChart className="w-8 h-8 text-purple-400" />, title: "整体误报率", value: "3.8", suffix: "%" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 flex flex-col items-center justify-center text-center hover:bg-brand-blue/10 transition-colors"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                {stat.value}<span className="text-lg text-slate-400 ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm text-slate-400">{stat.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Defense Scope */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 border-t-4 border-t-blue-500"
          >
            <div className="flex items-center mb-6">
              <Bot className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">AI智能体防护范围</h3>
            </div>
            <ul className="space-y-4">
              {['直接提示注入', 'DAN越狱攻击', '角色扮演绕过', '编码混淆攻击', 'Typoglycemia攻击'].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-300 bg-brand-dark/50 p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 border-t-4 border-t-brand-cyan"
          >
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-brand-cyan mr-3" />
              <h3 className="text-2xl font-bold text-white">Web系统防护范围</h3>
            </div>
            <ul className="space-y-4">
              {['SQL注入', 'XSS跨站脚本', 'SSRF攻击', '远程代码执行', '文件上传漏洞', '目录遍历'].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-300 bg-brand-dark/50 p-3 rounded-lg border border-slate-700/50 hover:border-brand-cyan/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FastScanEngine = () => {
  const pocList = [
    "CVE-2021-41773 (Apache 目录遍历)", "CVE-2020-14145 (Tomcat RCE)", "CVE-2021-22205 (GitLab RCE)",
    "CVE-2024-4577 (PHP CGI RCE)", "CVE-2023-36884 (Windows Search RCE)", "CVE-2021-44228 (Log4j RCE)",
    "CVE-2022-22965 (Spring4Shell)", "CVE-2019-0708 (BlueKeep)", "CVE-2017-0144 (EternalBlue)",
    "CVE-2023-23397 (Outlook EoP)", "CVE-2021-34527 (PrintNightmare)", "CVE-2020-0601 (CurveBall)",
    "CVE-2014-0160 (Heartbleed)", "CVE-2022-26134 (Confluence RCE)", "CVE-2021-26855 (ProxyLogon)",
    "CVE-2021-34473 (ProxyShell)", "CVE-2023-27350 (PaperCut RCE)", "CVE-2023-2868 (Barracuda ESG)",
    "CVE-2023-34362 (MOVEit Transfer)", "CVE-2024-3400 (PAN-OS RCE)", "CVE-2023-4966 (Citrix Bleed)",
    "CVE-2023-20198 (Cisco IOS XE)", "CVE-2023-46805 (Ivanti Auth Bypass)", "CVE-2024-21887 (Ivanti RCE)",
    "CVE-2023-22515 (Confluence Broken Auth)", "CVE-2023-22518 (Confluence Data Loss)", "CVE-2023-38146 (Windows Theme RCE)"
  ];

  // Double the list for infinite marquee effect
  const marqueeItems = [...pocList, ...pocList];

  const flowSteps = [
    { icon: <Target className="w-6 h-6" />, text: "渗透测试发起攻击" },
    { icon: <Bug className="w-6 h-6" />, text: "发现漏洞/绕过方式" },
    { icon: <Brain className="w-6 h-6" />, text: "Open Cloud分析" },
    { icon: <FileCode2 className="w-6 h-6" />, text: "生成防御规则" },
    { icon: <Shield className="w-6 h-6" />, text: "更新PromptShield" },
    { icon: <Activity className="w-6 h-6" />, text: "防御能力提升" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark/80 border-y border-brand-cyan/10" id="渗透引擎">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
          >
            FastScanEngine——秒级漏洞扫描引擎
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-orange-200/80 font-medium text-lg max-w-2xl mx-auto tracking-wide">
            为防御系统提供攻击能力支撑
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Performance Comparison */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 border-t-4 border-t-orange-500"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Timer className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">扫描效率对比</h3>
              </div>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30">
                测试目标：静态官网
              </span>
            </div>

            <div className="space-y-6">
              {/* FastScanEngine */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-orange-400">本系统 (FastScanEngine)</span>
                  <span className="font-mono text-orange-400">1.45秒</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '6.4%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                  ></motion.div>
                </div>
              </div>

              {/* Burp Suite */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Burp Suite</span>
                  <span className="font-mono text-slate-400">10.8秒</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '47.7%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="bg-slate-600 h-full rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* OWASP ZAP */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">OWASP ZAP</span>
                  <span className="font-mono text-slate-400">22.6秒</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.2 }}
                    className="bg-slate-700 h-full rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-xl text-orange-300 font-bold text-lg shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                🚀 效率提升 14-22 倍
              </span>
            </div>
          </motion.div>

          {/* Dual Confirmation Mechanism */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 border-t-4 border-t-brand-cyan"
          >
            <div className="flex items-center mb-8">
              <ShieldCheck className="w-8 h-8 text-brand-cyan mr-3" />
              <h3 className="text-2xl font-bold text-white">双重确权机制</h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              {/* Traditional */}
              <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center w-full">
                <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-slate-300 text-sm mb-2">传统检测方式</div>
                <div className="text-2xl font-mono font-bold text-red-400">误报率 8.3%</div>
              </div>

              <ArrowRight className="w-8 h-8 text-slate-500 hidden sm:block shrink-0" />
              <ArrowDown className="w-8 h-8 text-slate-500 sm:hidden shrink-0" />

              {/* New Method */}
              <div className="flex-1 bg-brand-cyan/10 border border-brand-cyan/30 rounded-xl p-6 text-center w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-cyan/5 animate-pulse"></div>
                <GitMerge className="w-8 h-8 text-brand-cyan mx-auto mb-3 relative z-10" />
                <div className="text-brand-cyan text-sm mb-2 relative z-10">POC验证 + SimHash指纹比对</div>
                <div className="text-2xl font-mono font-bold text-brand-cyan relative z-10">误报率 3.8%</div>
              </div>
            </div>

            <div className="text-center">
              <span className="inline-block px-6 py-2 bg-brand-cyan/20 border border-brand-cyan/50 rounded-xl text-brand-cyan font-bold text-lg shadow-[0_0_20px_rgba(0,163,196,0.2)]">
                ✨ 误报过滤率达 96.2%
              </span>
            </div>
          </motion.div>
        </div>

        {/* POC Vulnerability Library */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Database className="w-6 h-6 text-orange-400 mr-2" />
            <h3 className="text-xl font-bold text-white">内置 27 个高危 POC 漏洞库</h3>
          </div>
          
          <div className="relative w-full overflow-hidden bg-slate-900/50 border border-slate-800 rounded-2xl py-6 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-brand-dark before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-brand-dark after:to-transparent">
            <div className="flex w-[200%] animate-marquee">
              {marqueeItems.map((poc, idx) => (
                <div 
                  key={idx} 
                  className="mx-3 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg whitespace-nowrap text-sm text-slate-300 flex items-center hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300 transition-colors cursor-default"
                >
                  <Bug className="w-4 h-4 mr-2 text-orange-500/70" />
                  {poc}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linkage Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 relative"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-brand-cyan mr-3 animate-spin-slow" />
              与防御系统的联动闭环
            </h3>
          </div>

          <div className="relative max-w-5xl mx-auto pb-20">
            {/* Connecting Line */}
            <div className="absolute top-[32px] left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 hidden md:block z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
              {flowSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${
                    idx === 0 ? 'bg-orange-500/20 border-orange-500 text-orange-400 shadow-orange-500/20' :
                    idx === 1 ? 'bg-red-500/20 border-red-500 text-red-400 shadow-red-500/20' :
                    idx === 2 ? 'bg-blue-500/20 border-blue-500 text-blue-400 shadow-blue-500/20' :
                    idx === 3 ? 'bg-purple-500/20 border-purple-500 text-purple-400 shadow-purple-500/20' :
                    idx === 4 ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan shadow-brand-cyan/20' :
                    'bg-green-500/20 border-green-500 text-green-400 shadow-green-500/20'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="text-xs md:text-sm text-center text-slate-300 font-medium px-2">
                    {step.text}
                  </div>
                  
                  {/* Arrows for mobile */}
                  {idx < flowSteps.length - 1 && (
                    <ArrowDown className="w-5 h-5 text-slate-600 mt-4 md:hidden" />
                  )}
                </div>
              ))}
            </div>

            {/* Return Loop Line (Desktop) */}
            <div className="hidden md:block absolute bottom-6 left-[8%] right-[8%] h-16 border-b-2 border-l-2 border-r-2 border-dashed border-brand-cyan/40 rounded-b-3xl z-0">
              <div className="absolute -left-2 top-0 w-4 h-4 border-t-2 border-r-2 border-brand-cyan/40 rotate-[-45deg]"></div>
              <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-brand-dark px-4 py-1 text-brand-cyan text-sm font-medium flex items-center rounded-full border border-brand-cyan/30 shadow-[0_0_10px_rgba(0,163,196,0.2)]">
                <RefreshCw className="w-4 h-4 mr-2 animate-spin-slow" /> 持续循环测试
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const FullProcessDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const demoSteps = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "信息收集",
      details: ["自动化渗透系统对校园网站进行指纹识别", "识别到Apache 2.4.49服务器"],
      code: "$ fastscan target https://campus.edu.cn --aggressive\n[+] Resolving campus.edu.cn... 192.168.1.105\n[+] Initializing FastScanEngine v2.4.1\n[+] Scanning 65535 ports...\n[+] Open ports found: 80/tcp, 443/tcp, 22/tcp\n[+] Fingerprinting services...\n[>] Port 80: HTTP redirect to HTTPS\n[>] Port 443: Apache/2.4.49 (Unix) OpenSSL/1.1.1\n[>] Port 22: OpenSSH 8.2p1 Ubuntu 4ubuntu0.3\n[+] Checking WAF presence...\n[!] Warning: Basic WAF detected (ModSecurity ruleset)\n[+] Enumerating directories (wordlist: common.txt)...\n[>] Found: /admin (403 Forbidden)\n[>] Found: /cgi-bin/ (200 OK)\n[+] Status: Target acquired. Ready for vulnerability assessment."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "漏洞检测",
      details: ["匹配到CVE-2021-41773漏洞POC", "发起路径穿越攻击测试", "成功读取/etc/passwd文件 ⚠️"],
      code: "$ run_poc --cve CVE-2021-41773 --target https://campus.edu.cn\n[+] Loading exploit module: exploits/linux/http/apache_path_traversal\n[+] CVE Description: Apache 2.4.49 Path Traversal & RCE\n[+] Generating payload...\n[>] Payload: /cgi-bin/.%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd\n[+] Bypassing WAF filters (URL encoding)...\n[+] Sending malicious GET request...\nHTTP/1.1 200 OK\nDate: Fri, 10 Apr 2026 07:45:12 GMT\nServer: Apache/2.4.49 (Unix)\nContent-Type: text/plain\n\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\n[!] VULNERABILITY CONFIRMED: Path Traversal Successful.\n[+] Extracting sensitive data... Done."
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "结果上报",
      details: ["攻击结果实时同步至Open Cloud中枢", "记录：漏洞类型、攻击方式、成功标志"],
      code: "[+] Initializing secure telemetry channel...\n[+] Establishing TLS 1.3 connection to Open Cloud Hub...\n[+] Authenticating node: fastscan-agent-04\n[+] Compiling attack telemetry data...\n\nPOST /api/v3/telemetry/attack_report HTTP/2\nHost: opencloud.zhiyuyunshu.internal\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\nContent-Type: application/json\n\n{\n  \"timestamp\": \"2026-04-10T07:45:15Z\",\n  \"target\": \"campus.edu.cn\",\n  \"cve_id\": \"CVE-2021-41773\",\n  \"attack_vector\": \"Path Traversal (URL Encoded)\",\n  \"payload\": \"/cgi-bin/.%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd\",\n  \"severity\": \"CRITICAL\",\n  \"success_flag\": true\n}\n\n[<] HTTP/2 201 Created\n[<] {\"status\": \"success\", \"sync_id\": \"req_98x2f1\", \"action\": \"trigger_defense_pipeline\"}\n[+] Open Cloud Sync: OK. Pipeline triggered."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "规则生成",
      details: ["Open Cloud分析攻击特征", "自动生成防御规则：检测\"/.%2e/\"路径穿越模式", "更新至PromptShield规则库"],
      code: "[Open Cloud Engine - Defense AI Module]\n> Received telemetry sync_id: req_98x2f1\n> Initializing signature analysis...\n> Parsing payload AST...\n> Detecting evasion techniques: URL Encoding (Level 2)\n> Extracting malicious pattern: /\\.%2e/ and /%2e%2e/\n> Cross-referencing with global threat intelligence... Match found.\n\n> Generating dynamic WAF rule (RegEx & Semantic):\nSecRule REQUEST_URI \"@rx \\.(?:%2e|\\.)/(?:%2e|\\.)\" \\\n  \"id:100543,phase:1,deny,status:403,log,msg:'Path Traversal Attempt'\"\n  \n> Compiling rule into PromptShield binary format...\n> Rule hash: 7f8a9b2c1d3e4f5a\n> Pushing hot-update to all PromptShield edge nodes...\n[+] Node edge-01: Updated successfully (12ms)\n[+] Node edge-02: Updated successfully (14ms)\n[+] Node edge-03: Updated successfully (11ms)\n> Defense rule deployment complete."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "防御生效",
      details: ["防御系统加载新规则", "再次模拟相同攻击", "攻击被成功拦截 ✅"],
      code: "$ run_poc --cve CVE-2021-41773 --target https://campus.edu.cn --verify-defense\n[+] Initiating verification scan...\n[+] Sending identical malicious payload:\nGET /cgi-bin/.%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd HTTP/1.1\nHost: campus.edu.cn\n\n[<] HTTP/1.1 403 Forbidden\n[<] Server: PromptShield/3.0\n[<] Content-Type: text/html\n[<] X-Protection-Status: Blocked\n\n[PromptShield Intercept Log]\n> Action: DENY\n> Rule ID: 100543\n> Reason: Path Traversal Attempt (URL Encoded)\n> Confidence: 99.8%\n> Client IP: 192.168.1.50 (Added to temporary blocklist)\n\n[✓] DEFENSE ACTIVE: System successfully mitigated the attack.\n[+] Vulnerability closed."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "持续进化",
      details: ["系统记录本次攻防数据", "更新语义分类模型", "防御能力+1，准确率提升至95.5%"],
      code: "[Open Cloud Engine - Model Retraining Pipeline]\n> Initiating continuous learning cycle...\n> Ingesting new attack vectors from recent telemetry (1,245 samples)\n> Preprocessing data: Tokenization & Normalization\n> Updating BERT semantic embeddings...\n\n[Training Epoch 1/3] Loss: 0.0412 -> 0.0385\n[Training Epoch 2/3] Loss: 0.0385 -> 0.0311\n[Training Epoch 3/3] Loss: 0.0311 -> 0.0289\n\n> Running validation suite (10,000 test cases)...\n> False Positive Rate (FPR): 0.012%\n> False Negative Rate (FNR): 0.005%\n> Overall Validation Accuracy: 95.5% (+0.5%)\n\n> Bumping model version: v4.2.1 -> v4.2.2\n> Deploying new model weights to inference cluster...\n[+] Inference nodes synced.\n> System evolution complete. Ready for next cycle."
    }
  ];

  const statsData = [
    { label: "防御规则数", before: "127", after: "128", highlight: true },
    { label: "漏洞库POC数", before: "27", after: "27", highlight: false },
    { label: "攻击拦截率", before: "95.0%", after: "95.5%", highlight: true },
    { label: "知识库条目数", before: "2,847", after: "2,848", highlight: true },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, demoSteps.length]);

  return (
    <section className="py-24 relative overflow-hidden" id="全流程演示">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            一次完整的攻击-防御-进化全流程演示
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            通过真实的攻防案例，展示系统各模块如何协同工作，实现自进化闭环。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Timeline Left */}
          <div className="lg:col-span-5 relative min-h-[600px]">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800"></div>
            <div className="space-y-2 relative z-10">
              {demoSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = idx < activeStep;
                return (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-4 cursor-pointer transition-all duration-300 p-2 rounded-xl ${isActive ? 'opacity-100 bg-slate-800/30' : 'opacity-50 hover:opacity-80 hover:bg-slate-800/10'}`}
                    onClick={() => { setActiveStep(idx); setIsAutoPlaying(false); }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${isActive ? 'bg-brand-cyan text-brand-dark border-brand-cyan shadow-[0_0_15px_rgba(0,163,196,0.5)] scale-110' : isPast ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/50' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                      {step.icon}
                    </div>
                    <div className={`flex-1 pt-2 pb-4 ${idx !== demoSteps.length - 1 ? 'border-b border-slate-800/50' : ''}`}>
                      <h4 className={`text-lg font-bold mb-2 transition-colors ${isActive ? 'text-brand-cyan' : 'text-white'}`}>
                        Step {idx + 1} {step.title}
                      </h4>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-2 overflow-hidden"
                        >
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="text-sm text-slate-300 flex items-start">
                              <span className="text-brand-cyan mr-2 mt-0.5">•</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Terminal Right */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D1117] rounded-xl border border-slate-700 shadow-2xl overflow-hidden h-[600px] flex flex-col sticky top-24">
              <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-4 text-xs text-slate-400 font-mono flex items-center">
                    <Terminal className="w-3 h-3 mr-2" /> system_execution_log.sh
                  </div>
                </div>
                {isAutoPlaying && (
                  <div className="text-xs text-brand-cyan flex items-center animate-pulse">
                    <RefreshCw className="w-3 h-3 mr-1 animate-spin-slow" /> 自动演示中
                  </div>
                )}
              </div>
              <div className="p-6 font-mono text-sm text-green-400 whitespace-pre-wrap flex-1 overflow-y-auto">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {demoSteps[activeStep].code}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Update */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 text-center relative overflow-hidden group"
            >
              {stat.highlight && (
                <div className="absolute inset-0 bg-brand-cyan/5 group-hover:bg-brand-cyan/10 transition-colors"></div>
              )}
              <div className="text-sm text-slate-400 mb-3 relative z-10">{stat.label}</div>
              <div className="flex items-center justify-center gap-3 font-mono text-xl md:text-2xl relative z-10">
                <span className="text-slate-300">{stat.before}</span>
                <ArrowRight className={`w-5 h-5 ${stat.highlight ? 'text-brand-cyan' : 'text-slate-600'}`} />
                <span className={`font-bold ${stat.highlight ? 'text-brand-cyan text-shadow-glow' : 'text-slate-300'}`}>
                  {stat.after}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApplicationCases = () => {
  const metrics = [
    { icon: <PhoneCall className="w-6 h-6 text-blue-400" />, label: "累计服务师生", value: "50,000+", suffix: "次咨询" },
    { icon: <Timer className="w-6 h-6 text-brand-cyan" />, label: "平均响应时间", value: "2.8", suffix: "秒" },
    { icon: <TrendingUp className="w-6 h-6 text-green-400" />, label: "问题解决率", value: "92", suffix: "%" },
    { icon: <Shield className="w-6 h-6 text-orange-400" />, label: "累计拦截攻击", value: "20,000+", suffix: "次" },
    { icon: <Bot className="w-6 h-6 text-purple-400" />, label: "AI攻击拦截", value: "1,200+", suffix: "次" },
    { icon: <Star className="w-6 h-6 text-yellow-400" />, label: "用户满意度", value: "4.6", suffix: "/5" },
  ];

  const testimonials = [
    { quote: "以前打电话要等很久，现在秒回，太方便了！", author: "大二学生" },
    { quote: "教案生成质量很高，节省了我很多备课时间。", author: "实习教师" },
    { quote: "报修流程很清晰，不用再到处问应该找谁了。", author: "后勤人员" },
  ];
  // Duplicate for infinite marquee
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const evolutionStats = [
    { label: "知识库条目", before: "1,200", after: "2,200+", desc: "增长83%" },
    { label: "问答准确率", before: "91%", after: "98%", desc: "提升7%" },
    { label: "漏洞库POC", before: "27", after: "39", desc: "新增12个" },
    { label: "防御规则更新", before: "0", after: "36", desc: "次更新" },
    { label: "攻击拦截率", before: "92%", after: "95%", desc: "提升3%" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark" id="应用案例">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            标杆应用案例
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            智御云枢平台已在多所高校落地应用，显著提升校园服务效率与安全防护水平。
          </p>
        </div>

        {/* Case Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/40 to-brand-cyan/20 border border-brand-cyan/30 rounded-3xl p-8 md:p-10 mb-16 shadow-[0_0_30px_rgba(0,163,196,0.15)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <School className="w-48 h-48 text-brand-cyan" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <School className="w-10 h-10 text-brand-cyan mr-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">焦作师范高等专科学校</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-slate-300">
              <div className="flex items-center bg-brand-dark/50 px-4 py-2 rounded-lg border border-slate-700/50">
                <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                <span><span className="text-slate-400 text-sm block">试点时间</span>2025年12月 - 2026年3月</span>
              </div>
              <div className="flex items-center bg-brand-dark/50 px-4 py-2 rounded-lg border border-slate-700/50">
                <Package className="w-5 h-5 text-purple-400 mr-3" />
                <span><span className="text-slate-400 text-sm block">部署版本</span>专业版全功能模块</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                {metric.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">
                {metric.value}<span className="text-sm text-slate-400 ml-1">{metric.suffix}</span>
              </div>
              <div className="text-sm text-slate-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service Efficiency */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <div className="flex items-center mb-8">
              <Clock className="w-6 h-6 text-brand-cyan mr-3" />
              <h4 className="text-xl font-bold text-white">服务效率对比</h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">传统电话咨询 (平均等待)</span>
                  <span className="text-slate-300">3.5 分钟</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div className="bg-slate-500 h-full rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-brand-cyan font-bold">智能助手咨询 (平均响应)</span>
                  <span className="text-brand-cyan font-bold">3 秒</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div className="bg-brand-cyan h-full rounded-full w-[2%] shadow-[0_0_10px_rgba(0,163,196,0.8)]"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-between items-center">
              <span className="text-slate-400">效率提升</span>
              <span className="text-3xl font-bold text-green-400">98%</span>
            </div>
          </motion.div>

          {/* Manual Workload */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
              <h4 className="text-xl font-bold text-white">人工客服工作量</h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">使用前</span>
                  <span className="text-slate-300">100%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div className="bg-slate-500 h-full rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-400 font-bold">使用后</span>
                  <span className="text-blue-400 font-bold">35%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div className="bg-blue-500 h-full rounded-full w-[35%] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-between items-center">
              <span className="text-slate-400">工作量减少</span>
              <span className="text-3xl font-bold text-green-400">65%</span>
            </div>
          </motion.div>
        </div>

        {/* Evolution Data */}
        <div className="mb-16">
          <h4 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-brand-cyan mr-3" />
            运行3个月进化效果
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {evolutionStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-brand-cyan/50 transition-colors"
              >
                <div className="text-xs text-slate-400 mb-2">{stat.label}</div>
                <div className="flex items-center justify-center gap-2 mb-2 font-mono">
                  <span className="text-slate-500 line-through text-sm">{stat.before}</span>
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span className="text-brand-cyan font-bold text-lg">{stat.after}</span>
                </div>
                <div className="text-xs text-green-400 bg-green-400/10 inline-block px-2 py-1 rounded-full">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Marquee */}
        <div>
          <h4 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <ThumbsUp className="w-6 h-6 text-yellow-400 mr-3" />
            真实用户评价
          </h4>
          <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-brand-dark before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-brand-dark after:to-transparent">
            <div className="flex w-[300%] animate-marquee">
              {marqueeTestimonials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="mx-4 w-80 shrink-0 glass-panel p-6 flex flex-col justify-between"
                >
                  <Quote className="w-8 h-8 text-brand-cyan/30 mb-4" />
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{item.quote}"</p>
                  <div className="flex items-center justify-end">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3">
                      <UserCog className="w-4 h-4 text-slate-400" />
                    </div>
                    <span className="text-brand-cyan font-medium text-sm">—— {item.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Stats = () => {
  const [attacks, setAttacks] = useState(1284592);
  const [services, setServices] = useState(85420);
  const [evolutions, setEvolutions] = useState(342);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttacks(prev => prev + Math.floor(Math.random() * 7));
      if (Math.random() > 0.5) setServices(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.9) setEvolutions(prev => prev + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 border-y border-brand-cyan/20 bg-brand-blue/5 relative overflow-hidden" id="安全防御">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,196,0.1)_0,transparent_100%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-8 glass-panel text-center border-t-4 border-t-brand-cyan">
            <Shield className="w-12 h-12 text-brand-cyan mb-6" />
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 font-mono tracking-tight text-shadow-glow">
              {attacks.toLocaleString()}
            </div>
            <div className="text-brand-cyan uppercase tracking-widest text-sm font-medium">实时拦截攻击数</div>
          </div>
          <div className="flex flex-col items-center justify-center p-8 glass-panel text-center border-t-4 border-t-blue-400">
            <Activity className="w-12 h-12 text-blue-400 mb-6" />
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 font-mono tracking-tight">
              {services.toLocaleString()}
            </div>
            <div className="text-blue-400 uppercase tracking-widest text-sm font-medium">今日服务响应次数</div>
          </div>
          <div className="flex flex-col items-center justify-center p-8 glass-panel text-center border-t-4 border-t-teal-400">
            <RefreshCw className="w-12 h-12 text-teal-400 mb-6" />
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 font-mono tracking-tight">
              {evolutions.toLocaleString()}
            </div>
            <div className="text-teal-400 uppercase tracking-widest text-sm font-medium">模型进化更新次数</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const serviceSteps = [
  "学生通过手机网页访问智能助手",
  "遇到未知问题触发Open Cloud",
  "Open Cloud全网搜索获取答案",
  "答案返回智能体并存入知识库",
  "服务能力持续进化"
];

const attackSteps = [
  "Open Cloud实时学习全网最新漏洞",
  "自动生成POC验证脚本",
  "定时攻击测试网站与智能体",
  "发现安全漏洞与防御短板",
  "攻击能力持续进化"
];

const defenseSteps = [
  "接收攻击模块的测试结果",
  "Open Cloud生成新防御规则",
  "更新PromptShield规则库",
  "全站Web与AI攻击防护",
  "防御能力持续进化"
];

const LoopCard = ({ title, icon, steps, colorTheme, className = '' }: { title: string, icon: React.ReactNode, steps: string[], colorTheme: 'blue' | 'orange' | 'green', className?: string }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const themes = {
    blue: {
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      activeBg: 'bg-blue-500/20',
      activeText: 'text-blue-300',
      shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.2)]'
    },
    orange: {
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      activeBg: 'bg-orange-500/20',
      activeText: 'text-orange-300',
      shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.2)]'
    },
    green: {
      border: 'border-green-500/30',
      text: 'text-green-400',
      activeBg: 'bg-green-500/20',
      activeText: 'text-green-300',
      shadow: 'shadow-[0_0_15px_rgba(34,197,94,0.2)]'
    }
  };

  const theme = themes[colorTheme];

  return (
    <div className={`glass-panel p-6 ${theme.border} ${theme.shadow} ${className} bg-brand-dark/80 backdrop-blur-xl h-full transition-all duration-300 hover:-translate-y-1`}>
      <div className={`${theme.text} text-xl font-bold mb-6 flex items-center border-b border-slate-700/50 pb-4`}>
        {icon} <span className="ml-2">{title}</span>
      </div>
      <ul className="space-y-4">
        {steps.map((step, i) => (
          <li 
            key={i} 
            className={`flex items-start p-3 rounded-lg transition-all duration-500 ${
              activeStep === i ? `${theme.activeBg} ${theme.activeText} scale-105` : 'text-slate-400 hover:bg-slate-800/50'
            }`}
          >
            <span className={`font-mono mr-3 ${activeStep === i ? theme.text : 'text-slate-600'}`}>
              0{i + 1}
            </span>
            <span className="text-sm leading-relaxed">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EvolutionWorkflow = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="自进化闭环">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">三位一体自进化闭环</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">服务、攻击、防御三大闭环相互促进，实现系统能力的持续自我进化</p>
        </div>

        <div className="relative">
          {/* Infinity Loop SVG Background */}
          <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" preserveAspectRatio="none">
            <path 
              d="M 500,200 C 650,50 850,50 850,200 C 850,350 650,350 500,200 C 350,50 150,50 150,200 C 150,350 350,350 500,200 Z" 
              fill="none" 
              stroke="rgba(0, 163, 196, 0.15)" 
              strokeWidth="8"
            />
            <path 
              d="M 500,200 C 650,50 850,50 850,200 C 850,350 650,350 500,200 C 350,50 150,50 150,200 C 150,350 350,350 500,200 Z" 
              fill="none" 
              stroke="rgba(0, 163, 196, 0.6)" 
              strokeWidth="4"
              strokeDasharray="15 30"
              className="animate-flow"
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Left: Service */}
            <LoopCard 
              title="智能服务闭环" 
              icon={<Bot className="w-6 h-6" />} 
              steps={serviceSteps} 
              colorTheme="blue"
            />

            {/* Middle: Attack */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-dark border border-brand-cyan px-6 py-2 rounded-full text-brand-cyan font-bold whitespace-nowrap shadow-[0_0_20px_rgba(0,163,196,0.5)] z-20 flex items-center">
                <Cloud className="w-5 h-5 mr-2" /> Open Cloud 云控中枢
              </div>
              <LoopCard 
                title="主动攻击闭环" 
                icon={<Radar className="w-6 h-6" />} 
                steps={attackSteps} 
                colorTheme="orange"
                className="pt-10"
              />
            </div>

            {/* Right: Defense */}
            <LoopCard 
              title="防御进化闭环" 
              icon={<ShieldCheck className="w-6 h-6" />} 
              steps={defenseSteps} 
              colorTheme="green"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050b14] border-t border-slate-800 pt-16 pb-8" id="联系我们">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <Shield className="w-5 h-5 text-brand-cyan mr-2" />
              关于我们
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">项目简介</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">核心团队</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">发展历程</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">产品服务</h4>
            <ul className="space-y-3">
              <li><a href="#智能服务" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">智能助手</a></li>
              <li><a href="#安全防御" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">AI防御系统</a></li>
              <li><a href="#渗透引擎" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">渗透测试系统</a></li>
              <li><a href="#Open Cloud中枢" className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">Open Cloud中枢</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-cyan mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Email：contact@zhiyuyunshu.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-brand-cyan mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">电话：0391-XXXXXXX</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-cyan mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">地址：焦作师范高等专科学校</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">关注我们</h4>
            <div className="space-y-4">
              <div className="flex flex-col items-start">
                <div className="w-24 h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center mb-2 hover:border-brand-cyan transition-colors cursor-pointer group">
                  <QrCode className="w-8 h-8 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                </div>
                <span className="text-xs text-slate-500">微信公众号</span>
              </div>
              <div>
                <a href="#" className="text-brand-cyan hover:text-blue-400 transition-colors text-sm flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  技术博客
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            <p>© 2025-2026 智御云枢团队. All rights reserved.</p>
            <p className="mt-1 text-brand-cyan/70 font-medium">挑战杯大学生创新创业竞赛参赛项目</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Shield className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-cyan/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProcessDemo />
        <Features />
        <SmartAssistant />
        <PromptShield />
        <FastScanEngine />
        <FullProcessDemo />
        <EvolutionWorkflow />
        <CloudNativeArchitecture />
        <OpenCloudHub />
        <ApplicationCases />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
