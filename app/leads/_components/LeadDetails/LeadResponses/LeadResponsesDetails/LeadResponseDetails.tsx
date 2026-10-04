'use client'

import cls from './LeadResponseDetails.module.css'
import type { LeadDelivery, LeadResponse } from '@/app/leads/types'
import Switch from '@/components/Switch'
import { formatDate } from '@/lib/formatDate'
import { formatPrice } from '@/lib/formatPrice'
import { useState } from 'react'
import LeadDeliveryDetails from '../../LeadInfo/LeadDeliveryDetais'
import { ArrowIcon, CancelIcon, CheckIcon, DownloadIcon, EditIcon, ViewIcon } from '@/components/ui/icons'
import Button from '@/components/ui/Button'
import CancelButton from '@/components/ui/icons/CancelIcon'

type LeadResponseDetailsProps = {
    details: LeadResponse, 
    leadDetails: LeadDelivery
}

export default function LeadResponseDetails({leadDetails, details}: LeadResponseDetailsProps){
    const [active, setActive] = useState(false);

    const handleToggleSwitch = () =>{
        setActive(!active)
    }
    return(
        <div className={cls.leadResponseDetailsContent}>
            <div className={cls.leadResponseDetailItem}>
                <div className={cls.leadResponseDetailHeader}>
                    <h3>Предложение поставщика</h3>
                    <span>Дата отклика: {formatDate(details.respondedAt)}</span>
                </div>
                <div className={cls.leadResponseMenu}>
                    <div>
                        <Switch isActive={active} onChange={handleToggleSwitch} />
                    </div>
                    <span>Выбор конкретных позиций</span>
                </div>
                <table className={cls.leadResponseTable}>
                    <thead>
                        <tr>
                            <th>
                                <button></button>
                            </th>
                            <th>№</th>
                            <th>Наименование</th>
                            <th>Кол-во</th>
                            <th>Ед.</th>
                            <th>Цена за ед.</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.items.map((item, index) =>(
                            <tr key={index}>
                                <th>
                                    <button></button>
                                </th>
                                <th>{index + 1}</th>
                                <th>{item.name}</th>
                                <th>{item.quantity}</th>
                                <th>{item.unit}</th>
                                <th>{item.pricePerUnit}</th>
                                <th>{item.pricePerUnit * item.quantity}</th>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}></td>
                            <td className={cls.totalText}>Итого</td>
                            <td className={cls.totalPrice}>{formatPrice(details.subtotal)} ₸</td>
                        </tr>
                        <tr>
                            <td colSpan={5}></td>
                            <td className={cls.totalText}>С доставкой</td>
                            <td className={cls.totalPrice}>{formatPrice(details.totalWithDelivery)} ₸</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className={cls.leadResponseDeliveryInfo}>
                    <div className={cls.top}>
                        <h3> Условия доставки и оплаты</h3>
                        <button>
                            <ArrowIcon />
                        </button>
                    </div>
                    <LeadDeliveryDetails delivery={leadDetails}/>
            </div>
            <div className={cls.leadResponseComment}>
                    <h3>Комментарий</h3>
                    <p>Добрый день! К сожалению,заклепок таких нет. По активатору и заглушкам подобрали аналоги.По остальным товарам все в наличии. Поставку сделаем 22 августа.</p>
            </div>
            <div className={cls.leadResponseAttachments}>
                <h3>Вложения</h3>
                <ul className={cls.leadResponseAttachmentList}>
                    <li>
                        <span>Сертификат №1</span>
                        <div className={cls.attachmentButtons}>
                            <button>
                                <ViewIcon />
                            </button>
                            <button>
                                <DownloadIcon />
                            </button>
                        </div>
                    </li>
                    <li>
                        <span>Сертификат №2</span>
                        <div className={cls.attachmentButtons}>
                            <button>
                                <ViewIcon />
                            </button>
                            <button>
                                <DownloadIcon />
                            </button>
                        </div>
                    </li>

                </ul>
            </div>  
            <div className={cls.leadResponseButtons}>
                <Button variant='secondary'>
                    <CancelIcon/>
                    <span>Отклонить</span>
                </Button>
                <Button variant='secondary'>
                    <EditIcon/>
                    <span>Отклонить</span>
                </Button>
                <Button variant='success'>
                    <CheckIcon/>
                    <span>Выбрать предложение</span>
                </Button>
            </div>
        </div>
    )
}