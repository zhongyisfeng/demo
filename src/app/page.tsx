import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  // Select first 4 projects as featured works
  const featuredProjects = projects.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Infinite Creativity • Animation Life</h1>
          <p className="text-xl md:text-2xl mb-8">Professional Animator Portfolio</p>
          <Link href="/portfolio" 
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              View More Works
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4">Character Animation</h3>
              <p className="text-gray-600">
                Creating vibrant character animations for games, films, and advertisements, bringing characters to life.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-4">Visual Effects</h3>
              <p className="text-gray-600">
                Producing high-quality visual effects to add stunning visual experiences to projects.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-4">Animated Shorts</h3>
              <p className="text-gray-600">
                Creating original animated shorts that tell compelling stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Brief */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-8">
            I am a passionate animation creator specializing in character animation and visual effects.
            Through unique perspectives and creativity, I bring life and storytelling to every project.
          </p>
          <Link href="/about" 
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
} 