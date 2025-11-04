import heroImage from "@/assets/hero-beauty.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
            Reveal Your
            <span className="text-primary block mt-2">Inner Glow</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-lato mb-8 leading-relaxed">
            Luxury skincare powered by science and nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold shadow-elegant transition-all hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
