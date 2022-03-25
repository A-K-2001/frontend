import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

export const Investorprofile = () => {



  const user = useSelector(state => state.user.currentUser._id);
//   console.log(user);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    
    const getdata = async ()=>{
        try{    
            const res  = await axios.get("/api/investor/"+user);
            // console.log(res.data);
            setInfo(res.data);
            // console.log(info);

        }catch(err){
            console.log(err);
        }
    };
    getdata();

  }, [user]);
  




    
  return (
    <div>Investorprofile</div>
  )

}
