import { Add_movies,Add_fav,Remove_fav,Show_MovieTab } from '../action/index'
const initialState={
    movies:[],
    fav:[],
    IsFavouriteTab:false
}
export default function movies(state=initialState,action){
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
    return state;
}