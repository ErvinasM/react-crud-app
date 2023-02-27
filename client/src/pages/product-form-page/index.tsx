import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,

} from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { getProductFormValues } from './helpers';
import SelectField from './selectField';
import * as Styled from './styled';
import ImagesField from './imagesField';

const ProductFormPage = () => {



  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getProductFormValues(formRef.current);
      console.log('Vykdomas sukūrimas');
      console.log(values);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on formn submit. Contact system administrator.');
      }
    }
  };

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack sx={{ gap: 2, alignItems: 'center' }} component="form" onSubmit={handleSubmit} ref={formRef}>
          <Typography sx={{fontSize: '1.6rem', alignItems: 'center', display: 'flex'}} variant="h4"><CategoryOutlinedIcon sx={{ fontSize: '1.6rem', mr: '1rem'}} />Add new product</Typography>
          <TextField label="Title" fullWidth variant="filled" size="small"/>
          <TextField label="Category" fullWidth variant="filled" size="small"/>
          <TextField label="Price" type="number" inputProps={{ step: '0.01' }} fullWidth variant="filled" size="small"/>
          <SelectField/>
          <TextField label="Description" fullWidth variant="filled" size="small" multiline rows={4}/>
          <ImagesField />
          <Button variant="contained" color="primary" size="large" fullWidth>Add</Button>
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  );
};

export default ProductFormPage;
