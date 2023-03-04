function Textarea({value, className, label, name, onChange, type="textarea", rows, cols}) {

    return (
        <div>
            <label htmlFor={name}>{label}</label> <br />
            <textarea  
                value={value}
                name={name} 
                label={label} 
                onChange={onChange}
                className={className}
                rows={rows}
                cols={cols}/>
        </div>
    )
};

export default Textarea;