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




import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase/firebase';


const storage = getStorage(app);









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

const Investorregister = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

        
        
    const [gender, setGender] = useState('')
    const [investedbefore, setinvestedbefore] = useState('')




    
    const handleimage = (e) => {

        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }

    }



    const handleChangegender = (event) => {
        setGender(event.target.value);
    }

    const handleChangeinvestedbefore= (event) => {
        setinvestedbefore(event.target.value);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [data, setData] = useState([]);


    const handleClick = (e) => {
        e.preventDefault();  


        const fileName = new Date().getTime() + image.name;


        const storageRef = ref(storage, fileName);
        // console.log(fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {

            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                   
                   setUrl(downloadURL);

                   register();





                   

                });
            }
        );









      
        const register = async ()=>{

            try{

                    const res = await axios.post("/api/auth/investorregister",{
                        username: username,
                        email: email,
                        profileImg: url,
                        password:password,
                        category: category,
                        amount: amount,
                        gender:gender,
                        investedbefore:investedbefore,
                    });
                 
                    // console.log(res.status);
                  if(res.status === 200){

                     navigate("/login/investor");
                    
                    }
                    
                    setData(res.data);

            }catch(err){
                console.log(err);
            };
        };
     


    };

   

    return <Div>


        <FormC>

            <Heading>Investor</Heading>
         
                
            <Input placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
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
            <Input placeholder='Amount' onChange={(e) => setAmount(e.target.value)}/>
           
            <input type="file" onChange={handleimage} ></input>

            
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Have you invested before</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={investedbefore}
                    label="invested before"
                    onChange={handleChangeinvestedbefore}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={true}>yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                   
                </Select>
                <FormHelperText>Yearly profit</FormHelperText>

            </FormControl>




            <Buttonn variant="outlined" onClick={handleClick}>Register</Buttonn>
            <Colm >
                You will get an otp on your eamil id to verify your account...
            </Colm>

           
        </FormC>
    </Div>;
};

export default Investorregister;


