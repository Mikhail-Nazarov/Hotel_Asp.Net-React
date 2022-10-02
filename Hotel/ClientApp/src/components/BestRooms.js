import React, { Component } from 'react';
import { Heading } from './Heading';

export class Best_rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestRoomsList: []
        }
    }
    componentDidMount() {
        this.LoadData();
    }
    render() {
        return (
            <div className="best-rooms">
                <Heading Head="Лучшие предложения" body="Наши самые премиальные номера" />
                {this.state.bestRoomsList.map(item => (
                    <BestRoomCard data={item}/>))}
            </div>
        );
    }
    async LoadData() {
        const response = await fetch('api/rooms');
        const data = await response.json();
        this.setState({ bestRoomsList: data});
    }
}

class BestRoomCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
        };
    }
    render() {
        const handleMouseEnter = () => {
            this.setState({ isHover: true });
        };
        const handleMouseLeave = () => {
            this.setState({ isHover: false });
        };
        const imgPath = this.props.data.imgPaths.split(' ')[0];
        return (
            <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="best-room-card">
                <img src={'images/' + imgPath}
                    style={{ position: 'absolute', left: '0', width: '100%', height: '100%' }} />
                <div style={{ top: '0', opacity: this.state.isHover ? '1' : '0' }} className="roomCard-panel">
                    <h2>{this.props.data.name}</h2>
                    <p>{this.props.data.description}</p>
                    <button>
                        Подробнее
                    </button>
                </div>
            </div>
        );
    }
}