import { Linkedin, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ekeneImage from "@/assets/ekene-ezeala.jpg";
import jewelImage from "@/assets/jewel-iruobe.jpg";
import chikezirimImage from "@/assets/chikezirim-ugwu.jpg";
import dearieImage from "@/assets/dearie-eburu.jpg";
import ameliaImage from "@/assets/amelia-james.jpg";
import sharonImage from "@/assets/sharon-okorie.jpg";
import tammyImage from "@/assets/tammy-francis.jpg";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ekenekamchukwu Ezeala",
    role: "Founder",
    image: ekeneImage,
    linkedin: "https://www.linkedin.com/in/ekenekamchukwu-ezeala-6710b9274",
    instagram: "https://www.instagram.com/keneezeala",
    x: "https://x.com/keneezeala"
  },
  {
    name: "Iruobe Jewel",
    role: "Osun State Lead",
    image: jewelImage,
    instagram: "https://www.instagram.com/jewel.x.x?igsh=aHQyNGp5cmhjZGI1&utm_source=qr",
    x: "https://x.com/_justjewel?s=21"
  },
  {
    name: "Ugwu Samuel Chikezirim",
    role: "Legal Advisor",
    image: chikezirimImage,
    linkedin: "https://www.linkedin.com/in/ugwu-chikezirim-216a0316a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    x: "https://x.com/Chikezirim22885"
  },
  {
    name: "Eburu Oghenenyerhovwo Dearie",
    role: "Developer Lead",
    image: dearieImage,
    linkedin: "https://www.linkedin.com/in/dearie-eburu-998a0b391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Amelia Iniobong James",
    role: "Akwa-Ibom State Lead",
    image: ameliaImage,
    linkedin: "https://www.linkedin.com/in/amelia-james-830572177"
  },
  {
    name: "Sharon Mmesomachi Okorie",
    role: "Akwa-Ibom State Lead",
    image: sharonImage,
    linkedin: "https://www.linkedin.com/in/sharon-okorie-a19a8322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Tammy Francis, Ph.D.",
    role: "Advisor",
    image: tammyImage,
    linkedin: "http://www.linkedin.com/in/drtammyfrancis",
    instagram: "http://www.instagram.com/drtammyfrancis",
    x: "http://www.x.com/drtammyfrancis"
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              The People Behind TGIB
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              More Than Just a Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We have the best founding members with vast experience in the blockchain space.
              We are mentors, mentees, advisors, industry experts.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.x && (
                      <a href={member.x} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <XIcon size={20} />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
