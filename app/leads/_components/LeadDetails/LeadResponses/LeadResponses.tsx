'use client'

import { act, useState } from 'react'
import Button from '@/components/ui/Button'
import cls from './LeadResponses.module.css'
import type { Lead } from '@/app/leads/types'
import { ArrowIcon, ArrowRight, CommentIcon, ResponsesIcon, ShieldIcon, StarIcon } from '@/components/ui/icons'
import CardActionButton from '@/components/CardActionButton'
import LeadResponseDetails from './LeadResponsesDetails'
import { formatPrice } from '@/lib/formatPrice'

type LeadResponsesProps = {
    lead: Lead
}

export default function LeadResponses({lead}:LeadResponsesProps){


    const [isShow, setIsShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleShowResponseDetails = (index:number)=>{
        setIsShow(true);
        setActiveIndex(index)
    }

    const handleCloseResponseDetails = ()=>{
        setIsShow(false)
        setActiveIndex(null)
    }

    
    
    return(
        <div className={cls.leadResponsesWrapper}>
            <div className={cls.leadResponsesTop}>
                <div>
                    <span>Общий бюджет на заявку</span>
                    <span>{lead.budget}₸</span>
                </div>
                <Button variant='topBtn'>
                    <ResponsesIcon />
                    <span>Cравнительный анализ откликов</span>
                </Button>
            </div>
            <ul className={cls.leadResponsesList}>
                {lead.responsesDetails?.map((item, index)=>(
                    <li key={item.id}> 
                        <div className={cls.leadResponseItemTop}>
                            <div className={cls.leadResponsesInfo}>
                                <div className={cls.logo}></div>
                                <div className={cls.leadResponseCompanyInfo}>
                                    <span>{item.supplier.name}</span>
                                    <div className={cls.rating}>
                                        <div>
                                            <StarIcon />
                                            <span>Рейтинг</span>
                                            <span>{item.supplier.rating}</span>
                                        </div>
                                        <div>
                                            <ShieldIcon />
                                            <span>Надеждность</span>
                                            <span>{item.supplier.reliability}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cls.leadResponseItemsCount}>
                                    <span>Кол-во товаров:</span>
                                    <span>{item.positions.offered} / {item.positions.total}</span>
                                </div>
                                <div className={cls.leadResponseItemsPrice}>
                                    <span>С учетом доставки:</span>
                                    <span className={cls.cost}>{formatPrice(item.totalWithDelivery)} ₸</span>
                                </div>
                            </div>
                            <div className={cls.leadResponsesButtons}>
                                <CardActionButton cardActionType=""> 
                                    <CommentIcon />
                                </CardActionButton>
                                <CardActionButton cardActionType="" onClick={!isShow? ()=>handleShowResponseDetails(index): handleCloseResponseDetails}> 
                                    {(isShow && activeIndex === index) ? <ArrowIcon /> : <ArrowRight />}
                                </CardActionButton>
                            </div>
                        </div>
                        {(isShow && activeIndex === index) 
                        &&
                        <LeadResponseDetails details={item} leadDetails={lead.delivery}/>
                        }

                    </li>
                ))}
            </ul>
        </div>
    )
}