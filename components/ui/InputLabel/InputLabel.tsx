import cls from './InputLabel.module.css'

type LabelProps = {
    children: React.ReactNode
}

export default function InputLabel({children}:LabelProps){
    return(
        <label className={cls.label}>
            {children}
        </label>
    )
}