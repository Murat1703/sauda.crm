'use client'
import { useState } from 'react'
import cls from './LeadsList.module.css'
import TabsList from '@/components/TabsList'
import LeadItem from '../LeadItem'
import type { Lead } from '../../types'
import type { TabItemProps } from '@/components/TabsList/TabItem/TabItem'

type LeadsListProps = {
    leads: Lead[];
};


export default function LeadsList({leads}:LeadsListProps){

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
        <div className={cls.leadsList}>
            <TabsList 
                tabs={tabsData} 
                onChange={handleChange} 
                activeTab={activeTab}
            />
            <div className={cls.leadsListContent}>
                {leads.map((lead) => (
                    <LeadItem
                        key={lead.id}
                        lead={lead}
                    />
                ))}

            </div>

        </div>
    )
}