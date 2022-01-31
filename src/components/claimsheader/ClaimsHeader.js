import React from 'react';
import './ClaimsHeader.css';

import { Select } from '@chakra-ui/react'
import { ClaimsButton } from '../button/ClaimsButton';

export function ClaimsHeader() {
    return (
        <div className='claims-header'>
            <p>Viewing claims for: </p>
            <div>
                Tin:
                <Select placeholder='1234567' >
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </div>
            <div >
                Plan Type:
                <Select placeholder='Medicaid' style={{marginLeft:"-20px"}}> 
                
                    <option value='option1'>Option 1</option>
                </Select>
            </div>
                <ClaimsButton>GO</ClaimsButton>
            <div>
            </div>
            <div></div>
        </div>
    )
}