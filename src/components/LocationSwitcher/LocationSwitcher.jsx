import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actionsLocation from '../../actions/actionsLocation';
import './LocationSwitcher.css';

class LocationSwitcher extends React.Component {
    static propTypes = {
        lang: PropTypes.oneOf(['ru', 'en']).isRequired,
    };

    static defaultProps = {
        lang: 'en',
    }

    render() {
        const {lang, handleSwitchLocation} = this.props;

        return (
            <div className="location-switcher">
                <button
                    type="button"
                    disabled={lang === 'ru'}
                    className={lang === 'ru' ? 'location-switcher__button location-switcher__button--active' : 'location-switcher__button'}
                    onClick={() => handleSwitchLocation('ru')}
                >
                    RU
                </button>
                <button
                    type="button"
                    disabled={lang === 'en'}
                    className={lang === 'en' ? 'location-switcher__button location-switcher__button--active' : 'location-switcher__button'}
                    onClick={() => handleSwitchLocation('en')}
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