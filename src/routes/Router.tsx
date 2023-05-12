import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="https://Stilllee.github.io/react-masterclass/:coinId">
          <Coin />
        </Route>
        <Route path="https://Stilllee.github.io/react-masterclass/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
