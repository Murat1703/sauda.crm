import { useState } from 'react'
import { RequestDetailsTab } from '@/app/requests/_types/request.types'

export function useRequestDetails() {
    const [activeTab, setActiveTab] =
        useState<RequestDetailsTab | null>(null)

    const openDetails = (tab: RequestDetailsTab = 'details') => {
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