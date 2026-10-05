'use client'

import cls from './SummingUp.module.css'
import type {Lead} from '../../../types';
import Badge from '@/components/ui/Badge';
import CardActionButton from '@/components/CardActionButton';
import { CompareIcon, ShowMoreIcon, UsersIcon } from '@/components/ui/icons';
import { useState } from 'react';
import LeadDetails from '../../LeadDetails';


type SummingUpProps = {
    lead: Lead
}

export default function SummingUp({lead}: SummingUpProps){

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
        <div className={cls.summingUpContainer}>
            <div className={cls.summingUpContent}>
                <Badge type={'status'} text={"Подведение итогов"}/>
                <div className={cls.summingDetails}>
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
            <div className={cls.summingUpButtonsList}>
                <CardActionButton cardActionType='Заявка' onClick={()=>{handleChangeTab('details'); handleShowDetails()}}>
                    <ShowMoreIcon />
                </CardActionButton>
                <CardActionButton cardActionType='Отклики' onClick={()=>{handleChangeTab('responses'); handleShowDetails()}}>
                    < UsersIcon />
                </CardActionButton>
                <CardActionButton cardActionType='Сравнение'>
                    < CompareIcon />
                </CardActionButton>
            </div>
        </div>
        {(showActiveTab && showDetails) && <LeadDetails lead={lead} onClose={handleCloseDetails} showActiveTab={showActiveTab} changeTab={handleChangeTab}/>}
        </>
    )
}