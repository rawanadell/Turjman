import FeaturesSection from '../components/FeaturesSection';
import PageShell from '../components/PageShell';

const Features = () => {
  return (
    <PageShell>
      <FeaturesSection
        title="Powerful Features"
        description="Everything you need to break down language barriers"
        className="py-0 bg-transparent"
        titleClassName="text-5xl lg:text-6xl font-bold text-text dark:text-white mb-6"
        descriptionClassName="text-xl text-mutedText dark:text-gray-400 max-w-2xl mx-auto"
      />
    </PageShell>
  );
};

export default Features;
