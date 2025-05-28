import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">项目未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您要查看的项目不存在。</p>
          <Link href="/portfolio" className="btn-primary">
            返回作品集
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
            ← 返回作品集
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex items-center space-x-4 mb-8">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
            {project.category}
          </span>
          <span className="text-gray-500">{project.date}</span>
          {project.client && (
            <span className="text-gray-500">客户: {project.client}</span>
          )}
        </div>

        {/* 项目主图/视频 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-8">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              className="w-full h-full object-cover"
            />
          ) : project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300" />
          )}
        </div>

        {/* 项目描述 */}
        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">项目描述</h2>
          <p className="text-gray-600 mb-6">{project.description}</p>
          {project.details && (
            <p className="text-gray-600">{project.details}</p>
          )}
        </div>

        {/* 使用的工具 */}
        {project.tools && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">使用工具</h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 其他图片 */}
        {project.images && (
          <div>
            <h2 className="text-2xl font-bold mb-4">更多图片</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - 图片 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 