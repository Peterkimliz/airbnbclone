interface MenuProps {
  onclick: () => void;
  label: string;
}

const MenuItems: React.FC<MenuProps> = ({ label, onclick }) => {
  return <div className=" px-4 py-3 hover:bg-neutral-100 transition font-semibold" onClick={onclick} >
  {label}
  </div>;
};

export default MenuItems;
