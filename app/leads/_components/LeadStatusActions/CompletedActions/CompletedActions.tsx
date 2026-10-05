'use client'
import cls from './CompletedActions.module.css'
import type {Lead} from '../../../types'
import Badge from '@/components/ui/Badge'
import CardActionButton from '@/components/CardActionButton'
import { DealsIcon, ShowMoreIcon } from '@/components/ui/icons'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import LeadDetails from '../../LeadDetails'


type actionsProps = {
    lead: Lead
}

export default function CompletedActions({lead}: actionsProps){
    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = ()=>{
        setShowDetails(true)
    }
    const handleCloseDetails = ()=>{
        setShowDetails(false)
    }
    return(
        <>
        <div className={cls.completedContainer}>
            <div className={cls.completedContent}>
                <div className={cls.top}>
                    <Badge type='status' text='Закрыта'/>
                    <CardActionButton cardActionType='Заявка' onClick={handleShowDetails}>
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
        <LeadDetails lead={lead} onClose={handleCloseDetails}/>
        </>
    )
}