
import ReactDOM from "react-dom";
import React, { Component } from 'react';
class Header extends Component {
    
    render() { 
        return (
          <React.Fragment>
            
              <h1 className="text-center" style={{ marginTop: "50px", color:"black", fontSize:"70px",marginBottom:"-50px" }}>
                Task <small className="muted-text">Tracker</small>
              </h1>
            
          </React.Fragment>
        );
    }
}
 
export default Header;