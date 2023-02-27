import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type SelectFieldProps = {
  defaultInventory?: string,
};

const SelectField: React.FC<SelectFieldProps> = ({ defaultInventory }) => {
  const [selectedValue, setSelectedValue] = useState(defaultInventory);

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <FormControl sx={{width: '100%'}}>
      <InputLabel id="inventory">Inventory</InputLabel>
      <Select
        labelId="inventory"
        id="inventory"
        value={selectedValue}
        label="Inventory"
        variant="filled"
        size="small"
        name="inventory"
        defaultValue="In Stock"
        onChange={handleValueChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select an option' }}
      >
        <MenuItem value="In Stock">In Stock</MenuItem>
        <MenuItem value="Out of Stock">Out of Stock</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectField;
