import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  // 选择前3个项目作为精选作品
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* 英雄区域 */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">创意无限 • 动画人生</h1>
          <p className="text-xl md:text-2xl mb-8">专业动画师作品集展示</p>
          <Link href="/portfolio" 
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            查看作品集
          </Link>
        </div>
      </section>

      {/* 精选作品 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">精选作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              查看更多作品
            </Link>
          </div>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">专业服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4">角色动画</h3>
              <p className="text-gray-600">
                为游戏、电影和广告创作生动的角色动画，让角色栩栩如生。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-4">视觉特效</h3>
              <p className="text-gray-600">
                制作高质量的视觉特效，为项目增添震撼视觉体验。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-4">动画短片</h3>
              <p className="text-gray-600">
                创作原创动画短片，讲述引人入胜的故事。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我简介 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">关于我</h2>
          <p className="text-lg text-gray-600 mb-8">
            我是一名充满激情的动画创作者，专注于角色动画和视觉特效。
            通过独特的视角和创意，为每个项目注入生命力和故事性。
          </p>
          <Link href="/about" 
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            了解更多
          </Link>
        </div>
      </section>
    </div>
  );
} 