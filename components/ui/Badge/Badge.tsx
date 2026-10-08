
import cls from './Badge.module.css'
type BadgeProps = {
    type?: 'category' | 'status';
    text: string,
    className?: string
}
export default function Badge({ type, text , className}: BadgeProps) {
    return(
        <span className={`${cls.badge} ${type === 'category' ? cls.category : ''} ${type === 'status' ? cls.status : ''} ${className ?? ''}`}>
            {text}
        </span>
    )
}