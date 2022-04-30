import React, { ButtonHTMLAttributes } from 'react';
import { valueEmpty } from '../../utils/Utils';
import { classPrefix } from '../../utils/Constants';
import './Button.css';
import { types, size } from '../../interface/ButtonTypes';

export type buttonType = types.primary | types.secondary | types.link;
export type buttonSize = size.small | size.medium | size.large;

export type BaseButtonProps = {
  HTMLProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  /**
   * The type of the Button
   */
  buttontype: buttonType;
  /**
   * The size of the Button
   */
  size: buttonSize;
};

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonState = {};

class Button extends React.Component<ButtonProps, ButtonState> {
  defaultButtonClass = 'rcf-button';

  static defaultProps = {
    buttontype: types.primary,
    buttonSize: size.medium,
  };

  render() {
    let htmlPropsResolved = this._resolvePropsToHTMLProps();

    return <button {...htmlPropsResolved}>{this.props.children}</button>;
  }

  /**
   * Get all properties passed to the component and recalculates the
   * HTML Button Properties based on the props.
   *
   * All properties passed to HTMLProps will be overriden by
   *
   * @returns  ButtonHTMLAttributes<HTMLButtonElement>
   */
  _resolvePropsToHTMLProps(): ButtonHTMLAttributes<HTMLButtonElement> {
    let buttonHTMLProps = this.props.HTMLProps || {};

    //Setting Default Values
    buttonHTMLProps.className = (' ' + this.defaultButtonClass).trim();

    if (this.props.buttontype) {
      buttonHTMLProps.className +=
        ' ' + this._resolveButtonTypeClassName() + ' ' + this._resolveButtonSizeClassName();
      buttonHTMLProps.className.trim();
    }

    return buttonHTMLProps;
  }

  _resolveButtonTypeClassName(): string {
    switch (this.props.buttontype) {
      case types.primary:
        return classPrefix + '-' + types.primary;
      case types.secondary:
        return classPrefix + '-' + types.secondary;
      case types.link:
        return classPrefix + '-' + types.link;
      default:
        return classPrefix + '-' + types.primary;
    }
  }

  _resolveButtonSizeClassName(): string {
    switch (this.props.size) {
      case size.small:
        return classPrefix + '-' + size.small;
      case size.medium:
        return classPrefix + '-' + size.medium;
      case size.large:
        return classPrefix + '-' + size.large;
      default:
        return classPrefix + '-' + size.medium;
    }
  }
}

export default Button;
