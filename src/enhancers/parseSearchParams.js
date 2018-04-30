// @flow

const parseSearchParams = (searchParams: string): Object => {
  if (!searchParams) return {};
  const params = new window.URLSearchParams(searchParams);

  return Object.assign({}, ...Array.from(params.entries()).map(([key, value]) => ({ [key]: value })));
};

export default parseSearchParams;
