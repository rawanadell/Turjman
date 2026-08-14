const PageShell = ({
  children,
  className = '',
  contentClassName = 'max-w-7xl mx-auto px-6',
}) => {
  return (
    <div className={`min-h-screen pt-0 pb-24 bg-background dark:bg-darkBackground ${className}`.trim()}>
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default PageShell;
