import cls from './DraftActions.module.css'
import { Request } from '@/app/requests/_types/request.types'
import Badge from '@/components/ui/Badge'
import { RequestStatusLabel } from '@/app/requests/_types/request.types'
import Button from '@/components/ui/Button'
import { EditIcon, MoreIcon } from '@/components/ui/icons'
import CardButton from '@/components/ui/CardButton'


type draftActionsProps = {
    request: Request
}

export default function DraftActions({request}:draftActionsProps){
    return (
        <div className={cls.draft}>
            <Badge type='category' text={RequestStatusLabel[request.status]}/>
            <div className={cls.draftAction}>
                <Button variant='secondary' className={cls.editBtn}>
                    <EditIcon />
                    <span>Редактировать</span>
                </Button>
                <CardButton>
                    <MoreIcon />
                </CardButton>
            </div>
        </div>
    )   
}