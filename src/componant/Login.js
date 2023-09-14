
import React,{useState} from 'react'
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Login = () => {

    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // const [data, setData] = useState({
    //     mobile:"",
    //     password:""
    // });

  return (
    <div className='w-full mt-8 flex justify-center items-center  flex-col'>
         <h1 className='text-2xl font-bold'>LogIn</h1>

            {/*----------------- name field------------------ */}

         <div className="p-2 w-1/3">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-white">
                  Mobile No
                </label>
                <input
                  type='text'
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            {/*----------------- password field------------------ */}

            <div className="p-2 w-1/3">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-white">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            {/*----------------- button field------------------ */}

            <div className="p-2 w-1/3 mt-6">
              <button
                onClick={Login}
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                {loading ? <TailSpin height={25} /> : "Login"}
              </button>
            </div>

            <div>
                <p>Do not have account? <Link to={"/signup"}><span className='text-blue-600'>SignUp</span></Link></p>
            </div>
    </div>
  )
}

export default Login
