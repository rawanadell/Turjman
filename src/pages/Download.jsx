import { motion } from 'framer-motion';
import { Apple, Smartphone, Check, Star } from 'lucide-react';

const Download = () => {
  return (
    <div className="min-h-screen pt-0 pb-24 bg-background dark:bg-darkBackground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-text dark:text-white mb-6">
                Get Turjman
              </h1>
              <p className="text-xl text-mutedText dark:text-gray-400 mb-8">
                Download the app and start translating anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#"
                  className="px-8 py-4 bg-darkBackground dark:bg-white text-white dark:text-darkBackground rounded-xl font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
                >
                  <Apple size={28} />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-xl font-bold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-darkBackground dark:bg-white text-white dark:text-darkBackground rounded-xl font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
                >
                  <Smartphone size={28} />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-xl font-bold">Google Play</div>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="text-mutedText dark:text-gray-400">4.9 • 2M+ Downloads</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-primary/30 to-accent/30 rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-white font-semibold">Scan to Download</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text dark:text-white text-center mb-12">
            Why you'll love Turjman
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "100% Free to download and use",
              "No subscription required",
              "Works offline",
              "Unlimited translations",
              "No ads",
              "Privacy-focused",
              "Regular updates",
              "24/7 support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <span className="text-lg text-text dark:text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
