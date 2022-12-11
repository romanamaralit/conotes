import sendRequest from './send-request';
const BASE_URL = '/api/notebooks';

export function index() {
    return sendRequest(BASE_URL);
}

export function show(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function updateNotebook(id, notebook) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', notebook);
}

export function create(notebook) {
    return sendRequest(BASE_URL, 'POST', notebook);
}

export function deleteNotebook(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}