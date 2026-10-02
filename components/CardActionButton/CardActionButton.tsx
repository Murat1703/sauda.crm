'use client';

import Tooltip from '../ui/Tooltip';
import cls from './CardActionButton.module.css'
import { useState } from 'react';

type CardActionButtonProps = {
    children?: React.ReactNode;
    cardActionType?: "Заявка" | "Отклики" | "Сравнение" | "",
    onClick?: () => void;
}

export default function CardActionButton({ cardActionType, children, onClick }: CardActionButtonProps){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <button className={cls.cardActionButton} onClick={onClick} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            {children}
            {(isOpen && cardActionType!=="") && <Tooltip text={cardActionType == "Заявка" ? "К заявке" : cardActionType == "Отклики" ? "Отклики" : "Сравнение"} />  }

        </button>
        </>
    )
}
