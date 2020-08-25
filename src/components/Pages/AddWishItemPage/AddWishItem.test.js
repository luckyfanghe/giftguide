import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../../../reducers";
import rootSaga from "../../../sagas";
import AddWishItem from "./AddWishItem";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);

it("AddWishItem renders corrently", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <AddWishItem />
    </Provider>
  );

  expect(queryByTestId("AddWishItem")).toBeTruthy();
});

describe("AddWishItem", () => {
  test("AddWishItem snapshot renders ", () => {
    const component = renderer.create(
      <Provider store={store}>
        <AddWishItem />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
