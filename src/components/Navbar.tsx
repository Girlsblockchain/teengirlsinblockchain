import { Link, useLocation } from "react-router-dom";
import { Sparkles, Eclipse, Menu, X } from "lucide-react";
import { useState } from "react";
import tgibLogo from "@/assets/tgib-logo-new.png";

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    // Initialize from document class
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  // Set dark mode on mount
  useState(() => {
    document.documentElement.classList.add('dark');
  });

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/team", label: "TEAM" },
    { to: "/gallery", label: "GALLERY" },
    { to: "/partners", label: "PARTNERS" },
    { to: "/contact", label: "CONTACT US" },
  ];

  const blogUrl = "https://medium.com/@teengirlsinblockchain";

  return (
    <nav className="bg-primary py-4 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={tgibLogo} alt="Teen Girls In Blockchain" className="h-16 w-auto bg-white/90 rounded-lg p-1" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-primary-foreground hover:opacity-80 transition-opacity ${isActive(link.to) ? "border-b-2 border-white pb-1" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:opacity-80 transition-opacity">
            BLOG
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 group"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sparkles size={18} className="text-primary-foreground transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
            ) : (
              <Eclipse size={18} className="text-primary-foreground transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary z-50 border-t border-primary-foreground/20 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-primary-foreground hover:opacity-80 transition-opacity text-lg ${isActive(link.to) ? "font-bold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <a href={blogUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="text-primary-foreground hover:opacity-80 transition-opacity text-lg">
              BLOG
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
