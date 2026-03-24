import { motion } from "framer-motion";
import type { MenuCategory } from "@/data/menuData";
import { bannerImages } from "@/data/bannerImages";
import OrnamentDivider from "./OrnamentDivider";
import FeaturedCard from "./FeaturedCard";
import LineItem from "./LineItem";

interface MenuSectionProps {
  category: MenuCategory;
}

const MenuSection = ({ category }: MenuSectionProps) => {
  const isDark = category.darkBg;
  const banner = bannerImages[category.id] || category.bannerImage;

  return (
    <section
      id={category.id}
      className="scroll-mt-14"
      style={isDark ? { background: "#2C1A0E", margin: "0 -16px", padding: "0 16px" } : undefined}
    >
      <OrnamentDivider />

      {/* Banner Image */}
      <div className="relative h-[180px] md:h-[200px] overflow-hidden -mx-4">
        <img
          src={banner}
          alt={category.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="banner-overlay absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="font-serif text-xl md:text-2xl tracking-[6px] uppercase text-center"
            style={{ color: "#FAF7F2", fontWeight: 400 }}
          >
            {category.title}
          </h2>
          {category.titleAr && (
            <p
              className="font-sans text-lg md:text-xl mt-2 text-center"
              style={{ color: "#D4B896", direction: "rtl" }}
            >
              {category.titleAr}
            </p>
          )}
        </div>
      </div>

      {/* Gold accent bar */}
      <div className="flex justify-center my-6">
        <div className="w-10 h-px" style={{ background: "#C49A3C" }} />
      </div>

      {/* Featured items */}
      {category.featured && category.featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {category.featured.map((item, idx) => (
            <FeaturedCard key={idx} item={item} />
          ))}
        </div>
      )}

      {/* Line items */}
      {category.items && category.items.length > 0 && (
        <div className="mb-6">
          {category.items.map((item, idx) => (
            <LineItem key={idx} item={item} darkBg={isDark} />
          ))}
        </div>
      )}

      {/* Sub-sections */}
      {category.subSections && category.subSections.map((sub, idx) => (
        <div key={idx} className="mb-6">
          <div className="flex items-center gap-3 mb-3 mt-6">
            <div className="w-6 h-px" style={{ background: "#C49A3C" }} />
            <h3
              className="font-serif text-sm tracking-[4px] uppercase"
              style={{ color: isDark ? "#E8C97A" : "#8B5E3C", fontWeight: 400 }}
            >
              {sub.title}
            </h3>
            {sub.titleAr && (
              <span
                className="font-sans text-sm"
                style={{ color: isDark ? "#D4B896" : "#6B5040", direction: "rtl" }}
              >
                {sub.titleAr}
              </span>
            )}
            <div className="flex-1 h-px" style={{ background: "rgba(139, 94, 60, 0.25)" }} />
          </div>
          {sub.items.map((item, itemIdx) => (
            <LineItem key={itemIdx} item={item} darkBg={isDark} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default MenuSection;
