import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SelectField() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{width: '100%'}}>
      <InputLabel id="inventory">Select Value</InputLabel>
      <Select
        labelId="inventory"
        id="inventory"
        value={selectedValue}
        label="Inventory"
        variant="filled"
        size="small"
        onChange={handleValueChange}
      >
        <MenuItem value="In Stock">In Stock</MenuItem>
        <MenuItem value="Out of Stock">Out of Stock</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectField;