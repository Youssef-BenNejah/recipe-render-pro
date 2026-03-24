interface MenuBadgeProps {
  text: string;
  dark?: boolean;
}

const MenuBadge = ({ text, dark }: MenuBadgeProps) => {
  return (
    <span
      className="menu-badge"
      style={dark ? { borderColor: "#C49A3C", color: "#E8C97A" } : undefined}
    >
      {text}
    </span>
  );
};

export default MenuBadge;
