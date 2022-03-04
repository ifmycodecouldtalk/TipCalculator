import React from 'react';
import './App.css';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            priceCustom: 0,
            tip08: 0,
            tip15: 0,
            tip20: 0,
            tip30: 0,
            tipCustom: 0,
            customTip: 0,
            customTipFinal: 0,
            loading: true,
            error: '',
            error2: ''
        }
    }

    handleInput = event => {
        this.setState({ price: event.target.value });
    }

    handleInputCustom = event => {
        this.setState({priceCustom: event.target.value})
    }

    handleCustomTip = event => {
        this.setState({customTip: event.target.value})
    }

    calcTips = () => {
        let numInput = parseFloat(this.state.price);
        let zed = 0;
        let eight = numInput * 0.08;
        let fifteen = numInput * 0.15;
        let twenty = numInput * 0.2;
        let thirty = numInput * 0.3;
        if (Number.isNaN(eight)) {
            this.setState({
                tip08: zed.toFixed(2),
                tip15: zed.toFixed(2),
                tip20: zed.toFixed(2),
                tip30: zed.toFixed(2),
                error: 'The input was not a number. Please enter a number'              
            });
        }
        else {
            this.setState({
                tip08: eight.toFixed(2),
                tip15: fifteen.toFixed(2),
                tip20: twenty.toFixed(2),
                tip30: thirty.toFixed(2),
                error: ''
            });
        }
        this.setState({ error2: '' });
    }

    calcTipsCustom = () => {
        let numInput = parseFloat(this.state.priceCustom);
        let tipPercent = this.state.customTip / 100;
        let zed = 0;
        let tip = numInput * tipPercent;
        if (Number.isNaN(tip)) {
            this.setState({
                tipCustom: zed.toFixed(2),
                error2: 'The input was not a number. Please enter a number'
            });
        }
        else {
            this.setState({
                tipCustom: tip.toFixed(2),
                customTipFinal: this.state.customTip,
                error2: ''
            });
        }
        this.setState({ error: '' });
    }

    render() {
        return (
            <div className="App">
                <br />
                <h2>Quick Tip</h2>
                <div className="w-25 mx-auto input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" onClick={this.calcTips}>Calculate Tip</button>
                    </div>
                    <input onChange={this.handleInput} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            this.calcTips();
                        }
                    }} type="text" className="form-control" placeholder="$0.00" />
                </div>
                <div className="shadow tip-output-1">
                    <h5>8% Tip: ${this.state.tip08}</h5>
                    <h4>15% Tip: ${this.state.tip15}</h4>
                    <h3>20% Tip: ${this.state.tip20}</h3>
                    <h1>30% Tip: ${this.state.tip30}</h1>
                </div>
                <h3 className="error-message">{this.state.error}</h3>

                <br /><hr /><br />

                <h2>Custom Tip</h2>
                <div className="w-25 mx-auto input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Tip</span>
                    </div>
                    <input onChange={this.handleCustomTip} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            this.calcTipsCustom();
                        }
                    }} type="text" className="form-control" placeholder="0%" />
                </div>
                <div className="w-25 mx-auto input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" onClick={this.calcTipsCustom}>Calculate Tip</button>
                    </div>
                    <input onChange={this.handleInputCustom} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            this.calcTipsCustom();
                        }
                    }} type="text" className="form-control" placeholder="$0.00" />
                </div>
                <p>Custom Tip ({this.state.customTipFinal}%): ${this.state.tipCustom}</p>
                <h3 className="error-message">{this.state.error2}</h3>
            </div>
        );
    }
}
