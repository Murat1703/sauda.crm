import cls from './CardItem.module.css'

type CardItemProps = {
    children: React.ReactNode,
}

export default function CardItem({children}:CardItemProps){
    return(
        <div className={cls.cardItem}>
            {children}
        </div>
    )
}