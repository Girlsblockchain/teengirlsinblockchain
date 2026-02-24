import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your mission meets our impact; become a strategic collaborator.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              Partnering with Teen Girls In Blockchain (TGIB) is an active commitment to closing the gender gap in blockchain technology. You gain direct visibility and brand alignment by supporting our programs, placing your organization at the heart of the Web3 inclusion movement.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              We offer collaboration opportunities; from co-developing curriculum and mentorship to funding specific initiatives, that demonstrate your organization's commitment to economic empowerment and a diverse digital future. Let's work together to build a stronger, more equitable decentralized finance ecosystem.
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg h-24 flex items-center justify-center border border-border shadow-sm"
                >
                  <span className="text-muted-foreground text-sm">Partner {i}</span>
                </div>
              ))}
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
