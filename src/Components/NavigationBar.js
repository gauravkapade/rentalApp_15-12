import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import Styles from 'styled-components';
class NavigationBar extends Component {
    render() {
        return (
        <div className='topBar'>
        <nav className='navbar navbar-expand-sm navbar-dark'>
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}     
            
            <Link to='/'>
                <img src={logo} alt="Home"className="logoClass"/>
            </Link>
            <Link to='/'>
                <h3 className = 'navHeader'>   Navigation Bar  </h3> 
            </Link>
            <Link to = '/cart' className='ml-auto'>
                <StyleButton> My Cart </StyleButton>
           </Link>
        </nav>
        </div>
        );
    }
}

const StyleButton = Styles.button`text-transform:capitalize;
text-shadow: 1px 1px #fff000;
background: transparent;
margin-left: 10px;
border: 0.2rem solid var(--mainBlue);`


export default NavigationBar;