import cls from './TabsList.module.css'
import TabItem from './TabItem'
import { TabItemProps } from './TabItem/TabItem'

type TabsListProps = {
    tabs: TabItemProps[],
    activeTab: string,
    onChange?: (value: string) => void
}

export default function TabsList({tabs, onChange, activeTab}: TabsListProps){
    return(
        <div className={cls.tabs}>
            {tabs.map((tab)=>(
                <TabItem 
                    key={tab.value}
                    count={tab?.count}
                    active={activeTab === tab.value}
                    {...tab}
                    onClick={()=>onChange(tab.value)}
                />
            ))}
        </div>
    )
}