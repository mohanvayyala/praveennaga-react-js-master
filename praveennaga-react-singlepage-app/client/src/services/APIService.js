export const testAPI = () => {
    return fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .catch(err => 'Apologies API is Down');
}