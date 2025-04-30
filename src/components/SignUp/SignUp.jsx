import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const handleSignUp = (e) => {
        e.preventDefault()
        setErrorMessage('')
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
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
                        <input type="password" name='password' className="input" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        {
                            errorMessage && <p className='text-red-600'>{errorMessage}</p>
                        }
                        <button className="btn btn-neutral mt-4">SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;