import FilterItem from './FilterItem'
import cls from './FilterList.module.css'
import { ArrowIcon, CalendarIcon, FilterNewIcon } from '@/components/ui/icons'

export default function FiltersList(){
    return(
        <div className={cls.filtersList}>
            <div className={cls.left}>
                <div className={cls.filterContainer}>
                    <FilterItem filterType='new' text='Сначала новые' icon={FilterNewIcon}/>
                    <FilterItem filterType='dropdown' text='Статусы' icon={ArrowIcon}/>
                    <FilterItem filterType='dropdown' text='Объекты' icon={ArrowIcon}/>
                    <FilterItem filterType='dropdown' text='Категория' icon={ArrowIcon}/>
                    <FilterItem filterType='byDate' text='Создано' icon={CalendarIcon}/>
                </div>
            </div>
            <div className={cls.right}></div>
        </div>
    )
}