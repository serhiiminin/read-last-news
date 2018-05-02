// @flow
import { parameters } from '../defaults';

const parseSearchParams = (searchParams: string, country: string): Object => {
  const params = new window.URLSearchParams(searchParams);

  const queryParams = Object.assign({}, ...Array.from(params.entries()).map(([key, value]) => ({ [key]: value })));

  return !country
    ? queryParams
    : {
      ...queryParams,
      [parameters.country]: country,
    };
};

export default parseSearchParams;
