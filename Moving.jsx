import React, { useState } from 'react'

import { Form, FormGroup, Label, Input, Button} from 'reactstrap'

const Moving = () => {

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value)
    console.log(setEmail())
  }

  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value)
    console.log(setPassword())
  }

  return (
  
    <Form id='loginForm'>
      <FormGroup floating>
      <Input 
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
        onChange={onChangeEmailHandler}
      />
      <Label 
        className='email'
        for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
      <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        onChange={onChangePasswordHandler}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
      <Button style={{backgroundColor: 'red'}}>
      Submit
      </Button>
    </Form>

  )
}


export default Moving