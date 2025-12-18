import { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'native-base-shoutem-theme';

export default class NativeBaseComponent extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    theme: PropTypes.object
  };

  static contextType = ThemeContext;

  /**
   * Get theme from props.theme or context.theme
   * If you need to provide theme to children, wrap them with:
   * <ThemeContext.Provider value={this.getTheme()}>
   *   {children}
   * </ThemeContext.Provider>
   */
  getTheme() {
    return this.props.theme ? this.props.theme : this.context.theme;
  }

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }
}
