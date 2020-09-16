import { Add_movies,Add_fav,Remove_fav,Show_MovieTab,Add_Movie_Search,Add_movies_to_list } from '../action/index';
import { combineReducers } from 'redux'
//Initaial State Defination
const initialMovieState={
    movies:[],
    fav:[],
    IsFavouriteTab:false
}
const initialSearchState={
    result:{},
    showSearchResults:false,

}
const initialRootState={
    movies:initialMovieState,
    search:initialSearchState,
}
export function movies(state=initialMovieState,action){
    if(action.type === Add_movies){
        return {
            ...state,
            movies:action.movies
        }
    }
    else if(action.type === Add_fav){
        return {
            ...state,
            fav:[action.movie,...state.fav]
        }
    }
    else if(action.type === Remove_fav){
        let newFav=state.fav.filter((movie)=>{
            return movie !== action.movie
        })
        return {
            ...state,
            fav:newFav
        }
    }
    else if(action.type === Show_MovieTab){
        return{
            ...state,
            IsFavouriteTab:action.value
        }
    }
    else if(action.type === Add_movies_to_list){
        return {
            ...state,
            movies:[action.movie,...state.movies]
        }
    }
    return state;
}
export function search(state=initialSearchState,action){
    if(action.type === Add_Movie_Search){
        return {
            ...state,
            result:action.movie,
            showSearchResults:true,
        }
    }
    else if(action.type === Add_movies_to_list){
        return {
            ...state,
            showSearchResults:false
        }
    }
    return state;
}
// export default function rootReducer(state=initialRootState,action){
//     return {
//         list:movies(state.list,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers({
    list:movies,
    search:search
});