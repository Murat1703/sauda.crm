import CardItem from "@/components/CardItem";
import type { Lead } from "../../types"
import cls from './LeadItem.module.css'
import Badge from "@/components/ui/Badge";
import LeadStatusActions from "../LeadStatusActions";
import { formatDate } from "@/lib/formatDate";

type LeadItemProps = {
  lead: Lead;
};



export default function LeadItem({lead}:LeadItemProps){
    return(
        <CardItem>
            <div className={cls.leadItemInfo}>
                <div className={cls.leadName}>
                    <div className={cls.leadNameTitle}>
                        <div>
                            <span>{lead.number}</span>
                            <span>{lead.object}</span>
                        </div>
                        <h3 className={cls.leadNameTitle}>{lead.title}</h3>
                    </div>
                    <div className={cls.leadsCategories}>
                        {lead.categories.map((category) => (
                            <Badge 
                                key={category} 
                                type="category" 
                                text={category} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={cls.leadItemDatesInfo}>
                <div className={cls.leadItemDeadlineDetails}>
                    <span>Даты приема</span>
                    <span style={{
                        color: lead.responseDeadline ? "var(--text-black)" : "var(--content-secondary)"
                    }}>
                        {lead.responseDeadline 
                        ? formatDate(lead.responseDeadline) 
                        : "Не указано"}
                    </span>
                </div>
                <div className={cls.leadItemDeadlineDetails}>
                    <span>Ответственный</span>
                    <span>{lead.responsible.name}</span>
                </div>
            </div>
            <LeadStatusActions lead={lead}/>
        </CardItem>
    )
}