import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, CalendarCheck, Code2 } from 'lucide-react';

export const Activities: React.FC = () => {
  const { activities } = PORTFOLIO_DATA;

  const getActivityIcon = (id: string) => {
    switch (id) {
      case 'hackathons':
        return Trophy;
      case 'tech-events':
        return CalendarCheck;
      default:
        return Code2;
    }
  };

  return (
    <section id="activities" className="py-20 bg-[#090e1a]/80 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Campus Engagement
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Achievements & Activities
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            College-level event coordination, technical leadership, and collaborative peer learning
          </p>
        </div>

        {/* 3 Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.id);
            return (
              <div
                key={activity.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded-md">
                      College Level
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {activity.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
                  Alva's Institute of Engineering and Technology
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
