import cls from './LeadViews.module.css'
import type { Lead } from '@/app/leads/types'
import CardActionButton from '@/components/CardActionButton'
import { LikeIcon, ShowMoreIcon } from '@/components/ui/icons'
import { formatTime } from '@/lib/formatDate'

type LeadViewsProps = {
    lead: Lead
}

export default function LeadViews({lead}:LeadViewsProps){
    return(
        <div className={cls.leadViewsWrapper}>
            <ul className={cls.leadViewsItems}>
                {lead.viewsDetails?.map((item)=>(
                    <li key={item.id}>
                        <div className={cls.left}>
                            <div className={cls.logo}></div>
                            <span className={cls.companyName}>{item.companyName}</span>
                            <span className={cls.viewDate}>{formatTime(item.viewedAt)}</span>
                        </div>
                        <div className={cls.viewsButtons}>
                            <CardActionButton cardActionType="">
                                <LikeIcon />
                            </CardActionButton>
                            <CardActionButton cardActionType="">
                                <ShowMoreIcon />
                            </CardActionButton>
                        </div>
                    </li>   

                ))}
            </ul>
        </div>
    )
}