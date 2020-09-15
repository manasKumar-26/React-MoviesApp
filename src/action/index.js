// {
//     type:'Add_movies'
//     movies:[{M1},{m2}]
// }
//Action Types
export const Add_movies='Add_movies';
export const Add_fav='Add_fav';
export const Remove_fav='Remove_fav';
export const Show_MovieTab='Show_MovieTab';
//Action Creators
export function AddMovie(movies){
    return {
        type:Add_movies,
        movies,
      }
}
export function AddFav(movie){
    return {
        type:Add_fav,
        movie,
    }
}
export function RemoveFav(movie){
    return{
        type:Remove_fav,
        movie
    }
}
export function ShowTab(value){
    return {
        type:Show_MovieTab,
        value,
    }
}