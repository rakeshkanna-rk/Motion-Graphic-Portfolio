import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface FunkyHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export default function FunkyHeading({ children, className, as: Component = 'h2' }: FunkyHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("relative group cursor-default", className)}
    >
      <Component className="relative z-10 font-black uppercase tracking-tighter italic transition-all duration-500 group-hover:skew-x-6 group-hover:scale-105">
        {children}
      </Component>
      
      {/* Glitch Effect on Hover */}
      <motion.div
        className="absolute inset-0 z-0 text-purple-500 opacity-0 group-hover:opacity-30 blur-[2px] pointer-events-none transition-opacity"
        animate={{
          x: [-2, 2, -2],
          y: [1, -1, 1],
        }}
        transition={{ duration: 0.1, repeat: Infinity }}
      >
        <Component className="font-black uppercase tracking-tighter italic">
          {children}
        </Component>
      </motion.div>
    </motion.div>
  );
}
