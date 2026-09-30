import Logo from '@/components/Logo'
import { MessageIcon, NotificationIcon, SearchIcon, SettingsIcon } from '../icons'
import cls from './Header.module.css'
import HeaderButton from './HeaderButton'

export default function Header(){
    return(
        <header className={cls.header}>
            <div className={cls.headerContent}>
                <Logo />
                <div className={cls.headerButtons}>
                    <HeaderButton icon={<SearchIcon />} />
                    <HeaderButton icon={<MessageIcon />} count={26}/>
                    <HeaderButton icon={<NotificationIcon />} count={3}/>
                    <HeaderButton icon={<SettingsIcon />} />
                </div>
            </div>
        </header>
    )
}