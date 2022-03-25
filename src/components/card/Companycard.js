import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styled from "styled-components"

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
`;

const H2 = styled.p`
    font-weight: 500;

`;
const Details = styled.div`
    padding-left: 5%;
    text-align: left;
`

export default function MultiActionAreaCard(details) {
    // console.log(details);
    return (
        <Container>




                <Card>
                    <Img src={details.details.profileImg} ></Img>
                      <Heading>{details.details.username}</Heading>
                      
                        <Details>


                                    <H2>profit : {details.details.profit}</H2>
                                    <H2>equity : {details.details.equity}</H2>
                                    <H2>evolution : {details.details.evolution}</H2>
                        </Details>
                                
                </Card>

          
        </Container>
    );
}