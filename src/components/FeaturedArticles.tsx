import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "5 Daily Skincare Habits for Naturally Glowing Skin",
    excerpt: "Unlock your natural radiance with these simple yet effective daily skincare habits that dermatologists swear by.",
    category: "Daily Routines",
    readTime: "5 min read",
    date: "Nov 2, 2025",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: 2,
    title: "Anti-Aging Secrets: How to Turn Back Time Naturally",
    excerpt: "Discover proven anti-aging techniques and ingredients that help reduce fine lines and restore youthful vitality.",
    category: "Anti-Aging",
    readTime: "7 min read",
    date: "Oct 28, 2025",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
  },
  {
    id: 3,
    title: "The Natural Glow Guide: Achieving Luminous Skin",
    excerpt: "Learn the science behind radiant skin and how to achieve a natural, healthy glow from within.",
    category: "Glow Hacks",
    readTime: "6 min read",
    date: "Oct 25, 2025",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
  },
];

const FeaturedArticles = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Skincare Tips & Glow Stories
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto">
            Expert advice, tips, and inspiring stories to help you on your journey to radiant skin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-none">
                    {article.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-lato mb-3">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-lato leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
