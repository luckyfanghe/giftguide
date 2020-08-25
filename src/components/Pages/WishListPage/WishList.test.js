import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../../../reducers";
import rootSaga from "../../../sagas";
import WishList from "./WishList";
import { BrowserRouter } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);

it("WishList renders corrently", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <WishList />
      </BrowserRouter>
    </Provider>
  );

  expect(queryByTestId("WishList")).toBeTruthy();
});

describe("WishList", () => {
  test("WishList snapshot renders ", () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <WishList />
        </BrowserRouter>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
