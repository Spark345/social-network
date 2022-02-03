import classes from './FormsControls.module.css'

export const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError &&
            <div className={classes.formControl}>
                <span className={classes.formControlText}>{meta.error}</span>
            </div>}
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}