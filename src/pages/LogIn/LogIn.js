import React, { useContext, useState } from 'react';
import login from '../../access/img/login-2.svg';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const [userErr, setUserErr] = useState(null);
    const { LogInUser, googleLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()


    const handleFormLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        LogInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(err => {
                console.error(err);
                setUserErr(err.message);
            })
    };

    // HandleGoogle--------------
    const handleGoogle = () => {
        googleLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
    }
    return (
        <div className="hero min-h-screen bg-stone-400 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20">
                    <img src={login} alt="" />
                </div>

                <form onSubmit={handleFormLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-300">
                    <h1 className='text-center text-2xl font-semibold text-orange-500 py-4'>Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {userErr && <p className='text-red-500 py-2 font-semibold'>{userErr}</p>}
                            </label>
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-active btn-accent" type="submit" value="LogIn" />

                            <p className='text-center pt-2 text-sm'>Not a member? <Link to='/register' className='text-orange-400'>Register</Link> Now</p>
                            <p className='text-center text-sm text-slate-500 py-3 divider'>Or</p>
                            <button onClick={handleGoogle} className='text-3xl mx-auto'><FcGoogle /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;