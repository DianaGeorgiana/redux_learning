import { connect } from 'react-redux';
import List from '../components/List';
import {addItem, delItem} from "../actions";

function mapStateToProps (state) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        remove: item => dispatch(delItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);