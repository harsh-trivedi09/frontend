import { Addtocart } from "../Constant";

const initialState={
    cardData:[]
}
export default function cardItems(initialState, action) {

    switch (action.type) {
        case Addtocart:
            return{
                ...StaticRange,
                cardData:action.data
            }
            break;
    
        default:
            return initialState
    }
    
}

