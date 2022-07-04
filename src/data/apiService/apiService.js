const baseUrl = 'http://localhost:3002/api/'


export const ApiService = {
    get(endPoint = '') {
        return fetch(baseUrl + endPoint)
            .then(response => response.json())
    }
}