import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'
import {
    Form,
    Row,
    Col
} from 'react-bootstrap'
import { logincompany, logininvestor } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { logout } from '../../redux/userRedux';





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

const Otp = () => {


    const [otp, setotp] = useState("")



    const user = useSelector(state => state.user?.currentUser?._id);
    const type = useSelector(state => state.user?.type);
  

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        const verifiyotp = async ()=>{

         try{

     

             const res = await axios.post("api/auth/otp", {
                 userid: user,
                 otp: otp,
                 type: type,
                });


                dispatch(logout());
                
                if(res.status === 200){

                    navigate("/login/investor");
                   
                   }

            }catch(err){
                console.log(err);
            } ;  

        };

        verifiyotp();

    };


    return <Div>


        <FormC>

            <Heading>Account verification</Heading>

            <Input  placeholder='OTP' onChange={(e) => setotp(e.target.value)} />
            <Buttonn variant="outlined" onClick={handleClick}>Submit otp</Buttonn>



        </FormC>
    </Div>;
};

export default Otp;


