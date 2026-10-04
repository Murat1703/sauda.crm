'use client'
import cls from './CardInputItemsList.module.css'
import MainInfo from '../MainInfo'
import RulesInfo from '../RulesInfo'
import DetailsInfo from '../DetailsInfo'
import PurchaseInfo from '../PurchaseInfo'

export default function CardInputItemsList(){
    return(
        <div className={cls.cardsList}>
            <MainInfo />
            <RulesInfo />
            <DetailsInfo />
            <PurchaseInfo />
        </div>
    )
}