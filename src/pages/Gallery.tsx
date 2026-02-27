import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, Play } from "lucide-react";

const galleryItems: { type: "image" | "video"; src: string; alt: string }[] = [
  // Add items here like:
  // { type: "image", src: "/images/event1.jpg", alt: "Community event" },
  // { type: "video", src: "/videos/workshop.mp4", alt: "Workshop recording" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Our Moments
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Moments from our events, workshops, and community gatherings.
            </p>
          </div>

          {galleryItems.length === 0 ? (
            <div className="text-center text-muted-foreground py-20">
              <p className="text-lg">Coming soon — stay tuned for photos and highlights!</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightbox(i)}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative">
                      <video src={item.src} className="w-full h-auto" muted preload="metadata" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <Play className="w-12 h-12 text-white" fill="white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox !== null && galleryItems[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/80 z-50"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {galleryItems[lightbox].type === "image" ? (
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={galleryItems[lightbox].src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
