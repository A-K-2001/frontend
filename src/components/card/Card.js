import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styled from "styled-components"

const Container = styled.div`

    margin-top: 20px;

`;
const Heading = styled.h5`
color: red;
`;

export default function MultiActionAreaCard() {
    return (
        <Container>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="data:image/jpeg;base64,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"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <Heading>
                            Anil kumar
                            </Heading>
                        </Typography>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h6>profit : 20000</h6>
                                    <h6>equity : 30</h6>
                                    <h6>evolution : 6000000</h6>
                                </div>
                                
                                
                            </div>
                        </div>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        learn more
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}