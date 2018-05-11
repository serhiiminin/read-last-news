// @flow

const generateSearchParams = (previousSearchLine: string, newSearchParams: Object): string => {
  if (!previousSearchLine) return `?${new window.URLSearchParams(newSearchParams).toString()}`;

  const updatedSearchParams = new window.URLSearchParams(previousSearchLine);

  Object.entries(newSearchParams).forEach(([key, value]) => {
    if (value) {
      updatedSearchParams.set(key, value);
    } else {
      updatedSearchParams.delete(key);
    }
  });


  return `?${updatedSearchParams.toString()}`;
};

export default generateSearchParams;
