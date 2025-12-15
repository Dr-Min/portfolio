import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaMusic } from 'react-icons/fa';
import type { Service } from '../data/services';

interface BentoGridProps {
  services: Service[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ services }) => {
  // 카테고리별로 데이터 그룹화
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  // 카테고리 표시 순서 정의
  const categoryOrder = ['Game', 'Service', 'Tool', 'Music'];

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col gap-16">
      {categoryOrder.map((category) => {
        const categoryServices = groupedServices[category];
        if (!categoryServices) return null;

        return (
          <div key={category}>
            {/* 카테고리 헤더 */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {category}
              </h2>
              <div className="h-[1px] flex-grow bg-gray-200 dark:bg-gray-800" />
            </div>

            {/* 해당 카테고리의 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
              {categoryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-1"
                >
                  <a 
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full p-8 flex flex-col justify-between"
                  >
                    {/* 배경 장식 */}
                    <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-125 transition-transform duration-700 ${
                      category === 'Music' 
                        ? 'bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20' 
                        : 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
                    }`} />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-3 rounded-2xl transition-colors duration-300 ${
                          category === 'Music'
                            ? 'bg-pink-50 dark:bg-gray-700 group-hover:bg-pink-500 group-hover:text-white'
                            : 'bg-gray-50 dark:bg-gray-700 group-hover:bg-blue-500 group-hover:text-white'
                        }`}>
                          {category === 'Music' ? <FaMusic size={20} /> : <span className="text-xl font-bold">0{index + 1}</span>}
                        </div>
                        <FaArrowRight className={`group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ${
                           category === 'Music' ? 'text-pink-300 group-hover:text-pink-500' : 'text-gray-300 group-hover:text-blue-500'
                        }`} size={24} />
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors ${
                        category === 'Music' ? 'group-hover:text-pink-500 dark:group-hover:text-pink-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`}>
                        {service.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm font-medium pt-6 border-t border-gray-100 dark:border-gray-700">
                        <span className={`flex items-center gap-2 ${
                           category === 'Music' ? 'text-pink-600 dark:text-pink-400' : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          <FaExternalLinkAlt /> {category === 'Music' ? 'Listen Now' : 'Visit Site'}
                        </span>
                        {service.githubUrl && (
                          <span 
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer z-20"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(service.githubUrl, '_blank');
                            }}
                          >
                            <FaGithub size={16} /> Code
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
