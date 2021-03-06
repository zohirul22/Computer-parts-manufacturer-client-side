import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Social/Social';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

  


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    let errorHandel;
    if (user) {
        errorHandel =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>
            ;
    }

/************* * email password ref***************** */
const emailref = useRef('');
const passwordref = useRef('');
const navigate = useNavigate()

const handelAddToSubmit = (event) => {
    event.preventDefault();
    const email = emailref.current.value;
    const password = passwordref.current.value;
    signInWithEmailAndPassword(email, password)
}


    /************* * email password ref***************** */

    const resetPassword = async () => {
        const email = emailref.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
     
    }


    const navigateRegister = (event) => {
        navigate('/signup')
    }


    if (user) {
        navigate(from, { replace: true });
    }




    return (
        <div id='login' className="mx-auto w-50" style={{ height: "100vh" }}>

            <h1 className='text-center text-red-900 text-4xl font-bold my-4'> please Login</h1>
            <div>
                <Form onSubmit={handelAddToSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailref} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordref} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='mx-auto d-block w-50 fs-3' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorHandel}
                <p className='text-success'>Computer-Parts <Link to={'/signup'} className='text-danger fs-4 ' onClick={navigateRegister} >Please SignUp</Link> </p>
                {/* reset password */}
                <p className='text-success'>Forgate password? <button to={'/signup'} className='text-danger fs-4 btn btn-link' onClick={resetPassword} >Reset Password</button> </p>
            </div>
           
            <Social></Social>
            <ToastContainer/>
        </div>
       
    );
};

export default Login;