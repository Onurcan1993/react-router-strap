import React, { useReducer } from "react";

export const initialState = {
    checked1:null,
    checked2:null,
    checked3:null,
    active1:null,
    active2:null,
    active3:null,
};

export default function reducer (state , action)  {
  switch (action.type) {

    case "online-service":
        return { ...state, checked1:action.payload, active1:action.payload, };
    case "larger-storage":
        return {...state, checked2:action.payload, active2:action.payload};
    case "customizable":
        return {...state, checked3:action.payload, active3:action.payload};
    case "online":
        return {...state,active1:!action.payload};
    case "larger":
        return {...state, active2:!action.paydoad};
    case "custom":
        return {...state, active3:!action.payload};
  default:
    return state
  }
}

