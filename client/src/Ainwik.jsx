import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router'
import "./login.css"
export default function Ainwik() {
  let [isChecked,setVal]= useState(false)
  return (
    <>
    <main id='log-body'>
       <div className='mt-20'>
    <Form className='border w-[600px] m-auto p-20' id='log-form'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Ainwik ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Ainwik ID" className='w-70' required id='log-email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={isChecked?"text":"password"} placeholder="Password" className='w-70'required id='log-pass'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show Password" onChange={()=>setVal(!isChecked)} id='log-show'/>
      </Form.Group>
      <Button variant="primary" type="submit" id='log-button'>
        Login
        </Button> <Link to = "/login"><Button variant="primary" type="submit" id='log-button2' >
        Login With Email
      </Button></Link>
    </Form>
    </div>
    </main>
    </>
  )
}
