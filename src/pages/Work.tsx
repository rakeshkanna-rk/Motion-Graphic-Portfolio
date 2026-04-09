import { useState } from 'react';
import FunkyHeading from '../components/FunkyHeading';
import WorkCard from '../components/WorkCard';
import ProjectModal from '../components/ProjectModal';

import { AspectRatio } from '../components/WorkCard';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  type: 'video' | 'image';
  description?: string;
  videoUrl?: string;
  aspectRatio?: AspectRatio;
}

const motionGraphics: Project[] = [
  { 
    id: 1, 
    title: 'Neon Pulse', 
    category: 'Motion Graphics', 
    image: 'https://picsum.photos/seed/neon/800/600', 
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aspectRatio: '16/9',
    description: 'A high-energy neon motion piece exploring the intersection of light and sound in a digital void.'
  },
  { 
    id: 2, 
    title: 'Cyber Flow', 
    category: 'Motion Graphics', 
    image: 'https://picsum.photos/seed/cyber/800/600', 
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aspectRatio: '9/16',
    description: 'Fluid simulations and futuristic aesthetics combined to create a mesmerizing cybernetic journey.'
  },
  { 
    id: 3, 
    title: 'Abstract Void', 
    category: 'Motion Graphics', 
    image: 'https://picsum.photos/seed/void/800/600', 
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aspectRatio: '4/5',
    description: 'An exploration of abstract forms and textures, creating a sense of infinite depth and mystery.'
  },
];

const videoEditing: Project[] = [
  { 
    id: 4, 
    title: 'Urban Rhythm', 
    category: 'Video Editing', 
    image: 'https://picsum.photos/seed/urban/800/600', 
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aspectRatio: '16/9',
    description: 'Fast-paced urban storytelling that captures the heartbeat of the city through rhythmic editing.'
  },
  { 
    id: 5, 
    title: 'Cinematic Soul', 
    category: 'Video Editing', 
    image: 'https://picsum.photos/seed/soul/800/600', 
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aspectRatio: '9/16',
    description: 'A deep dive into emotional narrative editing, focusing on the subtle moments that tell a larger story.'
  },
  { 
    id: 6, 
    title: 'Digital Flow', 
    category: 'Video Editing', 
    image: 'https://picsum.photos/seed/flow/800/600', 
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aspectRatio: '4/5',
    description: 'Merging digital effects with live-action footage to create a seamless and engaging visual experience.'
  },
];

const graphicDesign: Project[] = [
  { 
    id: 7, 
    title: 'Minimalist Brand', 
    category: 'Graphic Design', 
    image: 'https://picsum.photos/seed/brand/800/800', 
    type: 'image',
    aspectRatio: '4/5',
    description: 'A clean and modern brand identity project focusing on negative space and bold typography.'
  },
  { 
    id: 8, 
    title: 'Poster Series', 
    category: 'Graphic Design', 
    image: 'https://picsum.photos/seed/poster/800/800', 
    type: 'image',
    aspectRatio: '4/5',
    description: 'An experimental poster series exploring the relationship between digital textures and organic forms.'
  },
  { 
    id: 9, 
    title: 'Digital Identity', 
    category: 'Graphic Design', 
    image: 'https://picsum.photos/seed/id/800/800', 
    type: 'image',
    aspectRatio: '4/5',
    description: 'Comprehensive digital identity design for a tech-forward startup, including UI elements and social assets.'
  },
  { 
    id: 10, 
    title: 'Typography Study', 
    category: 'Graphic Design', 
    image: 'https://picsum.photos/seed/typo/800/800', 
    type: 'image',
    aspectRatio: '4/5',
    description: 'An in-depth study of typography as a primary visual element, pushing the boundaries of legibility and form.'
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto">
      <FunkyHeading as="h1" className="text-[14vw] md:text-[10vw] mb-16 md:mb-32">The Showcase</FunkyHeading>

      <div className="space-y-32 md:space-y-60">
        {/* Motion Graphics Section */}
        <section className="space-y-12 md:space-y-20">
          <div className="flex items-end justify-between border-b border-white/10 pb-8">
            <FunkyHeading className="text-5xl md:text-8xl">Motion Graphics</FunkyHeading>
            <span className="text-white/20 text-xs md:text-sm font-mono uppercase tracking-widest hidden md:block">Section 01 / Motion</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-9">
              <WorkCard 
                index={0} 
                {...motionGraphics[0]} 
                onClick={() => handleProjectClick(motionGraphics[0])}
              />
            </div>
            <div className="md:col-span-3">
              <WorkCard 
                index={1} 
                {...motionGraphics[1]} 
                onClick={() => handleProjectClick(motionGraphics[1])}
              />
            </div>
            <div className="md:col-span-3">
              <WorkCard 
                index={2} 
                {...motionGraphics[2]} 
                onClick={() => handleProjectClick(motionGraphics[2])}
              />
            </div>
            <div className="md:col-span-9 bg-white/5 rounded-2xl border border-dashed border-white/10 flex items-center justify-center p-10 h-[350px] md:h-[500px]">
              <p className="text-white/20 text-sm font-mono uppercase tracking-[0.3em] text-center">More Motion Projects Coming Soon</p>
            </div>
          </div>
        </section>

        {/* Video Editing Section */}
        <section className="space-y-12 md:space-y-20">
          <div className="flex items-end justify-between border-b border-white/10 pb-8">
            <FunkyHeading className="text-5xl md:text-8xl">Video Editing</FunkyHeading>
            <span className="text-white/20 text-xs md:text-sm font-mono uppercase tracking-widest hidden md:block">Section 02 / Editing</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <WorkCard 
                index={0} 
                {...videoEditing[1]} 
                onClick={() => handleProjectClick(videoEditing[1])}
              />
            </div>
            <div className="md:col-span-9">
              <WorkCard 
                index={1} 
                {...videoEditing[0]} 
                onClick={() => handleProjectClick(videoEditing[0])}
              />
            </div>
            <div className="md:col-span-12">
              <WorkCard 
                index={2} 
                {...videoEditing[2]} 
                onClick={() => handleProjectClick(videoEditing[2])}
              />
            </div>
          </div>
        </section>

        {/* Graphic Design Section */}
        <section className="space-y-12 md:space-y-20">
          <div className="flex items-end justify-between border-b border-white/10 pb-8">
            <FunkyHeading className="text-5xl md:text-8xl">Graphic Design</FunkyHeading>
            <span className="text-white/20 text-xs md:text-sm font-mono uppercase tracking-widest hidden md:block">Section 03 / Design</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {graphicDesign.map((project, i) => (
              <WorkCard 
                key={project.id} 
                index={i} 
                {...project} 
                aspectRatio="4/5"
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </section>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
