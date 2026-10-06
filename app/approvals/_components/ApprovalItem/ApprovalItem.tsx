import { ApprovalRequest } from "../../types";
import CardItem from "@/components/CardItem";
import cls from './ApprovalItem.module.css'
import Badge from "@/components/ui/Badge";

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
                            <Badge text={item} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </CardItem>
    )
}