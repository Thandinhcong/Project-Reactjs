import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import cartReducer from '../reducer/cart';
import productsReducer from '../reducer/products';


const composeEnhancers =
    typeof window === 'object' && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

const store = createStore(rootReducer, enhancer)
export default store;