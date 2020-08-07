import React from 'react';
import App from '../App.css';
import MenuItem from './MenuItem'
class Navigation extends React.Component {

    render() {
        let elements = this.props.menuItems;
        return (
            <div className="navMenu">
                {elements.map((item, index) => {
                   return <MenuItem label={item.label} link={item.link} />
                })}
            </div>
        );
    }
}

export default Navigation;