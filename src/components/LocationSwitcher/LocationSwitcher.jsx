import React from 'react';
import './LocationSwitcher.css'

class LocationSwitcher extends React.Component {
    render() {
        const {lang = 'RU', handleChangeLocal} = this.props;

        return (
            <div className="location-switcher">
                <button
                    type="button"
                    disabled={lang === 'RU'}
                    className={lang === 'RU' ? 'location-switcher__button location-switcher__button--active' : 'location-switcher__button'}
                    onClick={() => handleChangeLocal('RU')}
                >
                    RU
                </button>
                <button
                    type="button"
                    disabled={lang === 'EN'}
                    className={lang === 'EN' ? 'location-switcher__button location-switcher__button--active' : 'location-switcher__button'}
                    onClick={() => handleChangeLocal('EN')}
                >
                    EN
                </button>
            </div>
        )
    }
}

export default LocationSwitcher;