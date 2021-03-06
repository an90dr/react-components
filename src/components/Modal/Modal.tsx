import React from 'react';
import { valueEmpty } from '../../utils/Utils';
import './Modal.css';

type IProps = {
  className: string;
  closable: boolean;
  closeIcon?: JSX.Element;
  onClose?: { (): void };
  footer?: JSX.Element;
  footerSeparator?: boolean;
  titleSeparator?: boolean;
  title?: string | JSX.Element;
  visibility: boolean;
};

type IState = {
  visibility: boolean;
};

class Modal extends React.Component<IProps, IState> {
  static defaultProps = {
    className: '',
    closable: true,
    closeIcon: null,
    footer: null,
    footerSeparator: false,
    titleSeparator: false,
    title: '',
    visibility: true,
  };

  defaultCloseIcon = (<div>&times;</div>);

  constructor(props: IProps) {
    super(props);
    this.state = {
      visibility: valueEmpty(props.visibility) ? true : props.visibility,
    };
  }

  componentWillReceiveProps(nextProps: IProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.visibility !== this.state.visibility) {
      this.setState({ visibility: nextProps.visibility });
    }
  }

  render() {
    const { footer, titleSeparator, footerSeparator } = this.props;

    const titleNode = this._resolveTitle();
    const containerClassName = this._resolveContainerClassName();

    return (
      <div className={containerClassName}>
        <div className='modal-content'>
          <div
            className={titleSeparator ? 'modal-header line' : 'modal-header'}
          >
            {this._resolveCloseIcon()}
            {titleNode}
          </div>
          <div className='modal-body'>{this.props.children}</div>
          <div
            className={footerSeparator ? 'modal-footer line' : 'modal-footer'}
          >
            {footer}
          </div>
        </div>
      </div>
    );
  }

  private _resolveContainerClassName() {
    let containerClass = this.state.visibility ? 'modal' : 'modal hidden';

    containerClass += !valueEmpty(this.props.className)
      ? ' ' + this.props.className
      : '';

    return containerClass;
  }

  private _resolveTitle() {
    return !valueEmpty(this.props.title) ? <h2>{this.props.title}</h2> : null;
  }

  private _resolveCloseIcon() {
    if (!this.props.closable) {
      return null;
    }

    return (
      <span
        className='close'
        onClick={(e: any) => {
          this.props.onClose && this.props.onClose();
          this.setState({ visibility: false });
        }}
      >
        {this.props.closeIcon || this.defaultCloseIcon}
      </span>
    );
  }
}

export default Modal;
