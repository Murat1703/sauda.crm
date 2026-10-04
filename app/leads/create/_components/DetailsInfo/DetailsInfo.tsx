import CardInputsItem from '@/components/CardInputsItem'
import cls from './DetailsInfo.module.css'
import InputLabel from '@/components/ui/InputLabel'
import { ArrowIcon } from '@/components/ui/icons'
import Input from '@/components/ui/Input'

export default function DetailsInfo (){
    return(
        <CardInputsItem>
            <h4>Дополнительная информация</h4>
            <div className={cls.detailsInformation}>
                <div className={cls.infoInputItem}>
                    <div className={cls.top}>
                        <InputLabel>
                            <span>Ответственный</span>
                            <span>*</span>
                        </InputLabel>
                    </div>
                    <button>
                        <span>Баталгазиев Р.В. (Вы)</span>
                        <ArrowIcon />
                    </button>
                </div>
                <div className={cls.infoInputItem}>
                    <div className={cls.top}>
                        <InputLabel>
                            <span>Телефон</span>
                            <span>*</span>
                        </InputLabel>
                    </div>
                    <Input placeholder='+7 705 123 45'/>
                </div>
                <div className={cls.infoInputItem}>
                    <div className={cls.top}>
                        <InputLabel>
                            <span>Email</span>
                            <span>*</span>
                        </InputLabel>
                    </div>
                    <Input placeholder='mail@mail.kz' type='email'/>
                </div>
            </div>
            <div className={`${cls.infoInputItem} ${cls.infoInputComment}`}>
                <div className={cls.top}>
                    <InputLabel>
                        <span>Комментарий</span>
                    </InputLabel>
                    <span>0/250</span>
                </div>
                <Input placeholder='Комментарий'/>
            </div>
        </CardInputsItem>
    )
}