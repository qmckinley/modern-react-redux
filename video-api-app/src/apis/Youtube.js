import axios from 'axios';

const KEY = 'AIzaSyBYMqiuDsfzkGoVgErd6v-dLubyaUPxB5I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});