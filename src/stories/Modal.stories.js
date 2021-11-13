import React from 'react';
import {storiesOf} from '@storybook/react';

import {Modal} from '../components/Modal';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return (<Modal           
        title='Modal Title'
        footer={<div><button>OK</button><button>Cancel</button></div>}
        headerSeparator={true}
        footerSeparator={true}
        visibility={true}>
            My Modal
            </Modal>
        );
});