import Badge from '@/components/ui/Badge'
import cls from './ProposalsSent.module.css'
import { RequestStatusLabel, type Request } from '@/app/requests/_types/request.types'
import CardActionButton from '@/components/CardActionButton'
import { CompareIcon, ShowMoreIcon, UsersIcon } from '@/components/ui/icons'

type props = {
    request: Request
}

export default function ProposalsSendActions({request}:props){
    return(
        <div className={cls.proposalsSendContent}>
            <div className={cls.proposalsSendInfo}>
                <Badge text={RequestStatusLabel[request.status]}/>
                <ul className={cls.proposalsList}>
                    <li>
                        <span>Кол-во участников</span>
                        <span>{request.participants.individuals + request.participants.legalEntities}</span>
                    </li>
                    <li>
                        <span>Отклики</span>
                        <span>{request.stats.responses}</span>
                    </li>
                    <li>
                        <span>Просмотры</span>
                        <span>{request.stats.views}</span>
                    </li>
                </ul>
            </div>
            <div className={cls.buttons}>
                <CardActionButton cardActionType='Заявка'>
                    <ShowMoreIcon/>
                </CardActionButton >
                <CardActionButton cardActionType='Отклики'>
                    <UsersIcon/>
                </CardActionButton>
                <CardActionButton cardActionType='Сравнение'>
                    <CompareIcon/>
                </CardActionButton>
            </div>
        </div>
    )
}