import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {
    Form,
    Row,
    Col
} from 'react-bootstrap'
import { logincompany, logininvestor } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';





const Div = styled.div`
display: flex;
justify-content: center;
   
`;


const FormC = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    margin-bottom: 10%;
    margin-top: 10%;
    box-shadow: 0px 0px 25px #dde2e7;
    border-radius: 20px;
    padding: 2em 6em 2em 2em;
    transform: translate(0, 30px);
    width: 35%;

`;

const Heading = styled.h1`
    font-size: 20px;
    color: #1F1F39;
    font-weight: 700;
    margin: 0 0 2em;
    margin-bottom: 15%;
`;


const Input = styled.input`
        background: #ffffff;
    border: none;
    padding: 12px 20px;
    border-radius: 30px;
    width: 100%;
    box-shadow: 0 3px 10px #eeeeee;
    font-size: 14px;
    margin-bottom: 20px;
 
`;

const Buttonn = styled.button`
margin-top: 5%;
    background: #1F1F39 0% 0% no-repeat padding-box;
    box-shadow: -2px -2px 6px #575f6b80;
    border-radius: 30px;
    display: inline-block;
    color: #EEEFF3;
    padding: 10px 30px;
    transition: .4s all ease-in-out;
    border: none;
    font-weight: 800;
`;

const Colm = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
`;

const Investorregister = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const dispatch = useDispatch();


    const handleClick = (e) => {
        e.preventDefault();
        // logininvestor(dispatch, { username, password });
    };


    return <Div>


        <FormC>

            <Heading>Investor</Heading>
         
                <Input placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <Buttonn variant="outlined" onClick={handleClick}>Login</Buttonn>
                <Colm >
                    New Customer? Register
                </Colm>

           
        </FormC>
    </Div>;
};

export default Investorregister;


