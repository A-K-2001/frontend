import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'



import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer/FormContainer'





const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin




    const submitHandler = (e) => {
        e.preventDefault()

    }



    return (
        <div>

            <FormContainer>

                <h1 style={{ marginTop: '170px' }}>Sign In</h1>


                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control
                            type="nic"
                            placeholder="Enter email address"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type="submit" style={{ backgroundColor: "#91C788", border: "none" }}>Sign In</Button>
                </Form>
                <Row className='py-3'>
                    <Col style={{ marginBottom: '80px' }}>
                        New Customer? <Link style={{ color: "#91C788" }}>Register</Link>
                    </Col>
                </Row>
            </FormContainer>
        </div>
    )
}

export default Login