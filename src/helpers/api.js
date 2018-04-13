import { BASE_API_URL, API_KEY } from './defaults';

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
  fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => console.log(error));

const api = params => {
  const searchUrl = new URLSearchParams(params);
  searchUrl.append('apiKey', API_KEY);
  return fetchJSON(`${BASE_API_URL}/top-headlines?${searchUrl}`);
};

export default api;
