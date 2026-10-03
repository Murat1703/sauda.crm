import cls from './LeadDeliveryDetails.module.css'
import { ClockIcon, DeliveriesIcon, PaymentIcon } from '@/components/ui/icons'

type LeadDeliveryDetailsProps = {
    delivery: object
}


export default function LeadDeliveryDetails ({delivery}:LeadDeliveryDetailsProps){
    return(
        <div className={cls.bottom}>
            <div className={cls.deliveryInfo}>
                <ClockIcon />
                <div className={cls.deliveryInfoDetails}>
                    <span>Cрок поставки:</span>
                    <div className={cls.deliveryItems}>
                        {delivery.terms.map((item, index)=>(
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
                                <span>{delivery.deliveryCondition}</span>
                            </div>
                        </div>
                        <div className={cls.deliveryInfo}>
                            <PaymentIcon />
                            <div className={cls.deliveryInfoDetails}>
                                <span>Условия оплаты:</span>
                                <span>{delivery.paymentCondition}</span>
                            </div>
                        </div>
            </div>
        </div>

    )
}