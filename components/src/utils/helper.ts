export const getSizeType = (type) => {
  const typeList = ['large', 'small'];
  if (typeList.includes(type)) {
    return type;
  }
  return false;
};
