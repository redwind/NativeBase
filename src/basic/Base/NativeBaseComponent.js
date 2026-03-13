import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NativeBaseComponent extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    theme: PropTypes.object
  };

  getTheme() {
    return this.props.theme;
  }

  getContextForegroundColor() {
    return undefined;
  }
}
