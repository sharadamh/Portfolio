import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Academic Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Formal engineering degree and pre-university academic qualifications
          </p>
        </div>

        {/* Education Modern Cards */}
        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                item.isCurrent
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20 relative overflow-hidden'
                  : 'bg-slate-900/50 border-slate-800/80 shadow-xs'
              }`}
            >
              {item.isCurrent && (
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className={`w-5 h-5 ${item.isCurrent ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.degree}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-slate-300">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                    {item.isCurrent && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-cyan-400 font-medium">Currently Enrolled</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Score representation */}
                <div className="sm:text-right shrink-0 bg-slate-950/70 p-3 sm:p-4 rounded-xl border border-slate-800">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                    {item.scoreLabel}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                    {item.scoreValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
