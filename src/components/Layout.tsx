import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform } from 'motion/react';
import ThreeBackground from './ThreeBackground';
import Cursor from './Cursor';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <ThreeBackground />
      <Cursor />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
