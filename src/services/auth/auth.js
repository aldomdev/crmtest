import { getHeaders } from './headers.js';
import { axios } from 'axios';

export const login = async () => {
    // const all = Promise.all([])
    const headers = getHeaders();
    console.log(headers);
}