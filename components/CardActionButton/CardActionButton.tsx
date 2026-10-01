import cls from './CardActionButton.module.css'

type CardActionButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function CardActionButton({ children, onClick }: CardActionButtonProps){
    return(
        <button className={cls.cardActionButton} onClick={onClick}>
            {children}
        </button>
    )
}
