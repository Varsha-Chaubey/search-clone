const INIT_STATE = [];


const favoriteUnFavorite = (state = INIT_STATE, action) => {
    
    // console.log(action.title)
    switch(action.type){
        case "FAVORITE": return [...state, action.title];
        case "UNFAVORITE": return state.filter(s => s !== action.title);
        default: return state;
    }
}

export default favoriteUnFavorite; 
