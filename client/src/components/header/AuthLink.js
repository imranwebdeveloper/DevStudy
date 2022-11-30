import React, { useContext } from "react";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import Tooltip from "../common/Tooltip";

const AuthLink = () => {
  const { user, setUser, userLogout } = useContext(AuthContext);
  const logoutHandler = () => {
    userLogout()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {});
  };

  return (
    <div>
      {user ? (
        <Tooltip title="Logout">
          <button
            className="text-2xl p-2 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-full "
            onClick={logoutHandler}
          >
            <BiLogOutCircle />
          </button>
        </Tooltip>
      ) : (
        <Tooltip title="Login">
          <NavLink
            to="/login"
            className="text-2xl p-2 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-full "
          >
            <BiLogInCircle />
          </NavLink>
        </Tooltip>
      )}
    </div>
  );
};

export default AuthLink;
