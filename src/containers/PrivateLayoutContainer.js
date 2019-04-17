import { connect } from 'react-redux';
import PrivateLayout from '../components/privateLayout/PrivateLayout';
import { userLogOut } from '../actionCreators/privateLayoutActionCreators';
import { 
    userLogInPasswordChange,
    userLogIn 
} from '../actionCreators/logInActionCreators';

function mapStateToProps(state) {
    return {
        canAccessEmployeesAdmin: state.user.canAccessEmployeesAdmin,
        canAccessContentAdmin: state.user.canAccessContentAdmin,
        pendingLogoutActive: state.ui.pendingLogout.active,
        pendingLogoutTimer: state.ui.pendingLogout.timer,
        password: state.logInAttempt.password,
        userName: state.user.userName,
        isLoggingIn: state.logInAttempt.isLoggingIn,
        logInInvalid: state.logInAttempt.logInInvalid
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLogOut: () => {
            dispatch(userLogOut());
        },
        onLogIn: (userName, password) => {
            dispatch(userLogIn(userName, password));
        },
        onPasswordChange: (password) => {
            dispatch(userLogInPasswordChange(password));
        }
    };
} 

export default connect(mapStateToProps, mapDispatchToProps)(PrivateLayout);