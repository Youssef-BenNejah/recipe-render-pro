import { categories } from "@/data/menuData";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryClick }: CategoryNavProps) => {
  return (
    <div className="sticky top-0 z-40 pill-nav">
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
  );
};

export default CategoryNav;
