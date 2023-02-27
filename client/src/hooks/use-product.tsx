import React from 'react';
import ApiService from 'services/api-service';

const useProduct = (id: string | undefined) => {
  const [product, setProduct] = React.useState<undefined | ProductModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);
  const [categories, setCategories] = React.useState<undefined | CategoryModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedProduct = await ApiService.fetchProduct(id);
        const fetchedCategories = await ApiService.getAllCategories();
        setProduct(fetchedProduct);
        setCategories(fetchedCategories);
        setLoading(false);
      })();
    }
  }, []);

  return [product, loading, categories] as const;
};

export default useProduct;
