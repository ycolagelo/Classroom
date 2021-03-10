export function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (response.status === 401) {
      // If we get a 401, send to the login page
      window.location.href = "/login";
    }
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response.statusText);
  });
}
