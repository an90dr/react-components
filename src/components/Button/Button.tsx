import React from 'react';
import { valueEmpty } from '../../utils/Utils';
import './Button.css';
import { types } from '../../interface/ButtonTypes';

export type buttonType = 'primary' | 'secondary' | 'link';

export type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<any>,
  'type' | 'onClick'
>;
export type BaseButtonProps = {
  /**
   * The type of the Button
   */
  buttonType: buttonType;
  /**
   * The label of the button
   */
  label: string;
  /**
   * callback when button clicked
   * @param event
   */
  onClick?(event: MouseEvent): void;
};

export type ButtonProps = NativeButtonProps & BaseButtonProps;

type ButtonState = {};

class Button extends React.Component<ButtonProps, ButtonState> {
  defaultButtonClass = 'rcf-button';

  static defaultProps = {
    type: types.primary,
    label: '',
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <button
        {...this.props}
        className={this.defaultButtonClass + ' ' + this._resolveClassName()}
        onClick={(event: any) => {
          this.props.onClick && this.props.onClick(event);
        }}
      >
        {this.props.label}
      </button>
    );
  }

  _resolveClassName(): buttonType {
    switch (this.props.buttonType) {
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
