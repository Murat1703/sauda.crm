import Badge from '@/components/ui/Badge'
import cls from './ApprovalActions.module.css'
import { RequestStatusLabel, type Request } from '@/app/requests/_types/request.types'
import ApprovalsList from '@/components/ApprovalsList'
import CardActionButton from '@/components/CardActionButton'
import { ShowMoreIcon } from '@/components/ui/icons'
import Button from '@/components/ui/Button'

type approvalActionsProps = {
    request: Request
}

export default function ApprovalActions({request}: approvalActionsProps){
    return(
        <div className={cls.approvalContent}>
            <div className={cls.approval}>
                <div className={cls.approvalLeft}>
                    <Badge type='status' text={RequestStatusLabel[request.status]} />
                    <ApprovalsList list={request.approvals}/>                
                </div>
                <div className={cls.approvalRight}>
                    <CardActionButton cardActionType={"Заявка"}>
                        <ShowMoreIcon />
                    </CardActionButton>
                </div>
            </div>
            <Button variant='topBtn'><span>Согласование</span></Button>
        </div>
    )
}