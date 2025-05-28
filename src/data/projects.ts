export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  images?: string[];
  details?: string;
  client?: string;
  date: string;
  tools?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "角色动画设计",
    description: "为游戏开发的角色动画系列，包含行走、跑步、跳跃等动作。展现了角色的个性和流畅的动作效果。",
    category: "角色动画",
    thumbnail: "/images/projects/character-animation.jpg",
    videoUrl: "/videos/character-animation.mp4",
    date: "2023-12",
    tools: ["Maya", "After Effects"],
    client: "某游戏工作室",
    details: "这是一个完整的角色动画系列，包含20多个基础动作和特殊动作。重点关注角色的重量感和动作的流畅性。"
  },
  {
    id: 2,
    title: "场景动画",
    description: "电影场景动画制作，展现史诗般的场景转换效果。通过光影和粒子效果增强视觉冲击力。",
    category: "场景动画",
    thumbnail: "/images/projects/scene-animation.jpg",
    videoUrl: "/videos/scene-animation.mp4",
    date: "2023-09",
    tools: ["Houdini", "Nuke"],
    client: "某电影制作公司",
    details: "为电影开场序列制作的场景动画，展现了从宇宙到微观世界的无缝转换。"
  },
  {
    id: 3,
    title: "动画短片",
    description: "独立制作的动画短片，讲述一个温暖的故事。融合2D和3D动画技术，创造独特的视觉风格。",
    category: "短片",
    thumbnail: "/images/projects/short-film.jpg",
    videoUrl: "/videos/short-film.mp4",
    date: "2023-06",
    tools: ["Blender", "Toon Boom"],
    details: "这是一部5分钟的原创动画短片，讲述了一个关于友情和勇气的故事。获得了多个动画节展映机会。"
  },
  {
    id: 4,
    title: "产品动画",
    description: "为科技产品制作的展示动画，突出产品特性和使用场景。",
    category: "商业动画",
    thumbnail: "/images/projects/product-animation.jpg",
    videoUrl: "/videos/product-animation.mp4",
    date: "2023-03",
    tools: ["Cinema 4D", "After Effects"],
    client: "某科技公司",
    details: "为新产品发布会制作的宣传动画，通过动态图形展示产品功能和优势。"
  }
]; 