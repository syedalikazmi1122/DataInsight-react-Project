import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full bg-blue-200 "
      >
        <div className="w-screen space-y-0 grid  justify-center">
          <div className="h-36">
            <h2 className="mt-20 ml-20 inline-block content-center text-blue-500 ">
              Login
            </h2>
            <p className="mt-2 text-blue-400">
              {" "}
              Dont have an Account?<a href="/register">Register</a>
            </p>
          </div>
          <div className="flex  justify-center  items-center">
            <form className=" justify-center bg-transparent px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-blue-900 text-xs font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border bg-gray-50 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <div>
                  <label
                    className="block  text-blue-900 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded bg-gray-50 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <a
                  className=" font-bold text-xs  ml-24 text-blue-500  hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="grid">
              <div className="flex items-center">
                <div className="grid ">
                  <div className="border h-16 w-0  border-white "></div>
                  <p className="text-white -ml-1">or</p>
                  <div className="border h-16 w-0 border-white "></div>
                </div>
                <p className="text-center ml-10 text-gray-500 text-sm">
                  Or sign in with Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
