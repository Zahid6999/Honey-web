
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../access/img/login-2.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const Register = () => {

    const [userErr, setUserErr] = useState(null);
    const { createUser, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password === confirm) {
            return createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    navigate('/')
                })
                .catch(err => {
                    console.error(err)
                    setUserErr(err.message);
                })
        };
        return setUserErr('password Dose not macth please valid password')
    }
    // HandleGoogle--------------
    const handleGoogle = () => {
        googleLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
    }

    return (
        <div className="hero min-h-screen bg-stone-400 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20">
                    <img src={login} alt="" />
                </div>

                <form onSubmit={handleForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-300">
                    <h1 className='text-center text-2xl font-semibold text-orange-500 py-4'>Register</h1>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
                            <label className="label">
                                {userErr && <p className='text-red-500 fon-bold py-2'>{userErr}</p>}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-active btn-accent" type="submit" value="Register" />
                            <p className='text-center pt-2 text-sm'>You have already account ? <Link to='/login' className='text-orange-400'>Login</Link> now</p>
                            <p className='text-center text-sm text-slate-500 py-3 divider'>Or</p>
                            <button onClick={handleGoogle} className='text-3xl mx-auto'><FcGoogle /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;