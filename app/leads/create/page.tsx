import { BackIcon } from '@/components/ui/icons'
import cls from './CreatePage.module.css'
import Title from '@/components/ui/Title'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import CardInputItemsList from './CardInputItemsList'

export default function CreateLeadPage(){
    return(
        <div className={cls.createPageWrapper}>
            <div className={cls.top}>
                <div className={cls.titleBlock}>
                    <Link href={'/leads'}>
                        <BackIcon />
                    </Link>
                    <h2>Создание заявки</h2>
                </div>
                <div className={cls.topButtons}>
                    <Button variant='secondary'>
                        <span>Отмена</span>
                    </Button>
                    <Button variant='secondary'>
                        <span>Сохранить как черновик</span>
                    </Button>
                    <Button variant='success'>
                        <span>Опубликовать</span>
                    </Button>
                </div>
            </div>
            <CardInputItemsList />
        </div>
    )
}