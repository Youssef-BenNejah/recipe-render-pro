import { categories } from "@/data/menuData";
import {
  Sun, Leaf, Star, Gift, Coffee, Cpu, GlassWater, Citrus,
  CupSoda, Wine, Milk, IceCreamCone, Cherry, Bean,
  Candy, Flame, CakeSlice, Cookie, Egg, Sandwich,
  Pizza, Beef, Salad, Flag, Utensils, UtensilsCrossed,
  Fish, Wind, Apple
} from "lucide-react";

const iconConfig: Record<string, { icon: React.ElementType; color: string }> = {
  "breakfast": { icon: Sun, color: "#F5A623" },
  "healthy": { icon: Leaf, color: "#7EC850" },
  "myself": { icon: Star, color: "#F5D76E" },
  "box-sucree": { icon: Gift, color: "#E88B8B" },
  "cafe-classique": { icon: Coffee, color: "#C49A3C" },
  "cafe-nespresso": { icon: Cpu, color: "#8B7355" },
  "boissons-froides": { icon: GlassWater, color: "#FF6B8A" },
  "mojitos": { icon: Citrus, color: "#FFD93D" },
  "jus": { icon: CupSoda, color: "#FF8C42" },
  "cocktails": { icon: Wine, color: "#5BCEFA" },
  "milkshakes": { icon: Milk, color: "#B8D4E3" },
  "glaces": { icon: IceCreamCone, color: "#FFB7C5" },
  "smoothies": { icon: Cherry, color: "#E85D75" },
  "the": { icon: Bean, color: "#E88BA0" },
  "hot-chocolat": { icon: Candy, color: "#D4845E" },
  "frappuccino": { icon: Flame, color: "#FF6F61" },
  "crepes-gaufres": { icon: CakeSlice, color: "#D4A76A" },
  "pancakes": { icon: Cookie, color: "#F5C542" },
  "douceurs": { icon: CakeSlice, color: "#FF9A76" },
  "crepes-salees": { icon: Utensils, color: "#A0C878" },
  "omlettes": { icon: Egg, color: "#FFE066" },
  "fast-food": { icon: Sandwich, color: "#F5A623" },
  "pizza": { icon: Pizza, color: "#FF7043" },
  "burger": { icon: Beef, color: "#D4845E" },
  "salades": { icon: Salad, color: "#66BB6A" },
  "cote-tunisien": { icon: Flag, color: "#E85D5D" },
  "pates": { icon: UtensilsCrossed, color: "#FFB74D" },
  "nos-plats": { icon: Utensils, color: "#C49A3C" },
  "fruits-de-mer": { icon: Fish, color: "#4FC3F7" },
  "chichas": { icon: Wind, color: "#B39DDB" },
  "fruits": { icon: Apple, color: "#EF5350" },
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
