import React from "react";
import { useToasts } from "react-toast-notifications";

// if more toast functions are needed, check out list here...
// https://www.npmjs.com/package/react-toast-notifications#hook

const withToast = WrappedComponent => {
  // eslint-disable-next-line func-names
  return function (props) {
    const { addToast } = useToasts();

    return <WrappedComponent addToast={addToast} {...props} />;
  };
};

export default withToast;
