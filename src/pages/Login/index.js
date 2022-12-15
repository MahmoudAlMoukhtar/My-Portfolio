import React, {useState} from "react";
import {connect} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {startLogin} from "../../redux/actions/auth";
const LoginPage = ({isAuth, startLogin}) => {
  const [ShowWarning, setShowWarning] = useState(false);
  const navigaite = useNavigate();
  return (
    <div className="flex flex-col items-center text-center justify-center my-[200px]">
      <div className=" w-80 h-80 text-black shadow shadow-2xl bg-white p-4 flex flex-col justify-center gap-8">
        <h1 className="font-bold">Expensify</h1>
        <p>It's time to get your expenses under control</p>
        <button
          className="bg-black p-4 text-white bg-sky-700"
          onClick={() => {
            startLogin();
            if (isAuth === "PLWz0kbr27U0mp0OHsOOqbDVsq22") {
              navigaite("/dashbord");
              setShowWarning(false);
            } else {
              setShowWarning(true);
            }
          }}
        >
          Login with Google
        </button>
        {ShowWarning && (
          <h1 className="text-red-700 font-bold text-center">
            You cant access to this page
          </h1>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.uid,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    startLogin: () => dispatch(startLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
