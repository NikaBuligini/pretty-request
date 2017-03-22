import fetch from 'isomorphic-fetch';

function callApi(endpoint, method, headers, body) {
  let init = {
    method,
    credentials: 'same-origin',
  };

  if (headers) init = Object.assign(init, { headers });
  if (body) init = Object.assign(init, { body });

  return fetch(endpoint, init)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    });
}

export default callApi;
