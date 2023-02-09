import React from 'react'
import {form, Button, FormGroup,Label,Input} from "reactstrap";
import {FacebookLoginButton} from "react-social-login-buttons";
import { useState } from 'react';

function Form() {
const [ FirstName,setinput1]=useState(' ');
const [Password,setinput2]=useState(' ');

function  FirstInput(event) {
  const newValue1 = event.target.value;
  setinput1(newValue1);
}



function SecondInput(event) {
  const newValue2 = event.target.value;
  setinput2(newValue2);
}


const PostData = async (e)=>{
  e.preventDefault();
}


  return (
    <div>
        <form method="POST" id ="login_form" className='login_form'>
        <h1 className='font-weight-bold'>Nishant@.com</h1>
        <h2>Welcome</h2>
        <FormGroup>
            <Label>Email</Label>
            <Input type="email" onChange={FirstInput} name={FirstName} value={FirstName} placeholder='Email' />
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input type="password"onChange={SecondInput} name={Password} value={Password}  placeholder='Password' />
        </FormGroup>
        <div className="d-grid gap-2">
           <Button className='btn-dark' size="lg" onClick={PostData}>
            Login Button
             </Button>
        </div>
        <div className='text-center pt-3'>
          Or continue with your social media
        </div>
        <FacebookLoginButton className='mt-3 mb-3'/>
        </form>
      <div className='text-center'>
        <a href="/sign-up">Sign Up</a>
        <span className='p-2'>|</span>
        <a href="/fogot-passowrd">Forgot Passowrd </a>
      </div>
    </div>
  )
}

export default Form;
