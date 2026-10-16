
export type DealStatus =
    | 'approval'
    | 'in_progress'
    | 'awaiting_payment'
    | 'payment_overdue'
    | 'closed'
    | 'cancelled'

export type PurchaseType = 'full' | 'partial'

export type ApprovalStatus = 'pending' | 'approved' | 'rejected'

export interface DealApprover {
    id: number
    fullName: string
    position: string
    status: ApprovalStatus
    approvedAt: string | null
}

export interface Deal {
    id: number
    number: string
    residentialComplex: string
    responsible: string,
    approvals?: DealApprover[],
    request: {
        number: string
        title: string
        type: PurchaseType
    }

    supplier: {
        id: number
        name: string
    }

    amount: number
    budget: number | null
    deviationPercent: number | null
    paid: number

    status: DealStatus

    positions: {
        completed: number
        total: number
    }

    responses: {
        received: number
        total: number
    }

    createdAt: string
}


export const DealStatusLabels: Record<DealStatus, string> = {
    approval: 'На согласовании',
    in_progress: 'В работе',
    awaiting_payment: 'Ожидает оплаты',
    payment_overdue: 'Просрочена оплата',
    closed: 'Закрыта',
    cancelled: 'Отменена',
}

export const PurchaseTypeLabels: Record<PurchaseType, string> = {
    full: 'Полная',
    partial: 'Частичная',
}