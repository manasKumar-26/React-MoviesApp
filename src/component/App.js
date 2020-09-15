import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import Moviecard from './Moviecard';
class App extends React.Component{
  componentDidMount(){
    const {Store}=this.props;
    Store.subscribe(()=>{
      this.forceUpdate();
    })
    Store.dispatch({
      type:'Add_movies',
      movies:data,
    });
  }
  render(){
    const movies=this.props.Store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
            <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
            </div>
            <div className="list">
                {movies.map((movie,index)=>{
                  return <Moviecard movie={movie} key={`movie-${index}`} />
                })}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
