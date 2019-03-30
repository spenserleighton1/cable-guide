import config from './config';

export const apiFetch = (path, filter = '') => {
  return fetch(`${config.url}${path}?api_key=${config.apiKey}${filter}`, {
    method: 'GET'
  })
}
