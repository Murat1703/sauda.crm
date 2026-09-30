import cls from './SideBar.module.css'
import SideBarLink from './SideBarLink/SideBarLink'
import { AnalyticsIcon, HomeIcon, ProvidersIcon, ApprovalsIcon, LeadsIcon, DealsIcon, DeliveriesIcon, InvoicesIcon, DocumentsIcon, ObjectsIcon, UsersIcon, SettingsIcon } from '../ui/icons'

export default function SideBar(){
    return(
        <aside className={cls.sideBar}>
            <nav>
                <div>
                    <SideBarLink 
                        link='/' 
                        text='Главное' 
                        icon={<HomeIcon />}
                    />
                    <SideBarLink 
                        link='/providers' 
                        text='Поставщики' 
                        icon={<ProvidersIcon />}
                    />
                    <SideBarLink 
                        link='/analytics' 
                        text='Аналитика' 
                        icon={<AnalyticsIcon />}
                    />
                </div>
                <div>
                    <SideBarLink 
                        link='/leads' 
                        text='Заявки' 
                        icon={<LeadsIcon />}
                    />
                    <SideBarLink 
                        link='/approvals' 
                        text='Согласования' 
                        icon={<ApprovalsIcon />}
                    />
                    <SideBarLink 
                        link='/deals' 
                        text='Сделки' 
                        icon={<DealsIcon />}
                    />
                    <SideBarLink 
                        link='/deliveries' 
                        text='Поставки' 
                        icon={<DeliveriesIcon />}
                    />
                    <SideBarLink 
                        link='/invoices' 
                        text='Счета и оплаты' 
                        icon={<InvoicesIcon />}
                    />
                    <SideBarLink 
                        link='/documents' 
                        text='Документы' 
                        icon={<DocumentsIcon />}
                    />
                </div>
                <div>
                    <SideBarLink 
                        link='/objects' 
                        text='Объекты' 
                        icon={<ObjectsIcon />}
                    />
                    <SideBarLink 
                        link='/users' 
                        text='Сотрудники и роли' 
                        icon={<UsersIcon />}
                    />
                    <SideBarLink 
                        link='/settings' 
                        text='Настройки' 
                        icon={<SettingsIcon />}
                    />
                </div>
            </nav>
            <div>user</div>
        </aside>
    )
}