import React, { Component } from 'react';
import { Heading } from './Heading';
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

export class Contacts extends Component {
    render() {
        return (
            <div>
                <div className="content" style={{ marginTop: '50px' }}>
                    <Heading Head="Наши Контакты" />
                    <div style={{ display: 'flex' }}>
                        <Contact Contact='mail@mail.com'/>
                        <Contact Contact='111-11-11' />
                        <Contact Contact='г. Москва, ул Пушкина 23' />
                    </div>
                    <YMaps>
                        <div style={{ marginBottom:'50px' }}>
                            <Map
                                style={{ width: '800px', height: '500px', marginLeft: 'auto', marginRight: 'auto' }}
                                defaultState={{ center: [55.610051, 37.210689], zoom: 15 }}>
                                <Placemark geometry={[55.610051, 37.210689]} />
                                <ZoomControl/>
                             </Map>
                        </div>
                    </YMaps>
                </div>
            </div>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <div style={{ margin:'0 auto 50px auto', height: '100px', width: '300px', border: '2px solid #5E72A6' }}>
                <div style={{ height: '92px', margin: '2px', border: '1px solid #5E72A6' }}>
                    <h2>{this.props.Contact}</h2>
                 </div>
            </div>
            );
    }
}
