export const apiUrl = 'http://localhost:8000/api'

export const AdminToken = ()=> {
    const data = JSON.parse(localStorage.getItem('adminInfo'));
    return data.token;
}