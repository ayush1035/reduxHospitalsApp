import * as path from "../constants/pathConstants.js";

export const getApiCall = () => {
    return fetch(path.LOCAL_PATH_GET, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};

export const postApiCall = (concerned) => {
    return fetch(path.LOCAL_PATH_POST, {
        method: 'post',
        body: JSON.stringify(concerned),
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};