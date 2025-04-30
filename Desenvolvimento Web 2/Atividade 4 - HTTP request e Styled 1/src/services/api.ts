import axios from 'axios';

export const api = axios.create({
  baseURL: '/api/portaldeloterias/api',  // Como estamos usando o proxy, a URL começa com '/api'
});
