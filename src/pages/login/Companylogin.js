import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {
    Form,
    Row,
    Col
} from 'react-bootstrap'





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

const Companylogin = () => {



    return <Div>
        
        <FormC>

                company
            <For>
                    <Input  placeholder='Email' />
                    <Input  placeholder='Password' />
                    <Button variant="outlined">Login</Button>
                    <Col style={{ marginBottom: '80px' }}>
                    New Customer? Register
                    </Col>

            </For>
        </FormC>
    </Div>;
};

export default Companylogin;


