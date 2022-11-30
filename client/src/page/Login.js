import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import { AuthContext } from "../context/AuthContextProvider";
const Login = () => {
  const [error, setError] = useState(null);
  const { userLogin, registerWithGoogle, registerWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Invalid User or Password");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found Please Register");
        } else {
          setError(error.message);
        }
      });
  };
  const googleRegisterHandler = () => {
    registerWithGoogle()
      .then((result) => {
        toast.success("Registration Success ");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const githubRegisterHandler = () => {
    registerWithGithub()
      .then((result) => {
        toast.success("Registration Success ");
        navigate(from, { replace: true });
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
                Sing in with
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
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={loginHandler}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white dark:bg-slate-900 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
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
                  name="password"
                  className="border-0 px-3 py-3 dark:bg-slate-900 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  required
                />
              </div>
              {error && <small className="text-red-600">{error}</small>}
              <div className="text-center mt-6">
                <button
                  className=" bg-white border dark:bg-slate-700 dark:text-gray-400 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="relative pb-6 mt-2">
          <p className="text-center">
            Don't Have an Account?{" "}
            <Link to="/register" className="text-blue-600 mr-1">
              Register
            </Link>
            here.
          </p>
        </footer>
      </div>
    </Container>
  );
};

export default Login;
