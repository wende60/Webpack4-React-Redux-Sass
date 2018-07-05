import css from './Home.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: false,
        };
    }

    toggleView = () => {
        if (this.state.content) {
            this.setState({ content: false });
            this.props.setData(false);
        } else {
            import('./HomeContent.js' /* webpackChunkName: "HomeContent" */ ).then(item => {
                this.setState({ content: item.default });
                this.props.setData(true);
            });
        }
    }

    render() {
        return (
            <div className={css.homeWrapper}>
                <h1>Hello World!</h1>
                <h2>Boilerplate for a cool React-Redux-Sass App</h2>
                <p>Environment {process.env.NODE_ENV}</p>
                <p>This is the Home component variable: {this.props.myvar}</p>
                <p className={css.button} onClick={this.toggleView}>Click here to show more content</p>

                {this.state.content &&
                    <this.state.content myvar='mein toller content' />
                }

                {this.props.isOpen &&
                    <p className={css.button} onClick={this.toggleView}>Click again to close content</p>
                }
            </div>
        );
    }
};

export default Home;

Home.propTypes = {
    myvar: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired
};