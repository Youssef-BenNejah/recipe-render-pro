import { useState, useCallback } from "react";
import Header from "@/components/menu/Header";
import Sidebar from "@/components/menu/Sidebar";
import MenuSection from "@/components/menu/MenuSection";
import Footer from "@/components/menu/Footer";
import { categories } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryClick = useCallback((id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      <Sidebar
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <main className="md:ml-[220px] max-w-[980px] mx-auto px-4 md:px-10 pb-8">
        <Header />

        {categories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}

        <Footer />
      </main>
    </div>
  );
};

export default Index;
