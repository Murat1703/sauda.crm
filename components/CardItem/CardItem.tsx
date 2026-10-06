import cls from './CardItem.module.css'

type CardItemProps = {
    children: React.ReactNode,
    onClick?: ()=>void
}

export default function CardItem({children, onClick}:CardItemProps){
    return(
        <div className={cls.cardItem} onClick={onClick}>
            {children}
        </div>
    )
}