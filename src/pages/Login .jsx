import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Error } from "../components/Error";

export const Login = () => {
  //target the form to get user data from inputs using FormData
  const form = useRef(null);

  //function to get data from input as an object with formdata

  const [data, setData] = useState({
  })

//To throw an error if any field is no completed
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data2 = {
      userName: formData.get("user"),
      password: formData.get("password"),
    };
    setData(data2);
    const { userName, password } = data2;
    //simple validation
    if(userName === "" || password=== ""){
      setError(true);
      return
    }

    setError(false)
    navigate("main",{state: {userName}} );

  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-100">
      <div className="form h-4/6 flex align-middle flex-col">
        <p className="p-4 mb-12 bg-white rounded-lg shadow-lg font-semibold tracking-wider">No registration necessary! Just type an username and a password</p>
        <form
          action="/"
          className="form flex flex-col mx-auto text-center w-96 bg-white rounded-lg shadow-lg h-full"
          ref={form}
        >
                    {error && <Error msg="All Fields are required!" />}
          <div className="text-3xl text-center text-cyan-600 uppercase font-bold mb-4 p-4">
            Login
          </div>
          <div className="flex flex-col w-4/5 mx-auto p-8">
            <label htmlFor="email" className="font-bold uppercase">
              USERNAME
            </label>
            <input
              type="text"
              name="user"
              placeholder="your username here..."
              className=" text-center h-12 rounded-lg shadow-lg p-4 mt-4 bg-slate-100"
            />
          </div>
          <div className="flex flex-col w-4/5 mx-auto p-8">
            <label htmlFor="password" className="font-bold uppercase">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-center  w-full h-12 rounded-lg shadow-lg p-4 mt-4 bg-slate-100"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-600 relative hover:bg-cyan-700 cursor-pointer text-white text-xl font-semibold uppercase w-3/6 p-2 mx-auto border-slate-400 rounded-lg shadow-lg"
            onClick={handleSubmit}
            >

    Log in



          </button>

        </form>
      </div>
    </div>
  );
};
