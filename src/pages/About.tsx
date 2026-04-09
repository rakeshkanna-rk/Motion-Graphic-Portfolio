import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { cn } from '../lib/utils';
import FunkyHeading from '../components/FunkyHeading';
import { SiBlender, SiCanva } from 'react-icons/si';
import { Layers, Video, Image as ImageIcon, PenTool } from 'lucide-react';

const timeline = [
  { year: '2024', title: 'Senior Motion Designer', desc: 'Leading creative direction for high-impact brand campaigns and cinematic motion projects.' },
  { year: '2022', title: 'Visual Artist', desc: 'Explored the intersection of digital art and commercial video editing, refining a unique visual style.' },
  { year: '2020', title: 'Motion Graphics Intern', desc: 'Started the journey into the world of keyframes and easing, learning the foundations of storytelling.' },
  { year: '2018', title: 'Graphic Design Student', desc: 'Mastering the principles of typography, color theory, and composition.' },
];

const skills = [
  { name: 'Adobe Photoshop', icon: ImageIcon, color: '#31A8FF' },
  { name: 'Adobe After Effects', icon: Layers, color: '#9999FF' },
  { name: 'Adobe Illustrator', icon: PenTool, color: '#FF9A00' },
  { name: 'Adobe Premiere Pro', icon: Video, color: '#9999FF' },
  { name: 'Blender (Basics)', icon: SiBlender, color: '#EA7600' },
  { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="pt-24 md:pt-32 pb-40 px-6 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-32 md:mb-40"
      >
        <FunkyHeading as="h1" className="text-[12vw] md:text-[10vw] mb-12 md:mb-20">The Story</FunkyHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/70 leading-relaxed">
            <p>
              Hi, I’m Monishwar — a passionate freelance graphic designer and video editor with over 3 years of hands-on experience in crafting visually compelling and impactful digital content.
            </p>
            <p>
              I specialize in bringing ideas to life through creative design and engaging video storytelling. With strong expertise in industry-leading tools like Adobe Photoshop, Illustrator, After Effects, and Premiere Pro, along with a working knowledge of Blender, I deliver high-quality visuals that align perfectly with brand identity and audience expectations.
            </p>
            <p>
              My approach combines creativity with strategy — whether it’s designing eye-catching graphics, editing dynamic videos, or building a complete digital presence for brands. I focus on understanding each client’s vision and transforming it into powerful visual communication that stands out in today’s competitive digital space.
            </p>
            <p>
              If you’re looking to elevate your brand and create a strong impact across digital platforms, I’m here to help make it happen.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="https://picsum.photos/seed/monish/800/800"
              alt="Monishwar"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay" />
          </div>
        </div>
      </motion.div>

      {/* Visual Timeline */}
      <section ref={containerRef} className="relative py-12 md:py-20">
        <FunkyHeading className="text-4xl md:text-7xl mb-20 md:mb-32">The Journey</FunkyHeading>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-purple-500 origin-top -translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          />
          
          <div className="space-y-16 md:space-y-32">
            {timeline.map((item, i) => (
              <TimelineItem key={i} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Visualization - Core Arsenal */}
      <section className="mt-40 md:mt-60">
        <FunkyHeading className="text-4xl md:text-7xl mb-16 md:mb-20 text-center">Core Arsenal</FunkyHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-purple-500/10 transition-all duration-500"
            >
              <div className="relative mb-4 group-hover:scale-110 transition-transform duration-500">
                <skill.icon 
                  size={40} 
                  className="text-white/40 group-hover:text-white transition-colors duration-500"
                  style={{ filter: `drop-shadow(0 0 0px ${skill.color})` }}
                />
                <div 
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-[8px] md:text-[10px] text-white/40 group-hover:text-white transition-colors leading-tight">
                {skill.name}
              </h3>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                {skill.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-purple-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TimelineItem({ year, title, desc, index }: { year: string; title: string; desc: string; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <div className={cn("flex flex-col md:flex-row items-center justify-between w-full relative pl-12 md:pl-0", isEven ? "md:flex-row" : "md:flex-row-reverse")}>
      <div className="w-full md:w-[45%]">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:border-purple-500/50 transition-colors group"
        >
          <span className="text-purple-500 font-black text-xl md:text-2xl italic">{year}</span>
          <h3 className="text-lg md:text-xl font-bold mt-2 uppercase tracking-tighter">{title}</h3>
          <p className="text-white/50 text-xs md:text-sm mt-4 leading-relaxed">{desc}</p>
        </motion.div>
      </div>
      
      {/* Center Dot */}
      <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full -translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10" />
      
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}


