import cls from './MainInfo.module.css'
import CardInputsItem from '@/components/CardInputsItem'
import InputLabel from '@/components/ui/InputLabel'
import Input from '@/components/ui/Input'
import { MenuIcon, RemoveIcon, ArrowIcon } from '@/components/ui/icons'

export default function MainInfo(){
    return(
        <CardInputsItem>
            <h4>Основная информация</h4>
            <div className={cls.infoContent}>
                <div className={cls.infoInputItem}>
                    <div className={cls.top}>
                        <InputLabel>
                            <span>Наименование заявки</span>
                            <span>*</span>
                        </InputLabel>
                        <span>0/100</span>
                    </div>
                    <Input placeholder='Например: Пополнение материалов и инструментов на объекте'/>
                </div>
                <div className={cls.infoInputItem}>
                    <div className={cls.top}>
                        <InputLabel>
                            <span>Категории</span>
                            <span>*</span>
                        </InputLabel>
                        <button>Очистить</button>
                    </div>
                    <div className={cls.categories}>
                        <div className={cls.categoriesContent}>
                                <button className={cls.categoryItem}>
                                    <span>Крпежные изделия</span>
                                    <RemoveIcon />
                                </button>
                                <div>
                                    <span>Выберите категории</span>
                                </div>
                        </div>
                        <button className={cls.categoryItemsBtn}>
                            <MenuIcon />
                            <span>Меню</span>
                        </button>
                    </div>
                </div>
                <div className={cls.infoObjectItem}>
                    <div className={cls.infoInputItem}>
                        <div className={cls.top}>
                            <InputLabel>
                                <span>Объект</span>
                                <span>*</span>
                            </InputLabel>
                        </div>
                        <button className={cls.objectsListBtn}>
                            <span>ЖК Hayat Meliora</span>
                            <ArrowIcon />
                        </button>
                    </div>
                    <div className={cls.infoInputItem}>
                        <div className={cls.top}>
                            <InputLabel>
                                <span>Дополнительно о объекте</span>
                                <span></span>
                            </InputLabel>
                        </div>
                        <Input placeholder='Очередь, блок, №склада'/>
                    </div>

                </div>
            </div>
        </CardInputsItem>
    )
}