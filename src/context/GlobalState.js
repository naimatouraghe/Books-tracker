import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    readlist: localStorage.getItem("readlist")
        ? JSON.parse(localStorage.getItem("readlist"))
        : [],
    watched: localStorage.getItem("read")
        ? JSON.parse(localStorage.getItem("read"))
        : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("readlist", JSON.stringify(state.readlist));
        localStorage.setItem("read", JSON.stringify(state.read));
    }, [state]);

    // actions
    const addBookToReadList = (book) => {
        dispatch({ type: "ADD_BOOK_TO_READLIST", payload: book });
    };

    const removeBookFromReadList = (id) => {
        dispatch({ type: "REMOVE_BOOK_FROM_READLIST", payload: id });
    };

    const addBookToRead = (book) => {
        dispatch({ type: "ADD_BOOK_TO_READ", payload: book });
    };

    const moveToReadlist = (book) => {
        dispatch({ type: "MOVE_TO_READLIST", payload: book });
    };

    const removeFromRead = (id) => {
        dispatch({ type: "REMOVE_FROM_READ", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                readlist: state.readlist,
                read: state.read,
                addBookToReadList,
                removeBookFromReadList,
                addBookToRead,
                moveToReadlist,
                removeFromRead,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};