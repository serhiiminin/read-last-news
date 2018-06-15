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
  let timeOfFirstRequest = Date.now();
  let differenceRequest = 0;
  let count = 0;

  for (let i = 0; i < keys.length; i += 1) {
    if (i === keys.length - 1) {
      if (count > 1 && differenceRequest > 0) {
        count = 0;
        return false;
      }
      yield keys[i];
      timeOfFirstRequest = Date.now();
      count += 1;
      i = -1;
    } else {
      const timeOfLastRequest = Date.now();

      differenceRequest += timeOfLastRequest - timeOfFirstRequest;
      yield keys[i];
    }
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
    .then(response => response)
    .catch(error => console.log(error));
};

export default api;
