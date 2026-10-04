import cls from './FormTabItem.module.css'


export type FormTabItemProps = {
    label: string, 
    value: string,
    isActive?: boolean,
    onChange: () =>void
}

export default function FormTabItem({label, isActive, value, onChange}:FormTabItemProps){
    return(
        <button className={`${cls.tabItem} ${isActive? cls.tabItemActive:"" }`} onClick={onChange}>
            <span>{label}</span>
        </button>
    )
}