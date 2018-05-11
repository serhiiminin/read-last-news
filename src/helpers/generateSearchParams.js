// @flow

const generateSearchParams = (previousSearchLine: string, newSearchParams: Object): string => {
  if (!previousSearchLine) return `?${new window.URLSearchParams(newSearchParams).toString()}`;

  const updatedSearchParams = new window.URLSearchParams(previousSearchLine);

  const newKeyValue = Object.entries(newSearchParams)[0];

  if (newKeyValue[1]) {
    updatedSearchParams.set(newKeyValue[0], newKeyValue[1]);
  } else {
    updatedSearchParams.delete(newKeyValue[0]);
  }
  return `?${updatedSearchParams.toString()}`;
};

export default generateSearchParams;
