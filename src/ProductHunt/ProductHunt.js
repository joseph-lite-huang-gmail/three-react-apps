import React from 'react';
import Product from './Product';

export default class ProductHunt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [ {name: 'One', upvotes: 1, downvotes: 5}, {name: 'Two', upvotes: 10, downvotes: 2} ] };
    }

    handleUpvote(name) {
        let products = [ ...this.state.products ];
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === name) {
                products[i].upvotes++;
            }
        }
        this.setState({ products });
    }

    handleDownvotes(name) {
        let products = [ ...this.state.products ];
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === name) {
                products[i].downvotes++;
            }
        }
        this.setState({ products });
    }

    render() {
        return (
            <div>
                {this.state.products.map(product => (
                    <Product
                        product={product}
                        onUpvote={(name) => this.handleUpvote(name)}
                        onDownvote={(name) => this.handleDownvotes(name)}
                    />
                ))}
            </div>
        );
    }
}