import { GetServerSidePropsContext, GetStaticPathsContext } from "next";
import React from "react";
import { ServiceCard } from "../components";
import { services } from "../db/data";

// fetch data
export const getStaticProps = async (context: GetStaticPathsContext) => {
  // calculation

  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("SERVER", services);

  return {
    props: {
      services: data.services,
    },
  };
};

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently looking for job. I have a experience and have a Youtube
        Channel where just start Front-end development{" "}
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
