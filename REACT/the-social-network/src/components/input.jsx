function Input({value, className, label, name, onChange, type="text"}) {

    return (
        <div>
            <label htmlFor={name}>{label}</label> <br />
            <input  
                value={value}
                type={type} 
                name={name} 
                label={label} 
                onChange={onChange}
                className={className} />
        </div>
    )
};

export default Input;