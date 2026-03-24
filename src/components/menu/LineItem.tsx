import MenuBadge from "./MenuBadge";
import type { MenuItem } from "@/data/menuData";

interface LineItemProps {
  item: MenuItem;
  darkBg?: boolean;
}

const LineItem = ({ item, darkBg }: LineItemProps) => {
  return (
    <div className="dotted-separator py-3">
      <div className="flex items-baseline">
        <span
          className="item-name flex-shrink-0"
          style={darkBg ? { color: "#E8C97A" } : undefined}
        >
          {item.name}
        </span>
        <span className="dot-leader" />
        <span
          className="item-price flex-shrink-0"
          style={darkBg ? { color: "#E8C97A" } : undefined}
        >
          {item.price}
        </span>
      </div>

      {item.badge && (
        <div className="mt-1">
          <MenuBadge text={item.badge} dark={darkBg} />
        </div>
      )}

      {item.description && (
        <p
          className="item-description mt-1"
          style={darkBg ? { color: "#D4B896" } : undefined}
        >
          {item.description}
        </p>
      )}

      {item.nameAr && (
        <p
          className="item-arabic mt-0.5"
          style={darkBg ? { color: "#D4B896" } : undefined}
        >
          {item.nameAr}
        </p>
      )}

      {item.descriptionAr && (
        <p
          className="item-arabic mt-0.5"
          style={darkBg ? { color: "#D4B896" } : undefined}
        >
          {item.descriptionAr}
        </p>
      )}
    </div>
  );
};

export default LineItem;
