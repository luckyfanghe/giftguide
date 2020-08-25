import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Dashboard from "./Dashboard";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../../../reducers";
import rootSaga from "../../../sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);

it("Dashboard renders corrently", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  expect(queryByTestId("Dashboard")).toBeTruthy();
});

describe("Dashboard", () => {
  test("Dashboard snapshot renders ", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
