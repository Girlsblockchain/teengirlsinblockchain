import { Linkedin, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ekeneImage from "@/assets/ekene-ezeala.jpg";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const teamMembers = [
  {
    name: "Ekenekamchukwu Ezeala",
    role: "Founder",
    image: ekeneImage,
    linkedin: "https://www.linkedin.com/in/ekenekamchukwu-ezeala-6710b9274",
    instagram: "https://www.instagram.com/keneezeala",
    x: "https://x.com/keneezeala"
  },
  {
    name: "Boluwatife Adeniyi",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    x: "https://x.com"
  },
  {
    name: "Favour Samson",
    role: "Project manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    x: "https://x.com"
  },
  {
    name: "Anna Velvet",
    role: "Project Advisor",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    x: "https://x.com"
  },
  {
    name: "Ekenekamchukwu Ezeala",
    role: "Founder",
    image: ekeneImage,
    linkedin: "https://www.linkedin.com/in/ekenekamchukwu-ezeala-6710b9274",
    instagram: "https://www.instagram.com/keneezeala",
    x: "https://x.com/keneezeala"
  },
  {
    name: "Boluwatife Adeniyi",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    x: "https://x.com"
  },
  {
    name: "Favour Samson",
    role: "Project manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    x: "https://x.com"
  },
  {
    name: "Anna Velvet",
    role: "Project Advisor",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    x: "https://x.com"
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
                <div className="flex items-center justify-center gap-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.x} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <XIcon size={20} />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
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
