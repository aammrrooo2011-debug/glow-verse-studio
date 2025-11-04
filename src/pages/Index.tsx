import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import FeaturedArticles from "@/components/FeaturedArticles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-lato">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <FeaturedArticles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
