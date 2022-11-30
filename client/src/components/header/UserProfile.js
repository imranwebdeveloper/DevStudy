import React, { useContext } from "react";
import { MdAccountCircle } from "react-icons/md";
import { AuthContext } from "../../context/AuthContextProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-4xl hover:bg-slate-200 dark:hover:bg-gray-700  rounded-full p-2 flex justify-center items-center cursor-pointer">
      {user?.photoURL ? (
        <img src={user.photoURL} alt="" className=" w-8 h-8 rounded-full" />
      ) : (
        <MdAccountCircle />
      )}
    </div>
  );
};

export default UserProfile;
