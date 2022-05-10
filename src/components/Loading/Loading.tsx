import React, { AllHTMLAttributes, CSSProperties } from 'react';
import './Loading.css';
import { size } from '../../interface/LoadingTypes';

export type LoadingProps = {
  color?: string;
  size: size;
};

type LoadingState = {};

class Loading extends React.Component<LoadingProps, LoadingState> {
  defaultButtonClass = 'rcf-loading';
  static defaultProps = {
    color: '#000000',
    size: 'small',
  };

  render() {
    var stylesObject = this._resolveLoadingColorClassName();
    return (
      <>
        <div className='rcf-loading'>
          <div className='dot1' style={stylesObject}></div>
          <div className='dot2' style={stylesObject}></div>
          <div className='dot3' style={stylesObject}></div>
        </div>
      </>
    );
  }

  _resolveLoadingColorClassName(): object {
    let color: { [key: string]: string | undefined } = {
      backgroundColor: this.props.color,
    };

    switch (this.props.size) {
      case size.xsmall:
        color.width = '3px';
        color.height = '3px';
        color.margin = '3px';
        break;
      case size.small:
        color.width = '5px';
        color.height = '5px';
        color.margin = '5px';
        break;
      case size.medium:
        color.width = '7px';
        color.height = '7px';
        color.margin = '7px';
        break;
      case size.large:
        color.width = '12px';
        color.height = '12px';
        color.margin = '12px';
        break;
      default:
        color.width = '5px';
        color.height = '5px';
        color.margin = '5px';
        break;
    }
    return color;
  }
}

export default Loading;
