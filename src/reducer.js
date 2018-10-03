const initialStateContact = {
    tweets:[]
}

export const contactReducer = (state=initialStateContact, action={})=>{
    switch(action.type){
        case "Click_Search" :
        return Object.assign({},state,{tweets:action.payload});
        default:
        return state
    }   
}