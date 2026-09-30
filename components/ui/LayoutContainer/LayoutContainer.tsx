import cls from './LayoutContainer.module.css'

type LayoutContainerProps = {
    children: React.ReactNode
}

export default function LayoutContainer({children}: LayoutContainerProps){
    return(
        <div className={cls.layoutContainer}>
            {children}
        </div>
    )
}