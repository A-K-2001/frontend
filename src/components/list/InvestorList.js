
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Companycard from '../card/Companycard'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Investorcard from '../card/Investorcard';



const Filter = styled.div`
justify-content: center;
`;
export const InvestorList = () => {

    const [neww, setNeww] = useState('');
  const [equity, setEquity] = useState('')
  



  const handleChangenew = (event) => {
    setNeww(event.target.value);

    const getcdata = async () => {
      try {
        const res = await axios.get("/api/investor?new=true");
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();


    setEquity('');
    

  };

  const handleChangeequity = (event) => {
    setEquity(event.target.value);
    const getcdata = async () => {
      try {
        const res = await axios.get("/api/investor?equity=" + event.target.value);
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();

    setNeww('');

  };


 

  const [cdata, setCdata] = useState([]);

  useEffect(() => {

    const getcdata = async () => {
      try {
        const res = await axios.get("/api/investor/");
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();

  }, []);


  return (
    <div>
       


      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">recently added</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={neww}
          label="New"
          onChange={handleChangenew}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>

        </Select>
        <FormHelperText>With label + helper text</FormHelperText>

      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">equity</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={equity}
          label="equity"
          onChange={handleChangeequity}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10%</MenuItem>
          <MenuItem value={20}>20%</MenuItem>
          <MenuItem value={30}>30%</MenuItem>
          <MenuItem value={40}>40%</MenuItem>



        </Select>
        <FormHelperText>MORE THAN...</FormHelperText>

      </FormControl>

     


      <br></br>


      <Filter>
        {/* <input placeholder='Category'></input>

        <Button variant="outlined" disabled>
          Disabled
        </Button> */}
      </Filter>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {
            cdata.map((c) => (
              <Investorcard details={c} />
            ))
          }


        </div>
      </div>
        
    </div>
  )
}
