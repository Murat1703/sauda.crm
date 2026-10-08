'use client'
import Badge from '@/components/ui/Badge'
import cls from './CollectingResponsesActions.module.css'
import type {Lead} from '../../../types';
import CardActionButton from '@/components/CardActionButton';
import { CompareIcon, ShowMoreIcon, UsersIcon } from '@/components/ui/icons';
import { useState } from 'react';
import LeadDetails from '../../LeadDetails';
import { useLeadDetails } from '@/hooks/useLeadDetails';

type CollectingResponsesProps={
    lead: Lead
}


export default function CollectingResponsesActions({lead}: CollectingResponsesProps) {

    const {
        activeTab,
        isOpen,
        openDetails,
        closeDetails,
        setActiveTab,
    } = useLeadDetails()

    return(
        <>
        <div className={cls.collectingResponsesContainer}>
            <div className={cls.collectingResponsesContent}>
                <Badge type='status' text={'Идет прием откликов'} />
                <div className={cls.responsesDetails}>
                    <div>
                        <span>Отклики</span>
                        <div className={cls.counters}>
                            <span>{lead.stats.responses} </span>
                            {lead.stats.additionalResponses && 
                            <span >
                                {lead.stats.additionalResponses && `+${lead.stats.additionalResponses}`}
                            </span>
                            }
                        </div>
                    </div>
                    <div>
                        <span>Просмотры</span>
                        <div className={cls.counters}>
                            <span>{lead.stats.views}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.collectingResponsesAction}>
                <CardActionButton cardActionType={"Заявка"} onClick={() => openDetails('details')}>
                    <ShowMoreIcon />
                </CardActionButton>
                <CardActionButton cardActionType={"Отклики"} onClick={() => openDetails('responses')}>
                    <UsersIcon />
                </CardActionButton>
                <CardActionButton cardActionType={"Сравнение"}>
                    <CompareIcon />
                </CardActionButton>
            </div>
        </div>
        {(isOpen && activeTab) && <LeadDetails lead={lead} onClose={closeDetails} showActiveTab={activeTab} changeTab={setActiveTab}/>}
        </>
    )
}       