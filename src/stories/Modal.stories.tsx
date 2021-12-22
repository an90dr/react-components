import React from 'react';
//import { storiesOf } from '@storybook/react';

import Modal from '../components/Modal';

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
    decorators: [
      (Story: any) => (
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      ),
    ],
  }
};


//DefaultModal.storyName = 'Default Modal Rendering';
//export const DefaultModal = () => <Modal visibility={true}>Modal</Modal>;

export const WithTitle = () => <Modal visibility={true}>Modal With Title</Modal>;

export const WithFooter = () => <Modal visibility={true}>Modal With Fotoer</Modal>;
/*const stories = storiesOf('Modal', module);

stories.add('Default', () => {
  return <Modal visibility={false}>Default Modal Render</Modal>;
});

stories.add('With Title', () => {
  return (
    <Modal title={'Modal with Title'} titleSeparator={true} visibility={false}>
      Modal with Header
    </Modal>
  );
});

stories.add('With Footer', () => {
  return (
    <Modal
      title={'Modal with Footer'}
      footer={
        <div>
          <button>OK</button>
          <button>Cancel</button>
        </div>
      }
      titleSeparator={true}
      footerSeparator={true}
      visibility={false}
    >
      Modal with Footer
    </Modal>
  );
});

//Not Closable Modal
stories.add('Not Closable', () => {
  return (
    <Modal
      title={'Not closable Modal'}
      titleSeparator={true}
      visibility={false}
      closable={false}
    >
      Not Closable Modal
    </Modal>
  );
});

//Custom class name for container
stories.add('Custom container class name', () => {
  return (
    <Modal
      title={'Custom class name for Container'}
      titleSeparator={true}
      visibility={false}
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
      titleSeparator={true}
      visibility={false}
      closable={true}
      closeIcon={<div>Close Icon</div>}
    >
      Custom close icon
    </Modal>
  );
});*/
