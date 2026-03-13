/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StatusBar, ViewPropTypes } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import getStyle from '../utils/getStyle';
import variable from '../theme/variables/platform';

class Header extends Component {
  render() {
    const {
      androidStatusBarColor,
      iosBarStyle,
      style,
      transparent,
      translucent
    } = this.props;

    const variables = variable;

    const platformStyle = variables.platformStyle;

    return (
      <View>
        <StatusBar
          backgroundColor={
            androidStatusBarColor
              ? androidStatusBarColor
              : variables.statusBarColor
          }
          barStyle={
            iosBarStyle
              ? iosBarStyle
              : platformStyle === 'material'
              ? 'light-content'
              : variables.iosStatusbar
          }
          translucent={transparent ? true : translucent}
        />
        <SafeAreaView
          style={{
            backgroundColor: getStyle(style).backgroundColor
          }}
        >
          <View ref={c => (this._root = c)} {...this.props} />
        </SafeAreaView>
      </View>
    );
  }
}

Header.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
};

const StyledHeader = connectStyle(
  'NativeBase.Header',
  {},
  mapPropsToStyleNames
)(Header);
export { StyledHeader as Header };
