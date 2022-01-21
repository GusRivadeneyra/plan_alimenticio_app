export const htmlBuilder = () => {};

export const optionsBuilder = (options) => {
  if (!options.length) {
    return null;
  }
  const optionsArr = options.map((option) => `<div>${option.name}</div>`);
  const optionsStr = optionsArr.join();
  return optionsStr;
};
