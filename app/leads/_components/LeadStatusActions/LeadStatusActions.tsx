
import cls from './LeadStatusActions.module.css'
import {LeadStatusLabels} from '../../_constants/LeadStatusLabels'
import DraftActions from './DraftActions';
import ApprovalActions from './ApprovalActions';
import type {Lead} from '../../types';
import CollectingResponsesActions from './CollectingResponsesActions';
import ProposalsSentActions from './ProposalsSentActions';
import SummingUp from './SummingUp';
import DealApproval from './DealApproval';
import CompletedActions from './CompletedActions';


type LeadStatusActionsProps = {
    lead: Lead;
}

export default function LeadStatusActions({lead}: LeadStatusActionsProps ) {

    return(
        <div className={cls.leadStatusActions}>
            {lead.status === 'draft' && <DraftActions status={LeadStatusLabels[lead.status]} />}
            {lead.status === 'approval' && <ApprovalActions lead={lead} />}
            {lead.status === 'collecting_responses' && <CollectingResponsesActions lead={lead} />}
            {lead.status === 'proposals_sent' && <ProposalsSentActions lead={lead} />}
            {lead.status === 'summing_up' && <SummingUp lead={lead} />}
            {lead.status === 'deal_approval' && <DealApproval lead={lead} />}
            {lead.status === 'completed' && <CompletedActions lead={lead} />}

        </div>
    )
}