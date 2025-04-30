import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
            }).catch( error => {
                console.log(error)
            })
    }


    return (
        <div className='border border-gray-300 shadow-xl max-w-md p-10 mx-auto rounded-2xl  mt-[20vh]'>
            <div className="text-center">
                <h2 className="text-3xl mb-3 font-bold text-center text-gray-500 ">Please Register</h2>
                <form className='space-y-4 ' onSubmit={handleRegister}>
                    {/* Email */}
                    <label className="input validator join-item w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input
                            type="email"
                            // minLength="8"
                            name='email'
                            placeholder="mail@site.com"
                            required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                    <br />
                    {/* Password */}
                    <label className="input validator w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type="password"
                            required
                            name='password'
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                    </label>
                    <p className="validator-hint hidden">
                        Must be more than 8 characters, including
                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                    </p>
                    <br />
                    <input className='btn btn-active w-full' type="submit" value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default Register;