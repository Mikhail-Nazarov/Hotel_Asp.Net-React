import React, { Component } from 'react';

export class RoomCard extends Component {

    render() {
        return (
            <div className="room-card">
                <div>
                    <img src={require('./../images/room3.jpg')} style={{ width: '100%', height: '100%' }}></img>                
                </div>
                <div style={{ padding: '0 0 15px 15px', borderTop: '2px solid #5E72A6', textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <h4 style={{ paddingTop:'15px' }}>Название номера</h4>
                        <div className="price">
                            <h3>
                                {this.props.Price} р.
                            </h3>
                        </div>
                    </div>
                    <p>Доехали вопреки ожиданиям быстро, примерно за 3-4 часа. Погода была пасмурная и даже не смотря на то, что мы находимся недалеко от экватора,
                        было прохладно. Почти все время, пока мы ехали, по обе стороны дороги были</p>
                    <lu className="services">
                        <Serice ServiceName='2 комнаты' />
                        <Serice ServiceName='Уборка' />
                        <Serice ServiceName='Красивый вид' />
                        <Serice ServiceName='Минибар' />
                        <Serice ServiceName='2 кровати' />
                        <Serice ServiceName='2 комнаты' />
                        <Serice ServiceName='2 комнаты' />
                        <Serice ServiceName='2 комнаты' />
                        <Serice ServiceName='2 комнаты' />
                    </lu>
                </div>

            </div>
        );
    }
}

class Serice extends Component {

    render() {
        return (
            <li className="service-item">{this.props.ServiceName}</li>
        );
    }
}
