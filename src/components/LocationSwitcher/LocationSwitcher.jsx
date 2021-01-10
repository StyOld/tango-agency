import React from 'react';
import {connect} from 'react-redux';
import * as actionsLocation from '../../actions/actionsLocation'
import './LocationSwitcher.css'

class LocationSwitcher extends React.Component {
    render() {
        const {lang = 'RU', handleSwitchLocation} = this.props;

        return (
            <div className="location-switcher">
                <button
                    type="button"
                    disabled={lang === 'RU'}
                    className={lang === 'RU' ? 'location-switcher__button location-switcher__button--active' : 'location-switcher__button'}
                    onClick={() => handleSwitchLocation('RU')}
                >
                    RU
                </button>
                <button
                    type="button"
                    disabled={lang === 'EN'}
                    className={lang === 'EN' ? 'location-switcher__button location-switcher__button--active' : 'location-switcher__button'}
                    onClick={() => handleSwitchLocation('EN')}
                >
                    EN
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.location.lang,
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleSwitchLocation: (lang) => dispatch(actionsLocation.handleSwitchLocation(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationSwitcher);