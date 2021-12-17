import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../components/Modal';

const stories = storiesOf('App Test', module);

stories.add('ModalDefaultRender', () => {
  return (
    <Modal title='Modal Default Render' visibility={true}>
      Default Modal Render
    </Modal>
  );
});

stories.add('Modal with Header', () => {
  return (
    <Modal title={'Modal with Header'} headerSeparator={true} visibility={true}>
      Modal with Header
    </Modal>
  );
});

stories.add('Modal with Footer', () => {
  return (
    <Modal
      title={'Modal with Footer'}
      footer={
        <div>
          <button>OK</button>
          <button>Cancel</button>
        </div>
      }
      headerSeparator={true}
      footerSeparator={true}
      visibility={true}
    >
      Modal with Footer
    </Modal>
  );
});

//Not Closable Modal
stories.add('Not Closable Modal', () => {
  return (
    <Modal
      title={'Not closable Modal'}
      headerSeparator={true}
      footerSeparator={true}
      visibility={true}
      closable={false}
    >
      Not Closable Modal
    </Modal>
  );
});

//Custom class name for container
stories.add('Custom Class Name for Container', () => {
  return (
    <Modal
      title={'Custom class name for Container'}
      headerSeparator={true}
      visibility={true}
      closable={false}
      className='customClassName'
    >
      Custom class name for Container
    </Modal>
  );
});

stories.add('Custom close icon', () => {
  return (
    <Modal
      title={'Custom close icon'}
      headerSeparator={true}
      visibility={true}
      closable={true}
      closeIcon={<div>Close Icon</div>}
    >
      Custom close icon
    </Modal>
  );
});
