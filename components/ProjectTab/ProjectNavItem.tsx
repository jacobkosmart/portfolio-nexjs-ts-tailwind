import { Category } from "../../type";

const ProjectNavItem: React.FC<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green-500";
  if (active === value) className += " text-green";

  return (
    <div>
      <li className={className} onClick={() => handlerFilterCategory(value)}>
        {value}
      </li>
    </div>
  );
};

export default ProjectNavItem;
