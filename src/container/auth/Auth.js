import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

function Auth(props) {

    const [userType, setUserType] = useState('Login');
    const [reset, setReset] = useState(false);

    const emailRef = useRef();
    const nameRef = useRef();
    const passRef = useRef();

    const handleLogin = () => {
        console.log(emailRef.current.value);
        console.log(passRef.current.value);

        passRef.current.focus();
        passRef.current.style.border = "1px solid blue"

    }

    const handleSignup = () => {
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }

    const handleForgot = () => {
        console.log(emailRef.current.value);
    }

    let authSchema;

    if (userType === 'Login' && reset === false) {
        authSchema = {
            email: yup.string().email("Please Eneter Valid Email.").required("Please Enetr Your Email."),
            password: yup.string().required("Please Enter Password.").min(8,"Password must be 8 characters long")
        }
    } else if (userType === 'signup' && reset === false) {
        authSchema = {
            name: yup.string().required("Please Enter Your Name."),
            email: yup.string().email("Please Eneter Valid Email.").required("Please Enetr Your Email."),
            password: yup.string().required("Please Enter Password.").min(8,"Password must be 8 characters long")
        }
    } else if (reset === true) {
        authSchema = {
            password: yup.string().required("Please Enter Password.").min(8,"Password must be 8 characters long")
        }
    }

    let schema = yup.object().shape(authSchema);

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            reset === true ?
                                <h2>Reset Password</h2>
                                :
                                userType === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>
                        }

                    </div>
                    <div action method="post" role="form" className="php-email-form">

                        {
                            reset === true ?
                                null
                                :
                                userType === 'Login'
                                    ? null
                                    : <div className="row">
                                        <div className="col-md-6 form-group mx-auto">
                                            <input ref={nameRef} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                    </div>
                        }


                        <div className="row">
                            <div className="col-md-6 form-group mt-3 mt-md-0 mx-auto">
                                <input ref={emailRef} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                        </div>

                        {
                            reset === true ?
                                null
                                :
                                <div className="row">
                                    <div className="col-md-6 form-group mt-3 mt-md-0 mx-auto">
                                        <input ref={passRef} type="password" className="form-control" name="password" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                </div>
                        }

                        {
                            reset === true ?
                                <div className="text-center"><button onClick={() => handleForgot()} type="submit">Submit</button></div>
                                :
                                userType === 'Login' ? <div className="text-center"><button onClick={() => handleLogin()} type="submit">Login</button></div> : <div className="text-center"><button onClick={() => handleSignup()} type="submit">Signup</button></div>
                        }

                        {
                            userType === 'Login' ? <div className="text-center mt-2">Create a new account: <Link onClick={() => { setReset(false); setUserType('Signup') }}>Signup</Link> </div> : <div className='text-center mt-2' >Already have an Acoount? <Link onClick={() => { setReset(false); setUserType('Login') }}>Login</Link> </div>
                        }

                        <div className="text-center mt-2"><Link onClick={() => setReset(true)}>Forgot Password?</Link></div>

                    </div>
                </div>
            </section>
        </div>

    );
}

export default Auth;