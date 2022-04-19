import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styled from "styled-components"

import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`

    margin-top: 10px;

`;
const Heading = styled.h1`
  text-transform: uppercase;
    font-size: 20px;
    color: #1F1F39;
    font-weight: 700;
    margin: 0 0 2em;
    margin-bottom: 10%;
    margin-top: 5%;
`;

const Card = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    margin-bottom: 10%;
    margin-top: 10%;
    box-shadow: 0px 0px 25px #dde2e7;
    border-radius: 15px ;
    padding: 1px;
    transform: translate(0, 30px);
    width: 100%;
  

`;

const Img = styled.img`
     border-top-right-radius: 15px ;
     height: 50%;
     width: auto;
`;

const H2 = styled.p`
    font-weight: 500;

`;
const Details = styled.div`
    padding-left: 5%;
    text-align: left;
`



export default function MultiActionAreaCard(details) {


    const navigate = useNavigate();

    const handleclick = () => {

        navigate(`investorprofile/${details.details._id}`)

    }

    // console.log(details.details);
    return (
        <Container>




            <Card>
                <Img src={details.details.profileImg} ></Img>
                <Heading>{details.details.username}</Heading>

                <Details>


                    <H2>Amount : {details.details.amount}</H2>
                    <H2>Gender : {details.details.gender}</H2>
                    <H2>Category : {details.details.category} </H2>
                </Details>



                <Button size="small" onClick={handleclick}>Learn More

                </Button>
              
            </Card>


        </Container>
    );
}