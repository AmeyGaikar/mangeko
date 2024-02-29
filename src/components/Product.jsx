import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
    return (
        <Card className='my-3 mx-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} alt=".." variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.id}`}>
                    <Card.Title as='div' className='product-title'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
                <div>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>

            </Card.Body>
        </Card>
    );
}

export default Product;
