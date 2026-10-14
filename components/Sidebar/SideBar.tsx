'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import cls from './SideBar.module.css'
import SideBarLink from './SideBarLink/SideBarLink'
import { AnalyticsIcon, HomeIcon, ProvidersIcon, ApprovalsIcon, LeadsIcon, DealsIcon, DeliveriesIcon, InvoicesIcon, DocumentsIcon, ObjectsIcon, UsersIcon, SettingsIcon, LeadsFilledIcon, ApprovalsFilledIcon, DealsFilledIcon, DeliveriesFilledIcon, InvoicesFilledIcon, DocumentsFilledIcon } from '../ui/icons'

export default function SideBar(){

    const [activeIcon, setActiveIcon] = useState(false)

    const handleSetIsActiveIcon = () =>{
        setActiveIcon(true)
    }
    const handleSetInActiveIcon = () =>{
        setActiveIcon(false)
    }


    const pathname = usePathname();
    const isActive = (path: string) =>{
        return  path === "/"
        ? pathname === "/"
        : pathname === path || pathname.startsWith(`${path}/`);
    }

    return( 
        <aside className={cls.sideBar}>
            <nav>
                <div>
                    <SideBarLink 
                        link='/' 
                        text='Главное' 
                        icon={<HomeIcon />}
                        isActive = {isActive('/')}
                    />
                    <SideBarLink 
                        link='/providers' 
                        text='Поставщики' 
                        icon={<ProvidersIcon />}
                        isActive = {isActive('/providers')}
                    />
                    <SideBarLink 
                        link='/analytics' 
                        text='Аналитика' 
                        icon={<AnalyticsIcon />}
                        isActive = {isActive('/analytics')}
                    />
                </div>
                <div>
                    <SideBarLink 
                        link='/leads' 
                        text='Заявки' 
                        isActive = {isActive('/leads')}
                        icon={isActive('/leads')? <LeadsFilledIcon />:<LeadsIcon />}
                    />
                    <SideBarLink 
                        link='/approvals' 
                        text='Согласования' 
                        icon={isActive('/approvals')? <ApprovalsFilledIcon /> :<ApprovalsIcon />}
                        isActive = {isActive('/approvals')}
                    />
                    <SideBarLink 
                        link='/deals' 
                        text='Сделки' 
                        icon={isActive('/deals')? <DealsFilledIcon /> :<DealsIcon />}
                        isActive = {isActive('/deals')}
                    />
                    <SideBarLink 
                        link='/deliveries' 
                        text='Поставки' 
                        icon={isActive('/deliveries')? <DeliveriesFilledIcon /> :<DeliveriesIcon />}
                        isActive = {isActive('/deliveries')}
                    />
                    <SideBarLink 
                        link='/invoices' 
                        text='Счета и оплаты' 
                        icon={isActive('/invoices')? <InvoicesFilledIcon /> :<InvoicesIcon />}
                        isActive = {isActive('/invoices')}
                    />
                    <SideBarLink 
                        link='/documents' 
                        text='Документы' 
                        icon={isActive('/documents')? <DocumentsFilledIcon /> :<DocumentsIcon />}
                        isActive = {isActive('/documents')}
                    />
                </div>
                <div>
                    <SideBarLink 
                        link='/objects' 
                        text='Объекты' 
                        icon={<ObjectsIcon />}
                        isActive = {isActive('/objects')}
                    />
                    <SideBarLink 
                        link='/users' 
                        text='Сотрудники и роли' 
                        icon={<UsersIcon />}
                        isActive = {isActive('/users')}
                    />
                    <SideBarLink 
                        link='/settings' 
                        text='Настройки' 
                        icon={<SettingsIcon />}
                        isActive = {isActive('/settings')}
                    />
                </div>
            </nav>
            <div>user</div>
        </aside>
    )
}