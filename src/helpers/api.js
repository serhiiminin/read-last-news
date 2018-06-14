// @flow

import { apiData, parameters } from './../defaults';

const apiKeys = apiData.API_KEYS;

let apiKeysIterator = apiKeys[Symbol.iterator]();
let currentApiKey = apiKeysIterator.next();

const checkStatus = (response: Object) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error: Object = new Error(response.statusText);

  error.response = response;
  throw error;
};

const parseJson = response => response.json();

const fetchJson = url =>
  window.fetch(url)
    .then(checkStatus)
    .then(parseJson)
    .catch(error => {
      if (error.message === 'Failed to fetch' && !window.navigator.onLine) {
        throw new Error('Check your internet connection');
      }
      throw new Error(error);
    });

const api = (params: Object, typeData: string) => {
  const searchUrl = Object.keys(params).length !== 0
    ? new window.URLSearchParams(params)
    : new window.URLSearchParams(parameters.defaultParams);

  if (!currentApiKey.done) {
    searchUrl.append('apiKey', currentApiKey.value);
  } else {
    apiKeysIterator = apiKeys[Symbol.iterator]();
    currentApiKey = apiKeysIterator.next();
    searchUrl.append('apiKey', currentApiKey.value);
  }
  return fetchJson(`${apiData.BASE_API_URL}/${typeData}?${searchUrl.toString()}`)
    .catch(error => {
      currentApiKey = apiKeysIterator.next();
      return api(params, typeData);
    })
    .then(response => response);
};

export default api;
