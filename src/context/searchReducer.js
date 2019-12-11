export const SearchReducer = (state, action) => {
    switch( action.type ){
        case "NEW_SEARCH":
            return {questions: action.payload, key:action.key}
        default:
            return {questions:{data: ""}}
    }
}