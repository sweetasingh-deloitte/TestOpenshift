import React from 'react'
import '../CreateTrip/CreateTrip.css'

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const currencies = [
  {
    value: "USD",
    label: "Delhi"
  },
  {
    value: "EUR",
    label: "Mumbai"
  },
  {
    value: "BTC",
    label: "Hyderabad"
  },
  {
    value: "JPY",
    label: "Banglore"
  }
];
const currencies1 = [
  {
    value: "USD",
    label: "Delhi"
  },
  {
    value: "EUR",
    label: "Mumbai"
  },
  {
    value: "BTC",
    label: "Hyderabad"
  },
  {
    value: "JPY",
    label: "Banglore"
  }
];
export default function CreateTrip() {
  const [currency, setCurrency] = React.useState("");
  const [currency1, setCurrency1] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange1 = (event) => {
    setCurrency1(event.target.value);
  };
  return (
    <div className='createTrips col-lg-12 container'>
      <h3 className='col-lg-12'> Create Trip</h3>
    
      <div className='col-lg-12 row mt-5 p-5'>
        <TextField
          id="standard-select-currency"
          select
          label="Source"
          value={currency}
          onChange={handleChange}
          helperText="Please select your Source Destnation"
          variant="standard"
          className='col-lg-4 mt-5'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className='col-lg-4 mt-5 text-center'>
         <h1>
          To
         </h1>
        </div>
        <TextField
          // id="standard-select-currency"
          id="standard-select-currency-native"
          select
          label="Destination"
          value={currency1}
          onChange={handleChange1}
          // SelectProps={{
          //   native: true
          // }}
          helperText="Please select Destination "
          variant="standard"
          className='col-lg-4 mt-5'
        >
          {currencies1.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div className='col-lg-12 row  p-5'>
      <TextField id="standard-basic"  className='col-lg-4 ' label="Capacity Available" variant="standard" />
        <div className='col-lg-8 mt-5 text-center'>
        </div>
        <Button className='mt-5 col-lg-4' variant="contained" endIcon={<SendIcon />}>
  Create A Trip
</Button>
      </div>
    </div>
  )
}
