import cls from './Title.module.css'

type TitleProps = {
    text: string,
    variant?: string
}

export default function Title({text, variant}: TitleProps){
    return(
        <h1 className={cls.pageTitle}>
            {text}
        </h1>
    )
}