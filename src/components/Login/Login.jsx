import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from 'react-icons/io';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [showPss, setShowPss] = useState(false);
    const [showError, setShowError] = useState("");
    const [success, setSuccess] = useState(false)
    const emailRef = useRef();

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        setShowError("");
        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user.emailVerified) {
                    setSuccess(true)
                    alert("Successfully SignedUp");
                }
                else {
                    alert("Please Go to your Email and Verify yourself");
                    setShowError("We send an verification Email to your Email. Go to your Email an verify.")
                }
                console.log(result);
            }).catch(error => {
                console.log(error)
                setShowError(error.message)
            })
    }

    const handleForgetPassword = () => {
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        setShowError("")

        //password rest email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset Email is send to your Email. Please Check This out.")
            }).catch(error => {
                if(error.message === "Firebase: Error (auth/invalid-email)."){
                    setShowError("The email you entered is not valid. Please insure an Valid Email.")

                }
            })

    }


    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm mt-[20vh] shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form
                    onSubmit={handleSignIn}
                    className="fieldset">
                    <label className="label">Email</label>
                    {/* Email */}
                    <input
                        ref={emailRef}
                        name='email'
                        type="email"
                        className="input"
                        placeholder="Email" />
                    <label className="label">Password</label>
                    <div className="border border-gray-300 w-80 h-10 rounded-sm flex items-center">
                        <input
                            name='password'
                            autoComplete='current-password'
                            type={showPss ? "text" : "password"}
                            className="flex-1 outline-0 p-2 text-sm"
                            placeholder="Password" />
                        <span
                            className='text-xl pr-2'
                            onClick={() => setShowPss(!showPss)}>
                            {
                                showPss ? <IoIosEyeOff /> : <IoIosEye />
                            }
                        </span>
                    </div>
                    {
                        showError && <p className='text-red-500'>{showError}</p>
                    }
                    {
                        success && <p className='text-green-500'>Successfully Signed Up</p>
                    }
                    <div><a
                        onClick={handleForgetPassword}
                        className="link link-hover">Forgot password?</a></div>
                    <p>Haven't an account? Go to <Link className='text-blue-600 font-medium underline' to="/signUp">SignUp</Link></p>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;