
import React from 'react';
import { Project, ProjectStatus } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.COMPLETED: return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case ProjectStatus.IN_PROGRESS: return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case ProjectStatus.UPCOMING: return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
              #{tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.link ? (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 font-semibold text-sm hover:underline"
          >
            View Project
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <span className="text-slate-600 text-sm font-medium italic">
            Launching soon...
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
