import { apiData, parameters } from './../defaults';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);

  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const fetchJSON = url =>
  window.fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => console.log(error));

const api = params => {
  const searchUrl = Object.keys(params).length !== 0
    ? new window.URLSearchParams(params)
    : new window.URLSearchParams(parameters.defaultParams);

  searchUrl.append('apiKey', apiData.API_KEY);
  return fetchJSON(`${apiData.BASE_API_URL}/top-headlines?${searchUrl.toString()}`);
};

export default api;
