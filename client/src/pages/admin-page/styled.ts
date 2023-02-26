import { styled, Stack, Button } from '@mui/material';

export const ProductsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '20px',
  padding:'20px',
  maxWidth: theme.breakpoints.values.lg,
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}));

export const ProductCardContent = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
}));

export const ProductCardRating = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-end',
  fontSize: '1.3rem',
  gap: '0.1em',
  color: theme.palette.warning.main,
  fontWeight: 500,
}));

export const EditButton  = styled(Button)(({ theme }) => ({
  mt: 1,
  borderRadius: '4px',
  fontSize: '0.6rem',
  minWidth: '0',
  p: '0.6rem',
  color: 'white',
  background: 'orange',
}));


export const DeleteButton  = styled(Button)(({ theme }) => ({
  mt: 1,
  borderRadius: '4px',
  fontSize: '0.6rem',
  minWidth: '0',
  p: '0.6rem',
  color: 'white',
  background: 'red',
}));