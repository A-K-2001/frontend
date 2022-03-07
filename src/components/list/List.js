
import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import Card from '../card/Card'


const Filter = styled.div`
justify-content: center;
`;

const List = () => {
  return (
    <div>

    <Filter>
        <input placeholder='Category'></input>
        <Button variant="outlined">Filter</Button>
        <Button variant="outlined" disabled>
  Disabled
</Button>
    </Filter>
     <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>


     </div>
   </div>
  </div>
  )
}

export default List