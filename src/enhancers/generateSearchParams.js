const generateSearchParams = (previousSearchLine, newSearchParams) => {
  if (!previousSearchLine) return `?${new window.URLSearchParams(newSearchParams).toString()}`;

  const updatedSearchParams = new window.URLSearchParams(previousSearchLine);
  const newKeyValue = Object.entries(newSearchParams)[0];

  updatedSearchParams.set(newKeyValue[0], newKeyValue[1]);
  return `?${updatedSearchParams.toString()}`;
};

export default generateSearchParams;
