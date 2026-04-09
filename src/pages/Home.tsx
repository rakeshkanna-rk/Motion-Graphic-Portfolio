import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import FunkyHeading from '../components/FunkyHeading';
import WorkCard from '../components/WorkCard';
import ProjectModal from '../components/ProjectModal';

import { AspectRatio } from '../components/WorkCard';

interface Project {
  title: string;
  category: string;
  image: string;
  type: 'video' | 'image';
  description?: string;
  videoUrl?: string;
  aspectRatio?: AspectRatio;
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center z-10 px-6 md:px-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="perspective-1000"
          >
            <FunkyHeading 
              as="h1" 
              className="text-[18vw] md:text-[12vw] leading-none mb-4 bg-gradient-to-b from-white via-white to-purple-500/50 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] skew-x-[-10deg] rotate-[-2deg]"
            >
              Monishwar
            </FunkyHeading>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] md:text-lg font-light tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/40 max-w-2xl mx-auto px-4"
          >
            Creative Director & Motion Artist
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 md:mt-16"
          >
            <Link
              to="/work"
              data-cursor="WORKS"
              className="px-8 md:px-12 py-4 md:py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(168,85,247,0.2)] text-xs md:text-base"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
        >
          <ArrowDown size={20} />
        </motion.div>
      </section>

      {/* Featured Categories Preview */}
      <section className="py-20 md:py-40 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          
          {/* Motion Graphics Preview */}
          <div className="space-y-8 md:space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <FunkyHeading className="text-4xl md:text-7xl">Motion Graphics</FunkyHeading>
              <Link to="/work" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 hover:text-purple-500 transition-colors">View All →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-8">
                <WorkCard 
                  index={1} 
                  title="Neon Pulse" 
                  category="Motion Graphics" 
                  type="video" 
                  image="https://picsum.photos/seed/motion1/1280/720"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  aspectRatio="16/9"
                  description="A high-energy neon motion piece exploring the intersection of light and sound in a digital void."
                  onClick={() => handleProjectClick({
                    title: "Neon Pulse",
                    category: "Motion Graphics",
                    type: "video",
                    image: "https://picsum.photos/seed/motion1/1280/720",
                    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    aspectRatio: "16/9",
                    description: "A high-energy neon motion piece exploring the intersection of light and sound in a digital void."
                  })}
                />
              </div>
              <div className="md:col-span-4">
                <WorkCard 
                  index={2} 
                  title="Cyber Flow" 
                  category="Motion Graphics" 
                  type="video" 
                  image="https://picsum.photos/seed/motion2/1280/720"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  aspectRatio="9/16"
                  description="Fluid simulations and futuristic aesthetics combined to create a mesmerizing cybernetic journey."
                  onClick={() => handleProjectClick({
                    title: "Cyber Flow",
                    category: "Motion Graphics",
                    type: "video",
                    image: "https://picsum.photos/seed/motion2/1280/720",
                    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    aspectRatio: "9/16",
                    description: "Fluid simulations and futuristic aesthetics combined to create a mesmerizing cybernetic journey."
                  })}
                />
              </div>
            </div>
          </div>

          {/* Video Editing Preview */}
          <div className="space-y-8 md:space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <FunkyHeading className="text-4xl md:text-7xl">Video Editing</FunkyHeading>
              <Link to="/work" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 hover:text-purple-500 transition-colors">View All →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-4">
                <WorkCard 
                  index={2} 
                  title="Cinematic Soul" 
                  category="Video Editing" 
                  type="video" 
                  image="https://picsum.photos/seed/video2/1280/720"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  aspectRatio="9/16"
                  description="A deep dive into emotional narrative editing, focusing on the subtle moments that tell a larger story."
                  onClick={() => handleProjectClick({
                    title: "Cinematic Soul",
                    category: "Video Editing",
                    type: "video",
                    image: "https://picsum.photos/seed/video2/1280/720",
                    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    aspectRatio: "9/16",
                    description: "A deep dive into emotional narrative editing, focusing on the subtle moments that tell a larger story."
                  })}
                />
              </div>
              <div className="md:col-span-8">
                <WorkCard 
                  index={1} 
                  title="Urban Rhythm" 
                  category="Video Editing" 
                  type="video" 
                  image="https://picsum.photos/seed/video1/1280/720"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  aspectRatio="16/9"
                  description="Fast-paced urban storytelling that captures the heartbeat of the city through rhythmic editing."
                  onClick={() => handleProjectClick({
                    title: "Urban Rhythm",
                    category: "Video Editing",
                    type: "video",
                    image: "https://picsum.photos/seed/video1/1280/720",
                    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    aspectRatio: "16/9",
                    description: "Fast-paced urban storytelling that captures the heartbeat of the city through rhythmic editing."
                  })}
                />
              </div>
            </div>
          </div>

          {/* Graphic Design Preview */}
          <div className="space-y-8 md:space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <FunkyHeading className="text-4xl md:text-7xl">Graphic Design</FunkyHeading>
              <Link to="/work" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 hover:text-purple-500 transition-colors">View All →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <WorkCard 
                index={1} 
                title="Minimalist Brand" 
                category="Graphic Design" 
                type="image" 
                image="https://picsum.photos/seed/design1/800/800"
                aspectRatio="4/5"
                description="A clean and modern brand identity project focusing on negative space and bold typography."
                onClick={() => handleProjectClick({
                  title: "Minimalist Brand",
                  category: "Graphic Design",
                  type: "image",
                  image: "https://picsum.photos/seed/design1/800/800",
                  aspectRatio: "4/5",
                  description: "A clean and modern brand identity project focusing on negative space and bold typography."
                })}
              />
              <WorkCard 
                index={2} 
                title="Poster Series" 
                category="Graphic Design" 
                type="image" 
                image="https://picsum.photos/seed/design2/800/800"
                aspectRatio="4/5"
                description="An experimental poster series exploring the relationship between digital textures and organic forms."
                onClick={() => handleProjectClick({
                  title: "Poster Series",
                  category: "Graphic Design",
                  type: "image",
                  image: "https://picsum.photos/seed/design2/800/800",
                  aspectRatio: "4/5",
                  description: "An experimental poster series exploring the relationship between digital textures and organic forms."
                })}
              />
              <WorkCard 
                index={3} 
                title="Digital Identity" 
                category="Graphic Design" 
                type="image" 
                image="https://picsum.photos/seed/design3/800/800"
                aspectRatio="4/5"
                description="Comprehensive digital identity design for a tech-forward startup, including UI elements and social assets."
                onClick={() => handleProjectClick({
                  title: "Digital Identity",
                  category: "Graphic Design",
                  type: "image",
                  image: "https://picsum.photos/seed/design3/800/800",
                  aspectRatio: "4/5",
                  description: "Comprehensive digital identity design for a tech-forward startup, including UI elements and social assets."
                })}
              />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-60 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-500/5 blur-[120px] rounded-full scale-150 -z-10" />
        <FunkyHeading className="text-5xl md:text-9xl mb-12">Let's Create</FunkyHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            data-cursor="HIRE"
            className="px-10 md:px-16 py-5 md:py-6 border border-white/10 rounded-full text-sm md:text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
