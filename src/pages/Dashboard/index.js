import React from "react";
import {connect} from "react-redux";
import {
  startAddProjectAction,
  startRemoveProjectAction,
} from "../../redux/actions/projectsActions";
import {MdOutlineRemoveCircle} from "react-icons/md";
import database, {firebase} from "../../firebase/firebase";
import {Link} from "react-router-dom";

const ItemProjectsDashpoard = ({project, removeProject}) => {
  const {image, title, id} = project;
  //console.log(id);
  return (
    <div className="flex justify-between items-center">
      <Link
        to={`/dashboard/edit/${id}`}
        className="flex justify-between items-center"
      >
        <img src={image} alt="" className="w-40 itemProjects" />
        <p>{title}</p>
      </Link>
      <button className="p-2" onClick={() => removeProject(id)}>
        <MdOutlineRemoveCircle size={30} />
      </button>
    </div>
  );
};

const DashboardPage = ({projects, addProjectAction, removeProject}) => {
  return (
    <div className="flex flex-col gap-16 w-full items-center bg-white text-black z-40 p-8">
      <nav className="flex justify-start bg-slate-800 text-white w-full gap-2 p-2">
        <button
          onClick={() => {
            //console.log("logout");
            firebase.auth().signOut();
          }}
          className="bg-white p-1 text-black font-semibold"
        >
          LOGOUT
        </button>
        <Link
          to={"/dashboard/add"}
          className="bg-white p-1 text-black font-semibold"
        >
          Add Project
        </Link>
      </nav>
      <div className="w-[100%] flex flex-col justify-center gap-6">
        <h1 className="text-center">Projects:</h1>
        <div className="flex flex-col gap-6">
          {projects.map(item => (
            <ItemProjectsDashpoard
              key={item.id}
              project={item}
              removeProject={removeProject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    removeProject: id => dispatch(startRemoveProjectAction(id)),
    addProjectAction: project => dispatch(startAddProjectAction(project)),
  };
}
function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
