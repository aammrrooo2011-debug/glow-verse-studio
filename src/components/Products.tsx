import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Radiance Renewal Serum",
    category: "Serum",
    price: "$68",
    benefit: "Anti-Aging & Brightening",
    description: "A powerful blend of vitamin C, hyaluronic acid, and peptides that reduces fine lines and reveals luminous, youthful skin.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    features: ["Reduces fine lines", "Brightens complexion", "Boosts collagen"]
  },
  {
    id: 2,
    name: "Hydra Luxe Moisturizer",
    category: "Moisturizer",
    price: "$52",
    benefit: "Deep Hydration",
    description: "Ultra-rich formula with ceramides and squalane that locks in moisture for 24-hour hydration and a plump, dewy finish.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    features: ["24-hour hydration", "Strengthens skin barrier", "Non-greasy finish"]
  },
  {
    id: 3,
    name: "Pure Glow Cleanser",
    category: "Cleanser",
    price: "$38",
    benefit: "Gentle Purifying",
    description: "A gentle yet effective cleanser with botanical extracts that removes impurities while maintaining your skin's natural balance.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    features: ["Removes makeup & impurities", "pH-balanced", "Sulfate-free"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto">
            Discover our signature collection of luxury skincare essentials, scientifically formulated 
            to deliver visible results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full overflow-hidden border-border hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-card">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold/90 text-gold-foreground border-none font-lato font-semibold">
                    {product.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-lato font-semibold text-primary">
                      {product.benefit}
                    </span>
                    <span className="text-2xl font-playfair font-bold text-foreground">
                      {product.price}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-semibold text-foreground mb-3 leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-lato leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground font-lato flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold transition-all hover:scale-105"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
