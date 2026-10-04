import cls from './FormTabList.module.css'
import type { FormTabItemProps } from './FormTabItem/FormTabItem'
import FormTabItem from './FormTabItem/FormTabItem'

type FormTabListProps = {
    tabs: FormTabItemProps[],
    activeTab: string,
    onChange: (value:string) => void
}

export default function FormTabList(
    {tabs, activeTab, onChange}:FormTabListProps
){
    return(
        <div className={cls.formTabList}>
            {tabs.map((tab)=>(
                <FormTabItem 
                    key={tab.value}
                    isActive={activeTab === tab.value}
                    {...tab}
                    onChange={()=>onChange(tab.value)}
                />
            ))}
        </div>
    )
}