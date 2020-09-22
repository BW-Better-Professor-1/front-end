import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

import {useForm} from 'react-hook-form';
import {FormPage, FormField, FormInfo, Button, Input} from "./styled-components"

function Signup()  {

    const history = useHistory('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [notMatching, setNotMatching] = useState('');

    const changeUser = e => {
        setUser(e.target.value);
    }

    const changePW = e => {
        setPassword(e.target.value);
    }

    const changeConfirmPW = e => {
        setConfirmPassword(e.target.value);
    }

    const changeEmail = e => {
        setEmail(e.target.value);
    }

    const {
        register,
        handleSubmit,
        errors} = useForm();

    const onSubmit = () => {
        (password === confirmPassword) ? ( //<--IF THIS THEN, -->
            axiosWithAuth().post('auth/register', {
                'name': email.toString(),
                'password': password.toString(),
            })
            .then(response => {
                console.log('User successfully created.', response)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('professorID', response.data.id)
                history.push('/dashboard')
            })
            .catch(error => {
                console.log('Failed to register.', error)
            })
        ) : // <--IF NOT THEN --> 
        (setNotMatching('Passwords do not match!'))
    }

    return(

        <FormPage>
            <FormField onSubmit={handleSubmit(onSubmit)}>
                <h1>Create an Account</h1>
                {/* Email */}
                <FormInfo>
                    <label htmlFor='email'>Email</label>
                    <Input 
                        type ='email'
                        name ='email'
                        id = 'email'
                        onChange={changeEmail}
                        value={email}
                        placeholder='Enter email address'
                        ref={register({required: "Must enter a valid email address"})}
                    />
                    {errors.email && console.log('Signup Email error: ', errors.email) && <p>{errors.email.message}</p>}
                </FormInfo>
                {/* Password */}
                <FormInfo>
                <label htmlFor='password'>Password</label>
                    <Input 
                        type ='password'
                        name ='password'
                        id = 'password'
                        onChange={changePW}
                        value={password}
                        placeholder='Create a Password with at least 7 characters'
                        ref={register({required: "Must enter a password",
                        minLength: {value: 7, message: "Must enter a password of at least 7 characters"}})}
                    />
                    {errors.password && console.log('Signup Password error: ', errors.password) && <p>{errors.password.message}</p>}
                </FormInfo>
                <FormInfo>
                {/* Confirm Password */}
                <Input 
                        type ='password'
                        name ='confirmPassword'
                        id = 'confirmPassword'
                        onChange={changeConfirmPW}
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        ref={register({required: "Must confirm password",
                        minLength: {value: 7, message: "Must enter a password of at least 7 characters"}})}
                    />
                    {errors.confirmPassword && console.log('Signup Confirm Password error: ', errors.confirmPassword) && <p>{errors.confirmPassword.message}</p>}
                    {notMatching}
                </FormInfo>
                <Button>Create Account</Button>
                <div className="preUnderline">Already have an account?<span className="underline2" onClick={()=>history.push('/login')}>Log in here.</span></div>
            </FormField>
            {/* Sign up Page */}
            <div id="signUp">
                {/* Sign up Here */}
            </div>
        </FormPage>

    );
}

export default Signup;