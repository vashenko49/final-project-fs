const buildFormData = (formData, data, parentKey) => {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof File) &&
    !(data instanceof Blob)
  ) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data === null ? '' : data;
    let newParentKey;

    if (parentKey.lastIndexOf('[') > 0) {
      newParentKey = parentKey
        .replace(/./g, (c, i) => (i === parentKey.lastIndexOf('[') ? '.' : c))
        .replace(/.$/, '');
    } else {
      newParentKey = parentKey;
    }

    formData.append(newParentKey, value);
  }
};
export const jsonToFormData = data => {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
};
