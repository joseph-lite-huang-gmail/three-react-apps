import React from 'react';

export default class Product extends React.Component {
    handleUpvote() {
        this.props.onUpvote(this.props.product.name);
    }

    handleDownvotes() {
        this.props.onDownvote(this.props.product.name);
    }

    render() {
        return (
            <div>
                <div>{this.props.product.name}</div>
                <div>
                    <span>Upvotes: {this.props.product.upvotes}</span>
                    <span>
                        <button type="button" onClick={() => this.handleUpvote()}>
                            {'\u2191'}
                        </button>
                    </span>
                </div>
                <div>
                    <span>Downvotes: {this.props.product.downvotes}</span>
                    <span>
                        <button type="button" onClick={() => this.handleDownvotes()}>
                            {'\u2193'}
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}