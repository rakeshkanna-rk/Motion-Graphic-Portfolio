import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';
import { AspectRatio } from './WorkCard';

interface Project {
  title: string;
  category: string;
  image: string;
  type: 'video' | 'image';
  description?: string;
  videoUrl?: string;
  aspectRatio?: AspectRatio;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = project.videoUrl ? getYouTubeId(project.videoUrl) : null;
  const ratio = project.aspectRatio || '16/9';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative w-full max-w-7xl bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] z-10 flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 bg-black/50 hover:bg-purple-600 text-white rounded-full transition-all duration-500 z-20 group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>

            <div className="w-full md:w-[70%] aspect-video md:aspect-auto bg-black flex items-center justify-center relative overflow-hidden shrink-0">
              <div className={cn(
                "h-full flex items-center justify-center transition-all duration-700",
                ratio === '16/9' && "aspect-video w-full",
                ratio === '9/16' && "aspect-[9/16]",
                ratio === '4/5' && "aspect-[4/5]"
              )}>
                {project.type === 'video' && youtubeId ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&showinfo=0`}
                      title={project.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              
              {/* Cinematic Vignette on Video */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_60%,rgba(0,0,0,0.4)_100%)]" />
            </div>

            <div className="w-full md:w-[30%] p-10 md:p-14 flex flex-col overflow-y-auto bg-zinc-900/50 backdrop-blur-md">
              <div className="mb-12">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-purple-500 text-xs font-black uppercase tracking-[0.4em] mb-4"
                >
                  {project.category}
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none mb-8"
                >
                  {project.title}
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="h-px w-20 bg-purple-500/50 mb-8" 
                />
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/50 text-lg leading-relaxed font-light italic"
                >
                  {project.description || "A premium creative project showcasing high-end visual storytelling and meticulous attention to detail."}
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-auto pt-12 border-t border-white/5"
              >
                <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest mb-4">Project Details</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Year</p>
                    <p className="text-white text-sm font-bold">2024</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Role</p>
                    <p className="text-white text-sm font-bold">Lead Artist</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
