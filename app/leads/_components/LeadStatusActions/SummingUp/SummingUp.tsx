import cls from './SummingUp.module.css'
import type {Lead} from '../../../types';
import Badge from '@/components/ui/Badge';
import CardActionButton from '@/components/CardActionButton';
import { CompareIcon, ShowMoreIcon, UsersIcon } from '@/components/ui/icons';


type SummingUpProps = {
    lead: Lead
}

export default function SummingUp({lead}: SummingUpProps){
    return(
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
                <CardActionButton cardActionType='Заявка'>
                    <ShowMoreIcon />
                </CardActionButton>
                <CardActionButton cardActionType='Отклики'>
                    < UsersIcon />
                </CardActionButton>
                <CardActionButton cardActionType='Сравнение'>
                    < CompareIcon />
                </CardActionButton>
            </div>
        </div>
    )
}