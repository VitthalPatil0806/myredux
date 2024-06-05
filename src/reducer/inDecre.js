let initialState = 0;
let myActivities = (state = initialState,action) => {
switch(action.type){
    case "INCREAMENT": return state + 1;
    case "DECREAMENT": return state - 1;
    default: return state;
}
}
export default myActivities;
