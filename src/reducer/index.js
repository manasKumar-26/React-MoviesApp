export default function movies(state=[],action){
    if(action.type === 'Add_movies'){
        return action.movies;
    }
    return state;
}