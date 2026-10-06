import { ArrowIcon, SearchIcon } from '@/components/ui/icons'
import cls from './FilterSearchItem.module.css'

type FilterSearchItemProps = {
    text: string
}

export default function FilterSearchItem({text}: FilterSearchItemProps){
    return(
        <div className={cls.filterSearchItem}>
            <div className={cls.filterSearchType}>
                <span>{text}</span>
                <ArrowIcon />
            </div>
            <input placeholder='Поиск'/>
            <SearchIcon />
        </div>
    )
}