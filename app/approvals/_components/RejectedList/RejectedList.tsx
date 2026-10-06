import ApprovalItem from '../ApprovalItem'
import { ArrowIcon } from '@/components/ui/icons'
import { ApprovalRequest } from '../../types'
import cls from './RejectedList.module.css'

type RejectedListProps = {
    rejected: ApprovalRequest[]
}

export default function RejectedList({rejected}:RejectedListProps){
    return(
        <>
            {rejected.filter(item => item.type ==="purchase_request").length > 0 &&
            <div className={cls.approvalListType}>
                <div className={cls.top}>
                    <h4>Заявки</h4>
                    <button>
                        <ArrowIcon />
                    </button>
                </div>
                <div className={cls.bottom}>
                    {rejected.filter(item => item.type ==="purchase_request").map((purchaseItem)=>(
                        <ApprovalItem key={purchaseItem.id} approvalItem={purchaseItem}/>
                    ))}
                </div>
            </div>
            }
            {rejected.filter(item => item.type ==="deal_request").length > 0 && 
            <div className={cls.approvalListType}>
                <div className={cls.top}>
                    <h4>Сделки</h4>
                    <button>
                        <ArrowIcon />
                    </button>
                </div>
                <div className={cls.bottom}>
                    {rejected.filter(item => item.type ==="deal_request").map((purchaseItem)=>(
                        <ApprovalItem key={purchaseItem.id} approvalItem={purchaseItem}/>
                    ))}
                </div>
            </div>

            }
        </>
    )
}