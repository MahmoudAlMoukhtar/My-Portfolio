import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivaiteRoute = ({isAuth, children}) => {
  if (isAuth === "PLWz0kbr27U0mp0OHsOOqbDVsq22") {
    return children;
  }
  return <Navigate to="/Login" replace />;
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.uid,
  };
}

export default connect(mapStateToProps)(PrivaiteRoute);
