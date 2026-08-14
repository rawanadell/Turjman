import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import PageShell from '../components/PageShell';

const NotFound = () => {
  return (
    <PageShell className="flex items-center justify-center" contentClassName="text-center max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-text dark:text-white mb-4">
            Page not found
          </h2>
          <p className="text-xl text-mutedText dark:text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold text-lg hover:shadow-glow transition-all hover:-translate-y-1"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </motion.div>
      </PageShell>
  );
};

export default NotFound;
