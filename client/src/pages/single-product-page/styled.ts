import { styled, Stack } from '@mui/material';

export const ProductsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '30px',
  padding:'30px',
  maxWidth: theme.breakpoints.values.lg,
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
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
