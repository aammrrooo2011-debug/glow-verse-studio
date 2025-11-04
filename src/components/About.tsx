import { Sparkles, Leaf, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Science-Backed",
      description: "Every formula is dermatologist-tested and clinically proven for visible results."
    },
    {
      icon: Leaf,
      title: "Clean & Sustainable",
      description: "We use clean, eco-friendly ingredients that are kind to your skin and the planet."
    },
    {
      icon: Award,
      title: "Cruelty-Free",
      description: "100% cruelty-free products. Beauty should never come at the cost of animal welfare."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground font-lato leading-relaxed mb-6">
            GlowVerse Skincare was born from a passion to revolutionize the beauty industry. 
            We believe that everyone deserves access to luxury skincare that truly works—without 
            compromising on ethics or sustainability.
          </p>
          <p className="text-lg text-muted-foreground font-lato leading-relaxed">
            Our team of skincare scientists and dermatologists work tirelessly to create innovative 
            formulations that harness the power of nature and cutting-edge science. Each product is 
            carefully crafted with clean, sustainable ingredients that deliver transformative results 
            while being gentle on your skin and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-6 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground font-lato leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
