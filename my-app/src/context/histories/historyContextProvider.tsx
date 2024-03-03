import {createContext, useContext, useReducer} from "react";
import {historyReducer} from "./historyReduser"

const initialState = {};

const Context = createContext ( initialState);


const ContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(historyReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    )
}
console.log(initialState);

export const useHistoryContext = () => {
    const context = useContext(Context);
    if (context) {
        return context;
    }
    throw new Error("Context problem");
};

export default ContextProvider;