'use client'

import { act, useState } from "react"
import CardActionButton from "@/components/CardActionButton"
import type { Lead } from "../../types"
import cls from './LeadDetails.module.css'
import { CloseIcon } from "@/components/ui/icons"
import TabsList from "@/components/TabsList"
import type { TabItemProps } from "@/components/TabsList/TabItem/TabItem"
import LeadInfo from "./LeadInfo"

type LeadDetailsprops = {
    lead: Lead,
    onClose: ()=>void
}

const tabsData = [
    {
        label: "Детали по заявке ",
        value: "details"
    },
    {
        label: "Просмотры ",
        value: "views"
    },
    {
        label: "Отклики ",
        value: "responses"
    }
]


export default function LeadDetails({lead, onClose}:LeadDetailsprops){

    const [activeTab, setActiveTab] = useState("details");

    const handleChange = (value: string) => {
        setActiveTab(value);
    };

    return(
        <div className={cls.leadDetailsWrapper} onClick={onClose}>
            <div className={cls.leadDetailsContent} onClick={(e)=>e.stopPropagation()}>
                <div className={cls.leadDetailsHeader}>
                    <h3>{lead.title}</h3>
                    <CardActionButton onClick={onClose}>
                        <CloseIcon />
                    </CardActionButton>
                </div>
                <div className={cls.leadDetailsContentContainer}>
                    <TabsList tabs={tabsData} onChange={handleChange} activeTab={activeTab} />
                    <div className={cls.leadDetailsContentBody}>
                        {activeTab == "details" && <LeadInfo lead={lead}/>}
                    </div>

                </div>
            </div>
        </div>
    )
}