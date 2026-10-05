'use client'
import cls from './CardInputItemsList.module.css'
import MainInfo from '../MainInfo'
import RulesInfo from '../RulesInfo'
import DetailsInfo from '../DetailsInfo'
import PurchaseInfo from '../PurchaseInfo'
import ApprovalInfo from '../ApprovalInfo'

export default function CardInputItemsList(){
    return(
        <div className={cls.cardsList}>
            <MainInfo />
            <RulesInfo />
            <DetailsInfo />
            <PurchaseInfo />
            <ApprovalInfo />
        </div>
    )
}