import forEach from "lodash/forEach";

const mapPropsToStyleNames = (styleNames, props) => {
  const keys = keys(props);
  const values = values(props);

  forEach(keys, (key, index) => {
    if (values[index]) {
      styleNames.push(key);
    }
  });

  return styleNames;
};

export default mapPropsToStyleNames;
