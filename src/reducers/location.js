

export default (state = [],action)=>{
    switch (action.type){
        case "SET_LOCATION":
            return action.payload
    }
}
