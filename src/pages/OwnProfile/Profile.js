import axios from 'axios';
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./pro.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Profile = () => {

    const Boxx = styled.div`
  /* height: 10%;
  width: 10%; */
  margin: 10%;
  /* padding: 25px 35px; */

  margin-top: 16%;
  margin-bottom: 16%;
  margin-left: 20%;
  margin-right: 20%;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 25px #dde2e7;
  border-radius: 20px;
  text-align: center;
  background-color: #feffde !important;
  &:hover {

      background: #e0e1c0 0% 0% no-repeat padding-box;
      color: #e0e1c0;
      transform: scale(1.3);
      cursor:pointer;

    }
    &:active {
   background-color: #3e8e41;
   transform: translateY(4px);
}


`;


    const Img = styled.img`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  
`;

    const Heading = styled.h1`

    margin-top: 5%;

`;

    const location = useLocation();
    const [info, setInfo] = useState(null);


  

    const user = location.pathname.split("/")[2];
    console.log(user);
    useEffect(() => {

        const getdata = async () => {
            try {
                const res = await axios.get("/api/company/" + user);
                // console.log(res.data);
                setInfo(res.data);
                // console.log(info);

            } catch (err) {
                console.log(err);
            }
        };
        getdata();

    }, [user]);

    const cuser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();    
    const handleclick = async()=>{

        try {

            const res = await axios.post("/api/conversation/", { receiverId:cuser?._id , senderId: user });
            
            if(res.status === 200){

                navigate("/chat");
               
               }

        } catch (err) {
            console.log(err);
        };

    }

    return (
        <div>


            <div class="row g-0">

                <div class="col-sm-12 col-lg-12 coll">
                    <Heading></Heading>
                </div>


                <div class="col-sm-12 col-lg-6 coll">


                    <Boxx >

                        <Img src= {cuser?.profileImg} ></Img>
                        <h3><strong>{cuser?.username}</strong></h3>

                    </Boxx>


                </div>
                <div class="col-sm-12 col-lg-6 coll ">

                    
                    <Boxx   >


                        <p><strong>ID: </strong>{cuser?._id}</p>
                        <p><strong>EMAIL: </strong>{cuser?.email}</p>
                        <p><strong>USERNAME: </strong>{cuser?.username}</p>
                      
                    

                       


                    </Boxx>


                <Button variant="outlined" >UPDATE</Button>
                </div>




            </div>



        </div>
    )
}

export default Profile