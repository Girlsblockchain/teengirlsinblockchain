const stats = [
  { value: "2,000", label: "Available Resources" },
  { value: "1k", label: "Expert Tutors" },
  { value: "10,942", label: "Hours spent" },
  { value: "2k", label: "Active Members" }
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
              {stat.value}
            </div>
            <div className="text-primary-foreground/80 text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
