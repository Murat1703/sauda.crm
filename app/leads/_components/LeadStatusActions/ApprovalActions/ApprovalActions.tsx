'use client'

import Badge from '@/components/ui/Badge';
import { useState } from 'react';
import cls from './ApprovalActions.module.css'
import type {Lead} from '../../../types';
import {LeadStatusLabels} from '../../../_constants/LeadStatusLabels';
import { ApprovedIcon, ShowMoreIcon } from '@/components/ui/icons';
import CardActionButton from '@/components/CardActionButton';
import LeadDetails from '../../LeadDetails';
import { useLeadDetails } from '@/hooks/useLeadDetails';

type ApprovalActionsProps = {
    lead: Lead;
}

export default function ApprovalActions({lead}: ApprovalActionsProps) {

    const {
        activeTab,
        isOpen,
        openDetails,
        closeDetails,
        setActiveTab,
    } = useLeadDetails()
 
    return(
        <>
        <div className={cls.approvalActionsContainer}>
            <div className={cls.approvalActionsInfo}>
                <Badge 
                    type='status' 
                    text={LeadStatusLabels[lead.status]} 
                />
                <div className={cls.approvalsDetails}>
                    <div className={cls.approvalsDetailsInfo}>
                        {lead.approvals.map((approval)=>(
                            <div key={approval.id}>
                                <span className={approval.approved? cls.approved : cls.notApproved}>
                                    {approval.approved &&<ApprovedIcon /> }
                                </span>
                                <div className={cls.approvalsNameDetails}>
                                    <span>{approval.name}</span>
                                    <span>{approval.position}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cls.approvalsMore}>
                <CardActionButton cardActionType="Заявка" onClick={()=>{ openDetails('details')}}>
                    <ShowMoreIcon />
                </CardActionButton>
            </div>
        </div>
        {(isOpen && activeTab) && <LeadDetails lead={lead} onClose={closeDetails} showActiveTab={activeTab} changeTab={setActiveTab}/>}
        </>
    )
}