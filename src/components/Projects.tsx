import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sprout, Users, CheckSquare, Calendar, Github, ExternalLink, Lock } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'sprout':
        return Sprout;
      case 'users':
        return Users;
      case 'checklist':
        return CheckSquare;
      default:
        return Sprout;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Selected Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Practical software projects addressing real-world user workflows and data organization
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = getProjectIcon(project.iconName);
            return (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Project Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-lg">
                        Project {project.number}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Actions: GitHub & Live Demo with "Coming Soon" placeholder */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* GitHub button: Coming Soon placeholder */}
                    <button
                      disabled
                      aria-disabled="true"
                      className="px-3 py-2 text-xs font-semibold text-slate-400 bg-slate-950/80 rounded-xl border border-slate-800/80 inline-flex items-center justify-center gap-1.5 cursor-not-allowed opacity-80"
                      title="GitHub Repository: Coming Soon"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Coming Soon</span>
                    </button>

                    {/* Live Demo button: Coming Soon placeholder */}
                    <button
                      disabled
                      aria-disabled="true"
                      className="px-3 py-2 text-xs font-semibold text-slate-400 bg-slate-950/80 rounded-xl border border-slate-800/80 inline-flex items-center justify-center gap-1.5 cursor-not-allowed opacity-80"
                      title="Live Demo: Coming Soon"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Coming Soon</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 font-medium">
                    Available during campus interviews / on request
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
