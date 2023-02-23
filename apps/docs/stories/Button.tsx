import React from "react";
import "./button.css";
import PropTypes from "prop-types";
//import AddCircleIcon from '@mui/icons-material/AddCircle';

import { buttonTypes, buttonVariants, buttonSizes } from "./constants";

const Button = (props) => {
  const {
    text,
    isDisabled,
    type,
    size,
    backgroundColor,
    textColor,
    onClick,
    shadow,
    plusIcon,
    AddCircleIcon,
  } = props;

  const shadows = shadow ? "shadow" : "";
  const disabled = isDisabled ? "disabled" : "";

  return (
    <button
      onClick={onClick}
      className={[
        "button",
        `${size}`,
        `${type}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      ].join(" ")}
      disabled={isDisabled}
      {...props}
    >
      {<AddCircleIcon /> && <span className="material-icons icon-plus"></span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf([
    buttonTypes.outline,
    buttonTypes.filled,
    buttonTypes.text,
  ]),
  variant: PropTypes.oneOf([buttonVariants.oval, buttonVariants.rectangular]),
  size: PropTypes.oneOf([
    buttonSizes.small,
    buttonSizes.medium,
    buttonSizes.large,
  ]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isDisabled: false,
  type: "filled",
  variant: "oval",
  size: "medium",
  backgroundColor: "transparent",
  textColor: "white",
  shadow: true,
};

export { Button };
