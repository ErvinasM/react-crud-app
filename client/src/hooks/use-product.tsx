import React from 'react';
import ApiService from 'services/api-service';

const useProduct = (id: string | undefined) => {
  const [product, setProduct] = React.useState<undefined | ProductModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedProduct = await ApiService.fetchProduct(id);
        setProduct(fetchedProduct);
        setLoading(false);
      })();
    }
  }, []);

  return [product, loading] as const;
};

export default useProduct;
