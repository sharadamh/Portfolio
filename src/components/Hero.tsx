import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Mail, Phone, Github, Linkedin, FileText, CheckCircle2, UserCheck, Upload } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;
  const [imageError, setImageError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(() => {
    return localStorage.getItem('sharada_profile_mypic') || personal.photoPath;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sharada_profile_mypic');
    if (saved) {
      setImgSrc(saved);
      setImageError(false);
    }
  }, []);

  const handleImageError = () => {
    const saved = localStorage.getItem('sharada_profile_mypic');
    if (saved && imgSrc !== saved) {
      setImgSrc(saved);
      setImageError(false);
      return;
    }
    if (imgSrc === '/MYPIC.jpeg') {
      setImgSrc('MYPIC.jpeg');
    } else if (imgSrc === 'MYPIC.jpeg') {
      setImgSrc('/src/assets/MYPIC.jpeg');
    } else {
      setImageError(true);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          localStorage.setItem('sharada_profile_mypic', result);
          setImgSrc(result);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Unboxed Status Metadata */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Development Internships</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">3rd Year B.E.</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {personal.name}
                </span>
              </h1>
              
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200">
                  {personal.role}
                </p>
                <p className="text-base sm:text-lg text-emerald-600 dark:text-emerald-400/90 font-medium">
                  {personal.subRole}
                </p>
              </div>
            </div>

            {/* Academic summary */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Pursuing Bachelor of Engineering in Computer Science & Engineering at{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Alva's Institute of Engineering and Technology
              </strong>{' '}
              with a current CGPA of{' '}
              <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                9.18 / 10
              </strong>
              . Passionate about writing clean code, practical problem solving, and building dependable real-world software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all duration-150 inline-flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 rounded-lg transition-all duration-150 border border-slate-200 dark:border-slate-700/60 inline-flex items-center gap-2"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 rounded-lg transition-all duration-150 inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Verified Quick Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Sharada's GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">{personal.githubDisplay}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Sharada's LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="font-mono text-xs">{personal.linkedinDisplay}</span>
              </a>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <a
                href={`mailto:${personal.email}`}
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Send email"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Circular / Softly Rounded Profile Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
              
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden cursor-pointer"
                title="Profile Photo (Click to select MYPIC.jpeg)"
              >
                {!imageError ? (
                  <img
                    src={imgSrc}
                    alt="Sharada M H - Computer Science & Engineering Student"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center text-center p-6 space-y-2">
                    <UserCheck className="w-12 h-12 text-emerald-500" />
                    <div>
                      <span className="font-bold text-base text-slate-800 dark:text-slate-200 block">Sharada M H</span>
                      <span className="text-xs text-slate-500 block">Computer Science & Engineering</span>
                    </div>
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Select MYPIC.jpeg</span>
                      </span>
                    </div>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Verified academic mini floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg rounded-xl px-3.5 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                  9.18
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-900 dark:text-white leading-tight">CGPA</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">AIET CSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
