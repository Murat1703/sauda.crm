'use client'

import { useState } from 'react'
import TabsList from '@/components/TabsList'
import cls from './RequestsList.module.css'
import type { Request } from '../../_types/request.types'
import { TabItemProps } from '@/components/TabsList/TabItem/TabItem'
import FiltersList from '@/components/FiltersList'
import RequestCard from '../RequestCard'

type requestsListProps = {
    requests: Request[]
}

export default function RequestsList({requests}: requestsListProps){

    const tabsData: TabItemProps[] = [
        {
            label: "Все",
            value: "all",
            count: 24,
        },
        {
            label: "Мои заявки",
            value: "my",
            count: 8,
        },
        {
            label: "На согласовании",
            value: "approval",
            // count: "",
        },
        {
            label: "Архивные",
            value: "archived",
            count: 11,
        },
    ];
    const [activeTab, setActiveTab] = useState("all");

    const handleChange = (value: string) => {
        setActiveTab(value);
    };

    return(
        <div className={cls.requestsList}>
            <TabsList 
                tabs={tabsData} 
                onChange={handleChange} 
                activeTab={activeTab}
            />
            <FiltersList />
            <div className={cls.requestsListContent}>
                {requests.map((request)=>(
                    <RequestCard 
                        key={request.id} 
                        request={request}
                    />
                ))}
            </div>
        </div>
    )
}