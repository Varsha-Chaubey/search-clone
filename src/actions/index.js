export const addFav = (title) => {
    // console.log(title )
    return{
        type: "FAVORITE",
        title
    }
}

export const removeFav = () => {
    return{
        type: "UNFAVORITE"
    }
}