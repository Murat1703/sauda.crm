'use client'
import cls from './CompletedActions.module.css'
import type {Lead} from '../../../types'
import Badge from '@/components/ui/Badge'
import CardActionButton from '@/components/CardActionButton'
import { DealsIcon, ShowMoreIcon } from '@/components/ui/icons'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import LeadDetails from '../../LeadDetails'
import { useLeadDetails } from '@/hooks/useLeadDetails'


type actionsProps = {
    lead: Lead
}

export default function CompletedActions({lead}: actionsProps){

    const {
        activeTab,
        isOpen,
        openDetails,
        closeDetails,
        setActiveTab,
    } = useLeadDetails()

    return(
        <>
        <div className={cls.completedContainer}>
            <div className={cls.completedContent}>
                <div className={cls.top}>
                    <Badge type='status' text='Закрыта'/>
                    <CardActionButton cardActionType='Заявка' onClick={()=>{openDetails('details')}}>
                        <ShowMoreIcon />
                    </CardActionButton>
                </div>
                <div className={cls.winnersBlock}>
                    <div>
                        <span>Выбрат №1</span>
                        <span>ТОО «Строймарт»</span>
                    </div>

                </div>
                <Button variant='secondary'>
                    <DealsIcon />
                    <p>Перейти к сделкам</p>
                </Button>
            </div>
        </div>
        {(isOpen && activeTab) && <LeadDetails lead={lead} onClose={closeDetails} showActiveTab={activeTab} changeTab={setActiveTab}/>}
        </>
    )
}