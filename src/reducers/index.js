import favoriteUnFavorite from "./addRemoveFav";

import {combineReducers} from "redux";

const rootReducer = combineReducers(
    {
        favoriteUnFavorite,
        // car: "car"
    }
);

export default rootReducer;