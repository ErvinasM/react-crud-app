import React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import Img from 'components/ui/img';
import * as Styled from './styled';
import ApiService from 'services/api-service';

const hDel = async (id) => {
  try {
    await ApiService.handleDelete(id);
    console.log(`Data with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error(error);
  }
};

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  images,
  price,
  inventory,
}) => {
  const navigate = useNavigate();
  return (
  <Stack sx={{ border: 1.6, borderColor: '#efefef', borderRadius: '15px',
   p: 2, gap: 1, boxShadow: '#f4f4f4a1 0px 0px 7px 1px', cursor: 'pointer' }}>
    <Img src={images[0]} alt="" sx={{ aspectRatio: '1.2', width: 1, borderRadius: '15px', objectFit: 'contain', background: '#f9f8f8' }} />
    <Styled.ProductCardContent>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 400 }}>{title}</Typography>
        <Typography  sx={{ fontSize: '0.9rem', fontWeight: 300, color: "#919191"}}>{`${category}`}</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '1rem', fontWeight: 400 }}>{price}</Typography>
        
        <Box sx={{display: 'flex', gap: '5px'}}>
          <Styled.EditButton  onClick={() => navigate(routes.UpdateProductPage.createLink(id))}>
          <EditOutlinedIcon sx={{ width: '1rem', height: '1rem'}} /></Styled.EditButton>

          <Styled.DeleteButton onClick={() => hDel(id)}>
          <DeleteOutlinedIcon sx={{ width: '1rem', height: '1rem'}} /></Styled.DeleteButton>
        </Box>
      </Box>

    </Styled.ProductCardContent>
  </Stack>
  );
};

export default ProductCard;
