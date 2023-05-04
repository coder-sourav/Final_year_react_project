import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { HotelReducer } from "./HoteReducer";

export const rootReducer=combineReducers({
    hotelReducer:HotelReducer,
})

export type AppState=ReturnType<typeof rootReducer>;

export const configureStore=()=>{
    return createStore(rootReducer,{},devToolsEnhancer({}));
}