const stats = [
  { value: "2k+", label: "Community Members" },
  { value: "6", label: "Countries across Africa" },
  { value: "100+", label: "Schools Visited" }
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="md:pr-10 md:border-r md:border-primary-foreground/30">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground whitespace-nowrap">
            Our Impact
          </h3>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-8 md:pl-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
