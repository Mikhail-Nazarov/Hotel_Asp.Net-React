import React, { Component } from 'react';
import { Best_rooms } from './BestRooms';

export class Home extends Component {

  render () {
      return (
          <div className="content">
              <Top_area />
              <Best_rooms/>
          </div>
    );
  }
}
class Top_area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false
        };
    }
    render() {

        const peoples = [
            { value: '0', label: 'Кол-во человек' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
        ].map((p) => <option value={p.value}>{p.label}</option>);
        const baggage = [
            { value: '0', label: 'Кол-во багажа' },
            { value: '1', label: 'Мало' },
            { value: '2', label: 'Среднее' },
            { value: '3', label: 'Много' },
        ].map((p) => <option value={p.value}>{p.label}</option>);
        return (
                <div className="top-area">
                    <form className="booking_form">
                    <h1>Подбор номеров</h1>
                    <DateInput placeholder="Выбор даты заезда" />
                    <DateInput placeholder="Выбор даты выезда" />
                    <select placeholder="Выбор даты выезда">
                        {peoples}
                    </select>
                    <select placeholder="Выбор даты выезда"> {baggage}</select>
                    <input type="submit" style={{ color: 'white', backgroundColor:'#4D9295' }} value="Подать заявку"></input>
                    </form>
                </div>
        );
    }
}
export class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false
        };
    }
    render() {
        const _onFocus = () => {
            this.setState({ isFocus: true });
        };
        const _onBlur = () => {
            this.setState({ isFocus: false });
        };
            return (
                    <input type={this.state.isFocus ? 'date' : 'text'}
                        onFocus={_onFocus}
                    onBlur={_onBlur}
                    placeholder={this.props.placeholder}></input>
            );
    }
}
