import { connect } from 'react-redux';
import MainRouting from '../components/mainRouting/MainRouting';

function mapStateToProps(state) {
    return {
      serverError: state.ui.serverError,
      isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapStateToProps)(MainRouting);