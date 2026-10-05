'use client'

import TabsList from '@/components/TabsList'
import cls from './ApprovalsList.module.css'
import { TabItemProps } from '@/components/TabsList/TabItem/TabItem'
import { useState } from 'react'
import { ApprovalRequest } from '../../types'
import LeadItem from '@/app/leads/_components/LeadItem'
import ApprovalItem from '../ApprovalItem'

type ApprovalsListProps = {
    approvalsList: ApprovalRequest[]
}

export default function ApprovalsList({approvalsList}:ApprovalsListProps){

    const tabsData: TabItemProps[] = [
        {
            label: "На согласовании",
            value: "processing",
            count: 3,
        },
        {
            label: "Отклоненные",
            value: "cancelled",
            count: 2,
        },
    ];
    const [activeTab, setActiveTab] = useState("processing");

    const handleChange = (value: string) => {
        setActiveTab(value);
    };
    {console.log(approvalsList)}

    return(
        <div className={cls.approvalsList}>
            <TabsList tabs={tabsData} activeTab={activeTab} onChange={handleChange}/>
            <ApprovalItem />
        </div>
    )
}