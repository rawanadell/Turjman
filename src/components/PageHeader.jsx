import { motion } from 'framer-motion';

const PageHeader = ({
  title,
  description,
  titleClassName = 'text-5xl lg:text-6xl font-bold text-text dark:text-white mb-6',
  descriptionClassName = 'text-xl text-mutedText dark:text-gray-400 max-w-2xl mx-auto',
  children,
}) => {
  return (
    <div className="text-center mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={titleClassName}
      >
        {title}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={descriptionClassName}
        >
          {description}
        </motion.p>
      )}

      {children}
    </div>
  );
};

export default PageHeader;
