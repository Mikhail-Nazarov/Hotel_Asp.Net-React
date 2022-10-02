import React, { Component } from 'react';
import { RoomCard } from './RoomCard';
import { Heading } from './Heading';

export class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RoomsList: []
        }
    }
    componentDidMount() {
        this.LoadData();
    }
    render() {
        return (
            <div className="content" style={{ marginTop: '50px' }}>
                <Heading Head="Наши номера" />
                {this.state.RoomsList.map(item => (
                    <RoomCard data={item} />))}
            </div>
        );
    }
    async LoadData() {
        const response = await fetch('api/rooms');
        const data = await response.json();
        this.setState({ RoomsList: data });
    }
}
