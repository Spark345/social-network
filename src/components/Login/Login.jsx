import {Field, reduxForm} from "redux-form";
import {LoginUser} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css";

const LoginForm = ({handleSubmit,error}) => {
    return (
            <form className={classes.loginForm} onSubmit={handleSubmit}>
                <div>
                    <Field className={classes.loginInput} placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
                </div>
                <div>
                    <Field className={classes.loginInput} placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]} />
                </div>
                <div className={classes.checkbox}>
                    <Field className={classes.checkboxInput} type={"checkbox"} name={"rememberMe"} component={Input}/>
                    <div className={classes.checkboxText}>remember me</div>
                </div>
                {error && <div className={classes.formSummaryError}>
                    <div className={classes.formSummaryErrorText}>
                        {error}
                    </div>
                </div>}
                    <button className={classes.loginButton}>Login</button>
            </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.LoginUser(formData.email, formData.password, formData.rememberMe, props.userId);
    }
    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return <div className={classes.loginPage}>
        <div className={classes.loginPageInner}>
            <h1 className={classes.loginTitle}>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit} />
        </div>
    </div>

}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})

export default connect(mapStateToProps, {LoginUser})(Login);