
export const getHeaders = () => {
    const token = localStorage.getItem('authorization/token');

    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}