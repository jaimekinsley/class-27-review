export const shorten = (longUrl) => {
  return fetch('https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': null
    },
    body: `url=${longUrl}`
  })
    .then(res => res.json())
    .then(({ result_url }) => result_url);
};
