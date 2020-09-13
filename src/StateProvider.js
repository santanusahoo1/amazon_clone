//Track Basket

import React, { createContext,useContext,useReducer } from "react";

//Date Layer
export const StateContext=createContext();

//build a provider
export const StateProvider=({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//USE INSIDE IT INSIDE OF A COMPONENT

export const useStateValue = () => useContext(StateContext);