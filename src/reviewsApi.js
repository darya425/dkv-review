import axios from 'axios';

axios.defaults.baseURL = 'https://dkv-nest-review-api.herokuapp.com';

export const sendPostRequest = async body => {
  try {
    const { data } = await axios.post('/api/review', body);
    return data;
  } catch (err) {
    console.error(err);
  }
};
