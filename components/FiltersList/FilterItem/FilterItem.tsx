import cls from './FilterItem.module.css'

type FilterProps = {
    text: string,
    icon?: React.ComponentType ,
    filterType?: "dropdown" | "new" | "byDate",
    count?: number
}

export default function FilterItem({text, icon: Icon, filterType,count}: FilterProps){
    return(
        <button className={cls.filterItem}>
            {(filterType == 'new' && Icon ) && <Icon />}    
            <div className={cls.textBlock}>
                <span>{text}</span>
                {count && <span>{count}</span>}
            </div>       
            
            {(filterType !== 'new' && Icon) && <Icon />}  
        </button>
    )
}