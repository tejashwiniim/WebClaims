import React from 'react';
import './ClaimsButton.css';

export function ClaimsButton(props) {
    const {children, ...restProps} = props;
    return <button className='go-button'{...restProps}>{children}</button>
}