import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About us */}
        <div>
          <h3 className="text-primary-foreground font-semibold mb-4">About us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Who we are
              </Link>
            </li>
            <li>
              <Link to="/what-we-offer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                What we offer
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-primary-foreground font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/support" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Customer support
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Feedbacks
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-primary-foreground font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.linkedin.com/company/teen-girls-in-blockchain-tgib/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/GirlsBlockchain?s=20" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Twitter/X
              </a>
            </li>
            <li>
              <a href="https://x.com/GirlsBlockchain?s=20" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/t.g.i.b._" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@girlsblockchain" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
