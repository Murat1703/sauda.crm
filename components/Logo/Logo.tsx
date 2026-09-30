import Link from 'next/link'
import cls from './Logo.module.css'
import {LogoIcon} from '../ui/icons'

export default function Logo (){
    return(
        <Link href={'/'} className={cls.logo}>
            Sauda 
            <span>
                <LogoIcon />
            </span>
            Закупки
        </Link>
    )
}