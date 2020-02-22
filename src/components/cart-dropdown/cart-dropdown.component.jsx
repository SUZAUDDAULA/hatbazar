import React from 'react';
import {connect} from 'react-redux'

import CustomButton  from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartitem=>(
                <CartItem key={cartitem.id} item={cartitem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);