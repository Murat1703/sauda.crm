'use client'

import Badge from '@/components/ui/Badge'
import cls from './ProposalsSentActions.module.css'
import type {Lead} from '../../../types';
import CardActionButton from '@/components/CardActionButton';
import { CompareIcon, ShowMoreIcon, UsersIcon } from '@/components/ui/icons';
import { useState } from 'react';
import LeadDetails from '../../LeadDetails';

type props = {
    lead: Lead
}


export default function ProposalsSentActions({lead}: props){

    const [showDetails, setShowDetails] = useState(false)


    const handleShowDetails = ()=>{
        setShowDetails(true);
    }
    const handleCloseDetails = ()=>{
        setShowDetails(false);
        setShowActiveTab("")
    }

    const [showActiveTab, setShowActiveTab] = useState('')

    const handleChangeTab = (value:string) =>{
        setShowActiveTab(value)
    }




    return(
        <>
        <div className={cls.proposalsSentContainer}>
            <div className={cls.proposalsSentContent}>
                <Badge type='status' text="Отправлены предложения"/>
                <div className={cls.proposalsDetails}>
                    <div>
                        <span>Кол-во участников</span>
                        <span>{lead.participants.individuals + lead.participants.legalEntities}</span>
                    </div>
                    <div>
                        <span>Отклики</span>
                        <span>{lead.stats.responses}</span>
                    </div>
                    <div>
                        <span>Просмотры</span>
                        <span>{lead.stats.views}</span>
                    </div>
                </div>
            </div>
            <div className={cls.proposalsButtonsList}>
                <CardActionButton cardActionType={"Заявка"} onClick={()=>{handleChangeTab('details'); handleShowDetails()}}>
                    <ShowMoreIcon />
                </CardActionButton>
                <CardActionButton cardActionType={"Отклики"} onClick={()=>{handleChangeTab('responses'); handleShowDetails()}}>
                    <UsersIcon />
                </CardActionButton>
                <CardActionButton cardActionType={"Сравнение"}>
                    <CompareIcon />
                </CardActionButton>
            </div>

        </div>
        {(showActiveTab && showDetails) && <LeadDetails lead={lead} onClose={handleCloseDetails} showActiveTab={showActiveTab} changeTab={handleChangeTab}/>}
        </>
    )
}