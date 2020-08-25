import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import SlideBar from "./SlideBar";

import { BrowserRouter } from "react-router-dom";
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

it("renders corrently", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <SlideBar />
      </BrowserRouter>
    </Provider>
  );

  expect(queryByTestId("SlideBar")).toBeTruthy();
});

describe("SlideBar", () => {
  test("SlideBar snapshot renders ", () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SlideBar />
        </BrowserRouter>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
