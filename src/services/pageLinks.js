export const getPageLinks = (longUrl) => {
  return fetch(`https://url-intelligence.p.rapidapi.com/rip?target=${longUrl}`, {
    headers: {
      'X-RapidAPI-Key': '14172f8e4fmshe5b08dc309ece90p1d6173jsn495469dfbbd8'
    }
  })
    .then(res => res.json())
    .then(({ links }) => links);
};
