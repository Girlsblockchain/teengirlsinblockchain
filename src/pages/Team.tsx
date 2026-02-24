import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Ekenekamchukwu Ezeala",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Boluwatife Adeniyi",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Favour Samson",
    role: "Project manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Anna Velvet",
    role: "Project Advisor",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ekenekamchukwu Ezeala",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Boluwatife Adeniyi",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Favour Samson",
    role: "Project manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Anna Velvet",
    role: "Project Advisor",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              More than just a team
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We have the best founding members with vast experience in the blockchain space. 
              We are mentors, mentees, advisors, industry experts.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
