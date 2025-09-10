import { useSelector } from "react-redux"

const Input = ({ value, type, placeholder, label, name, parentDivCss = "", onChange = () => { }, required = false }) => {
    const themMode  = useSelector(state=>state.themMode)
    return (
        <div className={`input_container ${parentDivCss}`}>
            <input type={type} name={name} value={value} onChange={onChange} placeholder={" "} />
            <span className={` input_label_pos ${themMode ?  'text-white' : 'text-black' }`}>{label}{required && <span className="required-star"> * </span>}</span>
        </div>
    )
}

export default Input