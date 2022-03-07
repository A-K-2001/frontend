import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import List from '../../components/list/List'
import { logout } from '../../redux/userRedux'

const Home = () => {

  const dispatch = useDispatch();
  const handleClick=(e)=>{
    dispatch(logout());
  };
  return (

  
    <div>
    
    <Button variant="outlined" onClick={handleClick}>logout</Button>

    <List></List></div>
  )
}

export default Home