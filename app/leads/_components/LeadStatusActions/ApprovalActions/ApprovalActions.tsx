import Badge from '@/components/ui/Badge';
import cls from './ApprovalActions.module.css'
import type {Lead} from '../../../types';
import {LeadStatusLabels} from '../../LeadStatusLabels';
import { ApprovedIcon } from '@/components/ui/icons';

type ApprovalActionsProps = {
    lead: Lead;
}

export default function ApprovalActions({lead}: ApprovalActionsProps) {
    return(
        <div className={cls.approvalActionsContainer}>
            <div className={cls.approvalActionsInfo}>
                <Badge type={'status'} text={LeadStatusLabels[lead.status]} />
                <div className={cls.approvalsDetails}>
                    <div className={cls.approvalsDetailsInfo}>
                        <div className={cls.approvalsStatusIconsList}>
                        {lead.approvals.map((approval)=>(
                            <div key={approval.id} className={cls.approvalStatusIcons}>
                                <span className={`${approval.approved ? cls.approved: cls.notApproved}`}>{approval.approved? <ApprovedIcon /> : ''}</span>
                                {/* <span></span> */}
                            </div>
                        ))}
                        </div>
                        <div className={cls.approvalsNameDetails}>
                        {lead.approvals.map((approval)=>(
                            <div key={approval.id}>
                                <span>{approval.name}</span>
                                <span>{approval.position}</span>
                            </div>
                        ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}