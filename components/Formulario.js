import React, { Component } from "react";

export default class Formulario extends Component {

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.props.onSubmit} method={this.props.method}>
                    {this.props.children}
                </form>
            </div>
        );
    }
}