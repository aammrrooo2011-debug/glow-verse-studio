import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "10 Best Vitamin C Serums for Brighter Skin in 2024",
    excerpt: "We tested dozens of vitamin C serums to find the most effective formulations for hyperpigmentation and dull skin.",
    category: "Product Reviews",
    readTime: "8 min read",
    date: "Nov 2, 2025",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
  },
  {
    id: 2,
    title: "The Perfect Morning Skincare Routine for Dry Skin",
    excerpt: "Start your day with this hydrating routine designed to lock in moisture and protect your skin barrier all day long.",
    category: "Routines",
    readTime: "6 min read",
    date: "Oct 28, 2025",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: 3,
    title: "Retinol vs. Bakuchiol: Which One is Right for You?",
    excerpt: "Discover the differences between these powerful anti-aging ingredients and learn which suits your skin best.",
    category: "Ingredients",
    readTime: "10 min read",
    date: "Oct 25, 2025",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
  },
];

const FeaturedArticles = () => {
  return (
    <section id="featured" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Our most popular and helpful guides to achieving your best skin yet
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
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-inter mb-3">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed">
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
