import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ProductConsumer} from '../contextAPI'
import PropTypes from 'prop-types';

class Product extends Component {
    
    
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
           <ProductWrapper className='col-9 mx-auto col-sm-6 col-lg-6 my-3'>
                <div className='card'>
                    <ProductConsumer>
                    {(value)=>(
                        <div className='img-container p-5' >
                            <Link to='/details'>
                                <p className='text-muted lead'>Click for Details</p>
                                <img src={img} alt={title} className='card-img-top' onClick={()=>value.handleDetails(id)}></img>
                            </Link>
                            <button className='cart-btn' disabled={inCart ? true: false}
                                onClick={()=>{value.addToCart(id)}}>
                            {inCart ? (<p className='text-capitalize mb-0' disabled>inCart</p>) : (<p className='align-self-center font-weight-bold'>Add to Cart</p>)}
                            </button>
                        </div>
                    )}
                </ProductConsumer>
                     {/* Card */}
                     <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0 cart-title'>{title}</p>
                        <h5 className='font-italic mb-0'>
                            <span className='mr-0'>$</span>{price}
                        </h5>                      
                     </div>
                </div>
            </ProductWrapper>
        );  
    }   
}   

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool  
    }).isRequired
}

const ProductWrapper = styled.div`
                            .card{
                                border-color:transparent;
                                transition: all 1s linear;
                            }
                            .card-footer{
                                border-color:transparent;
                                border-top: transparent;
                                transition: all 1s linear;                                
                            }
                            &:hover{
                                .card{
                                    border: 0.1rem solid rgba(0,0,0,0.2);
                                    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.02)
                                }
                                .card-footer{
                                    background: rgba(240,240,240,240);
                                }
                            }
                            .img-container{
                                position: relative;
                                overflow: hidden;
                            }
                            .cart-btn{
                                position: absolute;
                                bottom:0;
                                right:0;
                                padding: 0.02rem 0.04rem;
                                background: var(--mainBlue);
                                border: none;
                                font-size: 3vh;
                                border-radius: 0.5rem 0  0 0.5rem;
                                transform: translate(100%, 100%);
                                transition: all 1s linear;
                            }
                            .cart-title{
                                font-size: 2.5vh;
                            }
                            .img-container:hover .cart-btn{
                                transform: translate(0,0);
                            }
                            .card-img-top{
                                transition: all 1s linear;
                            }
                            .img-container:hover .card-img-top{
                                transform: scale(1.2);
                            }`
export default Product;