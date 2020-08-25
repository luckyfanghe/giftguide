import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../../reducers";
import rootSaga from "../../sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);

test("renders app", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(queryByTestId("App")).toBeTruthy();
});

describe("App", () => {
  test("App snapshot renders ", () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
