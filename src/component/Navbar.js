import React from 'react';
import {handleMovieSearch,addMovieToList} from '../action/index';
import {storeContext} from '../index';
class Navbar extends React.Component{
    constructor(){
       super();
       this.state={
           searchText:'',
       }
    }
    handleAddtoMovies=(movie)=>{
        this.setState({
            searchText:'',
        },()=>{
            this.props.dispatch(addMovieToList(movie));
        })
       
    }
    handleSearch=()=>{
        this.props.dispatch(handleMovieSearch(this.state.searchText));
    }
    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value,
        })
    }
    render(){
        const {result:movie,showSearchResults} =this.props.search;
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search..</button>
                    {showSearchResults && 
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="Search Poster"/>
                                <div className="movie-info">
                                <span>{movie.Title}</span>
                                <button onClick={()=>this.handleAddtoMovies(movie)}>
                                    Add To My List
                                </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>               
        );
    }
}
class NavbarWrapper extends React.Component{
    render(){
        return(
            <storeContext.Consumer>
                {(store)=><Navbar dispatch={store.dispatch} search={this.props.search}/>}
            </storeContext.Consumer>
        )
    }
}
export default NavbarWrapper;