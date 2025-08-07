import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router';
import "./login.css"
// import './index.css'
// import '../node_modules/tailwindcss/index.css'
import React, { useState } from 'react'
import Signin from './signinfromgoogle';
function Login(){
  let [isChecked,setVal]= useState(false)
  return (
    <>
    <main id='log-body'>
      
    
      <div className='mt-20' id='log-cont'>
    <Form className='border w-[600px] m-auto p-20 rounded-30'id='log-form'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email</Form.Label><br/>
        <Form.Control type="email" placeholder="Enter registered email" className='' required id='log-email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label><br/>
        <Form.Control type={isChecked?"text":"password"} placeholder="Password" className=''required id='log-pass'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show Password" onChange={()=>setVal(!isChecked)} id='log-show'/>
      </Form.Group>
      <Button variant="primary" type="submit" id="log-button">
        Login
      </Button> <Link to = "/ainwik"><Button variant="primary" type="button" className='ml-5' id="log-button2">
        Login With Ainwik ID
      </Button></Link>
      <Signin/>
    </Form>
    
      </div>
      </main>
    </>
  )
}
export default Login
