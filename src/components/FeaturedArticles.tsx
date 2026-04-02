import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "5 Daily Skincare Habits for Naturally Glowing Skin",
    excerpt: "Unlock your natural radiance with these simple yet effective daily skincare habits that dermatologists swear by.",
    category: "Daily Routines",
    categorySlug: "routines",
    readTime: "5 min read",
    date: "Nov 2, 2025",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    author: "Dr. Sarah Kim",
  },
  {
    id: 2,
    title: "Anti-Aging Secrets: How to Turn Back Time Naturally",
    excerpt: "Discover proven anti-aging techniques and ingredients that help reduce fine lines and restore youthful vitality.",
    category: "Anti-Aging",
    categorySlug: "anti-aging",
    readTime: "7 min read",
    date: "Oct 28, 2025",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    author: "Emma Torres",
  },
  {
    id: 3,
    title: "The Natural Glow Guide: Achieving Luminous Skin",
    excerpt: "Learn the science behind radiant skin and how to achieve a natural, healthy glow from within.",
    category: "Natural & DIY",
    categorySlug: "diy",
    readTime: "6 min read",
    date: "Oct 25, 2025",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    author: "Lisa Chen",
  },
  {
    id: 4,
    title: "Understanding Your Skin Type: The Complete Guide",
    excerpt: "Is your skin oily, dry, combination, or sensitive? Learn how to identify your skin type and tailor your routine.",
    category: "Skin Types",
    categorySlug: "skin-types",
    readTime: "8 min read",
    date: "Oct 20, 2025",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
    author: "Dr. Sarah Kim",
  },
  {
    id: 5,
    title: "Niacinamide vs Vitamin C: Which Is Right for You?",
    excerpt: "A deep dive into two powerhouse ingredients — when to use them, how to layer them, and which suits your skin best.",
    category: "Ingredients",
    categorySlug: "ingredients",
    readTime: "6 min read",
    date: "Oct 15, 2025",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4ee0c04?w=800&q=80",
    author: "Emma Torres",
  },
  {
    id: 6,
    title: "The Ultimate SPF Guide: Protecting Your Skin Year-Round",
    excerpt: "Sunscreen isn't just for summer. Learn why daily SPF is the #1 anti-aging product and how to choose the right one.",
    category: "Sun Care",
    categorySlug: "sun-care",
    readTime: "5 min read",
    date: "Oct 10, 2025",
    image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?w=800&q=80",
    author: "Lisa Chen",
  },
  {
    id: 7,
    title: "How to Build a Simple Routine for Acne-Prone Skin",
    excerpt: "Struggling with breakouts? A minimalist, dermatologist-approved routine that clears skin without over-drying.",
    category: "Acne & Blemishes",
    categorySlug: "acne",
    readTime: "7 min read",
    date: "Oct 5, 2025",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    author: "Dr. Sarah Kim",
  },
  {
    id: 8,
    title: "Sensitive Skin SOS: Calming Ingredients That Actually Work",
    excerpt: "From centella asiatica to oat extract — the best soothing ingredients for reactive, sensitive skin.",
    category: "Skin Types",
    categorySlug: "skin-types",
    readTime: "6 min read",
    date: "Oct 1, 2025",
    image: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=800&q=80",
    author: "Emma Torres",
  },
  {
    id: 9,
    title: "3 DIY Face Masks Using Kitchen Ingredients",
    excerpt: "Honey, oats, and turmeric — simple homemade masks for hydration, brightening, and calming inflammation.",
    category: "Natural & DIY",
    categorySlug: "diy",
    readTime: "4 min read",
    date: "Sep 28, 2025",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    author: "Lisa Chen",
  },
];

interface FeaturedArticlesProps {
  activeCategory: string;
}

const FeaturedArticles = ({ activeCategory }: FeaturedArticlesProps) => {
  const filtered = activeCategory === "all"
    ? articles
    : articles.filter((a) => a.categorySlug === activeCategory);

  return (
    <section id="articles" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Skincare Tips & Glow Stories
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto">
            Expert advice, tips, and inspiring stories to help you on your journey to radiant skin
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground font-lato py-12">
            No articles in this category yet — check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((article, index) => (
              <article
                key={article.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Card className="h-full overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
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
                    
                    <p className="text-sm text-muted-foreground font-lato leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-lato text-muted-foreground">By {article.author}</span>
                      <span className="text-primary text-sm font-lato font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedArticles;
