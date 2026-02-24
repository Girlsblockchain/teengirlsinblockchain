import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Moments from our events, workshops, and community gatherings.
            </p>
          </div>

          <div className="text-center text-muted-foreground py-20">
            <p className="text-lg">Coming soon — stay tuned for photos and highlights!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
