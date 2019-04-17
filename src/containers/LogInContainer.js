import { connect } from 'react-redux';
import Login from '../pages/login/Login';
import { 
    userLogInUserNameChange, 
    userLogInPasswordChange,
    userLogIn 
} from '../actionCreators/logInActionCreators'

function mapStateToProps(state) {
    return {
        isLoggingIn: state.logInAttempt.isLoggingIn,
        logInInvalid: state.logInAttempt.logInInvalid,
        userName: state.logInAttempt.userName,
        password: state.logInAttempt.password
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onLogIn: (userName, password) => {
            dispatch(userLogIn(userName, password));
        },
        onUserNameChange: (userName) => {
            dispatch(userLogInUserNameChange(userName))
        },
        onPasswordChange: (password) => {
            dispatch(userLogInPasswordChange(password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);