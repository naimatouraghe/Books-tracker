export default (state, action) => {
    switch (action.type) {
        case "ADD_BOOK_TO_READLIST":
            return {
                ...state,
                booklist: [action.payload, ...state.booklist],
            };
        case "REMOVE_BOOK_FROM_READLIST":
            return {
                ...state,
                booklist: state.booklist.filter(
                    (book) => book.id !== action.payload
                ),
            };
        case "ADD_BOOK_TO_READ":
            return {
                ...state,
                booklist: state.booklist.filter(
                    (book) => book.id !== action.payload.id
                ),
                read: [action.payload, ...state.read],
            };
        case "MOVE_TO_READLIST":
            return {
                ...state,
                read: state.read.filter(
                    (book) => book.id !== action.payload.id
                ),
                readlist: [action.payload, ...state.readlist],
            };
        case "REMOVE_FROM_READ":
            return {
                ...state,
                read: state.read.filter((book) => book.id !== action.payload),
            };
        default:
            return state;
    }
};