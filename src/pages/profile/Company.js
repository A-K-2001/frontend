import axios from 'axios';
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./pro.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Company = () => {

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

    const cuser = useSelector(state => state.user.currentUser._id);

    const navigate = useNavigate();    
    const handleclick = async()=>{

        try {

            const res = await axios.post("/api/conversation/", { receiverId:cuser , senderId: user });
            
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
                    <Heading>you are....</Heading>
                </div>


                <div class="col-sm-12 col-lg-6 coll">


                    <Boxx >

                        <Img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhUSEhMVFRUXFhYVGRYVGBUaGBkXGBYWGhoaGRUYISggGh0mGxgYITMjJTUrMDIuFx82ODY4OSotLisBCgoKDQ0OFw8PFS0dFRkrKysrKzcrKys3LSsrKystKy0rNystKzcrNy03Ky0tLS03KystKystKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABgcIBQQBAgP/xABJEAABAwEFBAUGCggEBwAAAAABAAIDEQQFBhIhBzFBYRMiUXGBMlJygpGhFBcjU2KSk7HB0RVCQ2NzorLSCDNUZCQlNTaDo8L/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARFBMf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARF4r2vWC5rC6aeRscbd7ne4ADUnkNUHtRVLfG2uKMkWWzOk+nK7IPBgq720UUtO169pn1aYIx2NiJ973FXE1oVFnmz7Xb3ifUugeOx0X4scFLLj21RSODbXZ3R/vIjnaOZYesPDMoatpF5LrvOG9rE2WCRskbtzmnTuPEHkdV60UREQEREBERAREQEREBERAREQEREBERAREQEREArOG1fET79xVJHmPQ2dxiY3hmbUPfTtJqO5o5q0Nr2LH4duVsULss05LQ4b2RtpncOZqGjvJ4LPm9WJRERVBERBI8D4umwjeokbV0TiOli85vnNHB44HwK0zY7Uy22Vskbg5j2h7XDcWuFQR4LIavzYXeZtuEXRO/YSuYPQcGvHvc4eClWLGREUUREQEREBERAREQEREBERAREQEREBERAREQUPt6eTi2EcBZmkd5llr9zfYojhDDE+LL16GEtbRud73Vo1taVoN5J3D8l19q2JIsR4mrE0hsIdDnJ/zC17qkDg2tadqkP+H7/rFr/hQ/1yKs9f2+JCX/Ws+xP96+/EhL/rWfYn+9XOii4pj4kJf9az7E/3r8u2IShultZXnC7786ulEMZLvu6prjvR9nmAEjDQ01BqAQWniCCCrc/w+j/ldrP75g9kY/NQvbJ/39L6EX9AXd2G4kisFsfYXtId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' ></Img>
                        <h3>Investor</h3>

                    </Boxx>


                </div>
                <div class="col-sm-12 col-lg-6 coll ">


                    <Boxx   >


                        <p>{info?._id}</p>
                        <p>{info?.email}</p>
                        <p>{info?.username}</p>
                        <p>{info?.profit}</p>

                        <p>{info?.equity}</p>


                    </Boxx>


                <Button variant="outlined" onClick={handleclick}>Connect</Button>
                </div>




            </div>



        </div>
    )
}

export default Company