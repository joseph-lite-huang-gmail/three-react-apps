import React from 'react';

export default class Product extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.product.name}</span>
                <span>{this.props.product.upvotes}</span>
                <span>{this.props.product.downvotes}</span>
            </div>
        );
    }
}