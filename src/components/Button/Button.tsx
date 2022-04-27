import React, { ButtonHTMLAttributes } from 'react';
import { valueEmpty } from '../../utils/Utils';
import './Button.css';
import { types } from '../../interface/ButtonTypes';

export type buttonType = types.primary | types.secondary | types.link;

export type BaseButtonProps = {
  HTMLProps?: ButtonHTMLAttributes<HTMLButtonElement>
  /**
   * The type of the Button
   */
  buttontype: buttonType
};

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonState = {};

class Button extends React.Component<ButtonProps, ButtonState> {
  defaultButtonClass = 'rcf-button';

  static defaultProps = {
    buttontype: types.primary
  };

  render() {

    let htmlPropsResolved = this._resolvePropsToHTMLProps();

    return (
      <button {...htmlPropsResolved}>
        {this.props.children}
      </button>
    );
  }

  /**
   * Get all properties passed to the component and recalculates the
   * HTML Button Properties based on the props.
   * 
   * All properties passed to HTMLProps will be overriden by 
   * 
   * @returns  ButtonHTMLAttributes<HTMLButtonElement>
   */
  _resolvePropsToHTMLProps(): ButtonHTMLAttributes<HTMLButtonElement>{
    let buttonHTMLProps = this.props.HTMLProps || {};

    //Setting Default Values
    buttonHTMLProps.className = (' ' + this.defaultButtonClass).trim();

    if(this.props.buttontype){
      buttonHTMLProps.className += ' ' + this._resolveClassName();
      buttonHTMLProps.className.trim();
    }

    return buttonHTMLProps;
  }

  _resolveClassName(): buttonType {
    switch (this.props.buttontype) {
      case types.primary:
        return types.primary;
      case types.secondary:
        return types.secondary;
      case types.link:
        return types.link;
      default:
        return types.primary;
    }
  }
}

export default Button;
