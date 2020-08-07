import React from 'react';
import Header1 from './Header.css'
class Header extends React.Component {

    render() {
        return (
            <div className="headerParent">
                <div className="headerBox1">
                <h2>Support the Guardian</h2>
                <h4>Available for every one funded by users.</h4>
                </div>
                <div className="headerBox2">
            <h1>The Guardian</h1>
                </div>
            </div>
        );
       
    }
}

export default Header;