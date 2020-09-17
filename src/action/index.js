// {
//     type:'Add_movies'
//     movies:[{M1},{m2}]
// }
//Action Types
export const Add_movies='Add_movies';
export const Add_fav='Add_fav';
export const Remove_fav='Remove_fav';
export const Show_MovieTab='Show_MovieTab';
export const Add_Movie_Search='Add_Movie_Search';
export const Add_movies_to_list ='Add_movies_to_list';
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
export function addMovieToList(movie){
    return {
        type:Add_movies_to_list,
        movie
    }
}
export function AddMovieSearch(movie){
    return {
        type:'Add_Movie_Search',
        movie
    }
}
export function handleMovieSearch(movie){
    const url=`https://www.omdbapi.com/?apikey=3952e5aa&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then((response)=>response.json())
        .then((movie)=>{
            dispatch(AddMovieSearch(movie));
        })
    }
}
