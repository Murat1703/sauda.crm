import { RequestApproval } from '@/app/requests/_types/request.types'
import cls from './ApprovalsList.module.css'
import { WhiteCheckIcon } from '../ui/icons'

type approvalsListProps = {
    list: RequestApproval[]
}

export default function ApprovalsList({list}:approvalsListProps){
    return(
        <ul className={cls.approvalsList}>
            {list.map((item, index)=>(
                <li key={index} className={cls.approvalItem}>
                    <div className={cls.icon}>
                        {item.approved 
                        ? <div className={cls.approvedIcon}>
                            <WhiteCheckIcon />
                          </div>
                        : <div className={cls.notApproved}></div>}
                    </div>
                    <div className={cls.personInfo}>
                        <span>{item.name}</span>
                        <span>{item.position}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}