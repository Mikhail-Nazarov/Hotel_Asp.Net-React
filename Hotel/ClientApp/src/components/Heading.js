import React, { Component } from 'react';

export class Heading extends Component {

    render() {
        return (
            <div className="best-rooms">
                <div className="heading">
                    <h1>
                        {this.props.Head}
                    </h1>
                    <div className="rect"></div>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}
