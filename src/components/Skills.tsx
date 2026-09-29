import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Globe, Database, BrainCircuit, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming-languages':
        return Code2;
      case 'web-technologies':
        return Globe;
      case 'database':
        return Database;
      case 'concepts':
        return BrainCircuit;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#090e1a]/80 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Competencies
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Core programming languages, web fundamentals, database query systems, and algorithmic concepts
          </p>
        </div>

        {/* 4 Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <div
                key={category.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all shadow-xl space-y-5"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.skills.length} core {category.skills.length === 1 ? 'skill' : 'skills'}
                    </p>
                  </div>
                </div>

                {/* Skills list items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
