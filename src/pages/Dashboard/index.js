import React, {useState} from "react";
import {connect} from "react-redux";
import {
  startAddProjectAction,
  startRemoveProjectAction,
} from "../../redux/actions/projectsActions";
import {MdOutlineRemoveCircle} from "react-icons/md";
const ItemProjectsDashpoard = ({project, removeProject}) => {
  const {image, title, id} = project;
  console.log(id);
  return (
    <div className="flex justify-between items-center">
      <img src={image} alt="" className="w-40 itemProjects" />
      <p>{title}</p>
      <button className="p-2" onClick={() => removeProject(id)}>
        <MdOutlineRemoveCircle size={30} />
      </button>
    </div>
  );
};

const DashboardPage = ({projects, addProjectAction, removeProject}) => {
  const [title, setTitle] = useState();
  const [discritopn, setDiscription] = useState();
  const [githubLink, setGithubLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="flex flex-col gap-16 w-full items-center bg-white text-black z-40 p-8">
      <form className="flex flex-col gap-4 justify-between items-center text-black">
        <label className="w-[100%] flex justify-between gap-6 ">
          Title Project
          <input
            type="text"
            placeholder="Title Project"
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label className="w-[100%] flex justify-between gap-6 ">
          Demo Url Project
          <input
            type="text"
            placeholder="Demo Url"
            onChange={e => setDemoLink(e.target.value)}
          />
        </label>
        <label className="w-[100%] flex justify-between gap-6 ">
          Github Url Project
          <input
            type="text"
            placeholder="Github Url"
            onChange={e => setGithubLink(e.target.value)}
          />
        </label>
        <label className="w-[100%] flex justify-between gap-6 ">
          Description Project
          <input
            type="text"
            placeholder="Description Project"
            onChange={e => setDiscription(e.target.value)}
          />
        </label>
        <label className="w-[100%] flex justify-between gap-6 ">
          Image url Project
          <input
            type="text"
            placeholder="Image url Project"
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            addProjectAction({
              title,
              discritopn,
              demoLink,
              githubLink,
              image,
            });
          }}
          className="bg-black py-2 w-full border-2 border-black rounded hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
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
