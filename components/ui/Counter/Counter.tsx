import cls from './Counter.module.css'

type CounterProps = {
    count: number
}

export default function Counter(
    {count}: CounterProps){
    return(
        <span className={cls.counter}>
            {count}
        </span>
    )
}