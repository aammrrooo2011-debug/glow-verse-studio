import { Card } from "@/components/ui/card";
import { Sparkles, Calendar, FlaskConical, User } from "lucide-react";
import productReviewsImg from "@/assets/product-reviews.jpg";
import routinesImg from "@/assets/routines.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import skinTypesImg from "@/assets/skin-types.jpg";

const categories = [
  {
    id: "reviews",
    title: "Product Reviews",
    description: "Honest, in-depth reviews of the latest skincare products and beauty essentials",
    icon: Sparkles,
    image: productReviewsImg,
    color: "from-primary/20 to-primary/5"
  },
  {
    id: "routines",
    title: "Skincare Routines",
    description: "Step-by-step guides for morning and evening routines tailored to your needs",
    icon: Calendar,
    image: routinesImg,
    color: "from-accent/30 to-accent/10"
  },
  {
    id: "ingredients",
    title: "Ingredient Deep-Dives",
    description: "Learn about powerful ingredients and how they transform your skin",
    icon: FlaskConical,
    image: ingredientsImg,
    color: "from-secondary/40 to-secondary/10"
  },
  {
    id: "skin-types",
    title: "Skin Type Guides",
    description: "Personalized advice for oily, dry, combination, and sensitive skin",
    icon: User,
    image: skinTypesImg,
    color: "from-primary/15 to-primary/5"
  },
];

const CategoryCards = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Dive into expertly curated content designed to help you make informed skincare decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />
                    <div className="absolute bottom-4 left-4">
                      <Icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
