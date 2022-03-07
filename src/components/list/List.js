
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


const Filter = styled.div`
justify-content: center;
`;

const List = () => {



  const [neww, setNeww] = useState('');
  const [equity, setEquity] = useState('')
  const [profit, setProfit] = useState('')
  const [evolution, setEvolution] = useState('')


  const handleChangenew = (event) => {
    setNeww(event.target.value);

    const getcdata = async () => {
      try {
        const res = await axios.get("/api/company?new=true");
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();


    setEquity('');
    setProfit('');
    setEvolution('');

  };

  const handleChangeequity = (event) => {
    setEquity(event.target.value);
    const getcdata = async () => {
      try {
        const res = await axios.get("/api/company?equity=" + event.target.value);
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();

    setNeww('');

    setProfit('');
    setEvolution('');
  };


  const handleChangeprofit = (event) => {
    setProfit(event.target.value);
    const getcdata = async () => {
      try {
        const res = await axios.get("/api/company?profit=" + event.target.value);
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();

    setNeww('');
    setEquity('');

    setEvolution('');
  };

  const handleChangeevolution = (event) => {
    setEvolution(event.target.value);
    const getcdata = async () => {
      try {
        const res = await axios.get("/api/company?evolution=" + event.target.value);
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();

    setNeww('');
    setEquity('');
    setProfit('');

  };

  const [cdata, setCdata] = useState([]);

  useEffect(() => {

    const getcdata = async () => {
      try {
        const res = await axios.get("/api/company/");
        setCdata(res.data);

      } catch (err) {
        console.log(err);
      };
    };
    getcdata();

  }, []);


  // console.log(cdata);

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

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">profit</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={profit}
          label="profit"
          onChange={handleChangeprofit}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={100000}>10 L</MenuItem>
          <MenuItem value={300000}>30 L</MenuItem>
          <MenuItem value={500000}>50 L</MenuItem>
          <MenuItem value={1000000}>1 Cr</MenuItem>
        </Select>
        <FormHelperText>Yearly profit</FormHelperText>

      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">evolution</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={evolution}
          label="evolution"
          onChange={handleChangeevolution}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={500000}>50 L</MenuItem>
          <MenuItem value={1000000}>1 Cr</MenuItem>
          <MenuItem value={10000000}>10 Cr</MenuItem>
        </Select>
        <FormHelperText>Net Evolution</FormHelperText>

      </FormControl>



      <br></br>


      <Filter>
        <input placeholder='Category'></input>

        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </Filter>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {
            cdata.map((c) => (
              <Companycard details={c} />
            ))
          }


        </div>
      </div>
    </div>
  )
}

export default List