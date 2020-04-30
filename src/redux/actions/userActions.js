import { addDataActionType } from './../actionTypes/userActionTypes';

import axios from 'axios';

export const setData = (payload) => ({
    type:addDataActionType.ADD_DATA,
    payload:payload
});

export const getDataAsync = () => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res.data,'11');
            dispatch(setData(res.data));
        })
    }
}