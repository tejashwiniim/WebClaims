import React from 'react';
import "./ClaimsOverview.css";
import { ClaimsOverviewCard } from './ClaimsOverviewCard';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { ClaimsButton } from '../../components/button/ClaimsButton';
import axios from "axios";
export function ClaimsOverview() {

    const [claimsStatusCount, setClaimsStatusCount] = React.useState({
        rejectedClaims: 0,
        deniedClaims: 0,
        disputedClaims: 0,
        pendingClaims: 0,
        draftClaims: 0
    });

    const [dateRange, setDateRange] = React.useState({
        startDate: '2017-05-24',
        endDate: '2017-05-24'
    });

    const [isLoading, setLoading] = React.useState(false);

    // Mounting
    React.useEffect(() => {
        fetchClaimStatus();
    }, []);

    const fetchClaimStatus =  () => {
        setLoading(true);
        const startDate = dateRange.startDate;
        const endDate = dateRange.endDate;
        
        axios.get("https://pa26281bz6.execute-api.us-east-1.amazonaws.com/dev/claimOverview").then(res => {
            setLoading(false);
            const {pending, rejected, disputed, denied, draft} = res.data.claimOverview;
            setClaimsStatusCount({
                rejectedClaims: rejected,
                deniedClaims: denied,
                disputedClaims: disputed,
                pendingClaims: pending,
                draftClaims: draft
            })
        }).catch(error => {
            setLoading(false);
        })
    }

    return <div className='claims-overview'>
        <h4>Claims Overview</h4>
        <div className='claims-dates'>
        <TextField
        id="date"
        label="From"
        type="date"
        value={dateRange.startDate}
        defaultValue={dateRange.startDate}
        sx={{ width: 220, marginBottom: "5px"}}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setDateRange((prevValue) => {
                return {
                    ...prevValue,
                    startDate: e.target.value
                }
            })
        }}
      />
      <TextField
        id="date"
        label="To"
        type="date"
        value={dateRange.endDate}
        defaultValue={dateRange.endDate}
        sx={{ width: 220, marginLeft: "10px", marginBottom: "5px" }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
            setDateRange((prevValue) => {
                return {
                    ...prevValue,
                    endDate: e.target.value
                }
            })
        }}
      />
      <button className='search-button' onClick={fetchClaimStatus}>Go</button>
        </div>
        {isLoading ? <CircularProgress /> :  
        <div className='claims-card-container'>
            <ClaimsOverviewCard title="REJECTED CLAIMS" value={claimsStatusCount.rejectedClaims} borderTopColor="#FAB00A"/>
            <ClaimsOverviewCard title="DENIED CLAIMS" value={claimsStatusCount.deniedClaims} borderTopColor="red"/>
            <ClaimsOverviewCard title="DISPUTED CLAIMS" value={claimsStatusCount.disputedClaims} borderTopColor="#A65FD8"/>
            <ClaimsOverviewCard title="PENDING CLAIMS" value={claimsStatusCount.pendingClaims} borderTopColor="#FDD813"/>
            <ClaimsOverviewCard title="DRAFT CLAIMS" value={claimsStatusCount.draftClaims} borderTopColor="#1D76ED"/>
        </div>
        }
    </div>
}