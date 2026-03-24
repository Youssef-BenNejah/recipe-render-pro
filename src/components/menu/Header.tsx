import { motion } from "framer-motion";
import logo from "@/assets/logo_myself.png";
import OrnamentDivider from "./OrnamentDivider";

const Header = () => {
  return (
    <motion.header
      className="text-center py-12 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[200px] mx-auto mb-6">
        <img src={logo} alt="My Self - Restaurant Lounge" className="w-full" />
      </div>

      <div className="inline-block border border-gold/30 px-10 py-4 mb-4">
        <h1
          className="font-serif text-3xl md:text-4xl tracking-[8px] text-espresso"
          style={{ fontWeight: 400 }}
        >
          MY SELF
        </h1>
        <p
          className="font-sans text-[10px] tracking-[5px] text-caramel mt-2 uppercase"
        >
          CAFÉ · TUNIS
        </p>
      </div>

      <p className="font-serif italic text-[13px] text-sand mt-4">
        Welcome to MySefl...
      </p>

      <OrnamentDivider />
    </motion.header>
  );
};

export default Header;
