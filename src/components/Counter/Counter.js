/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import store from '../../store/';
import Button from '../Button/Button';

class Counter extends React.Component {
  updateState = () => {
    const state = store.getState();
    this.setState({ count: state.oui + state.non });
  };

  componentWillMount() {
    store.subscribe(this.updateState);

    this.updateState();
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        {count} votes
        <Button name="reset" />
      </div>
    );
  }
}

Counter.propTypes = {};

export default Counter;
