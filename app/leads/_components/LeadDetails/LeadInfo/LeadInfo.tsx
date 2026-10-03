import cls from './LeadInfo.module.css'
import type {Lead} from '../../../types'
import { ApprovedIcon, ArrowIcon, CancelIcon, ClockIcon, CommentIcon, DeliveriesIcon, DownloadIcon, MoreIcon, PaymentIcon, ViewIcon } from '@/components/ui/icons'
import Badge from '@/components/ui/Badge'
import { LeadStatusLabels } from '@/app/leads/_constants/LeadStatusLabels'
import Button from '@/components/ui/Button'
import CardActionButton from '@/components/CardActionButton'
import LeadDeliveryDetails from './LeadDeliveryDetais'

type LeadInfoProps = {
    lead: Lead
}

export default function LeadInfo ({lead}: LeadInfoProps) {
    return(
        <div className={cls.leadInfoWrapper}>
            <div className={cls.leadInfoDetails}>
                <div className={cls.top}>
                    <h3>О Заявке</h3>
                    <button>
                        <ArrowIcon />
                    </button>
                </div>
                <div className={cls.leadInfoData}>
                    <div className={cls.leadInfoStatus}>
                        <div>
                            <div className={cls.leadInfoCard}>
                                <div className={cls.leadInfoCardHeader}>
                                    <p>Данные заявки</p>
                                </div>
                                <ul className={cls.leadInfoCardList}>
                                    <li>
                                        <span>ID заявки</span>
                                        <span>{lead.number}</span>
                                    </li>
                                    <li>
                                        <span>Дата публикации</span>
                                        <span>{lead.createdAt}</span>
                                    </li>
                                    <li>
                                        <span>Город, регион</span>
                                        <span>{lead.city}</span>
                                    </li>
                                    <li>
                                        <span>Объект</span>
                                        <span>{lead.object}</span>
                                    </li>
                                    <li>
                                        <span>Уточнения</span>
                                        <span>{lead.object}</span>
                                    </li>
                                    <li>
                                        <span>Заявку создал</span>
                                        <span>{lead.responsible.name}</span>
                                    </li>
                                    <li>
                                        <span>Ответственный</span>
                                        <span>{lead.responsible.name}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={cls.leadInfoCard}>
                                <div className={cls.leadInfoCardHeader}>
                                    <p>Согласование</p>
                                </div>
                                <ul className={cls.leadInfoApprovalList}>
                                    {lead.approvals.map((item)=>(
                                        <li
                                            key={item.id}
                                        >
                                            <span className={`${item.approved? cls.approved: cls.notApproved}`}>
                                                {item.approved? <ApprovedIcon />: ""}
                                            </span>
                                            <div className={cls.approvalItem}>
                                                <div className={cls.approvedPerson}>
                                                    <span>{item.name}</span>
                                                    <span>{item.position}</span>
                                                </div>
                                                <span>11.06.26 в 12.00</span>
                                            </div>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                            
                        </div>
                        <div className={cls.leadInfoCard}>
                            <div className={cls.leadInfoCardHeader}>
                                <p>Текущий статус</p>
                            </div>
                            <ul className={cls.leadInfoCardList}>
                                    <li>
                                        <span>Статус заявки</span>
                                        <span>{LeadStatusLabels[lead.status]}</span>
                                    </li>
                                    <li>
                                        <span>Отклики</span>
                                        <span>{lead.stats.responses}</span>
                                    </li>
                                    <li>
                                        <span>Просмотры</span>
                                        <span>{lead.stats.views}</span>
                                    </li>
                                    <li>
                                        <span>Даты приема откликов</span>
                                        <span>{lead.responseDeadline}</span>
                                    </li>
                                    <li>
                                        <span>Отбор победителей</span>
                                        <span>{lead.winnerSelection}</span>
                                    </li>
                                    <li>
                                        <span>Дата подведения итогов</span>
                                        <span>{lead.resultsDate}</span>
                                    </li>
                                    <li>
                                        <span>Бюджет</span>
                                        <span>{lead.budget}</span>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cls.leadInfoCategories}>
                        <div className={cls.leadInfoCard}>
                            <div className={cls.leadInfoCardHeader}>
                                <p>Категории</p>
                            </div>
                            <div className={cls.leadInfoCardCategories}>
                                {lead.categories.map((item, index)=>(
                                    <Badge 
                                        type='category'
                                        key={index}
                                        text={item}
                                    />
                                ))}
                            </div>
                        </div>
                </div>
            </div>
            <div className={cls.leadInfoDetails}>
                <div className={cls.top}>
                    <h3>Предмет закупки</h3>
                    <button>
                        <ArrowIcon />
                    </button>
                </div>
                <table className={cls.table}>
                    <thead>
                        <tr>
                            <th className={cls.numberCol}>№</th>
                            <th className={cls.titleCol}>Наименование</th>
                            <th className={cls.brandCol}>Бренд</th>
                            <th className={cls.modelCol}>Модель / Артикул</th>
                            <th className={cls.quantityCol}>Кол-во</th>
                            <th className={cls.unitCol}>Ед.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lead.items.map((item, index)=>(
                            <tr key={item.id}>
                                <td className={cls.numberCol}>{index + 1}</td>
                                <td className={cls.titleCol}>{item.name}</td>
                                <td className={cls.brandCol}>{item.brand}</td>
                                <td className={cls.modelCol}>{item.model? item.model : "Арт №123123123"}</td>
                                <td className={cls.quantityCol}>{item.quantity}</td>
                                <td className={cls.unitCol}>{item.unit}</td>                           
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={cls.leadInfoDetails}>
                <div className={cls.top}>
                    <h3>Условия доставки и оплаты</h3>
                    <button>
                        <ArrowIcon />
                    </button>
                </div>
                {/* <div className={cls.bottom}>
                    <div className={cls.deliveryInfo}>
                        <ClockIcon />
                        <div className={cls.deliveryTimeInfo}>
                            <span>Cрок поставки:</span>
                            <div className={cls.deliveryItems}>
                            {lead.delivery.terms.map((item, index)=>(
                                <div key={index}>
                                    <span>{item.positions}</span>
                                    <span>{item.date}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className={cls.deliveryOptions}>
                        <div className={cls.deliveryInfo}>
                            <DeliveriesIcon />
                            <div className={cls.deliveryInfoDetails}>
                                <span>Условия доставки</span>
                                <span>{lead.delivery.deliveryCondition}</span>
                            </div>
                        </div>
                        <div className={cls.deliveryInfo}>
                            <PaymentIcon />
                            <div className={cls.deliveryInfoDetails}>
                                <span>Условия оплаты:</span>
                                <span>{lead.delivery.paymentCondition}</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <LeadDeliveryDetails delivery={lead.delivery}/>
            </div>
            <div className={cls.leadInfoDetails}>
                <div className={cls.top}>
                    <h3>Техническая документация и вложения</h3>
                    <button>
                        <ArrowIcon />
                    </button>
                </div>
                <ul className={cls.leadAttachmentsList}>
                    {lead.attachments.map((link)=>(
                        <li key={link.id}>
                            <div >
                                <span>
                                    {link.name}
                                </span>
                                <div className={cls.actionButtons}>
                                    <button>
                                        <ViewIcon />
                                    </button>
                                    <button>
                                        <DownloadIcon />
                                    </button>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
            <div className={cls.leadActionButtons}>
                <Button variant={'secondary'}>
                    <CancelIcon />
                    <span>Отменить заявку</span>
                </Button>
                <Button variant={'secondary'}>
                    <CommentIcon />
                    <span>Комментировать</span>
                </Button>
                <Button variant={'secondary'}>
                    <DownloadIcon />
                    <span>Скачать пакет документов</span>
                </Button>
                <CardActionButton cardActionType={""}>
                    <MoreIcon />
                </CardActionButton>
            </div>
        </div>
    )
}