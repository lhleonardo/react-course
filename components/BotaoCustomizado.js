import React, { Component } from "react";

export default class BotaoCustomizado extends Component {

    render() {
        return (
            <div className="pure-control-group"> 
                <label></label>                                  
                <button id={this.props.id} type={this.props.type} className="pure-button pure-button-primary">{this.props.label}</button>                                    
            </div>
        );
    }
}