import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RoomCard extends Component {
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
        const services = this.props.data.services.split(',');
        const url = '/room/:' + this.props.data.id;
        return (
            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="room-card">
                <img src={'images/' + imgPath} style={{ width: '100%', height:'100%' }} />
                <div style={{ position: 'relative', padding: '0 0 15px 15px', borderTop: '2px solid #5E72A6', textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <h4 style={{ paddingTop: '15px' }}>{this.props.data.name}</h4>
                        <div className="price">
                            <h3>
                                { this.props.data.price } р.
                            </h3>
                        </div>
                    </div>
                    <p>{this.props.data.description}</p>
                    <lu className="services">
                        {services.map(item => (
                            <Service ServiceName={item } />))}
                    </lu>
                    <Link to={url}>
                        <button style={{ position: 'absolute', right: '0', bottom: '0' }}>Подробнее</button>
                    </Link>
                </div>

            </div>
        );
    }
}

export class Service extends Component {

    render() {
        return (
            <li className="service-item">{this.props.ServiceName}</li>
        );
    }
}
