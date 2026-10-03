import { InputHTMLAttributes } from 'react'
import cls from './Input.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> 

export default function Input({  className,
  ...props
}:InputProps){
    return(
        <input {...props} className={cls.input} />
    )
}