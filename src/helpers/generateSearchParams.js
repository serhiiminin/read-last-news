// @flow

const generateSearchParams = (previousSearchLine: string, newSearchParams: Object): string => {
  const searchParams = new window.URLSearchParams(previousSearchLine);

  Object.entries(newSearchParams).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  });

  return `?${searchParams.toString()}`;
};

export default generateSearchParams;
