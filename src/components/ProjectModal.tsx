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
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-purple-500 text-white rounded-full transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-2/3 aspect-video md:aspect-auto bg-black flex items-center justify-center relative overflow-hidden shrink-0">
              <div className={cn(
                "h-full flex items-center justify-center",
                ratio === '16/9' && "aspect-video w-full",
                ratio === '9/16' && "aspect-[9/16]",
                ratio === '4/5' && "aspect-[4/5]"
              )}>
                {project.type === 'video' && youtubeId ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&fs=0&iv_load_policy=3`}
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
            </div>

            <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col overflow-y-auto">
              <div className="mb-8">
                <p className="text-purple-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                  {project.category}
                </p>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none mb-6">
                  {project.title}
                </h2>
                <div className="w-12 h-1 bg-purple-500 mb-8" />
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  {project.description || "A premium creative project showcasing high-end visual storytelling and meticulous attention to detail."}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/30">
                  <span>Format</span>
                  <span className="text-white">{ratio}</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/30">
                  <span>Year</span>
                  <span className="text-white">2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
