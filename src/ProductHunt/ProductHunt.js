import React from 'react';
import Product from './Product';

export default class ProductHunt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [ {name: 'One', upvotes: 1, downvotes: 5}, {name: 'Two', upvotes: 10, downvotes: 2} ],
            sortOrder: 'Decending',
            otherSortOrder: 'Ascending'
        };
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

    doComparison(lhs, rhs) {
        if (this.state.sortOrder === 'Decending') {
            return lhs - rhs;
        } else if (this.state.sortOrder === 'Ascending') {
            return rhs - lhs;
        } else {
            return null;
        }
    }

    handleSortByUpvotes() {
        let products = [ ...this.state.products ];
        products.sort((lhs, rhs) => this.doComparison(lhs.upvotes, rhs.upvotes));
        console.log(products);
        this.setState({ products });
    }

    handleSortByDownvotes() {
        let products = [ ...this.state.products ];
        products.sort((lhs, rhs) => this.doComparison(lhs.downvotes, rhs.downvotes));
        this.setState({ products });
    }

    handleSortOrder() {
        this.setState({
            sortOrder: this.state.otherSortOrder,
            otherSortOrder: this.state.sortOrder
        });
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
                <button type="button" onClick={ () => this.handleSortByUpvotes() }>
                    Sort By Upvotes
                </button>
                <button type="button" onClick={ () => this.handleSortByDownvotes() }>
                    Sort By Downvotes
                </button>
                <button type="button" onClick={ () => this.handleSortOrder() }>
                    Sort In {this.state.otherSortOrder} Order
                </button>
            </div>
        );
    }
}