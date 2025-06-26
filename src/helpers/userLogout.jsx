export function userLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';

}