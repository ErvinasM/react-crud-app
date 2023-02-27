import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import AdminPage from 'pages/admin-page';
import ProductFormPage from 'pages/product-form-page';
import SingleProductPage from 'pages/single-product-page/index';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.ProductFormPage,
        element: <ProductFormPage />,
      },
      {
        path: routes.SingleProductPage.path,
        element: <SingleProductPage />,
      },
      {
        path: routes.AdminPage,
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
