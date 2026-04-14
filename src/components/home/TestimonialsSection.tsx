import { useState } from "react";
import victoriaImage from "@/assets/victoria-abiodun.jpg";

const testimonials = [
  {
    name: "Victoria Kehinde Abiodun",
    role: "Blockchain Enthusiast",
    image: victoriaImage,
    quote: "As someone who has benefited directly from this vision, I see TGIB as a space where potential is nurtured and futures are built. If you are a young woman seeking growth, direction, and a strong entry into Web3, TGIB is where you belong."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">OUR TESTIMONIALS</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
          What our students say About Us
        </h2>

        {/* Avatar */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary shadow-lg">
            <img 
              src={testimonials[activeIndex].image} 
              alt={testimonials[activeIndex].name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Active testimonial info */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h3>
          <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
        </div>

        {/* Quote */}
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          "{testimonials[activeIndex].quote}"
        </p>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-foreground" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
