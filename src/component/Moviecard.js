import React from 'react';

class Moviecard extends React.Component{
    render(){
        const { movie }=this.props;
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
                        <button className="favourite-btn">Add to Fav</button>
                    </div>

                </div>
            </div>
        );
    }
}
export default Moviecard;