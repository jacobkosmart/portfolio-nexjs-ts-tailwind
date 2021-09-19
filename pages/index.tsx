import { motion } from "framer-motion";
import { GetServerSidePropsContext, GetStaticPathsContext } from "next";
import React from "react";
import { fadeInUP, routeAnimation, stagger } from "../animation";
import { ServiceCard } from "../components";
import { services } from "../db/data";

// fetch data
export const getStaticProps = async (context: GetStaticPathsContext) => {
  // calculation

  // console.log(process.env.VERCEL_URL);

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  // console.log("SERVER", services);

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};

const About = ({ endpoint }) => {
  console.log(endpoint);

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        Creative Front-End Developer providing high-impact web solutions for
        diverse industry organizations. Skilled in designing, developing and
        testing multiple web-based applications incorporating a range of
        technologies.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              variants={fadeInUP}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
