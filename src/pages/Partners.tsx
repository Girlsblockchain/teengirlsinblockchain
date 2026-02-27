import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import kryptoextractLogo from "@/assets/kryptoextract-logo.jpg";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Partner with Us
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              Partner with us and take an active role in closing the gender gap in Web3. Align your brand with the future of inclusive blockchain innovation while gaining direct visibility within our growing community.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              From co-developing curriculum and mentorship programs to funding targeted initiatives, your organization can help drive economic empowerment and build a more diverse, equitable ecosystem.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Let's shape the future of Web3 together.
            </p>
            <a href="mailto:teengirlsinblockchain@gmail.com">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg">
                Explore Partnership
              </Button>
            </a>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-primary/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">
              Brands Who Support Our Vision
            </h2>
            <div className="flex justify-center">
              <a
                href="https://kryptoextract.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-lg p-6 flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={kryptoextractLogo}
                  alt="KryptoExtract"
                  className="h-24 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-muted-foreground mt-10">
              Interested in partnering? Reach out at{" "}
              <a href="mailto:teengirlsinblockchain@gmail.com" className="text-primary underline">
                teengirlsinblockchain@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
