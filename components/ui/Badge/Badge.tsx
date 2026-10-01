
import cls from './Badge.module.css'
type BadgeProps = {
    type?: 'category' | 'status';
    text: string;
}
export default function Badge({ type, text }: BadgeProps) {
    return(
        <span className={`${cls.badge} ${type === 'category' ? cls.category : ''} ${type === 'status' ? cls.status : ''}`}>
            {text}
        </span>
    )
}