import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      {/* exact：完全一致したものを対象とするかの設定　true/false */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
