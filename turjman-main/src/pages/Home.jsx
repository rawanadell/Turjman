import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CameraIcon,
  ChevronDown,
  Languages,
  Play,
  ScanLine,
  Star,
  Volume2,
  Zap,
} from 'lucide-react';
import {
  FadeIn,
  FadeInOnLoad,
  Float,
  StaggerContainer,
  StaggerItem,
} from '../components/AnimateOnScroll';

const features = [
  {
    id: 'text-translation',
    title: 'Translate Any Text, Instantly',
    description: 'From a single word to full documents — 100+ languages, context-aware AI.',
    type: 'photo',
    side: 'right',
    image: 'img1.png',
  },
  {
    id: 'voice-mode',
    title: 'Speak. Listen. Understand.',
    description: 'Real-time voice recognition tuned for accents and natural speech patterns.',
    type: 'conversation',
    side: 'left',
    image: 'img3.png',
  },
  {
    id: 'camera-mode',
    title: 'Point, Shoot, Read Anything',
    description: 'AR overlay translates signs, menus, and labels instantly through your camera.',
    type: 'camera',
    side: 'right',
    image: 'img4.png',
  },
  {
    id: 'photo-translation',
    title: 'Unlock Text in Any Photo',
    description: 'Upload screenshots or photos — every word extracted and translated accurately.',
    type: 'photo',
    side: 'left',
    image: 'img5.png',
  },
  {
    id: 'live-conversation',
    title: 'Two Languages, One Conversation',
    description: 'Translate live discussions without losing the natural flow of the exchange.',
    type: 'conversation',
    side: 'right',
    image: 'img6.png',
  },
  {
    id: 'offline-packs',
    title: 'No Signal? No Problem.',
    description: 'Download language packs and keep translating anywhere, even without internet.',
    type: 'languages',
    side: 'left',
    image: 'img7.png',
  },
];
const faqs = [
  'Is Turjman free to use?',
  'Which languages does Turjman support?',
  'Does it work without an internet connection?',
  'How accurate is the AI translation?',
  'Is my data private and secure?',
];

const testimonials = [
  ['Layla Hassan', 'The Egyptian traveler', 'Turjman changed how I meet clients across the Middle East and Europe. The live conversation mode is unmatched!'],
  ['Kenji Nakamura', 'Tokyo traveler', 'The camera translation saved me countless times in Japan. Offline mode means I’m never stuck.'],
  ['Sofia Reyes', 'Language learner', 'The most accurate translation app I’ve used. My students love it and so do I!'],
];

function Phone({ type = 'conversation', className = '' }) {
  return (
    <div className={`relative w-40 rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_40px_rgba(15,23,42,0.16)] ${className}`}>
      <div className="rounded-[22px] border border-slate-100 bg-linear-to-b from-slate-50 to-blue-50 p-3">
        <div className="mb-3 flex items-center justify-between text-[9px] font-medium text-slate-500">
          <span>9:41</span>
          <span>● ◔ ▮</span>
        </div>

        <div className="rounded-2xl bg-white/80 p-3">
          {type === 'camera' ? (
            <div className="flex h-40 items-center justify-center rounded-2xl bg-linear-to-br from-slate-800 to-slate-600 text-slate-200">
              <ScanLine size={24} />
            </div>
          ) : type === 'photo' ? (
            <div className="rounded-2xl bg-blue-50 p-3 text-center">
              <div className="mb-3 flex justify-center text-blue-600">
                <CameraIcon size={20} />
              </div>
              <div className="rounded-xl bg-white px-3 py-2 text-[10px] font-semibold text-slate-700 shadow-sm">
                Image Translation
              </div>
            </div>
          ) : type === 'languages' ? (
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3 text-[10px] text-slate-600">
              <div className="font-semibold text-slate-800">Download languages</div>
              {['English', 'French', 'Japanese', 'Arabic'].map((lang) => (
                <div key={lang} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                  <span>{lang}</span>
                  <span className="font-semibold text-blue-600">↓</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 text-center">
              <div className="rounded-xl bg-slate-100 px-3 py-2 text-[10px] font-semibold text-slate-700">
                Live Conversation
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-2 text-left text-[10px] text-slate-600">
                Where are you from?
              </div>
              <div className="rounded-xl bg-blue-100 px-3 py-2 text-right text-[10px] font-medium text-blue-700">
                أين أنت من؟
              </div>
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                <Volume2 size={14} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mx-auto flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-slate-500">
      <span className="h-px w-6 bg-slate-400" />
      {children}
      <span className="h-px w-6 bg-slate-400" />
    </div>
  );
}

const navItems = [
  { name: 'Features', id: 'features' },
  { name: 'About', id: 'about' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Download', id: 'download' },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 return (
  <div id="top">
    <main className="min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
  </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeInOnLoad delay={0.1}>
          <header className="flex items-center justify-between gap-4 py-6">
            <button
              type="button"
              className="flex items-center gap-3 text-[15px] font-extrabold text-slate-900"
              onClick={() => scrollToSection('top')}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-200">
                <Languages size={17} />
              </span>
              <span>Turjman</span>
            </button>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="transition hover:text-blue-600"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <motion.button
              type="button"
              className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              onClick={() => scrollToSection('download')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get the app
            </motion.button>
          </header>
        </FadeInOnLoad>

        <section id="top" className="py-10 text-center md:py-16">
          <FadeInOnLoad delay={0.15}>
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
              <Zap size={12} />
              AI-Powered · 100+ Languages
            </div>
          </FadeInOnLoad>

          <FadeInOnLoad delay={0.25}>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
              Smart Translation
              <br />
              <em className="text-blue-600 not-italic">Application</em>
            </h1>
          </FadeInOnLoad>

          <FadeInOnLoad delay={0.35}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Turjman breaks language barriers with text, voice, camera, image, and live conversation translation — all in one app.
            </p>
          </FadeInOnLoad>

          <FadeInOnLoad delay={0.45}>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <motion.button
                type="button"
                onClick={() => scrollToSection('download')}
                className="flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-left text-white shadow-lg shadow-slate-300"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg"></span>
                <span>
                  <small className="block text-[8px] uppercase opacity-70">Download on the</small>
                  <strong className="block text-sm font-semibold">App Store</strong>
                </span>
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollToSection('download')}
                className="flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-left text-white shadow-lg shadow-blue-200"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={13} fill="currentColor" />
                <span>
                  <small className="block text-[8px] uppercase opacity-80">GET IT ON</small>
                  <strong className="block text-sm font-semibold">Google Play</strong>
                </span>
              </motion.button>
            </div>
          </FadeInOnLoad>

          <FadeInOnLoad delay={0.6}>
            <Float className="mt-10 flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}image/hero-phones.png`}
                alt="Turjman translation app"
                className="w-full max-w-[850px] object-contain"
              />
            </Float>
          </FadeInOnLoad>
        </section>

     <section id="features" className="mx-auto max-w-5xl py-12 md:py-20">
  <FadeIn>
    <SectionLabel>FEATURES</SectionLabel>
    <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
      Every Way You Communicate
    </h2>
  </FadeIn>

  <div className="mt-8 space-y-8 sm:space-y-10 md:space-y-12">
    {features.map((feature, index) => (
     <FadeIn
  key={feature.title}
  delay={index * 0.05}
  direction={feature.side === 'right' ? 'left' : 'right'}
>
 <article
  id={feature.id}
  className={`grid grid-cols-2 items-center gap-3 sm:gap-6 md:gap-8 ${
    feature.side === 'right'
      ? '[&>*:first-child]:order-2 [&>*:last-child]:order-1'
      : ''
  }`}
>
        <div className="space-y-2 sm:space-y-4">
          <h3 className="text-sm font-black leading-tight text-slate-900 sm:text-xl md:text-2xl">
            {feature.title}
          </h3>

          <p className="text-[11px] leading-5 text-slate-600 sm:text-sm sm:leading-7 md:max-w-md">
            {feature.description}
          </p>

          <motion.button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1.5 text-[10px] font-semibold text-white sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            onClick={() => scrollToSection('download')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={12} fill="currentColor" className="sm:hidden" />
            <Play size={15} fill="currentColor" className="hidden sm:block" />
            LIVE DEMO
          </motion.button>
        </div>

        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}image/${feature.image}`}
            alt={feature.title}
            className="w-full max-w-[130px] object-contain sm:max-w-[280px] md:max-w-[850px]"
          />
        </motion.div>
      </article>
</FadeIn>
    ))}
  </div>
</section>

        <section id="about" className="mx-auto max-w-5xl py-12 md:py-20">
          <FadeIn>
            <SectionLabel>ABOUT US</SectionLabel>
            <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Breaking Language Barriers Worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              Turjman is an AI-powered translation app built for seamless multilingual communication. Whether you're traveling, studying, or working globally — Turjman understands and translates instantly across text, voice, camera, image, and live conversation.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {[
              ['100+', 'Languages'],
              ['50M+', 'Successful Talks'],
              ['4.9★', 'App Rating'],
              ['190+', 'Countries'],
            ].map(([value, label]) => (
              <StaggerItem key={label}>
                <motion.div
                  className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-6 text-center shadow-sm"
                  whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(37, 99, 235, 0.12)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="text-2xl font-black text-blue-600">{value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section id="faq" className="mx-auto max-w-3xl py-12 md:py-20">
          <FadeIn>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white/80 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              {faqs.map((faq, index) => (
                <div key={faq} className="border-b border-slate-100 last:border-b-0">
                  <button
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-slate-700"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{faq}</span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm leading-7 text-slate-600">
                          {index === 0
                            ? 'Yes, Turjman includes a generous free plan so you can translate wherever you go.'
                            : 'Turjman supports more than 100 languages across text, voice, camera, and conversation modes.'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl py-12 md:py-20">
          <FadeIn>
            <SectionLabel>TESTIMONIALS</SectionLabel>
            <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
              What Our Users Say
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-3" stagger={0.15}>
            {testimonials.map(([name, role, quote], index) => (
              <StaggerItem key={`${name}-${index}`}>
                <motion.article
                  className="rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-sm"
                  whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={11} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">“{quote}”</p>
                  <footer className="mt-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{name}</div>
                      <div className="text-xs text-slate-500">{role}</div>
                    </div>
                  </footer>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

  <section
  id="download"
  className="mx-auto max-w-7xl px-6 pt-24 pb-0 lg:px-10"
>
  <FadeIn>
    <SectionLabel>DOWNLOAD</SectionLabel>
  </FadeIn>

  <div className="mt-12 flex items-center gap-6">
    <FadeIn direction="left" className="w-1/2">
      <h2 className="text-4xl font-black leading-none text-slate-900 sm:text-6xl">
        Download
        <br />
        App
      </h2>

      <p className="mt-8 max-w-md text-sm leading-7 text-slate-500 sm:text-lg sm:leading-9">
        Get Turjman on iOS and Android.
        Translate your first conversation
        in under 30 seconds — free forever.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <motion.a
          href="#"
          className="rounded-xl bg-black px-4 py-3 text-sm text-white shadow-lg sm:px-7 sm:py-4 sm:text-lg"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          App Store
        </motion.a>

        <motion.a
          href="#"
          className="rounded-xl bg-blue-600 px-4 py-3 text-sm text-white shadow-xl shadow-blue-300 sm:px-7 sm:py-4 sm:text-lg"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Google Play
        </motion.a>
      </div>

      <StaggerContainer className="mt-8 space-y-3 text-sm text-slate-600 sm:mt-10 sm:space-y-4 sm:text-base" stagger={0.08}>
        {[
          'Free to download, no hidden fees',
          'Offline translation for 20+ languages',
          'Available on iOS 14+ and Android 8+',
        ].map((item) => (
          <StaggerItem key={item}>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100">
                ✓
              </div>
              {item}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </FadeIn>

    <FadeIn direction="right" delay={0.15} className="flex w-1/2 justify-end">
      <Float>
        <img
          src={`${import.meta.env.BASE_URL}image/img2.png`}
          alt="Turjman translation app"
          className="w-full max-w-[850px] object-contain"
        />
      </Float>
    </FadeIn>
  </div>
</section>
<button
      className={`scroll-top-button ${
        showScrollTop ? 'visible' : ''
      }`}
      onClick={() => {
        document.getElementById('top')?.scrollIntoView({
          behavior: 'smooth',
        });
      }}
    >
      <ArrowUp size={18} />
    </button>
           </div>
    </main>
  </div>
);
}


    