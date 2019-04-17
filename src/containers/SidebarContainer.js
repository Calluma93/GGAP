import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';

function mapStateToProps(state) {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    }
}

export default connect(mapStateToProps)(Sidebar);