import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import kryptoextractLogo from "@/assets/kryptoextract-logo.jpg";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Collaborate &amp; Grow
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Partner with Us
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              Partner with us and take an active role in closing the gender gap in Web3. Align your brand with the future of inclusive blockchain innovation while gaining direct visibility within our growing community.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              From co-developing curriculum and mentorship programs to funding targeted initiatives, your organization can help drive economic empowerment and build a more diverse, equitable ecosystem.
            </p>
            <p className="text-foreground text-xl md:text-2xl font-semibold mb-10 max-w-3xl mx-auto">
              Let's shape the future of Web3 together.
            </p>
            <a href="mailto:teengirlsinblockchain@gmail.com">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 rounded-full text-lg gap-2 shadow-lg hover:shadow-xl transition-all">
                Explore Partnership
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-muted/50">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
              Brands Who Support Our Vision
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://kryptoextract.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl p-8 flex items-center justify-center border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={kryptoextractLogo}
                  alt="KryptoExtract"
                  className="h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
            <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
              <p className="text-foreground text-lg font-medium mb-2">
                Want to join our mission?
              </p>
              <p className="text-muted-foreground mb-4">
                Reach out at{" "}
                <a href="mailto:teengirlsinblockchain@gmail.com" className="text-primary font-semibold hover:underline">
                  teengirlsinblockchain@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
