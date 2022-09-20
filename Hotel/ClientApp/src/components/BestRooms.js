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
                    <BestRoomCard data={item} />))}
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
            isHover: false
        };
    }
    render() {
        console.log(this.props.path);
        const handleMouseEnter = () => {
            this.setState({ isHover: true });
        };
        const handleMouseLeave = () => {
            this.setState({ isHover: false });
        };
        console.log(this.props.data.imgPaths);
        console.log(require("../images/room3.jpg"));
        return (
            <div style={{
                backgroundImage: `url(${require(this.props.data.imgPaths)})`
            }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="best-room-card">
                <div style={{ opacity: this.state.isHover ? '1' : '0' }} className="roomCard-panel">
                    <h2>{this.props.data.name}</h2>
                    <p>Переночевав в гостинице в Гуаякиле, мы сели к агенту в машину и поехали на судно
                        в Пуэрто Боливар. Доехали вопреки ожиданиям быстро, примерно за 3-4 часа. Погода была пасмурная и даже не смотря на
                        то, что мы находимся недалеко от экватора, было прохладно. Почти все время, пока мы ехали</p>
                    <button>
                        Подробнее
                    </button>
                </div>
            </div>
        );
    }
}