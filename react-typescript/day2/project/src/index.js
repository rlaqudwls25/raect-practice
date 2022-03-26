import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouterIndex from "./pages/router/router-index";
import RouterDetail from "./pages/router/router-detail";
import Ex1StyleSheet from "./pages/ex1-style-sheet";
import Ex2Inline from "./pages/ex2-inline";
import Ex3ModuleStyle from "./pages/ex3-module-style";
import Ex4ClassLifecycleMount from "./pages/ex4-class-lifecycle-mount";
import Ex5ClassLifecycleUpdate from "./pages/ex5-class-lifecycle-update";
import Ex6UseEffect from "./pages/ex6-use-effect";
import Ex7UseEffect from "./pages/ex7-use-effect-conditional";
import Ex8UseEffect from "./pages/ex8-use-effect-unmount";
import Ex9UseEffectFetch from "./pages/ex9-use-effect-fetch";
import TodoList from "./pages/todoList";
import TodoDetail from "./pages/todoDetail";

const LazyRouterIndex = lazy(() => import("./pages/router/lazy-router-index"));
const LazyRouterDetail = lazy(() =>
  import("./pages/router/lazy-router-detail")
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route
            index
            path="ex-router"
            element={<RouterIndex></RouterIndex>}
          ></Route>
          <Route
            path="ex-router/:id"
            element={<RouterDetail></RouterDetail>}
          ></Route> */}
          {/* <Route path="lazy-ex-router" element={
            <Suspense fallback={<div>...page Loading</div>}>
              <LazyRouterIndex></LazyRouterIndex>
            </Suspense>
          }></Route> */}
          <Route
            path="todo/*"
            element={
              // <Suspense fallback={<div>...page Loading</div>}>
              <Routes>
                <Route path="/" element={<TodoList></TodoList>}></Route>
                <Route path=":id" element={<TodoDetail></TodoDetail>}></Route>
              </Routes>
              // </Suspense>
            }
          ></Route>
          <Route path="ex1" element={<Ex1StyleSheet></Ex1StyleSheet>}></Route>
          <Route path="ex2" element={<Ex2Inline></Ex2Inline>}></Route>
          <Route path="ex3" element={<Ex3ModuleStyle></Ex3ModuleStyle>}></Route>
          <Route
            path="ex4"
            element={<Ex4ClassLifecycleMount></Ex4ClassLifecycleMount>}
          ></Route>
          <Route
            path="ex5"
            element={<Ex5ClassLifecycleUpdate></Ex5ClassLifecycleUpdate>}
          ></Route>
          <Route path="ex6" element={<Ex6UseEffect></Ex6UseEffect>}></Route>
          <Route path="ex7" element={<Ex7UseEffect></Ex7UseEffect>}></Route>
          <Route path="ex8" element={<Ex8UseEffect></Ex8UseEffect>}></Route>
          <Route
            path="ex9"
            element={<Ex9UseEffectFetch></Ex9UseEffectFetch>}
          ></Route>
          {/* <Route path="/todo" element={<TodoList></TodoList>}></Route>
          <Route
            path="/todo/detail:id"
            element={<TodoDetail></TodoDetail>}
          ></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
