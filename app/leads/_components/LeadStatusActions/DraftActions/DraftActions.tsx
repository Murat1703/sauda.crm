import Badge from '@/components/ui/Badge';
import cls from './DraftActions.module.css'
import Button from '@/components/ui/Button';
import { EditIcon, MoreIcon } from '@/components/ui/icons';
import CardActionButton from '@/components/CardActionButton';

type DraftActionsProps = {
    status: string;
} 

export default function DraftActions({status}: DraftActionsProps) {
    return(
        <div className={cls.draftActions}>
            <Badge type={'status'} text={status} />
            <div className={cls.bottom}>
                <Button variant='secondary'>
                    <EditIcon />
                    <span>Редактировать</span>
                </Button>
                <CardActionButton>
                    <MoreIcon />
                </CardActionButton>
            </div>
        </div>
    )
}