import { motion } from 'motion/react';
import { Play, Layers, Activity, GanttChart, PenTool, MousePointer2 } from 'lucide-react';

const PassionElement = ({ icon: Icon, delay, x, y, size }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.03, 0.06, 0.03],
      scale: [1, 1.1, 1],
      x: [0, 15, 0],
      y: [0, -15, 0],
      rotate: [0, 10, 0]
    }}
    transition={{ 
      duration: 12 + Math.random() * 8,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none text-white"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <Icon size={size} strokeWidth={0.5} />
  </motion.div>
);

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0f0f0f] overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      
      {/* Soft Lighting Gradient with Pulse */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.4)_0%,transparent_70%)]" 
      />

      {/* Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

      {/* Passion Elements */}
      <PassionElement icon={Play} x={10} y={20} size={40} delay={0} />
      <PassionElement icon={Layers} x={85} y={15} size={60} delay={2} />
      <PassionElement icon={Activity} x={15} y={75} size={50} delay={4} />
      <PassionElement icon={GanttChart} x={80} y={80} size={45} delay={1} />
      <PassionElement icon={PenTool} x={50} y={10} size={30} delay={3} />
      <PassionElement icon={MousePointer2} x={5} y={45} size={35} delay={5} />
      <PassionElement icon={Activity} x={90} y={50} size={40} delay={1.5} />
      <PassionElement icon={GanttChart} x={40} y={90} size={35} delay={2.5} />
      <PassionElement icon={Play} x={70} y={40} size={25} delay={4.5} />
    </div>
  );
}
