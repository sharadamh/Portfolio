import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';
import { User, BookOpen, School, Award, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const infoCards = [
    {
      label: "Name",
      value: personal.name,
      icon: User,
      color: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
    },
    {
      label: "Course",
      value: personal.course,
      icon: BookOpen,
      color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400",
    },
    {
      label: "College",
      value: personal.college,
      icon: School,
      color: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
    },
    {
      label: "CGPA",
      value: personal.cgpa,
      icon: Award,
      color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#090e1a]/80 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Introduction
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Engineering foundation, practical learning, and software development focus
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Profile Photo in About Section */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <ProfilePhoto size="about" />
              <div className="text-center mt-3">
                <span className="text-xs text-slate-400 font-medium">
                  3rd Year CSE · AIET
                </span>
              </div>
            </div>
          </div>

          {/* About Me Content & Info Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.aboutMeText}
              </p>
            </div>

            {/* Small Information Cards as explicitly requested */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {infoCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/60 text-cyan-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {card.label}
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5 truncate">
                        {card.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
