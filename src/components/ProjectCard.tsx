'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/portfolio/${project.id}`} className="block">
      <div className="group cursor-pointer">
        <div className="relative aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
          <div className="w-full h-full bg-gray-200">
            {project.thumbnail && (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
              查看详情
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{project.description}</p>
        <div className="flex items-center space-x-4">
          <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
            {project.category}
          </span>
          <span className="text-sm text-gray-500">{project.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard; 