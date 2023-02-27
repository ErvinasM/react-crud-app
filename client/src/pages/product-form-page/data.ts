const title = {
    edit: 'Update product',
    create: 'Add new product',
  };
  const btnText = {
    edit: 'Update',
    create: 'Add',
  };
  const color = {
    edit: 'warning',
    create: 'primary',
  } as const;
  const colorMain = {
    edit: 'warning.main',
    create: 'primary.main',
  } as const;
  
  export const getModeData = (mode: 'create' | 'edit') => ({
    title: title[mode],
    btnText: btnText[mode],
    color: color[mode],
    colorMain: colorMain[mode],
  });
  