import React from 'react';
import { ClaimsHeader } from '../../components/claimsheader/ClaimsHeader';
import { ClaimsOverview } from '../claimsoverview/ClaimsOverview';
import "./ClaimContainer.css";

export function ClaimContainer() {
    return (
        <div className='claim-container'>
            <ClaimsHeader />
            <ClaimsOverview />
        </div>
    )
}