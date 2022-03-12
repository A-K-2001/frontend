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
    height: 100%;
    align-items: center;
    text-align: center;
    
`;
const Pic = styled.div`
display: inline;
height: 100%;

flex: 1;
text-align: center;

`;

const FormC = styled.div`
display: inline;
flex: 1;



align-items: center;

text-align: center;
`;

const For = styled.form`

align-items: center;

  
`;
const Input = styled.input`
    display: block;
    margin: auto;
 
`;

const Investorlogin = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

    const dispatch = useDispatch();


    const handleClick = (e)=>{
        e.preventDefault();
        logininvestor(dispatch,{username,password});
    };

    return <Div>
        
        
        <FormC>

                Investor
            <For>
                    <Input  placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
                    <Input  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <Button variant="outlined" onClick={handleClick}>Login</Button>
                    <Col style={{ marginBottom: '80px' }}>
                    New Customer? Register
                    </Col>

            </For>
        </FormC>
    </Div>;
};

export default Investorlogin;


