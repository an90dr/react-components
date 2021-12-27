import React from 'react';
import { valueEmpty } from '../../utils/Utils';
import './Button.css';
import { types } from '../../interface/ButtonTypes';

type buttonType = 'primary' | 'secondary' | 'link';

type IProps = {
  buttonType: buttonType;
  label: string;
  onClick?(event: MouseEvent): void;
};

type IState = {};

class Button extends React.Component<IProps, IState> {

  defaultButtonClass = 'button';

  static defaultProps = {
    type: types.primary,
    label: '',
  };

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <button
        className={this.defaultButtonClass +  ' ' + this._resolveClassName()}
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
