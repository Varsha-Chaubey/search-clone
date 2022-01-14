import { createStore } from "redux";
import rootReducer from "./reducers/index";

const load = async() =>{
    try{
       const st = await window.localStorage.getItem("store");
    //    console.log(st);
    //    console.log(JSON.parse(st));
       if(st === null) return undefined;
       return JSON.parse(st);
    }catch(e){
        console.log(e);
        return undefined
    }
}
console.log(load())
// console.log("call")
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;