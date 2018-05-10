// @flow

const parseSearchParams = (searchParams: string): Object => {
  const params = new window.URLSearchParams(searchParams);

  return Object.assign({}, ...Array.from(params.entries()).map(([key, value]) => ({ [key]: value })));
};

export default parseSearchParams;
