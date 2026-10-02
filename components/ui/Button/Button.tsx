
'use client'
import cls from './Button.module.css'


type ButtonVariant =
  | "topBtn"
  | "secondary"
  | "danger"
  | "success";


type ButtonProps = {
    variant?:ButtonVariant,
    children: React.ReactNode,
    onClick?: ()=>void 
}

export default function Button({variant="topBtn", children, onClick}: ButtonProps){
    return(
        <button 
            className={`${cls.btn} ${variant=="secondary"? cls.btnSecondary :""} ${variant=="topBtn"? cls.btnTop :""}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}