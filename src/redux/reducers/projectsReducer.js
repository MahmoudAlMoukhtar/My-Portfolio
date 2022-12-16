const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.newProject];
    case "REMOVE_PROJECT":
      const projects =
        state.length > 0
          ? state.filter(item => {
              return item.id !== action.id;
            })
          : [];
      return projects;
    case "UPDATE_PROJECT":
      return state.map(p => {
        if (p.id === action.id) {
          return {...p, ...action.updates};
        } else {
          return p;
        }
      });
    case "SET_PROJECTS":
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
