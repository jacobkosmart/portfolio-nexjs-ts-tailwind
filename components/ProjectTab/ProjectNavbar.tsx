import { ProjectNavItem } from "..";

const ProjectNavbar: React.FC<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ProjectNavItem value="all" {...props} />
      <ProjectNavItem value="Vanilla-JS" {...props} />
      <ProjectNavItem value="React" {...props} />
      <ProjectNavItem value="TypeScript" {...props} />
      <ProjectNavItem value="Vue.js" {...props} />
      <ProjectNavItem value="Firebase" {...props} />
    </div>
  );
};

export default ProjectNavbar;
