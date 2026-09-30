import Counter from '@/components/ui/Counter'
import cls from './HeaderButton.module.css'

type HeaderButtonProps = {
    count?: number,
    icon: React.ReactNode
}

export default function HeaderButton({count, icon}: HeaderButtonProps){
    return(
        <button className={cls.headerBtn}>
            {icon}
            {count ? <Counter count={count}/>: ""}
        </button>
    )
}