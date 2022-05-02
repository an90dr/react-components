import React from 'react';
import './Space.css';

export type SpaceProps = {
  
};


type SpaceState = {};

class Space extends React.Component<SpaceProps, SpaceState> {

    render(): React.ReactNode {
        return <span className='rfc-space'></span>
    }

}

export default Space;
