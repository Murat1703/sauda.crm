'use client'

import { useState } from 'react';
import TabsList from '@/components/TabsList'
import { TabItemProps } from '@/components/TabsList/TabItem/TabItem';
import cls from './DealsList.module.css'
import FiltersList from '../FiltersList';
import { dealsMock } from '../data';
import DealsContent from '../DealsContent';

export default function DealsList(){

    const tabsData: TabItemProps[] = [
        {
            label: "Все",
            value: "all",
            count: 24,
        },
        {
            label: "Мои сделки",
            value: "my-deals",
            count: 8,
        },
        {
            label: "На согласовании",
            value: "approval",
        },
        {
            label: "Архивные",
            value: "archived",
            count: 9,
        },
    ];
    const [activeTab, setActiveTab] = useState("all");

    const handleChange = (value: string) => {
        setActiveTab(value);
    };

    return(
        <div className={cls.dealsList}>
            <TabsList tabs={tabsData} activeTab={activeTab} onChange={handleChange}/>
            <FiltersList />
            <DealsContent deals={dealsMock}/>
        </div>
    )
}