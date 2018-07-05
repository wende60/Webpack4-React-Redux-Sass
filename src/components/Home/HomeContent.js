import css from './HomeContent.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HomeContent = props => {
    return (
        <div className={css.homeContentWrapper}>
            <p>Here comes the content: {props.myvar}</p>
        </div>
    );
};

export default HomeContent;

HomeContent.propTypes = {
    myvar: PropTypes.string.isRequired
};