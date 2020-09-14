import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="nav">
                <h1 style={styles.heading}>Movie Mania</h1>
                <div className="search-container">
                    <input/>
                    <button id="search-btn">Search..</button>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
const styles={
    heading:{
        color:'white',
        fontFamily:'fangsong'
    }
}
export default Navbar;