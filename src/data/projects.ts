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
    title: "Character Animation Design",
    description: "A series of character animations developed for games, including walking, running, jumping, and other actions. Showcases character personality and fluid motion effects.",
    category: "Character Animation",
    thumbnail: "/images/projects/character-animation.jpg",
    videoUrl: "/videos/character-animation.mp4",
    date: "2023-12",
    tools: ["Maya", "After Effects"],
    client: "Game Studio",
    details: "This is a complete character animation series containing over 20 basic and special actions. Focus on character weight and motion fluidity."
  },
  {
    id: 2,
    title: "Scene Animation",
    description: "Film scene animation production, showcasing epic scene transitions. Enhanced visual impact through lighting and particle effects.",
    category: "Scene Animation",
    thumbnail: "/images/projects/scene-animation.jpg",
    videoUrl: "/videos/scene-animation.mp4",
    date: "2023-09",
    tools: ["Houdini", "Nuke"],
    client: "Film Production Company",
    details: "Scene animation created for the film's opening sequence, demonstrating seamless transitions from cosmic to microscopic worlds."
  },
  {
    id: 3,
    title: "Animated Short Film",
    description: "Independently produced animated short film telling a heartwarming story. Combines 2D and 3D animation techniques to create a unique visual style.",
    category: "Short Film",
    thumbnail: "/images/projects/short-film.jpg",
    videoUrl: "/videos/short-film.mp4",
    date: "2023-06",
    tools: ["Blender", "Toon Boom"],
    details: "This is a 5-minute original animated short film that tells a story about friendship and courage. It has been screened at multiple animation festivals."
  },
  {
    id: 4,
    title: "Product Animation",
    description: "Promotional animation for tech products, highlighting product features and use cases.",
    category: "Commercial Animation",
    thumbnail: "/images/projects/product-animation.jpg",
    videoUrl: "/videos/product-animation.mp4",
    date: "2023-03",
    tools: ["Cinema 4D", "After Effects"],
    client: "Tech Company",
    details: "Promotional animation created for new product launch event, showcasing product features and benefits through motion graphics."
  },
  {
    id: 5,
    title: "Motion Graphics Design",
    description: "Creative motion graphics design for digital platforms and social media. Engaging visual storytelling through dynamic typography and abstract animations.",
    category: "Motion Graphics",
    thumbnail: "/images/projects/motion-graphics.jpg",
    videoUrl: "/videos/motion-graphics.mp4",
    date: "2024-01",
    tools: ["After Effects", "Illustrator"],
    client: "Digital Agency",
    details: "A series of motion graphics designs created for social media campaigns, featuring dynamic typography and abstract animations that enhance brand storytelling."
  }
]; 