import React from 'react';
import Timer from './Timer';
import ProductHunt from './ProductHunt/ProductHunt';
import Calculator from './Calculator/component/Calculator';

export default class Hub extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: 'TIMER' };
    }

    handleClick(component) {
        this.setState({
            active: component
        });
    }

    render() {
        var active = this.state.active;

        return (
            <div>
                {active === 'TIMER' ? (
                    <Timer />
                ) : active === 'CALCULATOR' ? (
                    <Calculator />
                ) : active === 'PRODUCT_HUNT' ? (
                    <ProductHunt />
                ) : null}
                <button type="button" onClick={ () => this.handleClick('TIMER') }>
                    Timer
                </button>
                <button type="button" onClick={ () => this.handleClick('PRODUCT_HUNT') }>
                    Product Hunt
                </button>
                <button type="button" onClick={ () => this.handleClick('CALCULATOR') }>
                    Calculator
                </button>
            </div>
        );
    }
}