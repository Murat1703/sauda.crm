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
                {approvalItem.type == 'purchase_request' 
                ?
                <div className={cls.left}>
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
                </div>
                :
                <div className={cls.left}>
                    <div className={cls.approvedItemDealTitleBlock}>
                        <h4>{approvalItem.number}</h4>
                        <div className={cls.approvedItemObjectDetails}>
                            <span>{approvalItem.object}</span>
                            <span>{approvalItem.initiator.name}</span>
                        </div>
                        <div className={cls.approvalItemDealRequest}>
                            <span>RQ-0003741: Электромонтажные работы и материалы</span>
                            <span>Полная</span>
                        </div>
                        <div className={`${cls.approvalItemDealRequest } ${cls.approvalItemCompanyInfo}`}>
                            <div></div>
                            <span>{approvalItem.object}</span>
                        </div>
                    </div>
                    <div className={cls.approvedItemDateBlock}>
                        <div className={cls.deadLine}>
                            <span>Сумма:</span>
                            <span>{formatDate(approvalItem.createdAt)}</span>
                        </div>
                        <div className={cls.deadLine}>
                            <span>Бюджет</span>
                            <span>{approvalItem.budget}</span>
                        </div>
                    </div>

                </div>
                }
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
                    {((approvalItem.status !== 'canceled') && (approvalItem.status !== 'rejected') )?
                    <Button variant="topBtn">
                        Согласование
                    </Button>
                    :<div className={cls.canceledReason}>
                        <h4>Причина отказа:</h4>
                        <p>Мы уже закупали данные товары в прошлой заявке, пожалуйста проверьте сметы.</p>
                    </div>
                    }
                </div>
            </div>
        </CardItem>
    )
}