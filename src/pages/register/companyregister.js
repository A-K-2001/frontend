import React from 'react'
import { Button } from '@mui/material';
import {
    Form,
    Row,
    Col
} from 'react-bootstrap'

import styled from 'styled-components';

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



const Companyregister = () => {
    return (
        <div><FormC>

            company register
            <For>
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Button variant="outlined">Login</Button>
                <Col style={{ marginBottom: '80px' }}>
                    New Customer? Register
                </Col>

            </For>
        </FormC></div>
    )
}

export default Companyregister