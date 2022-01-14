const INIT_STATE = "No Favorite selected";


const favoriteUnFavorite = (state = INIT_STATE, action) => {
    
    // console.log(action.title)
    switch(action.type){
        case "FAVORITE": return action.title;
        case "UNFAVORITE": return state-action.title;
        default: return state;
    }
    
}

export default favoriteUnFavorite; 