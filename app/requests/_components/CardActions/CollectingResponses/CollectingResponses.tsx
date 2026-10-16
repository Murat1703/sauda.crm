import CardActionButton from '@/components/CardActionButton'
import cls from './CollectingResponses.module.css'
import { RequestStatusLabel, type Request } from '@/app/requests/_types/request.types'
import { CompareIcon, ResponsesIcon, ShowMoreIcon, UsersIcon } from '@/components/ui/icons'
import Badge from '@/components/ui/Badge'
import { emitWarning } from 'process'

type props = {
    request: Request
}

export default function CollectingResponses({request}: props){
    return(
        <div className={cls.collectingResponsesContent}>
            <div className={cls.left}>
                <Badge text={RequestStatusLabel[request.status]}/>
                <ul className={cls.responsesList}>
                    <li>
                        <span>Отклики</span>
                        <span>{request.stats.responses}{request.stats.additionalResponses && `+${request.stats.additionalResponses}`}</span>
                    </li>
                    <li>
                        <span>Просмотры</span>
                        <span>{request.stats.views}</span>
                    </li>
                </ul>
            </div>
            <div className={cls.right}>
                <CardActionButton cardActionType='Заявка'>
                    <ShowMoreIcon />
                </CardActionButton>
                <CardActionButton cardActionType='Отклики'>
                    <UsersIcon />
                </CardActionButton>
                <CardActionButton cardActionType='Сравнение'>
                    <CompareIcon />
                </CardActionButton>
            </div>
        </div>
    )
}