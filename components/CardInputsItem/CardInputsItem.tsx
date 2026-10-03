import cls from './CardInputsItem.module.css'

type CardInputsItemProps = {
    children: React.ReactNode
}

export default function CardInputsItem({children}: CardInputsItemProps){
    return(
        <div className={cls.cardInputsItem}>
            {children}
        </div>
    )
}