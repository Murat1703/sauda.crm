import cls from './CardActions.module.css'
import { Request } from '../../_types/request.types'
import DraftActions from './DraftActions'
import ApprovalActions from './ApprovalActions'
import CollectingResponses from './CollectingResponses'
import ProposalsSendActions from './ProposalsSecntActions/ProposalsSentActions'

type cardActionsProps = {
    request: Request
}


export default function CardActions ({request}:cardActionsProps){
    return(
        <div className={cls.cardActions}>
            {request.status === 'draft' && <DraftActions request={request}/>}
            {request.status === 'approval' && <ApprovalActions request={request}/>}
            {request.status === 'collecting_responses' && <CollectingResponses request={request}/>}
            {request.status === 'proposals_sent' && <ProposalsSendActions request={request}/>}
        </div>
    )
}