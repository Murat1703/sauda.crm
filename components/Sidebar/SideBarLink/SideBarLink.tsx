import cls from './SideBarLink.module.css'
import Link from 'next/link'
import Counter from '@/components/ui/Counter'

type SideBarLinkProps = {
    link: string,
    text: string,
    count?: number,
    icon: React.ReactNode,
    isActive: boolean,
}

export default function SideBarLink({link, text, count, icon, isActive }:SideBarLinkProps){
    return(
        <Link href={link} className={`${cls.sideBarLink} ${isActive? cls.activeLink: ""}`} >
            {icon}
            <p>{text}</p>
            {count? <Counter count={count}/>: ""}
        </Link>
    )
}