import axios from 'axios';
import { create } from 'lodash';

export default {
    
    all() {
        // 不支持分页
        return axios.get('/api/users');
    },
    find(id) {
        return axios.get(`/api/user/{id}`);
    },
    update(id, data) {
        return axios.put(`/api/user/${id}/update`, data);
    },
    login(data) {
        return axios.post('/api/login', data);
    },
    logout() {
        window.sessionStorage.removeItem('cle_store_token');
    },
    loginSocial(data) {
        return axios.post(`/api/${social}`, data);
    },
    register(data) {
        return axios.post('/api/register', data);
    },
    forgot(data) {
        return axios.post('/api/password/email', data)
    },
    reset(data) {
        return axios.post('/api/password/reset', data)
    },
    confirm(data) {
        return axios.post('/api/password/confirm', data)
    }
}