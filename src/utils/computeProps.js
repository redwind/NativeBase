"use_strict";
import clone from 'lodash/clone';
import assign from 'lodash/assign';
import merge from 'lodash/merge';
import forEach from 'lodash/forEach';
import { StyleSheet } from "react-native";

module.exports = function(incomingProps, defaultProps) {
  // External props has a higher precedence
  let computedProps = {};

  incomingProps = clone(incomingProps);
  delete incomingProps.children;

  const incomingPropsStyle = incomingProps.style;
  delete incomingProps.style;

  // console.log(defaultProps, incomingProps);
  if (incomingProps) {
    assign(computedProps, defaultProps, incomingProps);
  } else {
    computedProps = defaultProps;
  }
  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    let computedPropsStyle = {};
    computedProps.style = {};
    if (Array.isArray(incomingPropsStyle)) {
      forEach(incomingPropsStyle, style => {
        if (typeof style === "number") {
          merge(computedPropsStyle, StyleSheet.flatten(style));
        } else {
          merge(computedPropsStyle, style);
        }
      });
    } else if (typeof incomingPropsStyle === "number") {
      computedPropsStyle = StyleSheet.flatten(incomingPropsStyle);
    } else {
      computedPropsStyle = incomingPropsStyle;
    }

    merge(computedProps.style, defaultProps.style, computedPropsStyle);
  }
  // console.log("computedProps ", computedProps);
  return computedProps;
};
