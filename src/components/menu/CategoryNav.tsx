import { useRef, useEffect } from "react";
import { categories } from "@/data/menuData";
import {
  Sun, Leaf, Star, Gift, Coffee, Cpu, GlassWater, Citrus,
  CupSoda, Wine, Milk, IceCreamCone, Cherry, Bean,
  Candy, Flame, CakeSlice, Cookie, Egg, Sandwich,
  Pizza, Beef, Salad, Flag, Utensils, UtensilsCrossed,
  Fish, Wind, Apple
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "breakfast": Sun,
  "healthy": Leaf,
  "myself": Star,
  "box-sucree": Gift,
  "cafe-classique": Coffee,
  "cafe-nespresso": Cpu,
  "boissons-froides": GlassWater,
  "mojitos": Citrus,
  "jus": CupSoda,
  "cocktails": Wine,
  "milkshakes": Milk,
  "glaces": IceCreamCone,
  "smoothies": Cherry,
  "the": Bean,
  "hot-chocolat": Candy,
  "frappuccino": Flame,
  "crepes-gaufres": CakeSlice,
  "pancakes": Cookie,
  "douceurs": CakeSlice,
  "crepes-salees": Utensils,
  "omlettes": Egg,
  "fast-food": Sandwich,
  "pizza": Pizza,
  "burger": Beef,
  "salades": Salad,
  "cote-tunisien": Flag,
  "pates": UtensilsCrossed,
  "nos-plats": Utensils,
  "fruits-de-mer": Fish,
  "chichas": Wind,
  "fruits": Apple,
};

interface CategoryNavProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryClick }: CategoryNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector(`[data-cat="${activeCategory}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [activeCategory]);

  return (
    <div
      ref={scrollRef}
      className="sticky top-0 z-40 flex items-center gap-1.5 px-3 py-3 overflow-x-auto"
      style={{
        background: "#2C1A0E",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
        borderBottom: "1px solid rgba(196, 154, 60, 0.2)",
      }}
    >
      {categories.map((cat) => {
        const Icon = iconMap[cat.id] || Star;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            data-cat={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className="flex items-center gap-1.5 flex-shrink-0 px-3.5 py-2 transition-all duration-200"
            style={{
              border: isActive ? "1px solid #C49A3C" : "1px solid rgba(232, 201, 122, 0.15)",
              background: isActive ? "rgba(196, 154, 60, 0.15)" : "transparent",
            }}
          >
            <Icon size={14} strokeWidth={1.5} color="#FAF7F2" />
            <span
              className="font-sans text-[9px] uppercase tracking-[2px] whitespace-nowrap"
              style={{ fontWeight: 400, color: "#FAF7F2" }}
            >
              {cat.title}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryNav;
