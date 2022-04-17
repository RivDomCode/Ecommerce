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
      setTimeout(()=>{
        setError(false)
      }, 5000)
      return
    }

    setError(false)
    navigate("main",{state: {userName}} );

  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-800 text-gray-300">
                <div className="font-black text-5xl  bg-clip-text mb-8 text-transparent bg-gradient-to-r from-orange-500 to-orange-100 p-2 tracking-wider uppercase">BuyIt</div>

      <div className="form h-4/6 flex align-middle flex-col">
        <p className="p-4 mb-12 bg-slate-900 rounded-lg shadow-lg font-semibold tracking-wider">No registration necessary! Just type an username and a password</p>
        <form
          action="/"
          className="form flex flex-col mx-auto text-center w-full p-8 bg-slate-900 rounded-lg shadow-lg h-full"
          ref={form}
        >
                    {error && <Error msg="All Fields are required!" />}


          <div className="flex flex-col w-4/5 mx-auto p-8">
            <label htmlFor="email" className="font-bold uppercase">
              USERNAME
            </label>
            <input
              type="text"
              name="user"
              placeholder="your username here..."
              className=" text-center h-12 rounded-lg shadow-lg p-4 mt-4 bg-slate-100 text-xl font-semibold text-black"
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
              className="text-center  w-full h-12 rounded-lg shadow-lg p-4 mt-4 bg-slate-100 text-xl font-semibold text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 relative hover:bg-orange-400 mt-4 cursor-pointer text-white text-xl font-semibold uppercase w-3/5 p-2 mx-auto border-slate-400 rounded-lg shadow-lg"
            onClick={handleSubmit}
            >

    Log in



          </button>

        </form>
      </div>
    </div>
  );
};
