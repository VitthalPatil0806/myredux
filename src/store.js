import rootReducer from "./reducer/index";
import { createStore } from "redux";

let stores = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default stores;