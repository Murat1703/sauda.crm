import cls from './Tooltip.module.css'

type TooltipProps = {
    text: string;
}

export default function Tooltip({text}: TooltipProps){
    return(
        <div className={cls.tooltip}>
            <span className={cls.tooltipText}>{text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="4" viewBox="0 0 10 4" fill="none">
            <path d="M0 0L5 4L10 0H0Z" fill="#202121"/>
            </svg>
        </div>
    )
}