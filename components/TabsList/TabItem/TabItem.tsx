import cls from './TabItem.module.css'

export type TabItemProps = {
    label: string,
    value: string,
    count?: number, 
    active?: boolean,
    onClick?: ()=>void
}

export default function TabItem({value, label, count, active, onClick}: TabItemProps){
    return(
        <button className={`${cls.tabItem } ${active? cls.tabItemActive : ""}`} onClick={onClick}>
            <span>{label} {count}</span>
        </button>
    )
}