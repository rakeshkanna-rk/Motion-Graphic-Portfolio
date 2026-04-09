import { motion } from 'motion/react';
import { Play, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export type AspectRatio = '16/9' | '9/16' | '4/5';

interface WorkCardProps {
  title: string;
  category: string;
  image: string;
  type: 'video' | 'image';
  description?: string;
  videoUrl?: string;
  aspectRatio?: AspectRatio;
  index: number;
  onClick?: () => void;
}

export default function WorkCard({ 
  title, 
  category, 
  image, 
  type, 
  description, 
  aspectRatio = '16/9', 
  index, 
  onClick 
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      data-cursor={type === 'video' ? "PLAY" : "VIEW"}
      onClick={onClick}
      className={cn(
        "group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 cursor-pointer w-full flex items-center justify-center",
        aspectRatio === '16/9' && "aspect-video",
        aspectRatio === '9/16' && "aspect-[9/16]",
        aspectRatio === '4/5' && "aspect-[4/5]"
      )}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Video Overlay for Motion/Video */}
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500 rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 scale-100 md:scale-50 group-hover:scale-100 transition-all duration-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <Play fill="white" size={20} className="md:size-24" />
            </div>
          </div>
        )}

        {/* Image Overlay for Graphic Design */}
        {type === 'image' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 scale-100 md:scale-50 group-hover:scale-100 transition-all duration-500 border border-white/20">
              <ImageIcon size={20} className="md:size-24" />
            </div>
          </div>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none text-left">
        <p className="text-purple-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2">{category}</p>
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter italic leading-tight mb-2">{title}</h3>
        {description && (
          <p className="text-white/50 text-[10px] md:text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
