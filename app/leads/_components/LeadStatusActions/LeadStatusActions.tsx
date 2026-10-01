
import cls from './LeadStatusActions.module.css'
import {LeadStatusLabels} from '../LeadStatusLabels'
import DraftActions from './DraftActions';
import ApprovalActions from './ApprovalActions';
import type {Lead} from '../../types';


type LeadStatusActionsProps = {
    lead: Lead;
}

export default function LeadStatusActions({lead}: LeadStatusActionsProps ) {

    return(
        <div className={cls.leadStatusActions}>
            {lead.status === 'draft' && <DraftActions status={LeadStatusLabels[lead.status]} />}
            {lead.status === 'approval' && <ApprovalActions lead={lead} />}
        </div>
    )
}