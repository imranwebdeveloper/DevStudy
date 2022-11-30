import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import { AuthContext } from "../context/AuthContextProvider";

const Register = () => {
  const {
    setUser,
    registerWithGoogle,
    registerWithGithub,
    registerWithEmailAndPassword,
    updateUserProfile,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleRegisterHandler = () => {
    registerWithGoogle()
      .then((result) => {
        toast.success("Registration Success ");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const githubRegisterHandler = () => {
    registerWithGithub()
      .then((result) => {
        toast.success("Registration Success ");
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const registerHandler = (e) => {
    e.preventDefault();
    const displayName = e.target.fullName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    registerWithEmailAndPassword(email, password)
      .then((result) => {
        toast.success("Registration Success ");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    updateUserProfile(displayName, photoURL)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container CS="min-h-screen">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div className="relative bg-gray-100  dark:bg-[#1F2937] dark:text-gray-400 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border">
          <div className="rounded-t mb-0 px-6 py-4">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Register in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className=" bg-white dark:bg-slate-700  active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                onClick={githubRegisterHandler}
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                />
                Github
              </button>
              <button
                className="bg-white dark:bg-slate-700 active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                onClick={googleRegisterHandler}
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                />
                Google
              </button>
            </div>
            <hr className="mt-2 border-b-1 border-blueGray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-4 pt-0">
            <div className=" text-center  font-bold">
              <small>Or Register in with credentials</small>
            </div>
            <form onSubmit={registerHandler}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Full Name
                </label>
                <input
                  name="fullName"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Photo URL"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-3 dark:bg-slate-900 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className=" bg-white border dark:bg-slate-700 dark:text-gray-400 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="relative pb-6 mt-2">
          <p className="text-center">
            Have an Account?{" "}
            <Link to="/login" className="text-blue-600 mr-1">
              Login
            </Link>
            here.
          </p>
        </footer>
      </div>
    </Container>
  );
};

export default Register;
