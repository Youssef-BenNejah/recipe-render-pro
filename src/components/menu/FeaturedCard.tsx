import { useState } from "react";
import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menuData";
import MenuBadge from "./MenuBadge";

interface FeaturedCardProps {
  item: MenuItem;
}

const FeaturedCard = ({ item }: FeaturedCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="menu-card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3, borderColor: "rgba(196, 154, 60, 0.5)" }}
    >
      {item.image && !imgError && (
        <div className="relative overflow-hidden mb-4 h-[180px] md:h-[200px]">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-dark-roast/20 group-hover:bg-dark-roast/10 transition-all duration-300" />
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="item-name flex-1">{item.name}</h3>
        <span className="price-tag-dark whitespace-nowrap">{item.price}</span>
      </div>

      {item.badge && (
        <div className="mb-2">
          <MenuBadge text={item.badge} />
        </div>
      )}

      {item.description && (
        <p className="item-description mt-2">{item.description}</p>
      )}

      {item.descriptionAr && (
        <p className="item-arabic mt-1">{item.descriptionAr}</p>
      )}

      {item.nameAr && !item.descriptionAr && (
        <p className="item-arabic mt-1">{item.nameAr}</p>
      )}
    </motion.div>
  );
};

export default FeaturedCard;
