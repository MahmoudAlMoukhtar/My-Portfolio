import database from "../../firebase/firebase";

export const addProjectAction = project => ({
  type: "ADD_PROJECT",
  project,
});

export const startAddProjectAction = projectData => {
  return dispatch => {
    const {
      title = "",
      image = "",
      description = "",
      demoLink = "",
      githubLink = "",
    } = projectData;
    const project = {title, image, description, demoLink, githubLink};
    return database
      .ref("projects")
      .push(project)
      .then(ref => {
        dispatch(
          addProjectAction({
            id: ref.key,
            ...project,
          })
        );
      });
  };
};
export const removeProjectAction = id => ({
  type: "REMOVE_PROJECT",
  id,
});

export const startRemoveProjectAction = id => {
  return dispatch => {
    return database
      .ref(`projects/${id}`)
      .remove()
      .then(() => {
        dispatch(removeProjectAction(id));
      });
  };
};
export const editProject = (id, updates) => ({
  type: "UPDATE_PROJECT",
  id,
  updates,
});

export const startEditProject = (id, updates) => {
  return dispatch => {
    return database
      .ref(`projects/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editProject(id, updates));
      });
  };
};

export const setProjectsAction = projects => ({
  type: "SET_PROJECTS",
  projects,
});

export const startSetProjectsAction = () => {
  return dispatch => {
    return database
      .ref("projects")
      .once("value")
      .then(snapshot => {
        const projects = [];
        snapshot.forEach(childSnapshot => {
          projects.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setProjectsAction(projects));
      });
  };
};
