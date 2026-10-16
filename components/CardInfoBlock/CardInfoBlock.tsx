import cls from  './CardInfoBlock.module.css'

type cardInfoBlockProps = {
    children: React.ReactNode
}

export default function CardInfoBlock({children}:cardInfoBlockProps){
    return(
        <div className={cls.applicationInfo}>
            {children}
        </div>
    )
}