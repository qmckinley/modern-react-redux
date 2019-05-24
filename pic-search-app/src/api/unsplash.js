import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fb55056570a6cc10ffa2b2dc1b784b02bdda5c811975e4248542fee8b12c08c6'
  }
});