import * as nodeFetch from 'node-fetch';

export const getToken = async ()=>{
    const respond = await nodeFetch('http://localhost:2221/api/login', {
        method: 'POST',
        body: JSON.stringify({"username":"test@test.com", "password":"1234"})
    })
    if (respond.status !== 200) {
        throw new Error("An error occured trying to retrieve the login token.")
    }
    const res = await respond.json();
    return res.token
}
