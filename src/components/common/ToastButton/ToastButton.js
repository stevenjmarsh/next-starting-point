import React from "react";
import Button from "@material-ui/core/Button";

import { withToast } from "_helpers";

const ToastButton = ({ addToast }) => {
  const showToast = () => {
    addToast("Your information has been sent!", { appearance: "success" });
  };

  return (
    <Button variant="contained" color="primary" onClick={showToast}>
      Show Toast
    </Button>
  );
};

export default withToast(ToastButton);
