import React, {Component} from "react";

export default class InputCustomizado extends Component {

    render() {
        return (
            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label> 
                <input required={this.props.required} id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} />                  
            </div>        
        );
    }
}