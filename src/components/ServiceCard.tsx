import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Service } from '../data/services'; // type import로 명시적 변경

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <a 
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <div className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 h-full border border-gray-100 dark:border-gray-700 hover:-translate-y-2 group-hover:border-blue-200 dark:group-hover:border-blue-800">
        
        {/* 그라디언트 배경 효과 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
            {service.name}
          </h2>
          <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
            <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500" size={14} />
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed line-clamp-3">
          {service.description}
        </p>
        
        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {service.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-xs font-medium rounded-full text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                {tag}
              </span>
            ))}
          </div>

          {service.githubUrl && (
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
              <span 
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(service.githubUrl, '_blank');
                }}
              >
                <FaGithub className="text-lg" />
                <span className="font-medium">Source Code</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

