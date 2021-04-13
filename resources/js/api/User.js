import axios from 'axios';

export default {
    
    all() {
        // 不支持分页
        return axios.get('/api/users');
    },
    find() {
        return axios.get(`/api/users/${id}`);
    },
    update() {
        return axios.put(`/api/users/${id}`, data);
    },
    login() {
        return axios.post('/api/login', data);
    },
    loginSocial() {
        return axios.post(`/api/${social}`, data)
    },
    forgot() {
        return axios.post('/api/password/email', data)
    },
    reset() {
        return axios.post('/api/password/reset', data)
    }
    
}