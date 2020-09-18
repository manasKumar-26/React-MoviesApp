import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import Moviecard from './Moviecard';
import { AddMovie,ShowTab } from '../action/index';
import {connect} from 'react-redux';
class App extends React.Component{
  componentDidMount(){
    // const {Store}=this.props;
    // Store.subscribe(()=>{
    //   console.log(Store.getState())
    //   this.forceUpdate();
    // })
    this.props.dispatch(AddMovie(data));
  }
  isFav=(movie)=>{
    const { list } =this.props;
    let index=list.fav.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }
  ChangeTabs=(value)=>{
    this.props.dispatch(ShowTab(value))
  }
  render(){
    console.log(this.props)
    const { list,search }=this.props;
    const {movies,fav,IsFavouriteTab}= list;
    const currentTab=IsFavouriteTab?fav:movies;
    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
            <div className="tabs">
              <div className={`tab ${IsFavouriteTab? '': 'active-tabs'}`} onClick={()=>this.ChangeTabs(false)}>Movies</div>
              <div className={`tab ${IsFavouriteTab? 'active-tabs': ''}`} onClick={()=>this.ChangeTabs(true)}>Favourites</div>
            </div>
            <div className="list">
                {currentTab.map((movie,index)=>{
                  return <Moviecard movie={movie} key={`movie-${index}`} dispatch={this.props.dispatch} isFav={this.isFav(movie)}/>
                })}
            </div>
            {currentTab.length===0 ? <div className="no-movies">No movie Added to the favourites list</div> : null}
        </div>
      </div>
    );
  }
}
// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <storeContext.Consumer>
//         {(store)=><App Store={store}/>}
//       </storeContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state){
  return {
    list:state.list,
    search:state.search
  }
}
const ConnectedComponent=connect(mapStateToProps)(App);

export default ConnectedComponent;
