import { connect } from 'react-redux';
import  SideNav  from '../components/sidebar/sideNav/SideNav';

function mapStateToProps(state) {
    return {
        canAccessEmployeesAdmin: state.user.canAccessEmployeesAdmin,
        canAccessContentAdmin: state.user.canAccessContentAdmin,
        canAccessProductsAdmin: state.user.canAccessProductsAdmin,
    }
}


export default connect(mapStateToProps)(SideNav);