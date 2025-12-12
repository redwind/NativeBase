import { Component } from 'react';
import PropTypes from 'prop-types';
import { NativeBaseContext } from '../../context/NativeBaseContext';

export default class NativeBaseComponent extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    theme: PropTypes.object
  };

  // Helper method to get theme from context
  getTheme() {
    // This will be overridden by components using Context.Consumer
    return null;
  }

  getContextForegroundColor() {
    // This will be overridden by components using Context.Consumer
    return null;
  }
}
