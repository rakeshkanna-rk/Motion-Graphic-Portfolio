import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import FunkyHeading from '../components/FunkyHeading';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto">
      <FunkyHeading as="h1" className="text-[14vw] md:text-[10vw] mb-16 md:mb-20">The Contact</FunkyHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10 md:space-y-12"
        >
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">Let's Talk</h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
              Have a project in mind? Or just want to say hi? Feel free to reach out. I'm always open to new opportunities and creative collaborations.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-purple-500 transition-colors shrink-0">
                <Mail className="text-purple-500 group-hover:text-white transition-colors" size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Email Me</p>
                <p className="text-base md:text-xl font-bold">hello@monish.design</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-purple-500 transition-colors shrink-0">
                <Phone className="text-purple-500 group-hover:text-white transition-colors" size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Call Me</p>
                <p className="text-base md:text-xl font-bold">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-purple-500 transition-colors shrink-0">
                <MapPin className="text-purple-500 group-hover:text-white transition-colors" size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Location</p>
                <p className="text-base md:text-xl font-bold">New York, NY</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-purple-500 hover:text-purple-500 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-4">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-4">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-4">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors appearance-none text-sm">
                <option className="bg-black">General Inquiry</option>
                <option className="bg-black">Project Collaboration</option>
                <option className="bg-black">Job Opportunity</option>
                <option className="bg-black">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-4">Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors resize-none text-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "w-full py-4 md:py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 text-xs md:text-sm",
                isSubmitted ? "bg-green-500 text-white" : "bg-purple-500 text-white hover:bg-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              )}
            >
              {isSubmitted ? "Message Sent!" : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
