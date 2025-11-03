import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import FeaturedArticles from "@/components/FeaturedArticles";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main>
        <Hero />
        <CategoryCards />
        <FeaturedArticles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
