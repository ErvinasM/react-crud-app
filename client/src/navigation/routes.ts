const singleProductPageRoot = '/product/';
const updateProductPageRoot = '/update-product/';


const staticRoutes = {
  HomePage: '/',
  AdminPage: '/admin',
  ProductFormPage: '/create-product',
} as const;

const dynamicRoutes = {
  SingleProductPage: {
    path: `${singleProductPageRoot}:id`,
    createLink: (id: string | number) => `${singleProductPageRoot}${id}`,
  },
  UpdateProductPage: {
    path: `${updateProductPageRoot}:id`,
    createLink: (id: string | number) => `${updateProductPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
