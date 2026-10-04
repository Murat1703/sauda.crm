'use client'
import CardInputsItem from '@/components/CardInputsItem'
import cls from './CardInputItemsList.module.css'
import Input from '@/components/ui/Input'
import InputLabel from '@/components/ui/InputLabel'
import RemoveIcon from '@/components/ui/icons/RemoveIcon'
import { ArrowIcon, MenuIcon } from '@/components/ui/icons'
import FormTabList from '@/components/FormTabList'
import { act, useState } from 'react'
import Switch from '@/components/Switch'

export default function CardInputItemsList(){

    const tabs= [
        {
            label: "В опред. день",
            value: "day"
        },
        {
            label: "В любой момент",
            value: "anytime"
        }
    ]

    const [isActive, setIsActive] = useState('day')

    const handleChange = (value: string) => {
        setIsActive(value);
    };

    const[activeSwitch, setActiveSwitch] = useState(false)
    const handleToggleSwitch = () =>{
        setActiveSwitch(!activeSwitch)
    }


    const budgetTabs= [
        {
            label: "Без бюджета",
            value: "withoutBudget"
        },
        {
            label: "С Бюджетом",
            value: "withBudget"
        }
    ]
    const [activeBudgetTab, setActiveBudgetTab] = useState('withoutBudget')
    const handleChangeBudget = (value: string) => {
        setActiveBudgetTab(value);
    };

    const[isAvailybility, setIsAvaylibility] = useState(false)
    const handleToggleAvailybility = () =>{
        setIsAvaylibility(!isAvailybility)
    }


    return(
        <div className={cls.cardsList}>
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
            <CardInputsItem>
                <h4>Правила проведения закупки</h4>
                <div className={cls.rulesContent}>
                    <div className={cls.leadType}>
                        <div className={cls.infoInputItem}>
                            <div className={cls.top}>
                                <InputLabel>
                                    <span>Тип заявки</span>
                                    <span>*</span>
                                </InputLabel>
                            </div>
                            <button className={cls.leadSelectBtn}>
                                <span>Запрос предложений</span>
                                <ArrowIcon />
                            </button>
                        </div>
                        <div>
                            <div className={cls.infoInputItem}>
                                <div className={cls.top}>
                                    <InputLabel>
                                        <span>Подведение итогов</span>
                                        <span>*</span>
                                    </InputLabel>
                                </div>
                                <FormTabList activeTab={isActive} tabs={tabs} onChange={handleChange}/>
                            </div>
                            <div className={cls.infoInputItem}>
                                <div className={cls.top}>
                                    <InputLabel>
                                        <span>Срок подведения итогов</span>
                                        <span>*</span>
                                    </InputLabel>
                                </div>
                                <div className={cls.deadLineCount}>
                                    <input placeholder='0'/>
                                    <span>дней</span>
                                </div>
                            </div>
                            <div className={cls.autoRenewal}>
                                <Switch isActive={activeSwitch} onChange={handleToggleSwitch}/>
                                <span>Автопродление</span>
                            </div>
                        </div>
                    </div>
                    <div className={cls.budgetBlock}>
                        <p>Рекомендуемый бюджет</p>
                        <FormTabList tabs={budgetTabs} activeTab={activeBudgetTab} onChange={handleChangeBudget}/>
                    </div>
                    <div className={cls.availybilityBlock}>
                        <p>Доступность поставщикам</p>
                        <div>
                            <Switch isActive={isAvailybility} onChange={handleToggleAvailybility}/>
                            <span>Допустить к процедуре только выбранных поставщиков</span>
                        </div>
                    </div>
                </div>
            </CardInputsItem>
        </div>
    )
}