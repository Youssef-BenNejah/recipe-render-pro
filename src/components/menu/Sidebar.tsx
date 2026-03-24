import { motion } from "framer-motion";
import { categories } from "@/data/menuData";

interface SidebarProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const Sidebar = ({ activeCategory, onCategoryClick }: SidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden md:block w-[220px] fixed left-0 top-0 h-screen bg-dark-roast overflow-y-auto z-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-6 px-4 text-center border-b border-gold/20">
          <p className="font-serif text-gold-light text-sm tracking-[4px] uppercase">
            MENU
          </p>
        </div>
        <nav className="py-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className={`sidebar-item w-full text-left flex items-center gap-2 ${
                activeCategory === cat.id ? "active" : ""
              }`}
            >
              <span className="text-gold text-xs">{cat.icon}</span>
              <span className="text-[10px]">{cat.title}</span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Mobile Pill Nav */}
      <div className="md:hidden sticky top-0 z-40 pill-nav">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className={`pill-item ${activeCategory === cat.id ? "active" : ""}`}
          >
            <span className="mr-1">{cat.icon}</span>
            {cat.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
