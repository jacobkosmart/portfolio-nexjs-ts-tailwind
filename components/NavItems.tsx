import Link from "next/link";
import { INavItems } from "../type";

const NavItems: React.FC<INavItems> = ({
  activeItem,
  name,
  route,
  setActiveItem,
}) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-green">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavItems;
