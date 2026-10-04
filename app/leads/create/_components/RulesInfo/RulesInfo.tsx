'use client'

import cls from './RulesInfo.module.css'
import CardInputsItem from '@/components/CardInputsItem'
import InputLabel from '@/components/ui/InputLabel'
import { ArrowIcon } from '@/components/ui/icons'
import Switch from '@/components/Switch'
import { useState } from 'react'
import FormTabList from '@/components/FormTabList'

export default function RulesInfo(){

    const rulesTabs= [
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
                                <FormTabList activeTab={isActive} tabs={rulesTabs} onChange={handleChange}/>
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
    )
}