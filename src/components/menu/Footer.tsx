import OrnamentDivider from "./OrnamentDivider";

const Footer = () => {
  return (
    <footer className="text-center py-12 mt-8">
      <OrnamentDivider />

      <div className="flex justify-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
        <div className="w-2 h-2 rotate-45 bg-gold" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
      </div>

      <p className="font-serif text-[11px] tracking-[5px] text-caramel uppercase mb-3">
        MY SELF CAFÉ · TUNIS, TUNISIA
      </p>

      <p className="font-serif italic text-[12px] text-sand">
        Crafted with warmth, served with elegance
      </p>
    </footer>
  );
};

export default Footer;
