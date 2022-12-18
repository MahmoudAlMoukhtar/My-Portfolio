import database from "../../firebase/firebase";
import ItemProjcets from "../../components/ItemProjcets";
import {connect} from "react-redux";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const PortfolioPage = ({projects, numSlice}) => {
  //const {data: projectsData} = useFetch("projects");
  //console.log(projects);
  const projectsAfterSlice = numSlice
    ? projects.slice(0, numSlice)
    : projects.reverse();
  if (projects.length === 0 || null || undefined) {
    return (
      <div className="absolute inset-0 mx-[50%] flex items-center justify-cneter">
        <ClimbingBoxLoader />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-[100%]">
      <h1 className="text-4xl">PROJECTS</h1>

      <div className="flex justify-center items-center flex-wrap gap-20">
        {projectsAfterSlice.map(p => (
          <ItemProjcets p={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

export default connect(mapStateToProps)(PortfolioPage);
/*
 */

/* 

<ul className="flex gap-4">
        <button className="p-2 bg-slate-800 rounded z-40 transition duration-200 hover:scale-105">
          JavaScript
        </button>
        <button className="p-2 bg-slate-800 rounded z-40 transition duration-200 hover:scale-105">
          React.js
        </button>
        <button className="p-2 bg-slate-800 rounded z-40 transition duration-200 hover:scale-105">
          Node.js
        </button>
        <button className="p-2 bg-slate-800 rounded z-40 transition duration-200 hover:scale-105">
          Firebase
        </button>
      </ul>
*/
