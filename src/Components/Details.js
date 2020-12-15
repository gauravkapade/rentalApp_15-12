import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {detailProduct} from '../data';
import {ProductConsumer} from '../contextAPI'

class Details extends Component {
    
    state = {
        productsDetails:detailProduct
    }
    

    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                const {id, title, img, info, price, company, inCart} = value.detailedProduct;
                return(
                    <div className='container py-5'>
                        {/* */}
                        <div className='row'>
                            <div className='col-6 mx-auto text-center my-5'>
                                <h2>{title}</h2>

                            </div>
                        </div>
                        {/*info*/}
                        <div className='row'>
                            <div className='col-8 mx-auto col-md-5 my-6'>
                                <img src={img} alt='Product' className='img-fluid'/>
                            </div>
                            <div className='col-8 mx-auto col-md-5 my-6 text-capitalize'>
                                <h2>Model: {title}</h2>
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                    <span className='text-uppercase'>{company}</span>
                                </h4>
                                <h4>
                                    <strong>
                                        Price: <span>$</span>{price}
                                    </strong>
                                </h4>
                                <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                    Some Info About Product:
                                </p>
                                <p className='text-muted lead'>{info}</p>

                                <div>
                                    <Link to='/'>
                                    <button className='cart-btn'>
                                        Back To Home
                                    </button>
                                    </Link>
                                    <button className='cart-btn mr-2' disabled={inCart ? true: false}
                                        onClick={()=>{value.addToCart(id)}}>
                                        Add to Cart
                                </button>
                                </div>

                            </div>

                        </div>
                    </div>
                );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;