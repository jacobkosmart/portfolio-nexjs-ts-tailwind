import { Bar } from "../components";
import { languages, tools } from "../db/data";
import { motion } from "framer-motion";
import { fadeInUP, routeAnimation } from "../animation";

const resume = () => {
  // Framer-motion

  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Education & exp */}
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={fadeInUP}
        initial="initial"
        animate="animate"
      >
        <div>
          <h5 className="my-5 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Assistant manager of overseas sales
            </h5>
            <p className="font-semibold">
              Donggok Precision (January 2019 ~ March 2020)
            </p>
            <p className="my-3">
              Managed imported security products such as x-ray and metal
              screening detection{" "}
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Telecommunications technician{" "}
            </h5>
            <p className="font-semibold">
              Garden City Communication (August 2016 ~ August 2018)
            </p>
            <p className="my-3">
              install, maintain and repair electronic communications equipment
              in telecommunications networks and internet supply systems
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Medical imaging technologist
            </h5>
            <p className="font-semibold">
              Gangbuk samsung hospital (March 2009 ~ March 2012)
            </p>
            <p className="my-3">
              use x-ray and other imaging equipment to take images of injuries
              and diseases.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-5 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-4 text-xl font-bold">
              여기 방송대 영문과학위 써야 됨{" "}
            </h5>
            <p className="my-2 font-semibold">방송통신대 </p>
          </div>
          <div>
            <h5 className="my-4 text-xl font-bold">
              Diploma in information and communications technology
            </h5>
            <p className="my-2 font-semibold">CPIT, NZ (March 2016)</p>
          </div>
          <div>
            <h5 className="my-4 text-xl font-bold">
              Bachelor in radiation technology
            </h5>
            <p className="my-2 font-semibold">
              {" "}
              Shin Heung Colleage, KR (February 2009)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Languages & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-5 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.id} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-5 text-2xl font-bold">Skills & Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
