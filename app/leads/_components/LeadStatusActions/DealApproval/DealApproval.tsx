import cls from './DealApproval.module.css'
import type {Lead} from '../../../types'
import Badge from '@/components/ui/Badge'
import CardActionButton from '@/components/CardActionButton'
import { DealsIcon, ShowMoreIcon } from '@/components/ui/icons'
import Button from '@/components/ui/Button'

type DealApprovalProps = {
    lead: Lead
}

export default function DealApproval({lead}:DealApprovalProps){
    return(
        <div className={cls.dealApprovalContainer}>
            <div className={cls.top}>
                <Badge type={'status'} text='Согласование сделки'></Badge>
                <CardActionButton cardActionType={"Заявка"}>
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
    )
}