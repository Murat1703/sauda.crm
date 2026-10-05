import CardInputsItem from '@/components/CardInputsItem'
import cls from './ApprovalInfo.module.css'
import { GreenApprovedIcon } from '@/components/ui/icons'


export default function ApprovalInfo (){
    return(
        <CardInputsItem>
            <h4>Процесс согласования</h4>
            <div className={cls.info}>
                <GreenApprovedIcon />
                <span>Заявка будет сразу опубликована, без необходимости согласования третьими лицами.</span>
            </div>
        </CardInputsItem>
    )
}