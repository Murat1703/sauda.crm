'use client'

import cls from './SideBarLink.module.css'
import Link from 'next/link'
import Counter from '@/components/ui/Counter'
import { usePathname } from "next/navigation";


type SideBarLinkProps = {
    link: string,
    text: string,
    count?: number,
    icon: React.ReactNode
}

export default function SideBarLink({link, text, count, icon}:SideBarLinkProps){

    const pathname = usePathname();
    const isActive = pathname === link;


    return(
        <Link href={link} className={`${cls.sideBarLink} ${isActive? cls.activeLink: ""}`}>
            {icon}
            <p>{text}</p>
            {count? <Counter count={count}/>: ""}
        </Link>
    )
}