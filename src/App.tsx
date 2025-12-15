import { services } from './data/services';
import { BentoGrid } from './components/BentoGrid';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* 배경 노이즈/그라디언트 효과 */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
           style={{
             backgroundImage: `radial-gradient(circle at 50% 50%, #6366f1 0%, transparent 25%), radial-gradient(circle at 100% 0%, #3b82f6 0%, transparent 25%)`
           }}
      />

      <header className="relative z-10 pt-24 pb-16 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide">
          One-Man Product Team
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
          AI-Native <span className="text-blue-600 dark:text-blue-500">Product Builder</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          기획부터 개발, 출시, 마케팅까지 전 과정을 주도하며 <strong>0 to 1</strong>을 실현합니다.<br />
          AI를 활용해 <strong>더 재밌는 세상</strong>을 만듭니다.
        </p>
        
        {/* 핵심 역량 키워드 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Full-Stack Capability', 'Business Mindset', 'Fast Execution', 'Data Driven'].map((keyword) => (
            <span key={keyword} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md text-sm font-medium">
              {keyword}
            </span>
          ))}
        </div>
        
        {/* 소셜 링크 추가 */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <a href="https://github.com/Dr-Min" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" title="Github">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/prof.minn/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform text-pink-600" title="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.threads.net/@prof.minn" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform text-black dark:text-white" title="Threads">
            {/* Threads 아이콘 대신 텍스트 로고나 @ 사용 */}
            <span className="font-bold text-xl leading-none">@</span>
          </a>
          <a href="https://blog.naver.com/mks010103" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform text-green-500" title="Naver Blog">
            <SiNaver size={20} />
          </a>
           <a href="https://min-c-max.tistory.com/category/AI/AI%20%EA%B8%B0%EC%B4%88%20%EA%B0%9C%EB%85%90" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform text-orange-500" title="Tistory">
            <span className="font-bold text-lg leading-none">T</span>
          </a>
        </div>
      </header>

      <main className="relative z-10 pb-32">
        <BentoGrid services={services} />
      </main>

      <footer className="relative z-10 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0f19]">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Prof. Minn. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <span>Designed with React & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
