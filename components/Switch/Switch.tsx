import cls from './Switch.module.css'

type SwitchProps = {
    isActive: boolean,
    onChange: ()=>void
}

export default function Switch({isActive, onChange}:SwitchProps){
    return(
        <button onClick={onChange} className={`${cls.switchBtn} ${isActive ? cls.active: ""}`}>
            <span></span>
        </button>
    )
}