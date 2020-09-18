import React from 'react';
import { AddFav,RemoveFav } from '../action/index';
class Moviecard extends React.Component{
    Favourite=()=>{
        this.props.dispatch(AddFav(this.props.movie))
    }
    Unfavourite=()=>{
        this.props.dispatch(RemoveFav(this.props.movie))
    }
    render(){
        const { movie,isFav }=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="MoviePoster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot} </div>
                    <div className="footer">
                        <div className="rating">IMDB : {movie.imdbRating}</div>
                        {isFav
                        ?<button className="unfavourite-btn" onClick={this.Unfavourite} >Unfavourite</button>
                        :<button className="favourite-btn" onClick={this.Favourite} >Favourite</button>
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default Moviecard;
