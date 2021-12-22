import React from 'react';
import { valueEmpty } from '../../utils/Utils';
import './Button.css';

type IProps = {
    label: string
};


type IState = {
}

class Button extends React.Component<IProps, IState> {
    static defaultProps = {
        label: ''
      };

      constructor(props: IProps) {
        super(props);
      }

      render() {
          return (<button>{this.props.label}</button>);
      }
}

export default Button;