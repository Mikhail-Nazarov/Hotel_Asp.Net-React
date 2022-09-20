import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import { Heading } from './Heading';

export class About extends Component {
    render() {
        return (
            <div className="content" style={{ marginTop: '50px' }}>
                <Heading Head="Деятельность отеля" body="Всегда рады сотрудничеству" />
                <img src={require('./../images/room2.jpg')} style={{ height: '500px', width: '1000px', margin:'30px' }}></img>
                <p style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                    Переночевав в гостинице в Гуаякиле, мы сели к агенту в машину и поехали на судно
                    в Пуэрто Боливар. Доехали вопреки ожиданиям быстро, примерно за 3-4 часа. Погода была пасмурная и даже не смотря на то, что мы находимся недалеко от экватора,
                    было прохладно. Почти все время, пока мы ехали, по обе стороны дороги были
                    банановые плантации, но все равно в голове не укладывается: эти бананы грузят на суда в нескольких портах
                    Эквадора десятками тысяч тонн каждый день, круглый год
                </p>
                <Heading Head="Наши сотрудники"/>
                <div className="our-staff">
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                    <Employee Name='Иван Иванов' Post='Менеджер' />
                </div>
            </div>
            );
    }
}

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover:false
        };
    }
    render() {
        const handleMouseEnter = () => {
            this.setState({ isHover: true });
        }
        const handleMouseLeave = () => {
            this.setState({ isHover: false });
        }
        return (
            <div className="employee-card">
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ opacity: this.state.isHover?'1':'0', height: '100%', backgroundColor: 'rgba(50, 50, 50, 0.7)' }}>
                    <h3 style={{ paddingTop:'35%', color: 'white' }}>
                        {this.props.Name}
                    </h3>
                    <h4 style={{color: 'white' }}>
                        {this.props.Post}
                    </h4>
                </div>
            </div>
        );
    }
}
