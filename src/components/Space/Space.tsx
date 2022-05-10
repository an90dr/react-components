import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';
import './Space.css';
import { size } from '../../interface/GeneralTypes';
import { classPrefix } from '../../utils/Constants';

export type SpaceProps = {
  size: size.large | size.medium | size.small | number;
};

type SpaceState = {};

class Space extends React.Component<SpaceProps, SpaceState> {
  defaultButtonClass = 'rcf-space';

  render(): React.ReactNode {
    return (
      <span
        className={this.defaultButtonClass + ' ' + this._resolveSizeClassName()}
        style={this._resolveSizeStyleProperty()}
      ></span>
    );
  }

  _resolveSizeClassName(): string {
    switch (this.props.size) {
      case size.small:
        return classPrefix + '-' + size.small;
      case size.medium:
        return classPrefix + '-' + size.medium;
      case size.large:
        return classPrefix + '-' + size.large;
      default:
        return '';
    }
  }

  _resolveSizeStyleProperty(): CSSProperties | undefined {
    if (typeof this.props.size === 'number') {
      return { marginLeft: this.props.size / 2, marginRight: this.props.size / 2 };
    }
  }
}

export default Space;
