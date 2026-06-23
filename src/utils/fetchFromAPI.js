import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { maxResults: '50' },
  headers: {
    // Note: You will need a free RapidAPI Key from the "YouTube v3.1" API to fetch live data
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE', 
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};