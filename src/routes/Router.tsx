import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;
