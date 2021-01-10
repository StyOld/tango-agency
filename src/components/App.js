import React from 'react';
import {connect} from 'react-redux';
import Header from './Header/HeaderSection';
import strings from './strings'
import './App.css';

function App(props) {
    const {lang} = props;
    const getTranslation = (key) => strings[lang][key];

    return (
        <div className="tango-agency">
            <Header/>
            <div>
                {getTranslation('test1')}
            </div>
            <div>
                {getTranslation('test2')}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        lang: state.location.lang,
    }
};

export default connect(mapStateToProps)(App);
