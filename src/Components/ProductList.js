import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../contextAPI';
class ProductList extends Component {

    state = {
        products:storeProducts
    }

    render() {
       return(
        <Fragment>
            <div className="py-5 bodyCSS">
                <div className="container">
                    <Title name='Gaurav' title = 'Rentals'></Title>
                    <div className='row'>
                        <ProductConsumer>
                            {
                                (value)=>{
                                    return <h1>{value.products.map( product => {
                                        return <Product key={product.id} product={product}></Product>
                                    })}</h1>
                                }

                            }
                        </ProductConsumer>
                    </div>
                </div>

            </div>
        </Fragment>
        );
    }
}

export default ProductList;