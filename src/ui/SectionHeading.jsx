const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
