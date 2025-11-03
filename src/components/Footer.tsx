import { Sparkles, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-2xl font-playfair font-bold text-foreground">
                GlowVerse
              </span>
            </Link>
            <p className="text-muted-foreground font-inter text-sm leading-relaxed max-w-md">
              Your trusted source for expert skincare advice, honest product reviews, 
              and personalized beauty guidance. Join our community on the journey to radiant, healthy skin.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Mail, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="h-10 w-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Social media"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-inter">
            © {currentYear} GlowVerse. All rights reserved. Made with love for beautiful skin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
