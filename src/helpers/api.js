// @flow

import { apiData, parameters } from './../defaults';

const checkStatus = (response: Object) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error: Object = new Error(response.statusText);

  error.response = response;
  throw error;
};

const parseJson = response => response.json();

function* getWorkingApiKey(keys) {
  const keysWithLastUsedTime = keys.map(apiKey => ({ key: apiKey, lastUsed: null }));

  for (let i = 0; i < keysWithLastUsedTime.length; i += 1) {
    const currentKey = keysWithLastUsedTime[i];
    const currentTime = Date.now();

    if (currentTime - currentKey.lastUsed < 500) return false;
    currentKey.lastUsed = currentTime;
    yield currentKey.key;
    if (keysWithLastUsedTime.length - 1 === i) i = -1;
  }
  return false;
}
const generatorKey = getWorkingApiKey(apiData.API_KEYS);

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

let currentApiKey = generatorKey.next();

const api = (params: Object, typeData: string) => {
  const searchUrl = Object.keys(params).length !== 0
    ? new window.URLSearchParams(params)
    : new window.URLSearchParams(parameters.defaultParams);

  if (!currentApiKey.done) {
    searchUrl.append('apiKey', currentApiKey.value);
  } else {
    throw new Error('No free API keys. Try later');
  }

  return fetchJson(`${apiData.BASE_API_URL}/${typeData}?${searchUrl.toString()}`)
    .catch(error => {
      if (error.message === 'TypeError: Failed to fetch') {
        currentApiKey = generatorKey.next();
        return api(params, typeData);
      }
      return error;
    })
    .then(response => response);
};

export default api;
