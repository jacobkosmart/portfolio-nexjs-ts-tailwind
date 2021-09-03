import { Bar } from "../components";
import { languages, tools } from "../db/data";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* Education & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-5 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              information of communication technology
            </h5>
            <p className="font-semibold">Academy of Technology(2017~2021)</p>
            <p className="my-3">
              I am currently pursung B.tech in computer science Enginerring ....
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-5 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Data cabler</h5>
            <p className="font-semibold">Garden City Comms</p>
            <p className="my-3">What was doing this position</p>
          </div>
        </div>
      </div>

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
          <h5 className="my-5 text-2xl font-bold">Todo & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
