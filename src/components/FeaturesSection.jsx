import { motion } from 'framer-motion';
import { Zap, Camera, Mic, Scan, MessageCircle, WifiOff, History, Lock, Moon, ArrowRight } from 'lucide-react';

const featuresData = [
  {
    icon: Zap,
    title: 'AI Translation',
    description: 'Powered by state-of-the-art AI models that deliver accurate, natural-sounding translations that preserve context and nuance.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Camera,
    title: 'Camera Translation',
    description: 'Point your camera at any text and see instant translations overlaid on the image. Perfect for menus, signs, and documents.',
    color: 'from-accent to-cyan-500',
  },
  {
    icon: Mic,
    title: 'Voice Translation',
    description: 'Speak naturally and get real-time voice-to-voice translation in over 40 languages. Great for conversations.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Scan,
    title: 'OCR Scanner',
    description: 'High-accuracy optical character recognition extracts text from images, scanned documents, and photos.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: MessageCircle,
    title: 'Conversation Mode',
    description: 'Have seamless, natural conversations with people who speak different languages. The app listens and translates both sides.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: WifiOff,
    title: 'Offline Translation',
    description: 'Download language packs and translate even without an internet connection. Perfect for travel.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: History,
    title: 'History',
    description: 'Access all your past translations anytime, anywhere. Search and organize your translation history.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Lightning-fast translations with minimal latency. Our optimized engine delivers results in milliseconds.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data is encrypted and never stored on our servers. Complete privacy and security guaranteed.',
    color: 'from-slate-600 to-slate-800',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    description: 'Easy on the eyes with a beautiful dark theme. Perfect for low-light environments and reduces eye strain.',
    color: 'from-gray-700 to-gray-900',
  },
];

const FeaturesSection = ({
  id,
  title = 'Powerful Features',
  description = 'Everything you need to break down language barriers',
  features = featuresData,
  className = 'py-24 bg-background dark:bg-darkBackground',
  titleClassName = 'text-4xl lg:text-5xl font-bold text-text dark:text-white mb-4',
  descriptionClassName = 'text-xl text-mutedText dark:text-gray-400 max-w-2xl mx-auto',
}) => {
  return (
    <section id={id} className={className}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={titleClassName}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={descriptionClassName}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-card dark:bg-gray-800 p-8 rounded-3xl border border-border dark:border-gray-700 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-mutedText dark:text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
