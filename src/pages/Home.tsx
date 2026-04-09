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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="perspective-1000 relative"
          >
            {/* Cinematic Light Sweep */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
            />
            
            <FunkyHeading 
              as="h1" 
              className="text-[11vw] md:text-[10vw] leading-none mb-4 text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] skew-x-[-5deg]"
            >
              Monishwar
            </FunkyHeading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[8px] md:text-sm font-bold tracking-[0.4em] uppercase text-white/60"
          >
            <span>Motion Designer</span>
            <span className="w-1 h-1 bg-purple-500 rounded-full" />
            <span>Video Editor</span>
            <span className="w-1 h-1 bg-purple-500 rounded-full" />
            <span>Visual Creator</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 md:mt-20"
          >
            <Link
              to="/work"
              data-cursor="WORKS"
              className="group relative px-10 md:px-14 py-4 md:py-5 overflow-hidden rounded-full transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white group-hover:bg-purple-600 transition-colors duration-500" />
              <span className="relative z-10 text-black group-hover:text-white font-black uppercase tracking-widest text-xs md:text-base">
                View Showcase
              </span>
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
              <div className="md:col-span-9">
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
              <div className="md:col-span-3">
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
              <div className="md:col-span-3">
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
              <div className="md:col-span-9">
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
