'use client'

import { useState } from "react"
import CardActionButton from "@/components/CardActionButton"
import type { Lead } from "../../types"
import cls from './LeadDetails.module.css'
import { CloseIcon } from "@/components/ui/icons"
import TabsList from "@/components/TabsList"
import type { TabItemProps } from "@/components/TabsList/TabItem/TabItem"
import LeadInfo from "./LeadInfo"
import LeadViews from "./LeadViews"
import LeadResponses from "./LeadResponses"
import { LeadDetailsTab } from "../../types"

type LeadDetailsprops = {
    lead: Lead,
    onClose: ()=>void,
    showActiveTab: string,
    changeTab: (tab: LeadDetailsTab | null )=>void
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


export default function LeadDetails({lead, onClose, showActiveTab, changeTab}:LeadDetailsprops){

    console.log(showActiveTab)

    const [activeTab, setActiveTab] = useState(showActiveTab);

    const handleChange = (value: string) => {
        setActiveTab(value);
        changeTab(value as LeadDetailsTab)
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
                    <TabsList tabs={tabsData} onChange={handleChange} activeTab={showActiveTab} />
                    <div className={cls.leadDetailsContentBody}>
                        {activeTab == "details" && <LeadInfo lead={lead}/>}
                        {activeTab == "views" && <LeadViews lead={lead}/>}
                        {activeTab == "responses" && <LeadResponses lead={lead}/>}
                    </div>

                </div>
            </div>
        </div>
    )
}