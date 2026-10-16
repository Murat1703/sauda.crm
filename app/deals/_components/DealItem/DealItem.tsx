'use client'

import CardItem from '@/components/CardItem'
import cls from './DealItem.module.css'
import { Deal, DealStatusLabels } from '../../_types/deal.types'
import Link from 'next/link'
import { useState } from 'react'
import Tooltip from '@/components/ui/Tooltip'
import Badge from '@/components/ui/Badge'
import { ApprovedIcon, DeliveriesIcon, DocumentsIcon, LeadsIcon, MoreIcon, ShowMoreIcon } from '@/components/ui/icons'

type DealItemProps = {
    deal: Deal
}


export default function DealItem({deal}:DealItemProps){

    const [isShow, setIsShow] = useState('')

    const handleShowToolTip = (leads:string) =>{
        setIsShow(leads)
    }

    console.log(deal)

    return(
        <CardItem>
            <div className={cls.dealDetailsInfo}>
                <div className={cls.info}>
                    <h4>{deal.number}</h4>
                    <div className={cls.dealObjectInfo}>
                        <span>{deal.residentialComplex}</span>
                        <span>{deal.responsible}</span>
                    </div>
                    <Link href={'/leads'} className={cls.dealLink} onMouseEnter={()=>handleShowToolTip('leads')} onMouseLeave={()=>setIsShow('')}>
                        <div>
                            <span>{deal.request.number}:{deal.request.title}</span>
                            <span>{deal.request.type == "full"? "Полная": "Частичная"}</span>
                        </div>
                        {isShow=='leads' && <Tooltip text='Перейти к заявке'/> }
                    </Link>
                    <Link href={'/providers'} className={cls.dealLink} onMouseEnter={()=>handleShowToolTip('providers')} onMouseLeave={()=>setIsShow('')}>
                        <div>
                            <div className={cls.logo}></div>
                            <span>{deal.supplier.name}</span>
                        </div>
                        {isShow=='providers' && <Tooltip text='Перейти к поставщикам'/> }

                    </Link>
                </div>
            </div>
            <div className={cls.dealBudgetBlock}>
                <div>
                    <span>Сумма</span>
                    <span>{deal.amount} ₸</span>
                </div>
                <div>
                    <span>Бюджет</span>
                    <span>{deal.budget} ₸</span>
                </div>
            </div>
            <div className={cls.dealStatusBlock}>
                <Badge text={DealStatusLabels[deal.status]} className={cls[deal.status]}/>
                {deal.status == "approval" 
                ? 
                <div className={cls.rightBlock}>
                    <div className={cls.approvalContainer}>
                        <div>
                            <ul className={cls.approvalsList}>
                                {deal.approvals?.map((item, index)=>(
                                    <li key={index}>
                                        <div className={cls.icon}>
                                            {item.status=="approved" && <div className={cls.approvedIcon}><ApprovedIcon /></div>}
                                            {item.status!=="approved" && <div className={cls.statusIcon}></div>}
                                        </div>
                                        <div className={cls.personInfo}>
                                            <span className={item.status==="approved"? cls.approvedPerson: ""}>{item.fullName}</span>
                                            <span>{item.position}</span>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className={cls.rightBlock}> 
                    <div className={cls.paymentsBlock}>
                        <div>
                            <span>Поставки</span>
                            <span>{deal.responses.received} / {deal.responses.total}</span>
                        </div>
                        <div>
                            <span>Оплаты</span>
                            <span>{deal.positions.completed} / {deal.positions.total}</span>
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className={cls.buttonsBlock}>
                <button>
                    <ShowMoreIcon />
                </button>
                <button>
                    <DeliveriesIcon />
                </button>
                <button>
                    <DocumentsIcon />
                </button>
            </div>

        </CardItem>
    )
}