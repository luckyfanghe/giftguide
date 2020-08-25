import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../../../reducers";
import rootSaga from "../../../sagas";
import UpdateWishItem from "./UpdateWishItem";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);

it("UpdateWishItem renders corrently", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <UpdateWishItem />
    </Provider>
  );

  expect(queryByTestId("UpdateWishItem")).toBeTruthy();
});

describe("UpdateWishItem", () => {
  test("UpdateWishItem snapshot renders ", () => {
    const component = renderer.create(
      <Provider store={store}>
        <UpdateWishItem />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
