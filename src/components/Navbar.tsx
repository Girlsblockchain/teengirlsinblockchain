import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary py-4 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L35 15V30L20 40L5 30V15L20 5Z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 17V27L20 32L12 27V17L20 12Z" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div className="text-primary-foreground">
            <span className="text-xs block leading-tight">TEEN GIRLS IN</span>
            <span className="text-sm font-bold leading-tight">BLOCKCHAIN</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-primary-foreground hover:opacity-80 transition-opacity ${isActive("/") ? "border-b-2 border-white pb-1" : ""}`}
          >
            HOME
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-primary-foreground hover:opacity-80 transition-opacity">
              LEARN <ChevronDown size={16} />
            </button>
          </div>
          <Link 
            to="/team" 
            className={`text-primary-foreground hover:opacity-80 transition-opacity ${isActive("/team") ? "border-b-2 border-white pb-1" : ""}`}
          >
            TEAM
          </Link>
          <Link 
            to="/contact" 
            className={`text-primary-foreground hover:opacity-80 transition-opacity ${isActive("/contact") ? "border-b-2 border-white pb-1" : ""}`}
          >
            CONTACT US
          </Link>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="bg-foreground/20 rounded-full p-1 flex items-center w-14 h-7"
        >
          <div className={`w-5 h-5 rounded-full bg-primary-foreground transition-transform ${isDark ? "translate-x-7" : "translate-x-0"}`}>
            {isDark ? <Moon size={14} className="m-0.5 text-primary" /> : <Sun size={14} className="m-0.5 text-primary" />}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
