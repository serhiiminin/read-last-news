// @flow

const parseSearchParams = (searchParams: string): Object => {
  if (!searchParams) return {};
  const params = new window.URLSearchParams(searchParams);

  return Array.from(params.entries())
    .reduce((obj, [key, value]) => Object.assign({}, obj, { [key]: value }), {});
};

export default parseSearchParams;
