import { useState, useCallback } from "react";
import Header from "@/components/menu/Header";
import CategoryNav from "@/components/menu/CategoryNav";
import MenuSection from "@/components/menu/MenuSection";
import Footer from "@/components/menu/Footer";
import { categories } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryClick = useCallback((id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 56;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      <Header />

      <CategoryNav
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <main className="max-w-[700px] mx-auto px-4 pb-8">
        {categories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}

        <Footer />
      </main>
    </div>
  );
};

export default Index;
