import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="nav">
                <div className="search-container">
                    <input/>
                    <button id="search-btn">Search..</button>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export default Navbar;