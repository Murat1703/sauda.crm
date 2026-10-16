
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
    onClick?: ()=>void ,
    className?: string
}

export default function Button({variant="topBtn", children, className, onClick}: ButtonProps){
    return(
        <button 
            className={`${cls.btn} ${variant=="secondary"? cls.btnSecondary :""} ${variant=="topBtn"? cls.btnTop :""} ${variant=="success"? cls.btnSuccess :""} ${className? className : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}