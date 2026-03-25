import { categories } from "@/data/menuData";
import {
  Sun, Leaf, Star, Gift, Coffee, GlassWater, Citrus,
  CupSoda, Martini, Milk, IceCreamCone, Cherry,
  Candy, CakeSlice, Egg, Sandwich,
  Pizza, Beef, Salad, Flag, UtensilsCrossed,
  Fish, Wind, Apple, Croissant, Soup, Drumstick,
  CircleDot, Grape
} from "lucide-react";

const ICON_COLOR = "#FAF7F2";

const iconConfig: Record<string, React.ElementType> = {
  "breakfast": Sun,
  "healthy": Leaf,
  "myself": Star,
  "box-sucree": Gift,
  "cafe-classique": Coffee,
  "cafe-nespresso": Coffee,
  "boissons-froides": GlassWater,
  "mojitos": Citrus,
  "jus": CupSoda,
  "cocktails": Martini,
  "milkshakes": Milk,
  "glaces": IceCreamCone,
  "smoothies": Cherry,
  "the": Soup,
  "hot-chocolat": Candy,
  "frappuccino": CupSoda,
  "crepes-gaufres": Croissant,
  "pancakes": CircleDot,
  "douceurs": CakeSlice,
  "crepes-salees": Croissant,
  "omlettes": Egg,
  "fast-food": Sandwich,
  "pizza": Pizza,
  "burger": Beef,
  "salades": Salad,
  "cote-tunisien": Flag,
  "pates": UtensilsCrossed,
  "nos-plats": Drumstick,
  "fruits-de-mer": Fish,
  "chichas": Wind,
  "fruits": Grape,
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
            const config = iconConfig[cat.id] || { icon: Star, color: "#C49A3C" };
            const IconComponent = config.icon;

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
                <IconComponent size={32} color={config.color} strokeWidth={1.5} />
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
