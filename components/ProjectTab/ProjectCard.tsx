import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../type";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUP, stagger } from "../../animation";

const ProjectCard: React.FC<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: React.Dispatch<React.SetStateAction<number | null>>;
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
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={img_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
        quality="100"
      />
      <p className="pt-2 my-2 text-center">{name}</p>

      {/* Shoe modal details */}
      {showDetail === id && (
        <div className="absolute left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg top-32 md:pt-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUP}
              className="border-4 rounded-lg border-green dark:border-gray-100"
            >
              <Image
                src={img_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
                quality="100"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUP}
            >
              <a
                href={github_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUP}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUP} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUP}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={id}
                  className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
            <MdClose size={30} onClick={() => setShowDetail(null)} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
