require('dotenv').config();
const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://gorest.co.in/public/v2',
  headers: {
    Authorization: process.env.GOREST_TOKEN,
    'Content-Type': 'application/json'
  }
});

module.exports = apiClient;
