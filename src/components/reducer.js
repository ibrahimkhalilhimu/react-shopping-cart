export const reducer = (state,action) =>{
    switch(action.type){
        case "DeleteItem":
        return {
            ...state,
            item:state.item.filter(element => element.id !== action.payload),
        }
        case "DeleteAllItem":
            return {
                ...state,
                item:[]
            }
        default:
            return state;
    }

}