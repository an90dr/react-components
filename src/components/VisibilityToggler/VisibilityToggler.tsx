import React from 'react';
import Modal from '../Modal';
import Button from '../Button';
import { types as ButtonTypes } from '../../interface/ButtonTypes';
type IProps = {
  childComponent: any;
  modalProperties: any;
};

type IState = {
  visible: boolean;
};

class VisibilityToggler extends React.Component<IProps, IState> {
  static defaultProps = {
    childComponent: <div>No Child Component Found</div>,
    modalProperties: {},
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <>
        <Button
          buttonType={ButtonTypes.primary}
          label='Show Modal'
          onClick={(event: any) => {
            this._handleVisibilityClick();
          }}
        />

        <Modal
          {...this.props.modalProperties}
          visibility={this.state.visible}
          onClose={() => {
            this._handleVisibilityClick();
          }}
        ></Modal>
      </>
    );
  }

  private _handleVisibilityClick() {
    this.setState({ visible: !this.state.visible });
  }
}

export default VisibilityToggler;
