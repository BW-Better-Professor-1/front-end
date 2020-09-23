import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import {useForm} from 'react-hook-form';
import {LoginForm, FormField, FormInfo, Button, Input} from './styled-components';



const Login = (props) => {
    const history = useHistory();
    const {
      register,
      handleSubmit,
      errors,
      getValues,
      formState: { isSubmitting }
    } = useForm();

    const [user, setUser] = useState({
      name: '',
      password: ''
    })

    const handleChanges = e => {
      setUser({...user, [e.target.name]: e.target.value})
      console.log(user);
    }

    const onSubmit = e => {

      const values = getValues();
      console.log(values);
      axiosWithAuth()
      .post(`auth/login`, values)
      .then(res=> {
          console.log("login successfull", res)
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("professorID", res.data.id);
          history.push("/dashboard")
      })
      .catch(err=>{
          console.log(err, "failed to login")
      })
    }


  return (
  <LoginForm>
        <FormField className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <h1>Log In</h1>
          <FormInfo>
          <label htmlFor="name">Username</label>
          <Input className="styleInput3" id="name" placeholder="Enter Username Here" name="name" ref={register({required : true })} />
          {errors.username && console.log('Login Username error: ', errors.username) && <p>{errors.username.message}</p>}

          <label htmlFor="password">Password</label>
          <Input className="styleInput3" id="password" placeholder="Enter Password Here" name="password" type="password" ref={register({required: true })} />
          {errors.password && console.log('Login Password Error: ', errors.password) && <p>{errors.password.message}</p>}
        </FormInfo>
        <Button>
          Log In
          </Button>
        <div>Don't have an account? <span className="underline" onClick={()=>history.push("/signup")}>Create one here.</span></div>
        </FormField>
    
    <div className="sectionContainer2">
      <div id="signUp">
        {/* Sign Up Graphic Here */}
      </div>
    </div>
    </LoginForm>
    
  );
}

export default Login;