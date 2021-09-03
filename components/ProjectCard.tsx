import { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import Image from "next/image";

const ProjectCard: React.FC<{
  project: IProject;
}> = ({
  project: {
    name,
    id,
    category,
    deployed_url,
    description,
    github_url,
    img_path,
    key_techs,
  },
}) => {
  // state modal
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <div>
      <img
        src={img_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        style={{ height: "20vh", width: "40vh" }}
      />
      <p className="my-2 text-center">{name}</p>

      {/* Shoe modal details */}
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img
              src={img_path}
              alt={name}
              style={{ height: "30vh", width: "60vh" }}
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={id}
                  className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
            <MdClose size={30} onClick={() => setShowDetail(false)} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
