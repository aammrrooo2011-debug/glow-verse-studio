import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Droplets,
  Sun,
  Leaf,
  Heart,
  ShieldCheck,
  FlaskConical,
  Clock,
} from "lucide-react";

const categories = [
  { name: "All", icon: Sparkles, slug: "all" },
  { name: "Daily Routines", icon: Clock, slug: "routines" },
  { name: "Ingredients", icon: FlaskConical, slug: "ingredients" },
  { name: "Skin Types", icon: Droplets, slug: "skin-types" },
  { name: "Anti-Aging", icon: Heart, slug: "anti-aging" },
  { name: "Acne & Blemishes", icon: ShieldCheck, slug: "acne" },
  { name: "Sun Care", icon: Sun, slug: "sun-care" },
  { name: "Natural & DIY", icon: Leaf, slug: "diy" },
];

interface BlogCategoriesProps {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

const BlogCategories = ({ activeCategory, onCategoryChange }: BlogCategoriesProps) => {
  return (
    <section className="py-8 border-b border-border bg-card/50 sticky top-16 md:top-20 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => onCategoryChange(cat.slug)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-lato font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
