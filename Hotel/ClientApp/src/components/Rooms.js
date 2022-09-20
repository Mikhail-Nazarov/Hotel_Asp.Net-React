import React, { Component } from 'react';
import { RoomCard } from './RoomCard';
import { Heading } from './Heading';

export class Rooms extends Component {
    render() {
        return (
            <div className="content" style={{ marginTop: '50px' }}>
                <Heading Head="Наши номера"/>
                <RoomCard Image='./../images/room2.jpg' Price='3000' />
                <RoomCard Image='./../images/room2.jpg' Price='3000' />
                <RoomCard Image='./../images/room2.jpg' Price='3000' />
                <RoomCard Image='./../images/room2.jpg' Price='3000' />
                <RoomCard Image='./../images/room2.jpg' Price='3000' />
            </div>
        );
    }
}
