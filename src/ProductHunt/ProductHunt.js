import React from 'react';
import Product from './Product';

export default class ProductHunt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [ {name: 'One', upvotes: 1, downvotes: 5}, {name: 'Two', upvotes: 10, downvotes: 2} ] };
    }

    render() {
        return (
            <div>
                {this.state.products.map(product => (
                    <Product product={product} />
                ))}
            </div>
        );
    }
}