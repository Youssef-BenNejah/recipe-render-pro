import { motion } from "framer-motion";
import { categories } from "@/data/menuData";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryClick }: CategoryNavProps) => {
  return (
    <div className="sticky top-0 z-40 bg-dark-roast/95 backdrop-blur-sm border-b border-gold/15 px-3 py-4">
      <div className="max-w-[700px] mx-auto">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className={`flex flex-col items-center gap-1 py-2 px-1 transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "border-gold bg-gold/10"
                  : "border-transparent hover:border-gold/30 hover:bg-gold/5"
              }`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
            >
              <span className="text-lg leading-none">{cat.icon}</span>
              <span
                className="font-sans text-[7px] sm:text-[8px] leading-tight text-center uppercase tracking-[1.5px]"
                style={{
                  color: activeCategory === cat.id ? "#E8C97A" : "#D4B896",
                }}
              >
                {cat.title.length > 14 ? cat.title.slice(0, 12) + "…" : cat.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
