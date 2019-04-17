import { connect } from 'react-redux';
import ServerError from '../pages/serverError/ServerError';
import { userClearServerErrror } from '../actionCreators/serverErrorActionCreators';

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        onClearError: () => {
            dispatch(userClearServerErrror())
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ServerError);