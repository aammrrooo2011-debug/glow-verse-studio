import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlogCategories from "@/components/BlogCategories";
import FeaturedArticles from "@/components/FeaturedArticles";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background font-lato">
      <Navbar />
      <main>
        <Hero />
        <BlogCategories activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <FeaturedArticles activeCategory={activeCategory} />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
