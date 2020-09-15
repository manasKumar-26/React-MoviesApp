import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import Moviecard from './Moviecard';
import { AddMovie,ShowTab } from '../action/index'
class App extends React.Component{
  componentDidMount(){
    const {Store}=this.props;
    Store.subscribe(()=>{
      this.forceUpdate();
    })
    Store.dispatch(AddMovie(data));
  }
  isFav=(movie)=>{
    const { fav } =this.props.Store.getState();
    let index=fav.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }
  ChangeTabs=(value)=>{
    this.props.Store.dispatch(ShowTab(value))
  }
  render(){
    console.log(this.props.Store.getState())
    const {movies,fav,IsFavouriteTab}=this.props.Store.getState();
    // const currentTab={IsFavouriteTab ? fav :movies}
    const currentTab=IsFavouriteTab?fav:movies;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
            <div className="tabs">
              <div className={`tab ${IsFavouriteTab? '': 'active-tabs'}`} onClick={()=>this.ChangeTabs(false)}>Movies</div>
              <div className={`tab ${IsFavouriteTab? 'active-tabs': ''}`} onClick={()=>this.ChangeTabs(true)}>Favourites</div>
            </div>
            <div className="list">
                {currentTab.map((movie,index)=>{
                  return <Moviecard movie={movie} key={`movie-${index}`} dispatch={this.props.Store.dispatch} isFav={this.isFav(movie)}/>
                })}
            </div>
            {currentTab.length===0 ? <div className="no-movies">No movie Added to the favourites list</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
