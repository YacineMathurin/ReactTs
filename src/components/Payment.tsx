import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';


const Payment = () => {
    const sum = useSelector((state: RootState) => state.articles.sum);
    return ( 
        <div id='payment'><span>Total</span><span id="price">{sum} €</span></div>
    );
}
 
export default Payment;