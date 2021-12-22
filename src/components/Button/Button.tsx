import React from 'react';
import { valueEmpty } from '../../utils/Utils';
import './Button.css';

type IProps = {
  label: string;
  onClick?(event: MouseEvent): void;
};

type IState = {};

class Button extends React.Component<IProps, IState> {
  static defaultProps = {
    label: '',
  };

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={(event: any) => {
          this.props.onClick && this.props.onClick(event);
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
