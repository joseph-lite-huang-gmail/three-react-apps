import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stopTime: null,
            finishTime: null,
            remainingTime: '',
            count: 0,
            mode: 'Start'
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.stopTime && this.state.finishTime) {
            let now = new Date();
            if (now < this.state.stopTime) {
                this.setState({
                    remainingTime: this.getRemainingTime(),
                });
            } else if (now < this.state.finishTime) {
                this.setState({
                    remainingTime: '00:00'
                });
            } else {
                this.startProcess();
                this.setState({
                    count: this.state.count + 1
                });
            }
        }
    }

    startProcess() {
        let stopTime = new Date();
        let finishTime = new Date();
        stopTime.setMinutes(stopTime.getMinutes() + 1);
        finishTime.setMinutes(finishTime.getMinutes() + 2);
        this.setState({
            stopTime,
            finishTime,
            remainingTime: '25:00',
            mode: 'Stop'
        });
    }

    handleClick() {
        if (this.state.mode === 'Start') {
            this.startProcess();
        } else {
            this.setState({
                stopTime: null,
                finishTime: null,
                remainingTime: '',
                count: 0,
                mode: 'Start'
            });
        }
    }

    getRemainingTime() {
        if (this.state.stopTime) {
            let remainder = this.state.stopTime - (new Date());
            let minutes = Math.floor((remainder % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remainder % (1000 * 60)) / 1000);
            let minutesBuffer = (minutes < 10) ? '0' : '';
            let secondsBuffer = (seconds < 10) ? '0' : '';
            return `${minutesBuffer}${minutes}:${secondsBuffer}${seconds}`;
        } else {
            return '';
        }
    }

    render() {
        return (
            <div>
                { (this.state.mode === 'Start') ? (<div />) : (<h1>{this.state.remainingTime}</h1>) }
                <button type="button" onClick={ () => this.handleClick() }>
                    {this.state.mode}
                </button>
                <h1>Completed {this.state.count} times.</h1>
            </div>
        );
    }
}