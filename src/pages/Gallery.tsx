import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X, Play, MapPin, ArrowLeft, Camera } from "lucide-react";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt: string;
}

interface GalleryFolder {
  name: string;
  location: string;
  coverImage: string;
  items: GalleryItem[];
}

const galleryFolders: GalleryFolder[] = [
  {
    name: "Kogi State",
    location: "Nigeria",
    coverImage: "/images/gallery-1.jpg",
    items: [
      { type: "image", src: "/images/gallery-1.jpg", alt: "TGIB Kogi State workshop" },
      { type: "image", src: "/images/gallery-2.jpg", alt: "TGIB Kogi State education session" },
    ],
  },
  {
    name: "Congo",
    location: "Central Africa",
    coverImage: "/images/congo-1.jpg",
    items: [
      { type: "image", src: "/images/congo-1.jpg", alt: "TGIB Congo certificate presentation" },
      { type: "image", src: "/images/congo-2.jpg", alt: "TGIB Congo certificate ceremony" },
      { type: "image", src: "/images/congo-3.jpg", alt: "TGIB Congo workshop session" },
    ],
  },
  {
    name: "Ghana",
    location: "West Africa",
    coverImage: "",
    items: [],
  },
  {
    name: "Kaduna State",
    location: "Nigeria",
    coverImage: "",
    items: [],
  },
  {
    name: "Akwa Ibom State",
    location: "Nigeria",
    coverImage: "/images/akwaibom-3.jpg",
    items: [
      { type: "image", src: "/images/akwaibom-1.jpg", alt: "TGIB Akwa Ibom school workshop" },
      { type: "image", src: "/images/akwaibom-2.jpg", alt: "TGIB Akwa Ibom students learning" },
      { type: "image", src: "/images/akwaibom-3.jpg", alt: "TGIB Akwa Ibom school tour group photo" },
      { type: "image", src: "/images/akwaibom-4.jpg", alt: "TGIB Akwa Ibom partnership event" },
      { type: "image", src: "/images/akwaibom-5.jpg", alt: "TGIB Akwa Ibom community gathering" },
    ],
  },
  {
    name: "Niger State",
    location: "Nigeria",
    coverImage: "",
    items: [],
  },
];

const Gallery = () => {
  const [activeFolder, setActiveFolder] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const currentFolder = activeFolder !== null ? galleryFolders[activeFolder] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Our Moments
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Gallery
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Moments from our events, workshops, and community gatherings across Africa.
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            {activeFolder === null ? (
              /* Folder Grid */
              <>
                <div className="text-center mb-12">
                  <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                    Explore by Location
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Our Reach Across Africa
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryFolders.map((folder, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFolder(i)}
                      className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-left"
                    >
                      {/* Cover Image / Placeholder */}
                      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 relative">
                        {folder.coverImage ? (
                          <img
                            src={folder.coverImage}
                            alt={folder.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                            <Camera className="w-12 h-12 text-primary/40" />
                            <span className="text-sm text-muted-foreground">Coming soon</span>
                          </div>
                        )}
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                        {/* Photo count badge */}
                        <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                          {folder.items.length} {folder.items.length === 1 ? "photo" : "photos"}
                        </div>
                      </div>
                      {/* Folder Info */}
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                          {folder.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          {folder.location}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Folder Contents */
              <>
                <button
                  onClick={() => { setActiveFolder(null); setLightbox(null); }}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to all folders
                </button>
                <div className="text-center mb-12">
                  <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                    {currentFolder?.location}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {currentFolder?.name}
                  </h2>
                </div>

                {currentFolder && currentFolder.items.length === 0 ? (
                  <div className="text-center py-20 bg-card rounded-2xl border border-border">
                    <Camera className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      Coming soon — stay tuned for photos and highlights!
                    </p>
                  </div>
                ) : (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {currentFolder?.items.map((item, i) => (
                      <div
                        key={i}
                        className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative border border-border shadow-sm hover:shadow-xl transition-all duration-300"
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
                            <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 group-hover:bg-foreground/40 transition-colors">
                              <Play className="w-12 h-12 text-primary-foreground" fill="currentColor" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightbox !== null && currentFolder && currentFolder.items[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-background/80 z-50"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {currentFolder.items[lightbox].type === "image" ? (
              <img
                src={currentFolder.items[lightbox].src}
                alt={currentFolder.items[lightbox].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={currentFolder.items[lightbox].src}
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
