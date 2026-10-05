'use state'

import cls from './DealApproval.module.css'
import type {Lead} from '../../../types'
import Badge from '@/components/ui/Badge'
import CardActionButton from '@/components/CardActionButton'
import { DealsIcon, ShowMoreIcon } from '@/components/ui/icons'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import LeadDetails from '../../LeadDetails'

type DealApprovalProps = {
    lead: Lead
}

export default function DealApproval({lead}:DealApprovalProps){

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
        <div className={cls.dealApprovalContainer}>
            <div className={cls.top}>
                <Badge type={'status'} text='Согласование сделки'></Badge>
                <CardActionButton cardActionType={"Заявка"} onClick={()=>{handleChangeTab('details'); handleShowDetails()}}>
                    <ShowMoreIcon />
                </CardActionButton>
            </div>
            <div className={cls.dealDetails}>
                <span>
                    Выбран
                </span>
                <span>
                    {lead.responsible.name}
                </span>
            </div>
            <Button variant={'secondary'}>
                <DealsIcon/>
                <p>Перейти к сделке</p>
            </Button>
        </div>
        {(showActiveTab && showDetails) && <LeadDetails lead={lead} onClose={handleCloseDetails} showActiveTab={showActiveTab} changeTab={handleChangeTab}/>}
        </>
    )
}