'use client'

import TabsList from '@/components/TabsList'
import cls from './ApprovalsList.module.css'
import { TabItemProps } from '@/components/TabsList/TabItem/TabItem'
import { useState } from 'react'
import { ApprovalRequest } from '../../types'
import ApprovedList from '../ApprovedList'
import RejectedList from '../RejectedList'

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
            value: "canceled",
            count: 2,
        },
    ];
    const [activeTab, setActiveTab] = useState("processing");

    const handleChange = (value: string) => {
        setActiveTab(value);
    };

    console.log(approvalsList)
    return(
        <div className={cls.approvalsList}>
            <TabsList tabs={tabsData} activeTab={activeTab} onChange={handleChange}/>
            {activeTab ==='processing'
            ?<ApprovedList approved={approvalsList.filter((item)=>item.status === 'pending' || item.status === 'approved')}/>
            :<RejectedList rejected={approvalsList.filter((item)=>item.status === activeTab)}/> }
        </div>
    )
}