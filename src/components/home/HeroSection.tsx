import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-primary rounded-full" />
      <div className="absolute top-24 right-1/3 w-2 h-2 bg-primary rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-primary rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            The Future big guns of blockchain.
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Join our free community of young entrepreneurs and volunteer blockchain mentors.
          </p>
          
          <div className="flex items-center gap-4 mb-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md">
              Join now
            </Button>
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                <Play size={16} fill="currentColor" />
              </span>
              Learn more
            </button>
          </div>

          {/* Community members */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-primary/40 border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-primary/50 border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs border-2 border-background">
                +12k
              </div>
            </div>
            <span className="text-sm text-muted-foreground">Community members</span>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          {/* Decorative grid pattern */}
          <div className="absolute -top-4 right-0 grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-muted-foreground/30 rounded-sm" />
            ))}
          </div>
          
          <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/5] max-w-md mx-auto shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" 
              alt="Young professional woman"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
