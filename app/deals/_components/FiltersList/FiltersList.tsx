import FilterItem from '@/components/FiltersList/FilterItem'
import cls from './FiltersList.module.css'
import { FilterNewIcon, ArrowIcon, CalendarIcon } from '@/components/ui/icons'
import FilterSearchItem from '@/components/FiltersList/FilterSearchItem'

export default function FiltersList(){
    return(
        <div className={cls.filtersList}>
            <div className={cls.left}>
                <div>
                    <FilterItem filterType='new' text='Сначала новые' icon={FilterNewIcon}/>
                    <FilterItem filterType='dropdown' text='Статусы' icon={ArrowIcon}/>
                    <FilterItem filterType='dropdown' text='Поставщик' icon={ArrowIcon}/>
                    <FilterItem filterType='byDate' text='Период' icon={CalendarIcon}/>
                </div>
            </div>
            <div>
                <FilterSearchItem text='По № сделки'/>
            </div>
        </div>
    )
}