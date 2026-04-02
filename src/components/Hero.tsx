import heroImage from "@/assets/hero-beauty.jpg";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-lato mb-4">Your Skincare Journal</p>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
            Glow From
            <span className="text-primary block mt-2">Within</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-lato mb-8 leading-relaxed max-w-lg">
            Expert-backed skincare advice, routines, and ingredient guides to help you achieve your healthiest, most radiant skin.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold shadow-elegant transition-all hover:scale-105"
            onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Search className="mr-2 h-5 w-5" />
            Explore Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
