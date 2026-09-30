import cls from './PageTopContainer.module.css'

type PageTopContainerProps = {
    children: React.ReactNode
}

export default function PageTopContainer({children}: PageTopContainerProps){
    return(
        <div className={cls.pageTopContainer}>
            {children}
        </div>
    )
}