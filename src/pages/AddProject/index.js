import {connect} from "react-redux";
import ProjectForm from "../../components/ProjectForm";
import {startAddProjectAction} from "../../redux/actions/projectsActions";

const AddProject = ({addProject}) => {
  return (
    <div>
      <h1>Add Project</h1>
      <ProjectForm
        onSubmit={project => {
          addProject(project);
        }}
      />
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    addProject: project => dispatch(startAddProjectAction(project)),
  };
}
export default connect(undefined, mapDispatchToProps)(AddProject);
