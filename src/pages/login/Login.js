import styled from "styled-components"
import React from 'react'




const Company = styled.div`
 background-color: red;

`;

const Investor = styled.div`

    background-color: green;
`;



const Login = () => {
  return (
    <div>Login

        <Company>company</Company>
        <Investor>investor</Investor>


    </div>
  )
}

export default Login