/*
** Npm imports
*/
import React from 'react';

/**
 * Components
 */
import Counter from '../Counter/Counter';
import Button from '../Button/Button';

const App = props => {
  return (
    <React.Fragment>
      <Counter />
      <Button name="oui" />
      <Button name="non" />
    </React.Fragment>
  );
};

App.propTypes = {};

export default App;
