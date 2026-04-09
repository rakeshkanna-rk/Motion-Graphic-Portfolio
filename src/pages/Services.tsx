import { motion } from 'motion/react';
import { Video, Film, Zap, Layers, Palette, Play } from 'lucide-react';
import { cn } from '../lib/utils';
import FunkyHeading from '../components/FunkyHeading';

const services = [
  {
    title: 'Video Editing',
    icon: Video,
    description: 'Cinematic video editing with a focus on rhythm, pacing, and emotional impact for commercials and films.',
    features: ['Color Grading', 'Sound Design', 'Narrative Editing', 'Multi-cam Editing']
  },
  {
    title: 'B Roll Reels',
    icon: Play,
    description: 'Dynamic and engaging short-form content optimized for social media platforms like Instagram and TikTok.',
    features: ['Fast-paced Cuts', 'Trending Audio Sync', 'Visual Hooks', 'Engagement Focused']
  },
  {
    title: 'Title Animations',
    icon: Layers,
    description: 'Professional typography and title design that adds a premium feel to your video productions.',
    features: ['Custom Typography', 'Lower Thirds', 'Intro/Outro Titles', 'Kinetic Type']
  },
  {
    title: 'Short Films',
    icon: Film,
    description: 'End-to-end post-production for short films, ensuring your story is told with cinematic excellence.',
    features: ['Storytelling Focus', 'VFX Integration', 'Pacing & Flow', 'Final Delivery']
  },
  {
    title: 'Motion Graphics',
    icon: Zap,
    description: 'Dynamic visual storytelling through high-end animation and motion design for brands and digital platforms.',
    features: ['Logo Animation', 'Explainer Videos', 'Social Media Content', 'Broadcast Graphics']
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    description: 'Bold and impactful graphic design that defines your brand identity and visual language.',
    features: ['Brand Identity', 'Typography', 'Poster Design', 'Digital Assets']
  }
];

export default function Services() {
  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto">
      <FunkyHeading as="h1" className="text-[14vw] md:text-[10vw] mb-16 md:mb-20">The Services</FunkyHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 md:p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-purple-500/10 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <service.icon size={120} />
            </div>
            
            <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-purple-500 transition-colors">
              <service.icon className="text-purple-500 group-hover:text-white transition-colors" size={28} />
            </div>

            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-tight">{service.title}</h3>
            <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
              {service.description}
            </p>

            <div className="mt-auto">
              <ul className="space-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i * 0.1) + (idx * 0.05) }}
                    className="flex items-center gap-3 text-xs md:text-sm text-white/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
