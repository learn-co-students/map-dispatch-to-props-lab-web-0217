import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import manageRestaurants from './reducers/manageRestaurants';
import addRestaurant from './actions/restaurants';


// we wrap store in a function for testing purposes
export const configureStore = () => {
  return createStore(manageRestaurants, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = configureStore();

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRestaurant: addRestaurant
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants}
}

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
