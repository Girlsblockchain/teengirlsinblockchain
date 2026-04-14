import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Calendar, Clock, ChevronDown } from "lucide-react";

const categories = [
  "All", "Blockchain", "Web3", "DeFi", "NFTs", "AI", "Metaverse"
];

const eventTypes = [
  "Blockchain Conference", "Tech Conference", "Hackathon", "Meetup", "Workshop", "Webinar", "Summit", "Bootcamp"
];

const events = [
  {
    id: 1,
    title: "SUI Onboarding Workshop",
    description: "Step into Web3 — Discover SUI and the Basics of Blockchain",
    date: "2026-05-10",
    time: "14:00",
    location: "Lagos, Nigeria",
    category: "Workshop",
    tag: "Web3",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: 2,
    title: "Women in Blockchain Summit",
    description: "Empowering the next generation of female blockchain leaders across Africa.",
    date: "2026-05-22",
    time: "10:00",
    location: "Accra, Ghana",
    category: "Summit",
    tag: "Blockchain",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
  },
  {
    id: 3,
    title: "DeFi Deep Dive Bootcamp",
    description: "Hands-on training in decentralized finance protocols and smart contracts.",
    date: "2026-06-05",
    time: "09:00",
    location: "Nairobi, Kenya",
    category: "Bootcamp",
    tag: "DeFi",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
  },
  {
    id: 4,
    title: "NFT Art & Tech Meetup",
    description: "Explore the intersection of art, culture, and blockchain technology.",
    date: "2026-06-18",
    time: "16:00",
    location: "Cape Town, South Africa",
    category: "Meetup",
    tag: "NFTs",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
  },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeCategory === "All" || event.tag === activeCategory;
    const matchesType = !activeType || event.category === activeType;
    const matchesSearch =
      !searchQuery ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[340px] md:h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
            alt="Blockchain events"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
              African Blockchain<br />& Tech Events
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-md">
              Discover conferences, hackathons, meetups, and workshops powering Africa's tech and blockchain ecosystem.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
          <h2 className="text-2xl font-bold text-foreground mb-1">Upcoming Events</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Blockchain conferences, hackathons & tech meetups across Africa
          </p>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="City or country..."
                className="w-full sm:w-48 pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border text-foreground text-sm hover:bg-muted transition-colors">
              <Calendar size={16} />
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Type Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(activeType === type ? null : type)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  activeType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/20 text-primary mb-2">
                    {event.tag}
                  </span>
                  <h3 className="text-foreground font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No events found matching your filters.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
