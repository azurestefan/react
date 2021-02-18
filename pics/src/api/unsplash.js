import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID AENBVedtTVCF7wYLKuiohjvOVy7fi3dJJ2py2RCNqeE'
    }
});