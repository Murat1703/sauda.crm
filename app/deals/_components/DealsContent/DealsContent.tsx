import CardItem from '@/components/CardItem'
import { Deal } from '../../_types/deal.types'
import cls from './DealsContent.module.css'
import DealItem from '../DealItem'


type DealsContentProps = {
    deals: Deal[]
}

export default function DealsContent({deals}: DealsContentProps){
    return(
        <div className={cls.dealsContent}>
            {deals.map((deal)=>(
                <DealItem key={deal.id} deal={deal}/>
            ))}
        </div>
    )
}