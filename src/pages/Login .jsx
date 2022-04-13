import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  //target the form to get user data from inputs using FormData
  const form = useRef(null);

  //function to get data from input as an object with formdata

  const [data, setData] = useState({

  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userName: formData.get("email"),
      password: formData.get("password"),
    };
    setData(data);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-100">
      <div className="form h-1/2 flex align-middle">
        <form
          action="/"
          className="form flex flex-col mx-auto text-center w-96 bg-white rounded-lg shadow-lg"
          ref={form}
        >
          <div className="text-3xl text-center text-cyan-600 uppercase font-bold mb-4 p-4">
            Login
          </div>
          <div className="flex flex-col w-4/5 mx-auto p-8">
            <label htmlFor="email" className="font-bold uppercase">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="platzi@example.cm"
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
              placeholder="*********"
              className="text-center  w-full h-12 rounded-lg shadow-lg p-4 mt-4 bg-slate-100"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer text-white text-xl font-semibold uppercase w-3/6 p-2 mx-auto border-slate-400 rounded-lg shadow-lg"
            onClick={handleSubmit}
          >
            <Link to="/" state = {{data: data}}>
            Log in

            </Link>

          </button>
        </form>
      </div>
    </div>
  );
};
