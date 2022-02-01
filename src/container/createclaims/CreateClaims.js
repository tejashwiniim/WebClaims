import React from 'react';
import "./CreateClaims.css";
import { CreateClaimsCard } from './CreateClaimsClaimsCard';

export function CreateClaims() {
    return <div className='create-claims'>
        <h4>Claims Overview</h4>
        <div className='claims-card-container'>
            <CreateClaimsCard />
            <CreateClaimsCard />
            <CreateClaimsCard />
           
        </div>
    </div>
}