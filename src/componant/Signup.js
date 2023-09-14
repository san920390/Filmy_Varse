
import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const Signup = () => {

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState();
    // const [data, setData] = useState({
    //     mobile:"",
    //     password:""
    // });
    

// const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// }, auth);

    return (
        <div className='w-full mt-8 flex justify-center items-center  flex-col'>
            {
              otpSent? 
              <>
                <div className="p-2 w-1/3">
                    <div className="relative">
                        <label for="message" className="leading-7 text-sm text-white">
                            Enter OTP
                        </label>
                        <input
                    
                            value={otp}
                            onChange={(event) => setOtp(event.target.value)}
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>

                <div className="p-2 w-1/3 mt-6">
                    <button
                        // onClick={confirmOtp} 
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        {loading ? <TailSpin height={25} /> : "Confirm OTP"}
                    </button>
                </div>

                <div>
                    <p>If already have an account? <Link to={"/login"}><span className='text-blue-600'>LogIn</span></Link></p>
                </div>

              </>
              :
              <>
                <h1 className='text-2xl font-bold'>Signup</h1>

                {/*----------------- name field------------------ */}

                <div className="p-2 w-1/3">
                    <div className="relative">
                        <label for="message" className="leading-7 text-sm text-white">
                            Name
                        </label>
                        <input
                            type='text'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            id="message"
                            name="message"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                {/*----------------- MobileNo field------------------ */}

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
                        onClick={Signup}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        {loading ? <TailSpin height={25} /> : "Signup"}
                    </button>
                </div>

                <div>
                    <p>If already have an account? <Link to={"/login"}><span className='text-blue-600'>LogIn</span></Link></p>
                </div>
            </>
        }
        </div>
    )
}

export default Signup
