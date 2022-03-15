import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import List from '../../components/list/List'
import { logout } from '../../redux/userRedux'

const Home = () => {

  
  const verify = useSelector(state => state.user?.currentUser?.verifed);

  const navigate = useNavigate();
useEffect(()=>{

  if(verify == false){
    navigate("/otp");
  }


},[])
  if(verify == false){
    navigate("/otp");
  }

 
  return (

  
    <div>
    

    <List></List></div>
  )
}

export default Home