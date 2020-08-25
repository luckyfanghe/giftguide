import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import reducers from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
