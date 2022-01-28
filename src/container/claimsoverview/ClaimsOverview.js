import React from 'react';
import "./ClaimsOverview.css";
import { ClaimsOverviewCard } from './ClaimsOverviewCard';

export function ClaimsOverview() {
    return <div className='claims-overview'>
        <h4>Claims Overview</h4>
        <div className='claims-card-container'>
            <ClaimsOverviewCard title="REJECTED CLAIMS" value="08" borderTopColor="#FAB00A"/>
            <ClaimsOverviewCard title="DENIED CLAIMS" value="24" borderTopColor="red"/>
            <ClaimsOverviewCard title="DISPUTED CLAIMS" value="39" borderTopColor="#A65FD8"/>
            <ClaimsOverviewCard title="PENDING CLAIMS" value="20" borderTopColor="#FDD813"/>
            <ClaimsOverviewCard title="DRAFT CLAIMS" value="40" borderTopColor="#1D76ED"/>
        </div>
    </div>
}