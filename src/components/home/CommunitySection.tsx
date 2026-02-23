import { Linkedin, Instagram, Youtube } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/teen-girls-in-blockchain-tgib/" },
  { icon: XIcon, href: "https://x.com/GirlsBlockchain?s=20" },
  { icon: Instagram, href: "https://www.instagram.com/t.g.i.b._" },
  { icon: Youtube, href: "https://youtube.com/@girlsblockchain" }
];

const CommunitySection = () => {
  return (
    <section className="bg-card py-16 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">OUR COMMUNITY</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
          We can't wait to have you Join Us
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          At TGIB we pay close attention to our community members and offer them the best learning 
          resources to kick start their blockchain career and advancement. Follow our socials below.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
