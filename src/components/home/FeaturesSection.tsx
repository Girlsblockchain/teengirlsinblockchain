import { Users, PlayCircle, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Online training from experts.",
    description: "Gaining valuable skills through online training from experts is the surest path to a successful career."
  },
  {
    icon: PlayCircle,
    title: "Over 3k video course.",
    description: "Gaining valuable skills through online training from experts is the surest path to a successful career."
  },
  {
    icon: MessageSquare,
    title: "Weekly community discussions.",
    description: "Gaining valuable skills through online training from experts is the surest path to a successful career."
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-card py-16 px-6 md:px-12 lg:px-20 border-t border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            More than just learning.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            it's about developing a sense of self-awareness and understanding our own unique talents and passions. 
            It's about learning how to communicate effectively and collaborate with others, building resilience and 
            grit necessary to overcome obstacles and achieve our goals. Education is also about learning how to be 
            responsible and engaged citizen.{" "}
            
          </p>
        </div>

        {/* Right Content - Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
