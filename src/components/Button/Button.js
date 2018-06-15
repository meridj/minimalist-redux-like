/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
** Styles
*/
import './Button.styl';

/**
 * Local imports
 */
import store from '../../store/';
import { addYesVote, addNoVote, resetVote } from '../../actions/';

class Button extends React.Component {
  state = {
    count: 0
  };

  updateState = () => {
    const state = store.getState();
    const { name } = this.props;

    this.setState({ count: state[name] });
  };

  handleClick = () => {
    const { name } = this.props;
    const actionsCreator = this.actionsCreator[name];
    const actionCreated = actionsCreator(this.state.count + 1);

    store.dispatch(actionCreated);
  };

  componentWillMount() {
    this.actionsCreator = {
      oui: addYesVote,
      non: addNoVote,
      reset: resetVote
    };
    store.subscribe(this.updateState);
    this.updateState();
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <button className="button" onClick={this.handleClick}>
        {(name === 'oui' || name === 'non') && `${name} (${count})`}
        {name === 'reset' && 'reset'}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
