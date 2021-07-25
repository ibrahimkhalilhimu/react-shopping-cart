export const reducer = (state,action) =>{
    // switch(action.type){
    //     case "DELETE_ITEM":
    //     return {
    //         ...state,
    //         item:state.item.filter(element => element.id !== action.payload),
    //     }
    //     case "DELETE_ALL_ITEM":
    //         return {
    //             ...state,
    //             item:[]
    //         }
    //         case "INCREASE":
            
    //            const updateCart = state.item.map((element) =>{
    //                    if(element.id === action.payload){
    //                        return {...element, quantity: element.quantity + 1};
    //                    }
    //                    console.log(element);
    //                    return element;
                       
    //                })
    //                return {...state, item: updateCart}               
    //     default:
    //         return state;
    // }


    if (action.type === "DELETE_ITEM") {
        return {
          ...state,
          item: state.item.filter((curElem) => {
            return curElem.id !== action.payload;
          }),
        };
      }
    
      if (action.type === "DELETE_ALL_ITEM") {
        return { ...state, item: [] };
      }
    
      if (action.type === "INCREASE") {
        let updatedCart = state.item.map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity + 1 };
          }
          return curElem;
        });
    
        return { ...state, item: updatedCart };
      }

      if(action.type === "DECREASE"){
        let updatedCart = state.item.map((curElem) => {
          if( curElem.id === action.payload && curElem.quantity > 0){
            return {...curElem, quantity:curElem.quantity - 1}
          }
          return curElem;
        })

        return {...state, item: updatedCart}
      }
      
    
    return state;
}