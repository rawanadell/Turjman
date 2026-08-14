import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageShell from '../components/PageShell';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageShell contentClassName="max-w-7xl mx-auto px-6">
        <PageHeader
          title="Get in Touch"
          description="Have questions or feedback? We'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-text dark:text-white mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text dark:text-white mb-1">Email</h3>
                  <p className="text-mutedText dark:text-gray-400">support@turjman.com</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text dark:text-white mb-1">Phone</h3>
                  <p className="text-mutedText dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text dark:text-white mb-1">Address</h3>
                  <p className="text-mutedText dark:text-gray-400">123 Innovation Drive<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-3xl border border-border dark:border-gray-700">
              <h3 className="font-bold text-text dark:text-white mb-2">Response Time</h3>
              <p className="text-mutedText dark:text-gray-400">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-border dark:border-gray-700">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background dark:bg-darkBackground border border-border dark:border-gray-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-text dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background dark:bg-darkBackground border border-border dark:border-gray-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-text dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background dark:bg-darkBackground border border-border dark:border-gray-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-text dark:text-white"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background dark:bg-darkBackground border border-border dark:border-gray-700 rounded-xl focus:outline-none focus:border-primary transition-colors text-text dark:text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-lg hover:shadow-glow transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </PageShell>
  );
};

export default Contact;
