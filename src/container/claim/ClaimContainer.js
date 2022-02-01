import React from 'react';
import { ClaimsHeader } from '../../components/claimsheader/ClaimsHeader';
import { ClaimsOverview } from '../claimsoverview/ClaimsOverview';
import {CreateClaims} from '../createclaims/CreateClaims';

import { Favourites } from '../favourites/Favourites';

import "./ClaimContainer.css";

export function ClaimContainer() {
    return (
        <div>
        <ClaimsHeader />
        <div className='claim-container'>
        <CreateClaims/>
            <ClaimsOverview />
            <Favourites/>
           
        </div>
        </div>
    )
}