import React from 'react';


export default class MenuItem extends React.Component {
    render() {
        return (
            <div className="menuItem">
                <a href={this.props.link} className="menuTitle">
                    {this.props.label}
                </a>
            </div>
        );
    }
}