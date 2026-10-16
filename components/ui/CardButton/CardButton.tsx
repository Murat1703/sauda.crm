import cls from './CardButton.module.css'

type cardButtonProps = {
    children: React.ReactNode
}

export default function CardButton({children}: cardButtonProps){
    return(
        <button className={cls.cardButton}>
            {children}
        </button>
    )
}