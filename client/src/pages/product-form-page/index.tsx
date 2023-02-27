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
  Autocomplete,

} from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { getProductFormValues } from './helpers';
import SelectField from './selectField';
import * as Styled from './styled';
import ImagesField from './imagesField';
import { getModeData } from './data';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from 'hooks/use-product';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';

const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, loadingProductData] = useProduct(id);
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const mode = id !== undefined ? 'edit' : 'create';
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(mode);
  
  const [catValues, setCategories] = React.useState<CategoryModel>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedCategories = await ApiService.getAllCategories();
      setCategories(fetchedCategories);
    })();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      const values = getProductFormValues(formRef.current);
      if (mode === 'create') {
        await ApiService.addProduct(values);
        navigate(routes.AdminPage);
      } else {
        await ApiService.updateProduct(id as any, values);
        navigate(routes.AdminPage);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error submiting form data. Please contact a developer.');
      }
    }
  };

  if (loadingProductData) return null;
  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack sx={{ gap: 2, alignItems: 'center' }} component="form" onSubmit={handleSubmit} ref={formRef}>
          <Typography sx={{fontSize: '1.6rem', alignItems: 'center', display: 'flex'}} variant="h4"><CategoryOutlinedIcon sx={{ fontSize: '1.6rem', mr: '1rem'}} />Add new product</Typography>
          <TextField name="title" color={color} defaultValue={product?.title} label="Title" fullWidth variant="filled" size="small"/>
          <Autocomplete freeSolo disablePortal id="combo-box-demo" options={Object.keys(catValues)} fullWidth size="small" defaultValue={product?.category} renderInput={(params) => <TextField  variant="filled" name="category" label="Category" {...params} />}
/>
          <TextField name="price" label="Price" color={color} type="number" inputProps={{ step: '0.01' }} fullWidth variant="filled" size="small" defaultValue={product?.price.slice(0, -1)}/>
          <SelectField defaultInventory={product?.inventory}/>
          <TextField name="body" label="Description" defaultValue={product?.body} fullWidth variant="filled" size="small" multiline rows={4}/>
          <ImagesField  color={color} colorMain={colorMain} defaultImages={product?.images} />
          <Button variant="contained"
            color={color}
            size="large"
            fullWidth
            type="submit">{btnText}</Button>
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  );
};

export default ProductFormPage;
