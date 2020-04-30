import { addDataActionType } from './../actionTypes/userActionTypes';
const INITIAL_STATE = {
           jsonData:[]
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
       case addDataActionType.ADD_DATA:
           { 
             return {
                 ...state,
                 jsonData:action.payload
             }
          }
         
       default:   
             return state;
    }
} 

export default userReducer;