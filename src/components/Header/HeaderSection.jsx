import React from 'react';
import LocationSwitcher from '../LocationSwitcher/LocationSwitcher';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="navigation">
                    <div>Nav1</div>
                    <div>Nav2</div>
                    <div>Nav3</div>
                    <div>Nav4</div>
                </div>
                <LocationSwitcher/>
            </div>
        )
    }
}

export default Header;