import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageShell from '../components/PageShell';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Turjman free to use?",
      answer: "Yes! Turjman is completely free to download and use with no hidden costs or subscriptions. We offer premium features through optional in-app purchases, but the core translation functionality is free forever."
    },
    {
      question: "How many languages does Turjman support?",
      answer: "Turjman supports over 40 languages including English, Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, and many more. We're constantly adding new languages based on user feedback."
    },
    {
      question: "Does Turjman work offline?",
      answer: "Yes! You can download language packs for offline use. This is perfect for travel or situations where you don't have internet access. Offline translation quality is optimized for performance."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. Privacy is our top priority. Your translation data is encrypted and never stored on our servers. We don't sell your data to third parties. All processing happens on your device whenever possible."
    },
    {
      question: "What devices are supported?",
      answer: "Turjman is available for both iOS and Android devices. We support iOS 14.0+ and Android 8.0+. The app is optimized for both phones and tablets."
    },
    {
      question: "How accurate is the translation?",
      answer: "Turjman uses state-of-the-art AI models trained on millions of texts. Our translations are highly accurate and preserve context and nuance. For best results, we recommend using clear, complete sentences."
    },
    {
      question: "Can I translate documents?",
      answer: "Yes! Turjman supports document translation for PDF, Word, and text files. We preserve formatting, images, and layout as much as possible during translation."
    },
    {
      question: "How do I get help if I have issues?",
      answer: "Our support team is available 24/7. You can reach us through the in-app help center, via email at support@turjman.com, or through our contact form on the website."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageShell contentClassName="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-text dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-mutedText dark:text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card dark:bg-gray-800 rounded-2xl border border-border dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-lg font-semibold text-text dark:text-white">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="text-primary" size={24} />
                ) : (
                  <ChevronDown className="text-mutedText dark:text-gray-400" size={24} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-mutedText dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors mt-4"
          >
            Contact us
          </a>
        </div>
      </PageShell>
  );
};

export default FAQ;
