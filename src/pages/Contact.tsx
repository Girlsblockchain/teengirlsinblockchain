import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });
    
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Reach Out
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We're always looking forward to new students, partners, mentors for collaborations etc.
              Please feel free and reach out to us so we can work on something together.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-muted/50">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-12 rounded-2xl border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-input border-0 h-14 rounded-lg"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input border-0 h-14 rounded-lg"
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Leave your message here !"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-input border-0 min-h-[200px] rounded-lg resize-none"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
