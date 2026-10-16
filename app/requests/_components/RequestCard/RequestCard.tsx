import CardItem from "@/components/CardItem";
import cls from './RequestCard.module.css'
import type { Request } from "../../_types/request.types";
import { formatDate } from "@/lib/formatDate";
import { useRequestDetails } from "@/hooks/useRequestDetails";
import Badge from "@/components/ui/Badge";
import { PrivateIcon } from "@/components/ui/icons";
import CardInfoBlock from "@/components/CardInfoBlock/CardInfoBlock";
import CardActions from "../CardActions";

type requestCardProps = {
    request: Request
}

export default function RequestCard({request}:requestCardProps){

    const {
        activeTab,
        isOpen,
        openDetails,
        closeDetails,
        setActiveTab,
    } = useRequestDetails()
    console.log(request)

    return(
        <CardItem>
            <div className={cls.left}>
                <div className={cls.requestTitleBlock}>
                    <div className={cls.requestTitle}>
                        <div>
                            {request.isPrivate && 
                            <div className={cls.private}>
                                <PrivateIcon />
                                <span>Приватная</span>
                            </div>}
                            <span className={cls.label}>{request.number}</span>
                            <span className={cls.objectName}>{request.object}</span>
                        </div>
                        <h4>{request.title}</h4>
                    </div>
                    <div className={cls.categoriesList}>
                        {request.categories.map((cat)=>(
                            <Badge key={cat} text={cat} type="category"/>
                        ))}
                    </div>
                </div>
                <CardInfoBlock>
                    <div className={cls.infoBlock}>
                        <span>Дата приема</span>
                        <span style={{
                            color: request.responseDeadline
                                ? 'var(--content-primary)'
                                : 'var(--content-secondary)'
                        }}>{request.responseDeadline ? formatDate(request.responseDeadline)  : "Не указано"}</span>
                    </div>
                    <div className={cls.infoBlock}>
                        <span>Ответственный</span>
                        <span>{request.responsible.name}</span>
                    </div>
                </CardInfoBlock>
            </div>
            <div className={cls.right}>
                <CardActions request={request}/>
            </div>
        </CardItem>
    )
}