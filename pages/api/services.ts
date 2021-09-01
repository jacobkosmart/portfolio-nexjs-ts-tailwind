import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../db/data";

export default (reg: NextApiRequest, res: NextApiResponse) => {
  // by default get request

  res.status(200).json({ services });
  console.log(services);
};
