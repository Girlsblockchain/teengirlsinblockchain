import { useState } from "react";

const testimonials = [
  {
    name: "Albert Nicole",
    role: "Blockchain enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "I have been a blockchain enthusiast for a while now, but I truly found my passion for technology after joining TGIB, a community of like-minded individuals. The community provided a platform for learning and growth, where i was able to engage in meaningful discussions, ask questions and gain valuable insights from experienced members."
  },
  {
    name: "Sarah Johnson",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "TGIB has been instrumental in my journey into blockchain development. The mentorship and resources available are unmatched."
  },
  {
    name: "Maria Chen",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    quote: "Being part of this community has opened so many doors for me. The connections I've made here are invaluable."
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

        {/* Avatars */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 ${
                index === activeIndex 
                  ? "w-20 h-20 ring-4 ring-primary" 
                  : "w-14 h-14 opacity-50 hover:opacity-75"
              } rounded-full overflow-hidden`}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
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
