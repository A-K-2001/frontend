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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';



const Div = styled.div`
display: flex;
justify-content: center;
   
`;


const FormC = styled.form`
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

const Companyregister = () => {



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const [sales, setSales] = useState("")
    const [profit, setProfit] = useState("")
    const [equity, setEquity] = useState("")
    const [year, setYear] = useState("")
    const [evolution, setEvolution] = useState("")


    const [gender, setGender] = useState('')


    const handleChangegender = (event) => {
        setGender(event.target.value);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const Register = async()=>{

            try{
                    const res = await axios.post("/api/auth/companyregister",{
                        username:username,
                        email:email,
                        password:password,
                        category:category,
                        sales:sales,
                        profit:profit,
                        evolution:evolution,
                        year:year,
                        gender:gender,
                        equity:equity,
                    });

                    if(res.status == 200){
                        navigate("/login/company");
                    }

                    // console.log(res);


            }catch(err){
                console.log(err);
            }

        };
        Register();
    };


    return <Div>


        <FormC>

            <Heading>Company</Heading>

            <Input placeholder='username'  onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder='Email'onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" autoComplete='true' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />


            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={gender}
                    label="Gender"
                    onChange={handleChangegender}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                   
                </Select>
                <FormHelperText>Yearly profit</FormHelperText>

            </FormControl>


            <Input placeholder='Category' onChange={(e) => setCategory(e.target.value)}/>
            <Input placeholder='Sales'onChange={(e) => setSales(e.target.value)} />
            <Input placeholder='Profit' onChange={(e) => setProfit(e.target.value)}/>
            <Input placeholder='Equity' onChange={(e) => setEquity(e.target.value)}/>
            <Input placeholder='Year' onChange={(e) => setYear(e.target.value)}/>
            <Input placeholder='Evolution'onChange={(e) => setEvolution(e.target.value)} />

            <Buttonn variant="outlined" onClick={handleClick}>Register</Buttonn>
            <Colm >
                You will get an otp on your eamil id to verify your account...
            </Colm>


        </FormC>
    </Div>;
};

export default Companyregister;


