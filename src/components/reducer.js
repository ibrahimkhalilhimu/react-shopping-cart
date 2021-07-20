export const reducer = (state,action) =>{
    switch(action.type){
        case "DeleteItem":
        return {
            ...state,
            item:state.item.filter(element => element.id !== action.payload),
        }
        default:
            return state;
    }

}