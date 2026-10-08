import { ApprovalRequest } from "../../types";
import CardItem from "@/components/CardItem";
import cls from './ApprovalItem.module.css'
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/formatDate";
import ApprovalStatusLabels from "../../_constants";
import { CheckStatusIcon, MoreIcon, ShowMoreIcon } from "@/components/ui/icons";
import Button from "@/components/ui/Button";

type ApprovalItemProps = {
    approvalItem: ApprovalRequest
}

export default function ApprovalItem({approvalItem}:ApprovalItemProps){
    return(
        <CardItem>
            <div className={cls.approvedItemContainer}>
                <div className={cls.approvedItemTitleBlock}>
                    <div className={cls.top}>
                        <div className={cls.objectInfo}>
                            <span>{approvalItem.number}</span>
                            <span>{approvalItem.object}</span>
                        </div>
                        <h4 className={cls.approvalItemTitle}>{approvalItem.title}</h4>
                    </div>
                    <div className={cls.categoriesList}>
                        {approvalItem.categories.map((item, index)=>(
                            <Badge 
                                text={item} 
                                key={index} 
                                type="category"
                                className={cls[approvalItem.status]}
                            />
                        ))}
                    </div>
                </div>
                <div className={cls.approvedItemDateBlock}>
                    <div className={cls.deadLine}>
                        <span>Даты приема:</span>
                        <span>{formatDate(approvalItem.createdAt)}</span>
                    </div>
                    <div className={cls.deadLine}>
                        <span>Ответственный</span>
                        <span>{approvalItem.initiator.name}</span>
                    </div>
                </div>
                <div className={cls.approvedItemStatusBlock}>
                    <div className={cls.statusContainer}>
                        <div className={cls.statusLeft}>
                            <Badge 
                                text={ApprovalStatusLabels[approvalItem.status]} 
                                type="status"
                                className={`${cls[approvalItem.status] ?? ''}`}
                            />
                            <div className={cls.approvalPeoples}>
                                <ul className={cls.approvalPeoplesContent}>
                                    {approvalItem.approvers.map((item, index)=>(
                                        <li key={index}>
                                            <div className={cls.iconBlock}>
                                                {item.status == 'approved'
                                                ?<span className={cls.approvedIcon}>
                                                    <CheckStatusIcon />
                                                </span>
                                                :<span className={cls.notApprovedIcon}></span>}
                                            </div>
                                            <div className={cls.approverInfoContentBlock}>
                                                <span>{item.name}</span>
                                                <span>{item.position}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={cls.statusRight}>
                            <button>
                                <ShowMoreIcon />
                            </button>
                        </div>
                    </div>
                    <Button variant="topBtn">
                        Согласование
                    </Button>
                </div>
            </div>
        </CardItem>
    )
}