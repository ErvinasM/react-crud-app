const isStringArray = (
    arr: Array<unknown | string>,
  ): arr is string[] => arr.every((str) => typeof str === 'string');

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  export const getProductFormValues = (form: HTMLFormElement | undefined): Omit<ProductModel, 'id'> => {
    const formData = new FormData(form);
    const title = formData.get('title');
    if (typeof title !== 'string') throw new Error('Missing Title');
    if (title.length < 2) throw new Error('title must have at least 2 symbols');
  
    const price = formData.get('price');
    if (typeof price !== 'string') throw new Error('Missing price');
    if (price.length < 1) throw new Error('price must have at least 1 number');
  
    const inventory = formData.get('inventory');
    if (typeof inventory !== 'string') throw new Error('Missing inventory');
    if (inventory.length == null) throw new Error('inventory is need to be selected');
  
    const category = formData.get('category');
    if (typeof category !== 'string') throw new Error('Missing category');
    if (category.length < 2) throw new Error('category must have at least 2 symbols');
  
    const body = formData.get('body');
    if (typeof body !== 'string') throw new Error('Missing description');
    if (body.length < 2) throw new Error('description must have at least 2 symbols');
  
    const images = formData.getAll('images');
    if (!isStringArray(images)) throw new Error('All images must be strings');
  
    const values = {
      title,
      price: `${price}€`,
      category,
      inventory,
      body,
      images: images.filter((img) => img !== ''),
    };
  
    return values;
  };
  