import axios from 'axios';

const headers = {
  Accept: 'application/json',
  type: 'application/json'
};

// APY_KEY is sensitive so for security reason it would need to be stored in the environment variable,
// and retrieved process.ENV.APY_KEY for example.
const APY_KEY = '9wur7sdh84azzazdt3ye54k4';
export const getResponse = section =>
  axios.get(`https://content.guardianapis.com/search?q=${section}&api-key=${APY_KEY}`, {
    headers
  });
