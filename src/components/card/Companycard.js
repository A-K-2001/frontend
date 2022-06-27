import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styled from "styled-components"

import { Link, useNavigate } from "react-router-dom";


const Heading = styled.h1`

`;

const Card = styled.div`
    margin: 10px;
    width: 27%;
    color: black;
    margin-left: 5%;
    margin-bottom: 25px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    /* box-shadow: 5px 10px white; */
    // background-image: url("data:image/jpeg;base64,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");
        /* background: hsla(0,0%,100%,.35); */
        
    box-shadow: 2px 6px 8px 0 #c8c8c8;
    backdrop-filter: blur(3px);
    border-color: white;
    border: 1px solid white;


`;

const Img = styled.img`
    margin-top: 10px;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    &:hover{
        transform: scale(1.2);
        transition: transform .3s;
    }
`;

const H2 = styled.p`
   

`;
const Details = styled.div`
   
`
const Buttonn = styled.button`
        color: black
        ;
    background-color: transparent;
    border: 1px solid grey;

    margin-bottom: 15px;
    width: 40%;
    height: 8%;
    border-radius: 10px;
    &:hover{
        background-color: #fff;
        transform: scale(1.1);
        transition: transform .3s;
    }

`


export default function MultiActionAreaCard(details) {


    const navigate = useNavigate();

    const handleclick = () => {

        navigate(`/companyprofile/${details.details._id}`)

    }

    // console.log(details);
    return (
  




            <Card>
                <Img src={details.details.profileImg} ></Img>
                <Heading>{details.details.username}</Heading>

                <Details>


                    <H2>profit : {details.details.profit}</H2>
                    <H2>equity : {details.details.equity}</H2>
                    <H2>evolution : {details.details.evolution}</H2>
                </Details>



                <Buttonn size="small" onClick={handleclick}>Learn More

                </Buttonn>
              
            </Card>


       
    );
}