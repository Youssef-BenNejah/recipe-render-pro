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

// Emoji icons matching the reference design
const emojiMap: Record<string, string> = {
  "breakfast": "☀️",
  "healthy": "🥗",
  "myself": "⭐",
  "box-sucree": "🎁",
  "cafe-classique": "☕",
  "cafe-nespresso": "☕",
  "boissons-froides": "🍹",
  "mojitos": "🍋",
  "jus": "🧃",
  "cocktails": "🍸",
  "milkshakes": "🥛",
  "glaces": "🍦",
  "smoothies": "🍒",
  "the": "🫖",
  "hot-chocolat": "🍫",
  "frappuccino": "🧋",
  "crepes-gaufres": "🥞",
  "pancakes": "🥞",
  "douceurs": "🍰",
  "crepes-salees": "🧇",
  "omlettes": "🍳",
  "fast-food": "🍔",
  "pizza": "🍕",
  "burger": "🍔",
  "salades": "🥗",
  "cote-tunisien": "🇹🇳",
  "pates": "🍝",
  "nos-plats": "🍖",
  "fruits-de-mer": "🦐",
  "chichas": "💨",
  "fruits": "🍎",
};

interface CategoryNavProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryClick }: CategoryNavProps) => {
  return (
    <div
      className="py-8 px-4"
      style={{ background: "#2C1A0E" }}
    >
      <div className="max-w-[600px] mx-auto">
        <h2
          className="text-center font-serif text-2xl mb-1 tracking-wide"
          style={{ color: "#FAF7F2" }}
        >
          Notre Menu
        </h2>
        <p
          className="text-center text-xs mb-6 tracking-widest uppercase"
          style={{ color: "rgba(196, 154, 60, 0.7)" }}
        >
          Touchez une catégorie
        </p>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const emoji = emojiMap[cat.id] || "⭐";

            return (
              <button
                key={cat.id}
                onClick={() => onCategoryClick(cat.id)}
                className="flex flex-col items-center justify-center gap-2 py-5 px-3 rounded-xl transition-all duration-200"
                style={{
                  border: isActive
                    ? "1px solid #C49A3C"
                    : "1px solid rgba(232, 201, 122, 0.15)",
                  background: isActive
                    ? "rgba(196, 154, 60, 0.15)"
                    : "rgba(255,255,255,0.03)",
                }}
              >
                <span className="text-2xl">{emoji}</span>
                <span
                  className="font-sans text-[11px] uppercase tracking-[1.5px] text-center leading-tight"
                  style={{ fontWeight: 500, color: "#FAF7F2" }}
                >
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
