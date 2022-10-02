import React, { Component } from 'react';
import { Heading } from './Heading';
import { Service } from './RoomCard';
import { DateInput } from './Home';


export class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room:''
        }
    }
    componentDidMount() {
        this.LoadData();
    }

    render() {
        const imgs = (this.state.room.imgPaths !== undefined) ? this.state.room.imgPaths : '';
        const img = imgs.split(' ');
        const background = 'url("images/' + img[0] + '")';
        const temp = (this.state.room.services !== undefined) ? this.state.room.services : '';
        const price = this.state.room.price + ' Рублей в сутки';
        const services = temp.split(',');
        return (
            <div className="content">
                <div className="top-area" style={{ backgroundImage: background, backgroundSize: '100%' }}></div>
                <Heading Head="Забронировать номер" body={price} />
                <div style={{ marginTop:'50px' }}>
                    <DateInput placeholder="Выбор даты заезда" />
                    <DateInput placeholder="Выбор даты выезда" />
                    <select placeholder="Выбор даты выезда"> </select>
                    <select placeholder="Выбор даты выезда"> </select>
                </div>
                <button>Забронировать</button>
                <p style={{ marginTop:'50px' }}>{this.state.room.description}</p>
                <lu className="services" style={{ width: '600px', margin:'0 auto 40px auto' } }>
                    {services.map(item => (
                        <Service ServiceName={item} />))}
                </lu>
            </div>
        );
    }

    async LoadData() {
        const url = 'api/rooms/getById/' + this.props.match.params.number;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ room: data });
    }
}
