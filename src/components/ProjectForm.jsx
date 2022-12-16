import {useState} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
  startAddProjectAction,
  startRemoveProjectAction,
} from "../redux/actions/projectsActions";

const ProjectForm = ({onSubmit, project}) => {
  const [title, setTitle] = useState(project ? project.title : "");
  const [description, setDiscription] = useState(
    project ? project.description : ""
  );
  const [githubLink, setGithubLink] = useState(
    project ? project.githubLink : ""
  );
  const [demoLink, setDemoLink] = useState(project ? project.demoLink : "");
  const [image, setImage] = useState(project ? project.image : "");

  const navigate = useNavigate();

  return (
    <form className="flex flex-col gap-4 justify-between items-center text-black">
      <label className="w-[100%] flex justify-between gap-6 ">
        Title Project
        <input
          type="text"
          placeholder="Title Project"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        Demo Url Project
        <input
          type="text"
          placeholder="Demo Url"
          onChange={e => setDemoLink(e.target.value)}
          value={demoLink}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        Github Url Project
        <input
          type="text"
          placeholder="Github Url"
          onChange={e => setGithubLink(e.target.value)}
          value={githubLink}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        description Project
        <input
          type="text"
          placeholder="description Project"
          onChange={e => setDiscription(e.target.value)}
          value={description}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        Image url Project
        <input
          type="text"
          placeholder="Image url Project"
          onChange={e => setImage(e.target.value)}
          value={image}
        />
      </label>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          onSubmit({
            title,
            description,
            demoLink,
            githubLink,
            image,
          });
        }}
        className="bg-black py-2 w-full border-2 border-black rounded hover:bg-black hover:text-white z-40"
      >
        Submit
      </button>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    removeProject: id => dispatch(startRemoveProjectAction(id)),
    addProjectAction: project => dispatch(startAddProjectAction(project)),
  };
}

export default connect(undefined, mapDispatchToProps)(ProjectForm);
