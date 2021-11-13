
import React from 'react';
import './Modal.css';

export class Modal extends React.Component {

    static defaultProps = {
        headerSeparator: true,
        footerSeparator: true,
        visibility: true
    };

    constructor(props) {
        super(props);
        this.state = {visibility: props.visibility || true};
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.visibility !== this.state.visibility) {
        this.setState({ visibility: nextProps.visibility });
        }
    }

    render(){

        const { footer, headerSeparator, footerSeparator, visibility } = this.props;
        const {visibility: stateVisibility} = this.state;
        const titleNode = this.props.title != null ? <h2>{this.props.title}</h2> : null;

        return (
            <div className={stateVisibility ? "modal" : "modal hidden"}>
                <div className="modal-content">
                    <div className={(headerSeparator) ? "modal-header line" : "modal-header"}>
                        <span className="close" onClick={(e)=>
                            {
                                this.setState({visibility : false});
                            }}>&times;</span>
                        {titleNode}
                    </div>
                    <div className="modal-body" style={this.props.bodyStyle}>
                        {this.props.children}
                    </div>
                    <div className={(footerSeparator) ? "modal-footer line" : "modal-footer"}
                    >
                        {footer}
                    </div>
                </div>
            </div>);
    }

}