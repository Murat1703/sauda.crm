import { useState } from 'react'
import { LeadDetailsTab } from '@/app/leads/types'

export function useLeadDetails() {
    const [activeTab, setActiveTab] =
        useState<LeadDetailsTab | null>(null)

    const openDetails = (tab: LeadDetailsTab = 'details') => {
        setActiveTab(tab)
    }

    const closeDetails = () => {
        setActiveTab(null)
    }

    return {
        activeTab,
        isOpen: activeTab !== null,
        openDetails,
        closeDetails,
        setActiveTab,
    }
}