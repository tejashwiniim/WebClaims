import React from 'react';
import './ClaimsHeader.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpIcon from '@mui/icons-material/Help';
import { Select } from '@chakra-ui/react'
import { ClaimsButton } from '../button/ClaimsButton';
import { Avatar } from '@mui/material';
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
            <NotificationsNoneIcon style={{position:"absolute",marginLeft:918, color: "#267298", marginTop:10}}></NotificationsNoneIcon>
            <HelpIcon style={{position:"absolute",marginLeft:970, color: "#267298", marginTop:10}} ></HelpIcon>
            <Avatar style={{position:"absolute",marginLeft:1020,marginTop:5, backgroundColor: "#E8F8FF", color:"black", height:40, width:40}} >OP</Avatar>
        </div>
    )
}