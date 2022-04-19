import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { InvestorList } from '../../components/list/InvestorList'
import List from '../../components/list/List'
import { logout } from '../../redux/userRedux'

const Home = () => {

  
  const user = useSelector(state => state.user);
  const type = user?.type;
  console.log(type);
  const navigate = useNavigate();
useEffect(()=>{

  if(user?.currentUser?.verifed == false){
    navigate("/otp");
  }


},[])
  if(user?.currentUser?.verifed == false){
    navigate("/otp");
  }

 
  return (

  
    <div>
    
    {type=="in"?<List/>:<InvestorList/>}
    {/* <InvestorList></InvestorList> */}
    </div>
  )
}

export default Home