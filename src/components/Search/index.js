import {connect} from 'react-redux';
import Search from './Search';

// This function takes the store and returns an object
// that's passed to the props of the component.
// Adding React-redux and mapStore to props connects it all.
function mapStoreToProps(store) {
    return {
        city: store.search.selectedCity,
        cityInput: store.search.cityInput
    };
}

// This might look odd, but connect returns a function,
// that is then called with the component itself.

export default connect(mapStoreToProps)(Search);
