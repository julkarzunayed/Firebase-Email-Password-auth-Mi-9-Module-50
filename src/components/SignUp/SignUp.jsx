import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from 'react-icons/io';

const SignUp = () => {
    const [showPss, setShowPss] = useState(false)
    const [success, setSuccess] = useState('')
    const [errorMessage, setErrorMessage] = useState("");
    const handleSignUp = (e) => {
        e.preventDefault()
        setSuccess('')
        setErrorMessage('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        // console.log(terms)

        // if(!/[A-Z]/.test(password)){
        //     setErrorMessage("Password Must has an Upper case")
        //     return ;
        // }
        // else if(!/[a-z]/.test(password)) {
        //     setErrorMessage("Password Must has a Lower case")
        //     return ; 
        // }
        // else if(!/\d/.test(password)) {
        //     setErrorMessage("Password Must has a Number")
        //     return ; 
        // }
        // else if(password.length >= 8) {
        //     setErrorMessage("Password Must be 8 characters or more")
        //     return ; 
        // }

        if (!/^\w+@\w+\.\w+$/.test(email)) {
            setErrorMessage("Please Enter an Valid Email");
            return;
        }
        else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
            setErrorMessage("Password Must has a Lower case an Upper Case a digit and eight or more Characters.");
            return;
        }
        else if(!terms){
            setErrorMessage("Please Accept our Terms and Conditions");
            return ;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccess(true)
                console.log(result);
            }).catch(error => {
                setErrorMessage(error.message);
                console.log(error.message)
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Please SignUp now!</h1>
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className="border border-gray-300 flex items-center rounded-sm w-[320px] h-[40px]">
                            <input type={showPss ? "text" : "password"} name='password' className="p-3 text-[16px] outline-0 flex-1" placeholder="Password" />
                            <span
                                className='text-xl pr-2'
                                onClick={() => setShowPss(!showPss)}>
                                {
                                    showPss ? <IoIosEyeOff /> : <IoIosEye />
                                }
                            </span>
                        </div>
                        <label className="label mt-2">
                            <input name='terms'  type="checkbox" className="checkbox checkbox-sm" />
                            Accept our terms and conditions
                        </label>
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        {
                            errorMessage && <p className='text-red-600'>{errorMessage}</p>
                        }
                        {
                            success && <p className='text-green-500 font-medium mt-2'>Successfully Signed Up</p>
                        }
                        <button className="btn btn-neutral mt-4">SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;